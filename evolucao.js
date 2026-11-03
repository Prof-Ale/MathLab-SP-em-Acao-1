// Camada de evolução: não altera app.js. Recebe o estado pelo evento "mathlab:pronto".
(function () {
  const reduz = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let S = null, renderWS = null, renderSB = null;

  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  function getLS(k) { try { return localStorage.getItem(k); } catch (_) { return null; } }
  function setLS(k, v) { try { localStorage.setItem(k, v); } catch (_) {} }

  // ---------- modo professor / aluno ----------
  function iniciarModoAluno() {
    const btn = $("#a11y-teacher");
    if (!btn) return;
    btn.innerHTML = "👩‍🏫 Modo Professor";
    btn.title = "Mostra as etiquetas Saeb, nível e Bloom. Os alunos veem sem elas.";
    if (S.teacherMode) btn.click(); // começa no modo aluno
    document.body.classList.toggle("modo-professor", S.teacherMode);
    btn.addEventListener("click", () => document.body.classList.toggle("modo-professor", S.teacherMode));
  }

  // ---------- modo projetor ----------
  function iniciarProjetor() {
    const bar = $(".a11y-controls");
    if (!bar) return;
    const b = document.createElement("button");
    b.type = "button"; b.className = "a11y-btn"; b.id = "a11y-projetor";
    b.textContent = "📽️ Modo Projetor";
    b.title = "Letras e botões maiores para a sala toda ver";
    const aplicar = (on) => {
      document.body.classList.toggle("projetor", on);
      b.classList.toggle("active", on);
      document.documentElement.style.setProperty("--font-scale", on ? 1.28 : S.fontScale);
      setLS("mathlab_sp_projetor", on ? "1" : "0");
    };
    b.onclick = () => aplicar(!document.body.classList.contains("projetor"));
    bar.insertBefore(b, bar.children[2] || null);
    // A+ e A− passam a valer também no projetor
    ["a11y-font-up", "a11y-font-down"].forEach((id) => {
      const x = document.getElementById(id);
      if (x) x.addEventListener("click", () => {
        if (document.body.classList.contains("projetor")) { document.body.classList.remove("projetor"); b.classList.remove("active"); setLS("mathlab_sp_projetor", "0"); }
      });
    });
    if (getLS("mathlab_sp_projetor") === "1") aplicar(true);
  }

  // ---------- guia rápido ----------
  function iniciarGuia() {
    const banner = $("#mission-banner");
    const main = banner && banner.closest(".app-layout");
    if (!main || getLS("mathlab_sp_guia") === "off") return;
    const g = document.createElement("section");
    g.className = "guia-rapido"; g.setAttribute("aria-label", "Como usar");
    g.innerHTML = `<div><strong style="font-size:1.15rem;color:var(--navy-primary)">Bem-vindos ao laboratório!</strong>
      <ol><li>Escolha uma missão na lista</li><li>Siga as 5 etapas, uma por vez</li><li>Cada acerto dá pontos para a turma toda</li></ol></div>
      <button type="button" class="btn-secondary" id="guia-fechar">Entendi</button>`;
    main.parentNode.insertBefore(g, main);
    $("#guia-fechar").onclick = () => { g.remove(); setLS("mathlab_sp_guia", "off"); };
  }

  // ---------- cartões extras e botões de avanço ----------
  function etapaAtual(c) {
    if ($("#btn-complete-s0", c)) return 0;
    if ($("#e1-options", c)) return 1;
    if ($("[id^=e2-block-]", c)) return 2;
    if ($("[id^=e3-block-]", c)) return 3;
    if ($("#btn-finish-boss", c)) return 4;
    return -1;
  }
  function decorar() {
    const c = $("#stage-content");
    if (!c || !S || c.dataset.decorado === String(S.currentMissionId) + ":" + S.currentStage && $(".extra-card, .avancar-box", c)) return;
    const et = etapaAtual(c);
    if (et < 0) return;
    c.dataset.decorado = S.currentMissionId + ":" + S.currentStage;
    const ex = (window.EXTRA_MISSIONS || {})[S.currentMissionId];
    const card = $(".stage-card", c);
    if (!card) return;

    if (et === 0 && ex) {
      const caixa = $(".prof-ale-box", card);
      const resumo = document.createElement("div");
      resumo.className = "extra-card simples";
      const texto = ex.poucas.join(" ");
      resumo.innerHTML = `<h4><span>✨ Em poucas palavras</span><button type="button" class="tts-btn" data-tts="${esc(texto)}">🔊 Ouvir</button></h4>
        <ul>${ex.poucas.map((p) => `<li>${p}</li>`).join("")}</ul>`;
      const rev = document.createElement("div");
      rev.className = "extra-card revisao";
      rev.innerHTML = `<h4><span>⚡ Revisão relâmpago do 5º ano</span><button type="button" class="tts-btn" data-tts="${esc(ex.rev.pergunta)}">🔊 Ouvir</button></h4>
        <p style="font-weight:700;font-size:1.05rem">${ex.rev.pergunta}</p>
        <button type="button" class="btn-outline" id="ver-resp">Ver a resposta</button>
        <div class="resp" id="resp-rev">${ex.rev.resposta}</div>`;
      if (caixa) { caixa.after(resumo); resumo.after(rev); } else { card.prepend(rev); card.prepend(resumo); }
      $("#ver-resp", rev).onclick = () => $("#resp-rev", rev).classList.toggle("open");
    }

    const box = document.createElement("div");
    box.className = "avancar-box";
    if (et >= 0 && et <= 3) {
      const nomes = ["Explorar", "Praticar", "Desafio", "Missão Final"];
      if (et >= 1) box.innerHTML = `<button type="button" class="btn-avancar">Próxima etapa: ${nomes[et]} →</button>`;
      const bt = $("button", box);
      if (bt) bt.onclick = () => { S.currentStage = et + 1; renderWS(); window.scrollTo({ top: 0, behavior: reduz ? "auto" : "smooth" }); };
    } else if (et === 4) {
      if (ex && ex.ponte7 && !$(".ponte7", card)) { const p = document.createElement("div"); p.className = "ponte7"; p.textContent = "🌱 Olhando para frente: " + ex.ponte7; card.appendChild(p); }
      if (S.currentMissionId < (S.missions || []).length) {
        box.innerHTML = `<button type="button" class="btn-avancar">Próxima missão →</button>`;
        $("button", box).onclick = () => irParaMissao(S.currentMissionId + 1);
      }
    }
    if (box.children.length) card.appendChild(box);
  }
  function irParaMissao(id) {
    const m = S.missions.find((x) => x.id === id);
    if (!m) return;
    if (S.currentBimester !== 0 && m.bimestre !== S.currentBimester) {
      const tab = document.querySelector(`.bim-tab[data-bim="${m.bimestre}"]`);
      if (tab) tab.click();
    }
    S.currentMissionId = id; S.currentStage = 0;
    renderSB(); renderWS();
    window.scrollTo({ top: 0, behavior: reduz ? "auto" : "smooth" });
  }

  // ---------- confete e aviso de XP ----------
  function confete(x, y) {
    if (reduz) return;
    let cv = $("#confete");
    if (!cv) { cv = document.createElement("canvas"); cv.id = "confete"; cv.setAttribute("aria-hidden", "true"); document.body.appendChild(cv); }
    cv.width = innerWidth; cv.height = innerHeight;
    const ctx = cv.getContext("2d");
    const cores = ["#FF6B00", "#1E3A8A", "#FBBF24", "#10B981", "#EF4444"];
    const ps = Array.from({ length: 70 }, () => ({
      x, y, vx: (Math.random() - 0.5) * 12, vy: -Math.random() * 11 - 3, r: Math.random() * 5 + 3,
      c: cores[(Math.random() * cores.length) | 0], rot: Math.random() * 6
    }));
    const t0 = performance.now();
    (function quadro(t) {
      const dt = t - t0;
      ctx.clearRect(0, 0, cv.width, cv.height);
      ps.forEach((p) => { p.x += p.vx; p.y += p.vy; p.vy += 0.35; p.rot += 0.2; ctx.fillStyle = p.c; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); ctx.restore(); });
      if (dt < 1400) requestAnimationFrame(quadro); else ctx.clearRect(0, 0, cv.width, cv.height);
    })(t0);
  }
  function observarAcertos() {
    const c = $("#stage-content");
    if (!c) return;
    new MutationObserver((muts) => {
      muts.forEach((m) => {
        if (m.type === "attributes" && m.target.classList && m.target.classList.contains("feedback-banner") &&
            m.target.classList.contains("show") && m.target.classList.contains("correct")) {
          const r = m.target.getBoundingClientRect();
          confete(Math.min(innerWidth - 20, Math.max(20, r.left + r.width / 2)), Math.min(innerHeight - 40, Math.max(60, r.top)));
        }
      });
    }).observe(c, { attributes: true, attributeFilter: ["class"], subtree: true });
    const xp = $("#hud-xp");
    let ant = parseInt((xp && xp.textContent) || "0", 10) || 0;
    if (xp) new MutationObserver(() => {
      const n = parseInt(xp.textContent, 10) || 0;
      if (n > ant) { const t = document.createElement("div"); t.className = "xp-toast"; t.textContent = "+" + (n - ant) + " XP"; document.body.appendChild(t); setTimeout(() => t.remove(), 1700); }
      ant = n;
    }).observe(xp, { childList: true, characterData: true, subtree: true });
  }

  // ---------- relatório do professor ----------
  function relatorio() {
    const body = $("#teacher-saeb-body");
    if (!body || $("#rel-extra", body.parentNode)) return;
    const total = S.missions.length;
    const linhas = S.missions.map((m) => {
      const feitas = [0, 1, 2, 3, 4].filter((i) => S.completedStages["m" + m.id + "_s" + i]).length;
      const h = S.saebHistory.filter((x) => x.missionId === m.id);
      const ac = h.filter((x) => x.correct).length;
      return `<tr><td>Missão ${m.id}: ${m.titulo}</td><td>${feitas} de 5</td><td>${h.length ? ac + " de " + h.length : "sem respostas"}</td></tr>`;
    }).join("");
    const concl = S.missions.filter((m) => [0, 1, 2, 3, 4].every((i) => S.completedStages["m" + m.id + "_s" + i])).length;
    const d = document.createElement("div");
    d.id = "rel-extra";
    d.innerHTML = `<h4 style="margin:1.25rem 0 0.5rem;color:var(--navy-primary)">Resumo da turma nesta sessão</h4>
      <p style="margin-bottom:0.6rem"><strong>${S.xp} XP</strong> acumulados, <strong>${concl} de ${total}</strong> missões completas. Data: ${new Date().toLocaleDateString("pt-BR")}.</p>
      <table class="qvl-table" style="text-align:left"><thead><tr><th>Missão</th><th>Etapas feitas</th><th>Acertos no Desafio (1ª tentativa)</th></tr></thead><tbody>${linhas}</tbody></table>
      <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-top:1rem">
        <button type="button" class="btn-action" id="rel-imprimir">🖨️ Imprimir ou salvar em PDF</button>
        <button type="button" class="btn-secondary" id="rel-zerar">Começar com turma nova (zera o progresso)</button>
      </div>`;
    body.after(d);
    $("#rel-imprimir").onclick = () => window.print();
    $("#rel-zerar").onclick = () => {
      if (confirm("Isso apaga os pontos e o progresso deste navegador. Continuar?")) {
        try { localStorage.removeItem("mathlab_sp_acao_v1"); } catch (_) {}
        location.reload();
      }
    };
  }
  function observarModal() {
    const body = $("#teacher-saeb-body");
    if (!body) return;
    new MutationObserver(() => { const old = $("#rel-extra"); if (old) old.remove(); relatorio(); }).observe(body, { childList: true });
  }

  document.addEventListener("mathlab:pronto", (ev) => {
    S = ev.detail.state; renderWS = ev.detail.renderWorkspace; renderSB = ev.detail.renderSidebar;
    iniciarModoAluno(); iniciarProjetor(); iniciarGuia(); observarAcertos(); observarModal();
    const c = $("#stage-content");
    if (c) new MutationObserver(() => decorar()).observe(c, { childList: true });
    decorar();
  });
})();
