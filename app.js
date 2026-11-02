// Controlador Principal da Plataforma MathLab - São Paulo em Ação (Matemática 1 - 16 Missões)
(function () {
  const STORAGE_KEY = "mathlab_sp_acao_v1";

  const appState = {
    missions: [],
    currentBimester: 0, // 0 = Todas, 1..4 = Bimestre
    currentMissionId: 1,
    currentStage: 0, // 0: Abertura, 1: Etapa 1, 2: Etapa 2, 3: Etapa 3, 4: Etapa Final
    xp: 0,
    completedStages: {}, // { "m1_s0": true, ... }
    saebHistory: [], // [{ missionId, eixo, saeb, nivel, bloom, correct }]
    etapa1Unlocked: {}, // { 1: true }
    fontScale: 1,
    highContrast: false,
    colorblind: false,
    teacherMode: true,
    scaffoldingTab: "qvl" // "qvl" | "calc" | "grid"
  };

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        appState.xp = Number(parsed.xp) || 0;
        appState.completedStages = parsed.completedStages || {};
        appState.saebHistory = Array.isArray(parsed.saebHistory) ? parsed.saebHistory : [];
        appState.etapa1Unlocked = parsed.etapa1Unlocked || {};
      }
    } catch (e) {
      console.warn("Aviso ao ler localStorage:", e);
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          xp: appState.xp,
          completedStages: appState.completedStages,
          saebHistory: appState.saebHistory,
          etapa1Unlocked: appState.etapa1Unlocked
        })
      );
    } catch (e) {
      console.warn("Aviso ao salvar localStorage:", e);
    }
    updateHUD();
  }

  function addXP(amount, stageKey) {
    if (stageKey && !appState.completedStages[stageKey]) {
      appState.completedStages[stageKey] = true;
      appState.xp += amount;
      saveProgress();
      renderSidebar();
    }
  }

  // Web Speech API (Leitura em Voz Alta pt-BR - Diretriz DUA)
  window.speakText = function (text) {
    if (!("speechSynthesis" in window)) {
      alert("Seu navegador não suporta leitura em voz alta (Web Speech API).");
      return;
    }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "pt-BR";
    utter.rate = 0.98;
    window.speechSynthesis.speak(utter);
  };

  function profAleAvatarHTML(variant) {
    const imgSrc = variant === "clean"
      ? "assets/avatar-prof-ale-clean.jpg"
      : "assets/avatar-prof-ale-sp.jpg";
    return `<div class="prof-ale-avatar"><img src="${imgSrc}" alt="Prof. Alê Chocolate — MathLab SP em Ação" style="width:100%;height:100%;object-fit:cover" onerror="this.onerror=null;this.src='assets/logo-circular.jpg'"></div>`;
  }

  function updateHUD() {
    const xpEl = document.getElementById("hud-xp");
    const missionsEl = document.getElementById("hud-missions");
    const barEl = document.getElementById("hud-progress-bar");
    if (xpEl) xpEl.textContent = `${appState.xp} XP`;

    let completedMissions = 0;
    appState.missions.forEach((m) => {
      if (isMissionComplete(m.id)) completedMissions++;
    });

    if (missionsEl) missionsEl.textContent = `${completedMissions} / 16`;
    if (barEl) {
      const totalStages = 16 * 5;
      const doneCount = Object.keys(appState.completedStages).length;
      const pct = Math.min(100, Math.round((doneCount / totalStages) * 100));
      barEl.style.width = `${pct}%`;
    }
  }

  function isMissionComplete(mId) {
    return (
      appState.completedStages[`m${mId}_s0`] &&
      appState.completedStages[`m${mId}_s1`] &&
      appState.completedStages[`m${mId}_s2`] &&
      appState.completedStages[`m${mId}_s3`] &&
      appState.completedStages[`m${mId}_s4`]
    );
  }

  function renderSidebar() {
    const listEl = document.getElementById("missions-list");
    if (!listEl) return;

    const filtered = appState.missions.filter(
      (m) => appState.currentBimester === 0 || m.bimestre === appState.currentBimester
    );

    listEl.innerHTML = filtered
      .map((m) => {
        const active = m.id === appState.currentMissionId ? "active" : "";
        const completed = isMissionComplete(m.id) ? "completed" : "";
        return `
        <button class="mission-item-btn ${active} ${completed}" data-mid="${m.id}" aria-label="Missão ${m.id}: ${m.titulo}">
          <div class="mission-num-badge">${completed ? "✓" : "M" + m.id}</div>
          <div class="mission-item-info">
            <div class="mission-item-title">Missão ${m.id}: ${m.titulo}</div>
            <div class="mission-item-meta">
              <span>${m.bimestre}º Bim</span> • <span>${m.eixo}</span>
            </div>
          </div>
        </button>`;
      })
      .join("");

    listEl.querySelectorAll(".mission-item-btn").forEach((btn) => {
      btn.onclick = () => {
        appState.currentMissionId = Number(btn.dataset.mid);
        appState.currentStage = 0;
        renderSidebar();
        renderMissionWorkspace();
      };
    });
  }

  function renderMissionWorkspace() {
    const m = appState.missions.find((x) => x.id === appState.currentMissionId) || appState.missions[0];
    if (!m) return;

    // 1. Cabeçalho da Missão
    const bannerEl = document.getElementById("mission-banner");
    if (bannerEl) {
      bannerEl.innerHTML = `
        <div class="mission-banner-left">
          <span class="mission-bimester-pill">${m.bimestre}º Bimestre • ${m.semanas} • Eixo: ${m.eixo}</span>
          <h2>Missão ${m.id}: ${m.titulo}</h2>
          <div class="curriculum-tags">
            ${m.saeb.map((s) => `<span class="curr-tag saeb" title="Habilidade Saeb">Saeb: ${s}</span>`).join("")}
            ${m.niveisSaeb.map((n) => `<span class="curr-tag nivel" title="Nível de Proficiência Saeb">Escala: ${n}</span>`).join("")}
            ${m.bncc.map((b) => `<span class="curr-tag bncc" title="Habilidade BNCC">BNCC: ${b}</span>`).join("")}
          </div>
        </div>
        <div>
          <button class="tts-btn" onclick="speakText('Missão ${m.id}: ${m.titulo}. Eixo ${m.eixo}.')">
            🔊 Ouvir Título
          </button>
        </div>
      `;
    }

    // 2. Navegação das 5 Abas Gamificadas
    const stages = [
      { step: "Abertura", label: "Briefing & Roda" },
      { step: "Etapa 1", label: "Lab. Guiado" },
      { step: "Etapa 2", label: "Treino de Campo" },
      { step: "Etapa 3", label: "Simulador Saeb" },
      { step: "Etapa Final", label: "Missão Boss 🏆" }
    ];
    const tabsEl = document.getElementById("mission-tabs-nav");
    if (tabsEl) {
      tabsEl.innerHTML = stages
        .map((st, idx) => {
          const isAct = appState.currentStage === idx ? "active" : "";
          const isDone = appState.completedStages[`m${m.id}_s${idx}`] ? "✅ " : "";
          return `
            <button class="stage-tab-btn ${isAct}" data-st="${idx}">
              <span class="stage-tab-step">${isDone}${st.step}</span>
              <span class="stage-tab-label">${st.label}</span>
            </button>
          `;
        })
        .join("");

      tabsEl.querySelectorAll(".stage-tab-btn").forEach((b) => {
        b.onclick = () => {
          appState.currentStage = Number(b.dataset.st);
          renderMissionWorkspace();
        };
      });
    }

    // 3. Conteúdo da Etapa Selecionada
    const stageContentEl = document.getElementById("stage-content");
    if (!stageContentEl) return;

    if (appState.currentStage === 0) {
      renderStage0Abertura(stageContentEl, m);
    } else if (appState.currentStage === 1) {
      renderStage1LabGuiado(stageContentEl, m);
    } else if (appState.currentStage === 2) {
      renderStage2Treino(stageContentEl, m);
    } else if (appState.currentStage === 3) {
      renderStage3Saeb(stageContentEl, m);
    } else if (appState.currentStage === 4) {
      renderStage4Boss(stageContentEl, m);
    }
  }

  // ABA 0: ABERTURA (Briefing com Prof. Alê Chocolate + Questões Mobilizadoras + Simulador Partilha M13)
  function renderStage0Abertura(container, m) {
    const safeCtx = m.abertura.contexto.replace(/'/g, "\\'");
    let partilhaHTML = "";
    if (m.abertura.simuladorPartilha && m.abertura.simuladorPartilha.ativo) {
      partilhaHTML = `
        <div class="stage-card" style="border-left:5px solid var(--orange-vibrant); background:var(--orange-soft)">
          <h3 style="color:var(--navy-primary);margin-bottom:0.5rem">🥪 Simulador Interativo de Partilha Coletiva do Lanche (Missão 13)</h3>
          <p style="margin-bottom:0.75rem">Altere o número de estudantes da turma para repartir igualmente <strong>5 L de suco</strong>, <strong>1 bolo</strong> e <strong>60 pães</strong>:</p>
          <div style="display:flex;flex-wrap:wrap;gap:0.75rem;align-items:center;margin-bottom:0.75rem">
            <label for="partilha-n" style="font-weight:700">Nº de Alunos (N):</label>
            <input type="number" id="partilha-n" class="input-inline" value="30" min="1" max="120">
            <button class="btn-secondary" onclick="document.getElementById('partilha-n').value=30;document.getElementById('partilha-n').dispatchEvent(new Event('input'))">Turma de 30 alunos</button>
            <button class="btn-secondary" onclick="document.getElementById('partilha-n').value=20;document.getElementById('partilha-n').dispatchEvent(new Event('input'))">Turma de 20 alunos</button>
          </div>
          <div id="partilha-res" style="font-weight:700;color:var(--navy-dark);background:#fff;padding:0.85rem;border-radius:8px;border:1px solid var(--border-color)"></div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="stage-card">
        <div class="prof-ale-box">
          ${profAleAvatarHTML()}
          <div class="prof-ale-content">
            <div class="prof-ale-header">
              <span class="prof-ale-name">🍫 Prof. Alê Chocolate — Briefing da Missão ${m.id}</span>
              <button class="tts-btn" onclick="speakText('${safeCtx}')">🔊 Ouvir Briefing</button>
            </div>
            <p>${m.abertura.contexto}</p>
          </div>
        </div>

        ${partilhaHTML}

        <h3 style="color:var(--navy-primary);margin:1rem 0 0.75rem">💬 Roda de Conversa — Questões Mobilizadoras</h3>
        <p style="color:var(--text-muted);margin-bottom:1rem;font-size:0.9rem">Discuta com a turma e registre as ideias do grupo para desbloquear as insígnias da Abertura:</p>
        ${m.abertura.questoesMobilizadoras
          .map(
            (q, i) => `
          <div class="question-block">
            <div class="question-header">
              <strong>Questão Mobilizadora ${i + 1}</strong>
              <button class="tts-btn" onclick="speakText('${q.replace(/'/g, "\\'")}')">🔊 Ouvir</button>
            </div>
            <p style="margin-bottom:0.65rem;font-weight:600">${q}</p>
            <textarea rows="2" placeholder="Registre aqui sua hipótese ou síntese da roda de conversa..." style="width:100%;padding:0.6rem;border-radius:8px;border:1px solid var(--border-color);font-family:inherit"></textarea>
          </div>`
          )
          .join("")}

        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-top:1rem">
          <button class="btn-action" id="btn-complete-s0">✅ Concluir Roda de Conversa (+20 XP) e Ir ao Laboratório Guiado →</button>
        </div>
      </div>
    `;

    const pInput = document.getElementById("partilha-n");
    const pRes = document.getElementById("partilha-res");
    if (pInput && pRes) {
      const updatePartilha = () => {
        const n = Math.max(1, Number(pInput.value) || 30);
        const sucoDec = (5 / n).toFixed(3).replace(".", ",");
        const boloDec = (1 / n).toFixed(3).replace(".", ",");
        const paesVal = (60 / n).toFixed(2).replace(/\.00$/, "").replace(".", ",");
        pRes.innerHTML = `
          • <strong>Suco (5 L ÷ ${n})</strong>: Fração <code>5/${n} L</code> (Simplificada: <code>1/${n / 5 === Math.floor(n / 5) ? n / 5 : n}</code>) ≈ <strong>${sucoDec} L</strong> por aluno<br>
          • <strong>Bolo (1 ÷ ${n})</strong>: Fração <code>1/${n}</code> do bolo ≈ <strong>${boloDec}</strong> por aluno<br>
          • <strong>Pães (60 ÷ ${n})</strong>: Fração <code>60/${n}</code> = <strong>${paesVal} pães</strong> por aluno
        `;
      };
      pInput.addEventListener("input", updatePartilha);
      updatePartilha();
    }

    document.getElementById("btn-complete-s0").onclick = () => {
      addXP(20, `m${m.id}_s0`);
      appState.currentStage = 1;
      renderMissionWorkspace();
    };
  }

  // ABA 1: ETAPA 1 (Laboratório Guiado em Canvas + Acordeão Resolvendo a Questão + Fique Ligado)
  function renderStage1LabGuiado(container, m) {
    const e1 = m.etapa1;
    const isUnlocked = !!appState.etapa1Unlocked[m.id];

    container.innerHTML = `
      <div class="stage-card">
        <div class="strategy-alert">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.35rem">
            <strong style="color:var(--navy-primary)">🧭 Alerta de Estratégia DUA — Prof. Alê Chocolate</strong>
            <button class="tts-btn" onclick="speakText('${e1.alertaEstrategia.replace(/'/g, "\\'")}')">🔊 Ouvir Estratégia</button>
          </div>
          <p>${e1.alertaEstrategia}</p>
        </div>

        <div class="canvas-lab-container">
          <div style="display:flex;justify-content:space-between;width:100%;max-width:720px;align-items:center;flex-wrap:wrap;gap:0.5rem">
            <strong style="color:var(--navy-primary)">🔬 Simulador Interativo em Canvas — Missão ${m.id}</strong>
            <span style="font-size:0.8rem;color:var(--text-muted)">Experimente os controles antes de responder!</span>
          </div>
          <div class="canvas-wrapper">
            <canvas id="canvas-stage1" width="660" height="315"></canvas>
          </div>
          <div id="controls-stage1" class="canvas-controls"></div>
        </div>

        <div class="question-block">
          <div class="question-header">
            <strong style="color:var(--navy-primary)">Desafio Guiado da Etapa 1</strong>
            <button class="tts-btn" onclick="speakText('${e1.enunciado.replace(/'/g, "\\'")}')">🔊 Ouvir Enunciado</button>
          </div>
          <p style="font-weight:600;margin-bottom:0.75rem">${e1.enunciado}</p>
          <div class="options-grid" id="e1-options">
            ${e1.opcoes
              .map(
                (op, idx) => `
              <button class="option-btn" data-idx="${idx}">
                <span class="option-letter">${["A", "B", "C", "D"][idx]}</span>
                <span>${op.replace(/^[A-D]\)\s*/, "")}</span>
              </button>`
              )
              .join("")}
          </div>
          <div id="e1-feedback" class="feedback-banner" role="alert" aria-live="polite"></div>
        </div>

        <div class="accordion-box">
          <button class="accordion-header" id="acc-btn-e1" ${isUnlocked ? "" : "disabled"}>
            <span>📘 Resolvendo a questão (Passo a Passo Detalhado)</span>
            <span id="acc-status-e1">${isUnlocked ? "🔓 Liberado (Clique para expandir)" : "🔒 Responda à questão acima para liberar"}</span>
          </button>
          <div class="accordion-body ${isUnlocked ? "open" : ""}" id="acc-body-e1">
            ${e1.passoAPasso.map((p) => `<p style="margin-bottom:0.45rem">✔️ ${p}</p>`).join("")}
          </div>
        </div>

        <div class="fique-ligado-card">
          ${profAleAvatarHTML("clean")}
          <div style="flex:1">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.35rem;flex-wrap:wrap;gap:0.5rem">
              <strong style="color:var(--orange-vibrant);font-size:1.05rem">💡 Fique ligado! (Sistematização Conceitual)</strong>
              <button class="tts-btn" onclick="speakText('${e1.fiqueLigado.replace(/'/g, "\\'")}')">🔊 Ouvir Conceito</button>
            </div>
            <p style="font-weight:600">${e1.fiqueLigado}</p>
          </div>
        </div>
      </div>
    `;

    window.CanvasLabs.renderMissionCanvas("canvas-stage1", m.id, false, "controls-stage1");

    const accBtn = document.getElementById("acc-btn-e1");
    const accBody = document.getElementById("acc-body-e1");
    const accStatus = document.getElementById("acc-status-e1");
    accBtn.onclick = () => {
      if (!accBtn.disabled) accBody.classList.toggle("open");
    };

    container.querySelectorAll("#e1-options .option-btn").forEach((btn) => {
      btn.onclick = () => {
        const chosen = Number(btn.dataset.idx);
        const fb = document.getElementById("e1-feedback");
        appState.etapa1Unlocked[m.id] = true;
        accBtn.disabled = false;
        accBody.classList.add("open");
        accStatus.textContent = "🔓 Passo a passo liberado!";

        container.querySelectorAll("#e1-options .option-btn").forEach((b) => b.classList.remove("correct", "wrong"));
        if (chosen === e1.correta) {
          btn.classList.add("correct");
          fb.className = "feedback-banner show correct";
          fb.innerHTML = `🎉 Excelente investigação! Você acertou (+30 XP)! Confira abaixo o acordeão "Resolvendo a questão" e o boxe "Fique ligado!".`;
          addXP(30, `m${m.id}_s1`);
        } else {
          btn.classList.add("wrong");
          fb.className = "feedback-banner show wrong";
          fb.innerHTML = `🔍 Quase lá! O erro faz parte da investigação. Leia o passo a passo liberado abaixo em "Resolvendo a questão" e tente novamente!`;
          saveProgress();
        }
      };
    });
  }

  // ABA 2: ETAPA 2 (Treino de Campo com botões Dica! e Fique ligado! sob demanda)
  function renderStage2Treino(container, m) {
    let solvedCount = 0;
    container.innerHTML = `
      <div class="stage-card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem">
          <div>
            <h3 style="color:var(--navy-primary)">🏋️ Etapa 2: Treino de Campo (Aprofundamento com Andaimes)</h3>
            <p style="font-size:0.9rem;color:var(--text-muted)">Use os botões de suporte <strong>Dica!</strong> e <strong>Fique ligado!</strong> sempre que precisar, ou abra o rascunho no canto inferior direito.</p>
          </div>
        </div>

        ${m.etapa2
          .map(
            (q, qIdx) => `
          <div class="question-block" id="e2-block-${qIdx}">
            <div class="question-header">
              <strong style="color:var(--navy-primary)">Atividade ${qIdx + 1}</strong>
              <div style="display:flex;gap:0.45rem;flex-wrap:wrap">
                <button class="btn-outline" data-support="dica" data-q="${qIdx}">💡 Dica!</button>
                <button class="btn-outline" data-support="fique" data-q="${qIdx}">📌 Fique ligado!</button>
                <button class="tts-btn" onclick="speakText('${q.enunciado.replace(/'/g, "\\'")}')">🔊 Ouvir</button>
              </div>
            </div>
            <p style="font-weight:600;margin-bottom:0.75rem">${q.enunciado}</p>
            <div id="e2-sup-${qIdx}" style="display:none;background:#FFFBEB;border-left:4px solid var(--orange-vibrant);padding:0.7rem 0.9rem;border-radius:6px;margin-bottom:0.75rem;font-size:0.9rem;font-weight:600"></div>
            <div class="options-grid">
              ${q.opcoes
                .map(
                  (op, oIdx) => `
                <button class="option-btn" data-q="${qIdx}" data-o="${oIdx}">
                  <span class="option-letter">${["A", "B", "C", "D"][oIdx]}</span>
                  <span>${op}</span>
                </button>`
                )
                .join("")}
            </div>
            <div id="e2-fb-${qIdx}" class="feedback-banner" role="alert" aria-live="polite"></div>
          </div>`
          )
          .join("")}
      </div>
    `;

    container.querySelectorAll("button[data-support]").forEach((btn) => {
      btn.onclick = () => {
        const qIdx = Number(btn.dataset.q);
        const type = btn.dataset.support;
        const supEl = document.getElementById(`e2-sup-${qIdx}`);
        const q = m.etapa2[qIdx];
        supEl.style.display = "flex";
        supEl.style.alignItems = "center";
        supEl.style.gap = "0.75rem";
        const av = `<img src="assets/avatar-prof-ale-clean.jpg" alt="Prof. Alê Chocolate" style="width:48px;height:48px;border-radius:50%;border:2px solid var(--orange-vibrant);object-fit:cover;flex-shrink:0">`;
        supEl.innerHTML =
          type === "dica"
            ? `${av}<div>🍫 <strong>Dica do Prof. Alê Chocolate:</strong> ${q.dica}</div>`
            : `${av}<div>📌 <strong>Fique ligado:</strong> ${q.fiqueLigado}</div>`;
      };
    });

    container.querySelectorAll(".option-btn[data-q]").forEach((btn) => {
      btn.onclick = () => {
        const qIdx = Number(btn.dataset.q);
        const oIdx = Number(btn.dataset.o);
        const q = m.etapa2[qIdx];
        const fb = document.getElementById(`e2-fb-${qIdx}`);
        const parent = document.getElementById(`e2-block-${qIdx}`);

        parent.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("correct", "wrong"));
        if (oIdx === q.correta) {
          btn.classList.add("correct");
          fb.className = "feedback-banner show correct";
          fb.innerHTML = `✅ Correto! ${q.fiqueLigado}`;
          if (!parent.dataset.done) {
            parent.dataset.done = "1";
            solvedCount++;
            if (solvedCount >= 1) addXP(35, `m${m.id}_s2`);
          }
        } else {
          btn.classList.add("wrong");
          fb.className = "feedback-banner show wrong";
          fb.innerHTML = `🔎 Pista formativa: ${q.dica}`;
        }
      };
    });
  }

  // ABA 3: ETAPA 3 (Simulador Saeb com Tags de Habilidade, Nível N1-N8 e Taxonomia de Bloom)
  function renderStage3Saeb(container, m) {
    container.innerHTML = `
      <div class="stage-card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem">
          <div>
            <h3 style="color:var(--navy-primary)">🎯 Etapa 3: Simulador Saeb (Resolução Autônoma)</h3>
            <p style="font-size:0.9rem;color:var(--text-muted)">Questões no padrão oficial Saeb. As etiquetas curriculares exibem o descritor Saeb, o Nível de Proficiência (N1 a N8) e a Taxonomia de Bloom.</p>
          </div>
          <button class="btn-secondary" onclick="window.openTeacherSaebModal()">👩‍🏫 Abrir Painel De Olho no Saeb</button>
        </div>

        ${m.etapa3
          .map(
            (q, qIdx) => `
          <div class="question-block" id="e3-block-${qIdx}">
            <div class="question-header">
              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;align-items:center">
                <strong style="color:var(--navy-primary)">Item Saeb ${qIdx + 1}</strong>
                <span class="curr-tag saeb teacher-tag" style="display:${appState.teacherMode ? "inline-block" : "none"}">Saeb: ${q.saeb}</span>
                <span class="curr-tag nivel teacher-tag" style="display:${appState.teacherMode ? "inline-block" : "none"}">Proficiência: ${q.nivel}</span>
                <span class="curr-tag bncc teacher-tag" style="display:${appState.teacherMode ? "inline-block" : "none"}">Bloom: ${q.bloom}</span>
              </div>
              <button class="tts-btn" onclick="speakText('${q.enunciado.replace(/'/g, "\\'")}')">🔊 Ouvir Item</button>
            </div>
            <p style="font-weight:600;margin-bottom:0.75rem">${q.enunciado}</p>
            <div class="options-grid">
              ${q.opcoes
                .map(
                  (op, oIdx) => `
                <button class="option-btn" data-q="${qIdx}" data-o="${oIdx}">
                  <span class="option-letter">${["A", "B", "C", "D"][oIdx]}</span>
                  <span>${op.replace(/^[A-D]\)\s*/, "")}</span>
                </button>`
                )
                .join("")}
            </div>
            <div id="e3-fb-${qIdx}" class="feedback-banner" role="alert" aria-live="polite"></div>
          </div>`
          )
          .join("")}
      </div>
    `;

    container.querySelectorAll(".option-btn[data-q]").forEach((btn) => {
      btn.onclick = () => {
        const qIdx = Number(btn.dataset.q);
        const oIdx = Number(btn.dataset.o);
        const q = m.etapa3[qIdx];
        const fb = document.getElementById(`e3-fb-${qIdx}`);
        const parent = document.getElementById(`e3-block-${qIdx}`);
        const isCorrect = oIdx === q.correta;

        parent.querySelectorAll(".option-btn").forEach((b) => b.classList.remove("correct", "wrong"));
        btn.classList.add(isCorrect ? "correct" : "wrong");

        fb.className = `feedback-banner show ${isCorrect ? "correct" : "wrong"}`;
        fb.innerHTML = isCorrect
          ? `🏆 Gabarito Oficial Confirmado (${["A", "B", "C", "D"][q.correta]})! ${q.explicacao}`
          : `⚠️ Alternativa incorreta. Análise pedagógica do item (${q.saeb} - ${q.nivel}): ${q.explicacao}`;

        appState.saebHistory.push({
          missionId: m.id,
          eixo: m.eixo,
          saeb: q.saeb,
          nivel: q.nivel,
          bloom: q.bloom,
          correct: isCorrect,
          ts: new Date().toLocaleTimeString("pt-BR")
        });

        if (isCorrect) {
          addXP(40, `m${m.id}_s3`);
        } else {
          saveProgress();
        }
      };
    });
  }

  // ABA 4: ETAPA FINAL (Missão Boss - Projeto Prático Autoral em Canvas)
  function renderStage4Boss(container, m) {
    container.innerHTML = `
      <div class="stage-card">
        <div class="prof-ale-box">
          ${profAleAvatarHTML()}
          <div class="prof-ale-content">
            <div class="prof-ale-header">
              <span class="prof-ale-name">🏆 ${m.etapaFinal.titulo}</span>
              <button class="tts-btn" onclick="speakText('${m.etapaFinal.instrucao.replace(/'/g, "\\'")}')">🔊 Ouvir Missão Boss</button>
            </div>
            <p>${m.etapaFinal.instrucao}</p>
          </div>
        </div>

        <div class="canvas-lab-container">
          <div class="canvas-wrapper">
            <canvas id="canvas-boss" width="660" height="315"></canvas>
          </div>
          <div id="controls-boss" class="canvas-controls"></div>
        </div>

        <div class="question-block">
          <label for="boss-reflection" style="font-weight:700;display:block;margin-bottom:0.45rem">
            📝 Diário de Bordo do Projeto Prático (Compartilhe sua descoberta ou estratégia com a turma):
          </label>
          <textarea id="boss-reflection" rows="3" placeholder="Explique como você configurou o simulador acima e o que descobriu nesta missão..." style="width:100%;padding:0.65rem;border-radius:8px;border:1px solid var(--border-color);font-family:inherit;margin-bottom:0.75rem"></textarea>
          <button class="btn-action" id="btn-finish-boss">🏅 Concluir Missão ${m.id} e Resgatar Insígnia (+50 XP)</button>
          <div id="boss-fb" class="feedback-banner" role="alert" aria-live="polite"></div>
        </div>
      </div>
    `;

    window.CanvasLabs.renderMissionCanvas("canvas-boss", m.id, true, "controls-boss");

    document.getElementById("btn-finish-boss").onclick = () => {
      addXP(50, `m${m.id}_s4`);
      const fb = document.getElementById("boss-fb");
      fb.className = "feedback-banner show correct";
      fb.innerHTML = `🎖️ Parabéns! Você concluiu o Projeto Prático da <strong>Missão ${m.id}: ${m.titulo}</strong> e conquistou +50 XP com o Selo MathLab!`;
    };
  }

  // Painel do Professor (Modo De Olho no Saeb)
  window.openTeacherSaebModal = function () {
    const modal = document.getElementById("teacher-saeb-modal");
    const body = document.getElementById("teacher-saeb-body");
    if (!modal || !body) return;

    const byAxis = {};
    appState.missions.forEach((m) => {
      if (!byAxis[m.eixo]) byAxis[m.eixo] = { attempts: 0, hits: 0, skills: new Set(), levels: new Set() };
      m.saeb.forEach((s) => byAxis[m.eixo].skills.add(s));
      m.niveisSaeb.forEach((n) => byAxis[m.eixo].levels.add(n));
    });

    appState.saebHistory.forEach((h) => {
      if (!byAxis[h.eixo]) byAxis[h.eixo] = { attempts: 0, hits: 0, skills: new Set([h.saeb]), levels: new Set([h.nivel]) };
      byAxis[h.eixo].attempts++;
      if (h.correct) byAxis[h.eixo].hits++;
    });

    const rows = Object.entries(byAxis)
      .map(([eixo, data]) => {
        const pct = data.attempts ? Math.round((data.hits / data.attempts) * 100) : 0;
        return `
          <tr>
            <td><strong>${eixo}</strong></td>
            <td>${[...data.skills].join(", ")}</td>
            <td>${[...data.levels].join(", ")}</td>
            <td>${data.hits} / ${data.attempts} (${pct}%)</td>
          </tr>
        `;
      })
      .join("");

    body.innerHTML = `
      <p style="margin-bottom:0.75rem">Acompanhamento diagnóstico por Eixo Cognitivo, Descritores Saeb (5º ano) e Escala de Proficiência (N1 a N8) para planejamento de recomposição:</p>
      <table class="qvl-table" style="text-align:left">
        <thead>
          <tr>
            <th>Eixo Curricular</th>
            <th>Descritores Saeb Mapeados</th>
            <th>Níveis de Proficiência</th>
            <th>Desempenho no Simulador</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
    modal.style.display = "flex";
  };

  // Andaimes Pedagógicos (Quadro de Ordens até 6ª Ordem + Decimais, Calculadora EF05MA06 e Malha)
  function initScaffolding() {
    const fab = document.getElementById("scaffolding-fab");
    const drawer = document.getElementById("scaffolding-drawer");
    const closeBtn = document.getElementById("scaffolding-close");
    if (!fab || !drawer) return;

    fab.onclick = () => {
      drawer.classList.toggle("open");
      renderScaffoldingTool();
    };
    if (closeBtn) closeBtn.onclick = () => drawer.classList.remove("open");

    document.querySelectorAll(".scaf-tab-btn").forEach((btn) => {
      btn.onclick = () => {
        appState.scaffoldingTab = btn.dataset.tab;
        renderScaffoldingTool();
      };
    });
  }

  function renderScaffoldingTool() {
    const body = document.getElementById("scaffolding-body");
    if (!body) return;

    if (appState.scaffoldingTab === "qvl") {
      body.innerHTML = `
        <h4 style="color:var(--navy-primary);margin-bottom:0.4rem">Quadro Posicional (6ª Ordem até Milésimos)</h4>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.5rem">Digite algarismos nas ordens inteiras ou decimais para visualizar a decomposição:</p>
        <table class="qvl-table">
          <thead>
            <tr>
              <th title="Centena de Milhar">6ª CM</th>
              <th title="Dezena de Milhar">5ª DM</th>
              <th title="Unidade de Milhar">4ª UM</th>
              <th title="Centena">3ª C</th>
              <th title="Dezena">2ª D</th>
              <th title="Unidade">1ª U</th>
              <th style="background:var(--orange-vibrant)">,</th>
              <th title="Décimo (0,1)">d</th>
              <th title="Centésimo (0,01)">c</th>
              <th title="Milésimo (0,001)">m</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input class="qvl-input" maxlength="1" data-mult="100000" value="0"></td>
              <td><input class="qvl-input" maxlength="1" data-mult="10000" value="0"></td>
              <td><input class="qvl-input" maxlength="1" data-mult="1000" value="0"></td>
              <td><input class="qvl-input" maxlength="1" data-mult="100" value="4"></td>
              <td><input class="qvl-input" maxlength="1" data-mult="10" value="2"></td>
              <td><input class="qvl-input" maxlength="1" data-mult="1" value="5"></td>
              <td style="font-weight:900;font-size:1.3rem">,</td>
              <td><input class="qvl-input" maxlength="1" data-mult="0.1" value="7"></td>
              <td><input class="qvl-input" maxlength="1" data-mult="0.01" value="5"></td>
              <td><input class="qvl-input" maxlength="1" data-mult="0.001" value="0"></td>
            </tr>
          </tbody>
        </table>
        <div id="qvl-decomp-out" style="font-weight:700;font-size:0.85rem;background:var(--bg-main);padding:0.6rem;border-radius:6px;border:1px solid var(--border-color)"></div>
      `;

      const updateQVL = () => {
        const inputs = [...body.querySelectorAll(".qvl-input")];
        let sum = 0;
        const parts = [];
        inputs.forEach((inp) => {
          const d = Math.max(0, Math.min(9, parseInt(inp.value, 10) || 0));
          const mult = parseFloat(inp.dataset.mult);
          const v = Number((d * mult).toFixed(3));
          sum = Number((sum + v).toFixed(3));
          if (d > 0) parts.push(`${d}×${mult.toString().replace(".", ",")}`);
        });
        document.getElementById("qvl-decomp-out").innerHTML = `
          Valor: <strong>${sum.toLocaleString("pt-BR")}</strong><br>
          Decomposição: <code>${parts.join(" + ") || "0"}</code>
        `;
      };
      body.querySelectorAll(".qvl-input").forEach((i) => i.addEventListener("input", updateQVL));
      updateQVL();
    } else if (appState.scaffoldingTab === "calc") {
      body.innerHTML = `
        <h4 style="color:var(--navy-primary);margin-bottom:0.4rem">Calculadora de Apoio & Porcentagens (EF05MA06)</h4>
        <div style="display:flex;gap:0.5rem;align-items:center;margin-bottom:0.65rem">
          <label for="calc-val" style="font-weight:700;font-size:0.85rem">Valor Base:</label>
          <input type="number" id="calc-val" class="input-inline" value="160">
        </div>
        <div id="calc-pct-table" style="font-size:0.85rem;background:var(--bg-main);padding:0.65rem;border-radius:8px;border:1px solid var(--border-color)"></div>
      `;
      const inp = document.getElementById("calc-val");
      const out = document.getElementById("calc-pct-table");
      const updateCalc = () => {
        const v = Number(inp.value) || 0;
        out.innerHTML = `
          • <strong>10% (Décima parte: ÷10)</strong> = <strong>${(v / 10).toLocaleString("pt-BR")}</strong><br>
          • <strong>25% (Quarta parte: ÷4)</strong> = <strong>${(v / 4).toLocaleString("pt-BR")}</strong><br>
          • <strong>50% (Metade: ÷2)</strong> = <strong>${(v / 2).toLocaleString("pt-BR")}</strong><br>
          • <strong>75% (Três quartos: 3 × 25%)</strong> = <strong>${((v * 3) / 4).toLocaleString("pt-BR")}</strong><br>
          • <strong>100% (Inteiro)</strong> = <strong>${v.toLocaleString("pt-BR")}</strong>
        `;
      };
      inp.addEventListener("input", updateCalc);
      updateCalc();
    } else {
      body.innerHTML = `
        <h4 style="color:var(--navy-primary);margin-bottom:0.4rem">Malha Quadriculada de Rascunho</h4>
        <p style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.4rem">Clique nas células para pintar e contar área/perímetro de apoio:</p>
        <canvas id="scaf-grid-canvas" width="380" height="210" style="border:1px solid var(--navy-primary);border-radius:6px;cursor:pointer;width:100%"></canvas>
        <div id="scaf-grid-info" style="font-weight:700;font-size:0.85rem;margin-top:0.4rem"></div>
      `;
      const cv = document.getElementById("scaf-grid-canvas");
      const ctx = cv.getContext("2d");
      const active = new Set();
      const cell = 26, cols = 14, rows = 8;
      const drawGrid = () => {
        ctx.clearRect(0, 0, cv.width, cv.height);
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const k = `${c},${r}`;
            ctx.fillStyle = active.has(k) ? "#FF6B00" : "#FFFFFF";
            ctx.fillRect(c * cell, r * cell, cell, cell);
            ctx.strokeStyle = "#CBD5E1";
            ctx.strokeRect(c * cell, r * cell, cell, cell);
          }
        }
        document.getElementById("scaf-grid-info").textContent = `Quadradinhos pintados (Área): ${active.size} u²`;
      };
      cv.onclick = (e) => {
        const rect = cv.getBoundingClientRect();
        const c = Math.floor(((e.clientX - rect.left) * (cv.width / rect.width)) / cell);
        const r = Math.floor(((e.clientY - rect.top) * (cv.height / rect.height)) / cell);
        const k = `${c},${r}`;
        if (active.has(k)) active.delete(k);
        else active.add(k);
        drawGrid();
      };
      drawGrid();
    }
  }

  // Controles da Barra de Acessibilidade Global (DUA)
  function initAccessibilityBar() {
    const btnContrast = document.getElementById("a11y-contrast");
    const btnColorblind = document.getElementById("a11y-colorblind");
    const btnFontUp = document.getElementById("a11y-font-up");
    const btnFontDown = document.getElementById("a11y-font-down");
    const btnTeacher = document.getElementById("a11y-teacher");
    const btnSpeakPage = document.getElementById("a11y-speak");

    if (btnContrast) {
      btnContrast.onclick = () => {
        appState.highContrast = !appState.highContrast;
        document.body.classList.toggle("high-contrast", appState.highContrast);
        btnContrast.classList.toggle("active", appState.highContrast);
        window.CanvasLabs.setAccessibilityModes(appState.colorblind, appState.highContrast);
        renderMissionWorkspace();
      };
    }

    if (btnColorblind) {
      btnColorblind.onclick = () => {
        appState.colorblind = !appState.colorblind;
        btnColorblind.classList.toggle("active", appState.colorblind);
        window.CanvasLabs.setAccessibilityModes(appState.colorblind, appState.highContrast);
        renderMissionWorkspace();
      };
    }

    if (btnFontUp) {
      btnFontUp.onclick = () => {
        appState.fontScale = Math.min(1.3, Number((appState.fontScale + 0.08).toFixed(2)));
        document.documentElement.style.setProperty("--font-scale", appState.fontScale);
      };
    }

    if (btnFontDown) {
      btnFontDown.onclick = () => {
        appState.fontScale = Math.max(0.85, Number((appState.fontScale - 0.08).toFixed(2)));
        document.documentElement.style.setProperty("--font-scale", appState.fontScale);
      };
    }

    if (btnTeacher) {
      btnTeacher.onclick = () => {
        appState.teacherMode = !appState.teacherMode;
        btnTeacher.classList.toggle("active", appState.teacherMode);
        document.querySelectorAll(".teacher-tag").forEach((el) => {
          el.style.display = appState.teacherMode ? "inline-block" : "none";
        });
      };
    }

    if (btnSpeakPage) {
      btnSpeakPage.onclick = () => {
        const m = appState.missions.find((x) => x.id === appState.currentMissionId);
        if (!m) return;
        window.speakText(`Missão ${m.id}: ${m.titulo}. ${m.abertura.contexto}`);
      };
    }
  }

  // Inicialização
  async function init() {
    loadProgress();

    try {
      const resp = await fetch("missions.json");
      if (resp.ok) {
        appState.missions = await resp.json();
      } else {
        appState.missions = window.MISSIONS_DATA || [];
      }
    } catch (_) {
      appState.missions = window.MISSIONS_DATA || [];
    }

    // Filtro de Bimestres
    document.querySelectorAll(".bim-tab").forEach((tab) => {
      tab.onclick = () => {
        document.querySelectorAll(".bim-tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        appState.currentBimester = Number(tab.dataset.bim);
        const firstInBim = appState.missions.find(
          (m) => appState.currentBimester === 0 || m.bimestre === appState.currentBimester
        );
        if (firstInBim) appState.currentMissionId = firstInBim.id;
        appState.currentStage = 0;
        renderSidebar();
        renderMissionWorkspace();
      };
    });

    initAccessibilityBar();
    initScaffolding();
    updateHUD();
    renderSidebar();
    renderMissionWorkspace();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
