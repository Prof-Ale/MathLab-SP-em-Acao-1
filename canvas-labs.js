// Motores Visuais Modulares em HTML5 Canvas (Missões 1 a 16 + Acessibilidade Daltonismo DUA)
window.CanvasLabs = (function () {
  const state = {
    colorblind: false,
    highContrast: false,
    // Estado por missão
    m1: { path: [{ c: 1, r: 1 }, { c: 4, r: 4 }], treasure: { c: 5, r: 5 }, clues: [{ c: 2, r: 2 }, { c: 4, r: 2 }, { c: 4, r: 5 }] },
    m2: { sides: 6, angleDeg: 120, showL: true },
    m3: { solidIdx: 2, showNet: false, cubesX: 3, cubesY: 2, cubesZ: 2 },
    m4: { scale: 2, baseW: 3, baseH: 2 },
    m5: { digits: [2, 4, 8, 5, 3, 0] },
    m6: { magic: [16, 3, 2, 13, 5, 10, 11, 8, 9, 6, 7, 12, 4, 15, 14, 1], selectedCell: 3 },
    m7: { shirts: 4, pants: 3, shoes: 2, dividend: 260, divisor: 42 },
    m8: { hours: 15, minutes: 45, addMinutes: 90 },
    m9: { cmVal: 14.5, milkL: 1.5, cocoML: 400 },
    m10: { scaleM: 2, cells: [[1,1],[2,1],[3,1],[1,2],[1,3],[2,3]] },
    m11: { fullSquares: 18, halfTriangles: 6, mode: "full", grid: {} },
    m12: { chartType: "bar", girls: [7, 6, 5], boys: [5, 9, 4] },
    m13: { selectedFig: 1, customNum: 3, customDen: 4, spinResult: null },
    m14: { cartTotal: 53.00, paid: 60.00, entry: 140, installments: 6, bikePrice: 680 },
    m15: { basePrice: 160, pct: 25 },
    m16: { start: 4, end: 5, subdivisions: 10, markerIdx: 7, seqStep: 15 }
  };

  // Utilitário de hachura acessível (DUA - Modo Daltonismo e Baixa Visão)
  function fillWithAccessiblePattern(ctx, x, y, w, h, color, patternType, labelText) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);

    if (state.colorblind || patternType) {
      ctx.strokeStyle = state.highContrast ? "#FFFFFF" : "rgba(10, 25, 47, 0.45)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const p = patternType || "stripes";
      if (p === "stripes") {
        for (let i = -h; i < w; i += 8) {
          ctx.moveTo(x + Math.max(0, i), y + Math.max(0, -i));
          ctx.lineTo(x + Math.min(w, i + h), y + Math.min(h, w - i));
        }
      } else if (p === "cross") {
        for (let i = 4; i < w; i += 8) {
          ctx.moveTo(x + i, y);
          ctx.lineTo(x + i, y + h);
        }
        for (let j = 4; j < h; j += 8) {
          ctx.moveTo(x, y + j);
          ctx.lineTo(x + w, y + j);
        }
      } else if (p === "dots") {
        ctx.fillStyle = state.highContrast ? "#FFFF00" : "rgba(10, 25, 47, 0.55)";
        for (let i = 5; i < w; i += 9) {
          for (let j = 5; j < h; j += 9) {
            ctx.fillRect(x + i, y + j, 2.5, 2.5);
          }
        }
      }
      ctx.stroke();
    }

    if (labelText && (state.colorblind || labelText.force)) {
      const txt = typeof labelText === "object" ? labelText.text : labelText;
      ctx.fillStyle = "#0A192F";
      ctx.font = "bold 11px 'Segoe UI', sans-serif";
      const tw = ctx.measureText(txt).width;
      ctx.fillStyle = "rgba(255,255,255,0.88)";
      ctx.fillRect(x + w / 2 - tw / 2 - 3, y + h / 2 - 8, tw + 6, 15);
      ctx.fillStyle = "#0A192F";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(txt, x + w / 2, y + h / 2);
    }
    ctx.restore();
  }

  function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  }

  // Renderizador principal de cada Missão (Etapa 1 e Etapa Final)
  function renderMissionCanvas(canvasId, missionId, isBossStage, controlsId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    // Fundo padrão
    ctx.fillStyle = state.highContrast ? "#000000" : "#FFFFFF";
    ctx.fillRect(0, 0, W, H);

    switch (missionId) {
      case 1:
        drawMission1(ctx, W, H, isBossStage, canvas);
        break;
      case 2:
        drawMission2(ctx, W, H, isBossStage);
        break;
      case 3:
        drawMission3(ctx, W, H, isBossStage);
        break;
      case 4:
        drawMission4(ctx, W, H, isBossStage);
        break;
      case 5:
        drawMission5(ctx, W, H, isBossStage);
        break;
      case 6:
        drawMission6(ctx, W, H, isBossStage);
        break;
      case 7:
        drawMission7(ctx, W, H, isBossStage);
        break;
      case 8:
        drawMission8(ctx, W, H, isBossStage);
        break;
      case 9:
        drawMission9(ctx, W, H, isBossStage);
        break;
      case 10:
        drawMission10(ctx, W, H, isBossStage, canvas);
        break;
      case 11:
        drawMission11(ctx, W, H, isBossStage);
        break;
      case 12:
        drawMission12(ctx, W, H, isBossStage);
        break;
      case 13:
        drawMission13(ctx, W, H, isBossStage);
        break;
      case 14:
        drawMission14(ctx, W, H, isBossStage);
        break;
      case 15:
        drawMission15(ctx, W, H, isBossStage);
        break;
      case 16:
        drawMission16(ctx, W, H, isBossStage);
        break;
    }

    if (controlsId) {
      buildControls(controlsId, missionId, isBossStage, canvasId);
    }
  }

  // MISSÃO 1: Malha quadriculada com coordenadas + Rosa dos Ventos
  function drawMission1(ctx, W, H, isBoss, canvas) {
    const cols = 6, rows = 6;
    const cell = 42;
    const ox = 65, oy = 35;
    const letters = ["A", "B", "C", "D", "E", "F"];

    ctx.font = "bold 13px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let c = 0; c < cols; c++) {
      ctx.fillStyle = state.highContrast ? "#FFFF00" : "#1E3A8A";
      ctx.fillText(letters[c], ox + c * cell + cell / 2, oy - 14);
      for (let r = 0; r < rows; r++) {
        if (c === 0) {
          ctx.fillText(String(r + 1), ox - 18, oy + r * cell + cell / 2);
        }
        const x = ox + c * cell;
        const y = oy + r * cell;
        ctx.strokeStyle = state.highContrast ? "#FFFFFF" : "#CBD5E1";
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cell, cell);
      }
    }

    // Biblioteca (B,2) e Parque (E,5)
    const bib = { c: 1, r: 1 };
    const parq = state.m1.path[1] || { c: 4, r: 4 };

    // Rota Leste + Norte
    ctx.strokeStyle = "#FF6B00";
    ctx.lineWidth = 4;
    ctx.setLineDash([6, 4]);
    ctx.beginPath();
    ctx.moveTo(ox + bib.c * cell + cell / 2, oy + bib.r * cell + cell / 2);
    ctx.lineTo(ox + parq.c * cell + cell / 2, oy + bib.r * cell + cell / 2);
    ctx.lineTo(ox + parq.c * cell + cell / 2, oy + parq.r * cell + cell / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    fillWithAccessiblePattern(ctx, ox + bib.c * cell + 4, oy + bib.r * cell + 4, cell - 8, cell - 8, "#2563EB", "stripes", { text: "BIB(B,2)", force: true });
    fillWithAccessiblePattern(ctx, ox + parq.c * cell + 4, oy + parq.r * cell + 4, cell - 8, cell - 8, "#16A34A", "dots", { text: `DEST(${letters[parq.c]},${parq.r + 1})`, force: true });

    // Rosa dos Ventos à direita
    const cx = 480, cy = 140, rad = 55;
    ctx.save();
    ctx.strokeStyle = state.highContrast ? "#FFFF00" : "#1E3A8A";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, cy - rad - 10); ctx.lineTo(cx, cy + rad + 10);
    ctx.moveTo(cx - rad - 10, cy); ctx.lineTo(cx + rad + 10, cy);
    ctx.stroke();
    ctx.fillStyle = "#FF6B00";
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillText("N (Norte)", cx, cy - rad - 22);
    ctx.fillText("S (Sul)", cx, cy + rad + 22);
    ctx.fillText("L (Leste)", cx + rad + 38, cy);
    ctx.fillText("O (Oeste)", cx - rad - 40, cy);

    const dx = parq.c - bib.c;
    const dy = parq.r - bib.r;
    ctx.fillStyle = state.highContrast ? "#FFFFFF" : "#0A192F";
    ctx.font = "bold 13px 'Segoe UI', sans-serif";
    ctx.fillText(`Deslocamento: ${dx >= 0 ? dx + " Leste" : Math.abs(dx) + " Oeste"} | ${dy >= 0 ? dy + " Sul" : Math.abs(dy) + " Norte"}`, cx, 255);
    ctx.fillText(`Distância total na malha: ${Math.abs(dx) + Math.abs(dy)} quadras`, cx, 278);
    ctx.restore();

    if (!canvas._m1Bound) {
      canvas._m1Bound = true;
      canvas.addEventListener("click", function (ev) {
        const rect = canvas.getBoundingClientRect();
        const sx = (ev.clientX - rect.left) * (canvas.width / rect.width);
        const sy = (ev.clientY - rect.top) * (canvas.height / rect.height);
        const c = Math.floor((sx - ox) / cell);
        const r = Math.floor((sy - oy) / cell);
        if (c >= 0 && c < cols && r >= 0 && r < rows) {
          state.m1.path[1] = { c, r };
          renderMissionCanvas(canvas.id, 1, isBoss);
        }
      });
    }
  }

  // MISSÃO 2: Classificador de Polígonos e Régua L (Ângulos)
  function drawMission2(ctx, W, H) {
    const names = { 3: "Triângulo", 4: "Quadrilátero", 5: "Pentágono", 6: "Hexágono", 8: "Octógono", 10: "Decágono" };
    const n = state.m2.sides;
    const cx = 185, cy = 155, r = 85;

    ctx.save();
    ctx.beginPath();
    for (let i = 0; i < n; i++) {
      const ang = (i * 2 * Math.PI) / n - Math.PI / 2;
      const px = cx + r * Math.cos(ang);
      const py = cy + r * Math.sin(ang);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = "rgba(37, 99, 235, 0.18)";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#1E3A8A";
    ctx.stroke();

    const intAngle = Math.round(((n - 2) * 180) / n);
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${names[n] || n + "-gono"} (${n} lados)`, cx, 268);
    ctx.fillText(`Ângulo interno regular: ${intAngle}°`, cx, 290);

    // Transferidor Régua L à direita
    const lx = 430, ly = 210, arm = 105;
    const deg = state.m2.angleDeg;
    const rad = (deg * Math.PI) / 180;

    if (state.m2.showL) {
      // Régua L de 90° em tracejado laranja
      ctx.strokeStyle = "#FF6B00";
      ctx.lineWidth = 4;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(lx, ly - arm);
      ctx.lineTo(lx, ly);
      ctx.lineTo(lx + arm, ly);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeRect(lx, ly - 18, 18, 18);
      ctx.fillStyle = "#FF6B00";
      ctx.font = "bold 12px 'Segoe UI', sans-serif";
      ctx.fillText("Régua L (90°)", lx + 42, ly - arm + 10);
    }

    // Braço do ângulo testado
    ctx.strokeStyle = "#16A34A";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(lx + arm, ly);
    ctx.lineTo(lx, ly);
    ctx.lineTo(lx + arm * Math.cos(-rad), ly + arm * Math.sin(-rad));
    ctx.stroke();

    const tipo = deg < 90 ? "AGUDO (< 90°)" : deg === 90 ? "RETO (= 90°)" : "OBTUSO (> 90°)";
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.fillText(`Ângulo: ${deg}° -> ${tipo}`, lx + 40, 268);
    ctx.restore();
  }

  // MISSÃO 3: Sólidos Geométricos, Planificação e Volume com Cubos
  function drawMission3(ctx, W, H) {
    const solids = [
      { name: "Cubo (Hexaedro)", type: "Poliedro (Prisma)", F: 6, V: 8, A: 12 },
      { name: "Pirâmide Quadrangular", type: "Poliedro (Pirâmide)", F: 5, V: 5, A: 8 },
      { name: "Prisma Hexagonal", type: "Poliedro (Prisma)", F: 8, V: 12, A: 18 },
      { name: "Cilindro", type: "Corpo Redondo", F: "2 bases circulares", V: 0, A: 0 }
    ];
    const s = solids[state.m3.solidIdx % solids.length];

    ctx.save();
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#1E3A8A";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${s.name} — ${s.type}`, 175, 32);
    ctx.font = "bold 13px 'Segoe UI', sans-serif";
    ctx.fillStyle = state.highContrast ? "#FFFFFF" : "#334155";
    ctx.fillText(`Faces (F): ${s.F} | Vértices (V): ${s.V} | Arestas (A): ${s.A}`, 175, 54);

    // Desenho do sólido ou planificação à esquerda
    const cx = 175, cy = 165;
    ctx.strokeStyle = "#1E3A8A";
    ctx.fillStyle = "rgba(255, 107, 0, 0.18)";
    ctx.lineWidth = 2.5;
    if (state.m3.solidIdx === 0) {
      ctx.fillRect(cx - 45, cy - 35, 75, 75);
      ctx.strokeRect(cx - 45, cy - 35, 75, 75);
      ctx.strokeRect(cx - 20, cy - 60, 75, 75);
      ctx.beginPath();
      ctx.moveTo(cx - 45, cy - 35); ctx.lineTo(cx - 20, cy - 60);
      ctx.moveTo(cx + 30, cy - 35); ctx.lineTo(cx + 55, cy - 60);
      ctx.moveTo(cx - 45, cy + 40); ctx.lineTo(cx - 20, cy + 15);
      ctx.moveTo(cx + 30, cy + 40); ctx.lineTo(cx + 55, cy + 15);
      ctx.stroke();
    } else if (state.m3.solidIdx === 1) {
      ctx.beginPath();
      ctx.moveTo(cx, cy - 65);
      ctx.lineTo(cx - 60, cy + 35);
      ctx.lineTo(cx + 20, cy + 50);
      ctx.closePath();
      ctx.fill(); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx, cy - 65);
      ctx.lineTo(cx + 60, cy + 20);
      ctx.lineTo(cx + 20, cy + 50);
      ctx.stroke();
    } else if (state.m3.solidIdx === 2) {
      // Prisma hexagonal
      for (let dy of [-35, 35]) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const a = (i * Math.PI) / 3;
          const px = cx + 55 * Math.cos(a);
          const py = cy + dy + 22 * Math.sin(a);
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill(); ctx.stroke();
      }
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        ctx.beginPath();
        ctx.moveTo(cx + 55 * Math.cos(a), cy - 35 + 22 * Math.sin(a));
        ctx.lineTo(cx + 55 * Math.cos(a), cy + 35 + 22 * Math.sin(a));
        ctx.stroke();
      }
    } else {
      // Cilindro
      ctx.beginPath();
      ctx.ellipse(cx, cy - 40, 50, 18, 0, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(cx, cy + 40, 50, 18, 0, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(cx - 50, cy - 40); ctx.lineTo(cx - 50, cy + 40);
      ctx.moveTo(cx + 50, cy - 40); ctx.lineTo(cx + 50, cy + 40);
      ctx.stroke();
    }

    // Construtor de Volume com Cubos à direita
    const { cubesX, cubesY, cubesZ } = state.m3;
    const vol = cubesX * cubesY * cubesZ;
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillText(`Empilhamento de Cubos: ${cubesX} × ${cubesY} × ${cubesZ}`, 495, 32);
    ctx.fillStyle = "#FF6B00";
    ctx.fillText(`Volume Total = ${vol} cubinhos (${vol} cm³)`, 495, 54);

    const bx = 435, by = 195, sz = 24;
    for (let z = 0; z < cubesZ; z++) {
      for (let y = 0; y < cubesY; y++) {
        for (let x = 0; x < cubesX; x++) {
          const px = bx + (x - y) * sz * 0.85;
          const py = by + (x + y) * sz * 0.42 - z * sz;
          ctx.fillStyle = "#3B82F6";
          ctx.strokeStyle = "#0A192F";
          ctx.lineWidth = 1.2;
          ctx.fillRect(px, py, sz, sz);
          ctx.strokeRect(px, py, sz, sz);
        }
      }
    }
    ctx.restore();
  }

  // MISSÃO 4: Ampliação e Redução em Malha Dupla
  function drawMission4(ctx, W, H) {
    const k = state.m4.scale;
    const w1 = state.m4.baseW, h1 = state.m4.baseH;
    const w2 = w1 * k, h2 = h1 * k;
    const cell = 22;

    ctx.save();
    // Malha 22x12
    for (let c = 0; c < 28; c++) {
      for (let r = 0; r < 12; r++) {
        ctx.strokeStyle = "#E2E8F0";
        ctx.strokeRect(25 + c * cell, 30 + r * cell, cell, cell);
      }
    }

    // Figura Original
    fillWithAccessiblePattern(ctx, 25 + cell, 30 + cell * 2, w1 * cell, h1 * cell, "rgba(37,99,235,0.45)", "stripes", { text: `${w1}×${h1}`, force: true });
    ctx.strokeStyle = "#1E3A8A";
    ctx.lineWidth = 3;
    ctx.strokeRect(25 + cell, 30 + cell * 2, w1 * cell, h1 * cell);

    // Figura Ampliada
    const ox2 = 25 + cell * 9;
    fillWithAccessiblePattern(ctx, ox2, 30 + cell, w2 * cell, h2 * cell, "rgba(255,107,0,0.45)", "cross", { text: `${w2}×${h2} (${k}×)`, force: true });
    ctx.strokeStyle = "#FF6B00";
    ctx.lineWidth = 3;
    ctx.strokeRect(ox2, 30 + cell, w2 * cell, h2 * cell);

    const p1 = 2 * (w1 + h1), a1 = w1 * h1;
    const p2 = 2 * (w2 + h2), a2 = w2 * h2;
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 13px 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`Original (${w1}×${h1}): Perímetro = ${p1} u | Área = ${a1} u²`, 30, 285);
    ctx.fillStyle = "#FF6B00";
    ctx.fillText(`Ampliada (Fator ${k}× -> ${w2}×${h2}): Perímetro = ${p2} u (×${k}) | Área = ${a2} u² (×${k * k})`, 30, 306);
    ctx.restore();
  }

  // MISSÃO 5: Quadro de Ordens e Classes até a 6ª Ordem (IBGE)
  function drawMission5(ctx, W, H) {
    const orders = [
      { ord: "6ª Ordem", name: "Cent. Milhar (CM)", mult: 100000, cls: "Classe dos Milhares" },
      { ord: "5ª Ordem", name: "Dez. Milhar (DM)", mult: 10000, cls: "Classe dos Milhares" },
      { ord: "4ª Ordem", name: "Unid. Milhar (UM)", mult: 1000, cls: "Classe dos Milhares" },
      { ord: "3ª Ordem", name: "Centena (C)", mult: 100, cls: "Classe das Unidades Simples" },
      { ord: "2ª Ordem", name: "Dezena (D)", mult: 10, cls: "Classe das Unidades Simples" },
      { ord: "1ª Ordem", name: "Unidade (U)", mult: 1, cls: "Classe das Unidades Simples" }
    ];
    const d = state.m5.digits;
    const colW = 102, ox = 28, oy = 40;

    ctx.save();
    ctx.textAlign = "center";
    // Cabeçalhos das Classes
    ctx.fillStyle = "#1E3A8A";
    ctx.fillRect(ox, oy, colW * 3 - 4, 28);
    ctx.fillStyle = "#FF6B00";
    ctx.fillRect(ox + colW * 3, oy, colW * 3 - 4, 28);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 13px 'Segoe UI', sans-serif";
    ctx.fillText("2ª CLASSE: MILHARES", ox + colW * 1.5, oy + 15);
    ctx.fillText("1ª CLASSE: UNIDADES SIMPLES", ox + colW * 4.5, oy + 15);

    const parts = [];
    let total = 0;
    for (let i = 0; i < 6; i++) {
      const x = ox + i * colW;
      ctx.strokeStyle = "#CBD5E1";
      ctx.fillStyle = "#F8FAFC";
      ctx.fillRect(x, oy + 32, colW - 4, 135);
      ctx.strokeRect(x, oy + 32, colW - 4, 135);

      ctx.fillStyle = "#475569";
      ctx.font = "bold 11px 'Segoe UI', sans-serif";
      ctx.fillText(orders[i].ord, x + colW / 2 - 2, oy + 48);
      ctx.fillText(orders[i].name, x + colW / 2 - 2, oy + 65);

      // Algarismo
      ctx.fillStyle = "#0A192F";
      ctx.font = "bold 34px 'Segoe UI', sans-serif";
      ctx.fillText(String(d[i]), x + colW / 2 - 2, oy + 108);

      const val = d[i] * orders[i].mult;
      total += val;
      if (d[i] > 0) parts.push(`${d[i]}×${orders[i].mult.toLocaleString("pt-BR")}`);
      ctx.fillStyle = "#FF6B00";
      ctx.font = "bold 12px 'Segoe UI', sans-serif";
      ctx.fillText(`Vale: ${val.toLocaleString("pt-BR")}`, x + colW / 2 - 2, oy + 150);
    }

    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.fillText(`Número Formado: ${total.toLocaleString("pt-BR")}`, W / 2, 245);
    ctx.font = "bold 13px 'Segoe UI', sans-serif";
    ctx.fillStyle = "#1E3A8A";
    ctx.fillText(`Decomposição Polinomial: ${parts.join(" + ") || "0"}`, W / 2, 275);
    ctx.restore();
  }

  // MISSÃO 6: Quadrado Mágico 4×4 (Soma 34) e Operação Inversa
  function drawMission6(ctx, W, H) {
    const m = state.m6.magic;
    const cell = 52, ox = 75, oy = 40;
    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let r = 0; r < 4; r++) {
      let rowSum = 0;
      for (let c = 0; c < 4; c++) {
        const idx = r * 4 + c;
        const val = m[idx];
        rowSum += val;
        const x = ox + c * cell, y = oy + r * cell;
        ctx.fillStyle = idx === state.m6.selectedCell ? "#FFF7ED" : "#F8FAFC";
        ctx.fillRect(x, y, cell, cell);
        ctx.strokeStyle = idx === state.m6.selectedCell ? "#FF6B00" : "#1E3A8A";
        ctx.lineWidth = idx === state.m6.selectedCell ? 3 : 1.5;
        ctx.strokeRect(x, y, cell, cell);

        ctx.fillStyle = "#0A192F";
        ctx.font = "bold 18px 'Segoe UI', sans-serif";
        ctx.fillText(String(val), x + cell / 2, y + cell / 2);
      }
      // Soma da linha
      ctx.fillStyle = rowSum === 34 ? "#16A34A" : "#DC2626";
      ctx.font = "bold 13px 'Segoe UI', sans-serif";
      ctx.fillText(`= ${rowSum}`, ox + 4 * cell + 30, oy + r * cell + cell / 2);
    }

    // Explicação à direita
    ctx.textAlign = "left";
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.fillText("Quadrado Mágico 4×4 (Soma Mágica = 34)", 365, 65);
    ctx.font = "13px 'Segoe UI', sans-serif";
    ctx.fillText("• Todas as linhas, colunas e diagonais", 365, 95);
    ctx.fillText("  somam exatamente 34!", 365, 115);
    ctx.fillText("• 1ª Linha: 16 + 3 + 2 + ★ = 34", 365, 150);
    ctx.fillStyle = "#FF6B00";
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillText("• Operação Inversa: ★ = 34 − 21 = 13!", 365, 178);
    ctx.restore();
  }

  // MISSÃO 7: Árvore Combinatória e Verificador de Prova Real
  function drawMission7(ctx, W, H) {
    const { shirts, pants, shoes, dividend, divisor } = state.m7;
    const totalComb = shirts * pants * shoes;
    const quo = Math.floor(dividend / divisor);
    const rem = dividend % divisor;

    ctx.save();
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#1E3A8A";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`Árvore de Possibilidades: ${shirts} Camisetas × ${pants} Calças × ${shoes} Tênis = ${totalComb} looks`, W / 2, 32);

    // Desenho esquemático da árvore
    const y1 = 75, y2 = 140, y3 = 205;
    for (let i = 0; i < shirts; i++) {
      const x1 = 90 + (i * 480) / Math.max(1, shirts - 1);
      ctx.fillStyle = "#2563EB";
      ctx.beginPath(); ctx.arc(x1, y1, 12, 0, Math.PI * 2); ctx.fill();
      for (let j = 0; j < pants; j++) {
        const x2 = x1 - 35 + (j * 70) / Math.max(1, pants - 1);
        ctx.strokeStyle = "#94A3B8";
        ctx.beginPath(); ctx.moveTo(x1, y1 + 12); ctx.lineTo(x2, y2 - 8); ctx.stroke();
        ctx.fillStyle = "#FF6B00";
        ctx.beginPath(); ctx.arc(x2, y2, 8, 0, Math.PI * 2); ctx.fill();
      }
    }

    // Caixa Prova Real da Divisão
    ctx.fillStyle = "#FFF7ED";
    ctx.strokeStyle = "#FF6B00";
    ctx.lineWidth = 2;
    ctx.fillRect(60, 220, W - 120, 75);
    ctx.strokeRect(60, 220, W - 120, 75);
    ctx.fillStyle = "#0A192F";
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillText(`Divisão: ${dividend} ÷ ${divisor} -> Quociente = ${quo} e Resto = ${rem}`, W / 2, 245);
    ctx.fillStyle = "#16A34A";
    ctx.fillText(`Prova Real (Operação Inversa): ${divisor} × ${quo} + ${rem} = ${divisor * quo + rem}`, W / 2, 272);
    ctx.restore();
  }

  // MISSÃO 8: Relógio Analógico Sincronizado ao Digital 24h + Calculadora Base 60
  function drawMission8(ctx, W, H) {
    const { hours, minutes, addMinutes } = state.m8;
    const totalMin = hours * 60 + minutes + addMinutes;
    const endH = Math.floor(totalMin / 60) % 24;
    const endM = totalMin % 60;

    ctx.save();
    const cx = 165, cy = 155, r = 95;
    ctx.strokeStyle = "#1E3A8A";
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();

    ctx.font = "bold 13px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    for (let n = 1; n <= 12; n++) {
      const ang = (n * Math.PI) / 6 - Math.PI / 2;
      ctx.fillText(String(n), cx + (r - 18) * Math.cos(ang), cy + (r - 18) * Math.sin(ang));
    }

    // Ponteiro das horas proporcional aos minutos
    const hAngle = (((hours % 12) + minutes / 60) * Math.PI) / 6 - Math.PI / 2;
    const mAngle = (minutes * Math.PI) / 30 - Math.PI / 2;

    ctx.strokeStyle = "#1E3A8A";
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + 52 * Math.cos(hAngle), cy + 52 * Math.sin(hAngle)); ctx.stroke();

    ctx.strokeStyle = "#FF6B00";
    ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + 74 * Math.cos(mAngle), cy + 74 * Math.sin(mAngle)); ctx.stroke();

    // Visor Digital 24h e Duração à direita
    const pad = (v) => String(v).padStart(2, "0");
    ctx.fillStyle = "#0A192F";
    ctx.fillRect(320, 55, 290, 70);
    ctx.fillStyle = "#00FF66";
    ctx.font = "bold 32px Consolas, monospace";
    ctx.fillText(`${pad(hours)}:${pad(minutes)} (24h)`, 465, 92);

    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillText(`+ Duração: ${Math.floor(addMinutes / 60)}h ${addMinutes % 60}min (${addMinutes} min)`, 465, 165);
    ctx.fillStyle = "#FF6B00";
    ctx.font = "bold 17px 'Segoe UI', sans-serif";
    ctx.fillText(`Horário Final: ${pad(endH)}h${pad(endM)}min`, 465, 200);
    ctx.fillStyle = state.highContrast ? "#FFFFFF" : "#475569";
    ctx.font = "bold 13px 'Segoe UI', sans-serif";
    ctx.fillText(`Em segundos: ${addMinutes} min × 60 = ${(addMinutes * 60).toLocaleString("pt-BR")} s`, 465, 235);
    ctx.restore();
  }

  // MISSÃO 9: Bancada de Medidas (Régua cm/mm e Receita de Canjica L/mL)
  function drawMission9(ctx, W, H) {
    const { cmVal, milkL, cocoML } = state.m9;
    ctx.save();
    // Régua escolar milimetrada
    const rx = 40, ry = 55, rw = 560, rh = 55;
    ctx.fillStyle = "#FEF3C7";
    ctx.strokeStyle = "#D97706";
    ctx.lineWidth = 2;
    ctx.fillRect(rx, ry, rw, rh);
    ctx.strokeRect(rx, ry, rw, rh);

    const pxPerCm = 32;
    ctx.strokeStyle = "#0A192F";
    ctx.fillStyle = "#0A192F";
    ctx.font = "bold 11px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    for (let mm = 0; mm <= 160; mm++) {
      const x = rx + 15 + (mm * pxPerCm) / 10;
      const hTick = mm % 10 === 0 ? 22 : mm % 5 === 0 ? 15 : 9;
      ctx.beginPath();
      ctx.moveTo(x, ry);
      ctx.lineTo(x, ry + hTick);
      ctx.stroke();
      if (mm % 10 === 0) {
        ctx.fillText(String(mm / 10), x, ry + 36);
      }
    }

    // Lápis medido acima da régua
    const pencilW = cmVal * pxPerCm;
    fillWithAccessiblePattern(ctx, rx + 15, ry - 26, pencilW, 18, "#2563EB", "stripes", { text: `${cmVal} cm = ${Math.round(cmVal * 10)} mm`, force: true });

    // Recipientes da Receita de Canjica
    const totalML = Math.round(milkL * 1000) + cocoML;
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.fillText(`Conversor da Receita de Canjica Nordestina:`, W / 2, 160);
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillStyle = "#1E3A8A";
    ctx.fillText(`Leite: ${milkL} L (${milkL * 1000} mL) + Leite de Coco: ${cocoML} mL = Total: ${totalML} mL (${(totalML / 1000).toFixed(2)} L)`, W / 2, 195);
    ctx.fillStyle = "#FF6B00";
    ctx.fillText(`Equivalências: 1 m = 100 cm = 1.000 mm | 1 kg = 1.000 g | 1 L = 1.000 mL`, W / 2, 235);
    ctx.restore();
  }

  // MISSÃO 10: Perímetro em Malha com Escala e Geoplano
  function drawMission10(ctx, W, H, isBoss, canvas) {
    const cell = 34, cols = 10, rows = 6, ox = 55, oy = 45;
    const set = new Set(state.m10.cells.map(([c, r]) => `${c},${r}`));

    ctx.save();
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        const x = ox + c * cell, y = oy + r * cell;
        const active = set.has(`${c},${r}`);
        if (active) {
          fillWithAccessiblePattern(ctx, x, y, cell, cell, "rgba(255, 107, 0, 0.35)", "stripes");
        }
        ctx.strokeStyle = "#CBD5E1";
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cell, cell);
        // Pino do geoplano
        ctx.fillStyle = "#1E3A8A";
        ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2); ctx.fill();
      }
    }

    // Contabiliza segmentos externos (perímetro)
    let perimUnits = 0;
    ctx.strokeStyle = "#FF6B00";
    ctx.lineWidth = 4;
    state.m10.cells.forEach(([c, r]) => {
      const x = ox + c * cell, y = oy + r * cell;
      const dirs = [
        [0, -1, x, y, x + cell, y],
        [0, 1, x, y + cell, x + cell, y + cell],
        [-1, 0, x, y, x, y + cell],
        [1, 0, x + cell, y, x + cell, y + cell]
      ];
      dirs.forEach(([dc, dr, x1, y1, x2, y2]) => {
        if (!set.has(`${c + dc},${r + dr}`)) {
          perimUnits++;
          ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        }
      });
    });

    const scaleM = state.m10.scaleM;
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(`Contorno na malha:`, 420, 85);
    ctx.fillStyle = "#FF6B00";
    ctx.font = "bold 18px 'Segoe UI', sans-serif";
    ctx.fillText(`${perimUnits} lados de quadradinho`, 420, 112);
    ctx.fillStyle = state.highContrast ? "#FFFFFF" : "#1E3A8A";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.fillText(`Escala: 1 lado = ${scaleM} m`, 420, 150);
    ctx.fillText(`Perímetro Real = ${perimUnits * scaleM} metros`, 420, 178);
    ctx.font = "12px 'Segoe UI', sans-serif";
    ctx.fillText(`(Clique na malha para ativar/desativar células)`, 420, 215);
    ctx.restore();

    if (!canvas._m10Bound) {
      canvas._m10Bound = true;
      canvas.addEventListener("click", function (ev) {
        const rect = canvas.getBoundingClientRect();
        const sx = (ev.clientX - rect.left) * (canvas.width / rect.width);
        const sy = (ev.clientY - rect.top) * (canvas.height / rect.height);
        const c = Math.floor((sx - ox) / cell);
        const r = Math.floor((sy - oy) / cell);
        if (c >= 0 && c < cols && r >= 0 && r < rows) {
          const idx = state.m10.cells.findIndex(([cc, rr]) => cc === c && rr === r);
          if (idx >= 0 && state.m10.cells.length > 1) state.m10.cells.splice(idx, 1);
          else if (idx < 0) state.m10.cells.push([c, r]);
          renderMissionCanvas(canvas.id, 10, isBoss);
        }
      });
    }
  }

  // MISSÃO 11: Área na Malha (Quadrados Inteiros e Triângulos de Meia Unidade - Castelo/Piscina)
  function drawMission11(ctx, W, H) {
    const { fullSquares, halfTriangles } = state.m11;
    const totalArea = fullSquares + halfTriangles * 0.5;
    const cell = 32, ox = 50, oy = 45;

    ctx.save();
    for (let c = 0; c < 10; c++) {
      for (let r = 0; r < 6; r++) {
        ctx.strokeStyle = "#CBD5E1";
        ctx.strokeRect(ox + c * cell, oy + r * cell, cell, cell);
      }
    }

    // Desenha quadrados inteiros com hachura listrada
    let drawnFull = 0;
    for (let r = 2; r < 5; r++) {
      for (let c = 1; c < 7; c++) {
        if (drawnFull < fullSquares) {
          fillWithAccessiblePattern(ctx, ox + c * cell, oy + r * cell, cell, cell, "rgba(37, 99, 235, 0.5)", "stripes", { text: "1", force: true });
          drawnFull++;
        }
      }
    }

    // Desenha triângulos de meia unidade (0,5) no topo (telhado do castelo)
    for (let i = 0; i < halfTriangles; i++) {
      const c = 1 + (i % 6);
      const r = 1 - Math.floor(i / 6);
      const x = ox + c * cell, y = oy + Math.max(0, r) * cell;
      ctx.fillStyle = "rgba(255, 107, 0, 0.75)";
      ctx.beginPath();
      ctx.moveTo(x, y + cell);
      ctx.lineTo(x + cell, y + cell);
      ctx.lineTo(x + cell / 2, y);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "#0A192F";
      ctx.stroke();
      ctx.fillStyle = "#0A192F";
      ctx.font = "bold 10px 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("0,5", x + cell / 2, y + cell - 6);
    }

    ctx.textAlign = "left";
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.fillText("Cálculo de Área com Texturas DUA:", 395, 75);
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillStyle = "#1E3A8A";
    ctx.fillText(`• Quadrados inteiros (1 u²): ${fullSquares}`, 395, 110);
    ctx.fillStyle = "#FF6B00";
    ctx.fillText(`• Triângulos de metade (0,5 u²): ${halfTriangles} (= ${halfTriangles * 0.5} u²)`, 395, 140);
    ctx.fillStyle = "#16A34A";
    ctx.font = "bold 18px 'Segoe UI', sans-serif";
    ctx.fillText(`Área Total = ${totalArea} u² (ou m²)`, 395, 180);
    ctx.restore();
  }

  // MISSÃO 12: Estúdio de Gráficos (Colunas Duplas, Linhas e Setores) com Padrões Acessíveis
  function drawMission12(ctx, W, H) {
    const sports = ["Vôlei", "Futsal", "Basquete"];
    const g = state.m12.girls;
    const b = state.m12.boys;
    const totals = sports.map((_, i) => g[i] + b[i]);

    ctx.save();
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Pesquisa Amostral de Esportes do 6º Ano (Meninas × Meninos)", W / 2, 26);

    const ox = 80, oy = 245;
    ctx.strokeStyle = "#0A192F";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ox, 50); ctx.lineTo(ox, oy); ctx.lineTo(580, oy);
    ctx.stroke();

    for (let i = 0; i < 3; i++) {
      const x = 140 + i * 155;
      const hG = g[i] * 14;
      const hB = b[i] * 14;
      fillWithAccessiblePattern(ctx, x - 34, oy - hG, 32, hG, "#EC4899", "stripes", { text: `M:${g[i]}`, force: true });
      fillWithAccessiblePattern(ctx, x + 2, oy - hB, 32, hB, "#2563EB", "dots", { text: `H:${b[i]}`, force: true });

      ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
      ctx.font = "bold 13px 'Segoe UI', sans-serif";
      ctx.fillText(`${sports[i]} (Total: ${totals[i]})`, x, oy + 22);
    }

    const sumAll = totals.reduce((a, v) => a + v, 0);
    ctx.fillStyle = "#FF6B00";
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillText(`Total da Turma: ${sumAll} alunos | Diferença (Mais votado − Menos votado): ${Math.max(...totals) - Math.min(...totals)} votos`, W / 2, 295);
    ctx.restore();
  }

  // MISSÃO 13: Questão da Helena (4 Figuras Subdivididas com Hachuras DUA) + Tríade Racional
  function drawMission13(ctx, W, H, isBoss) {
    ctx.save();
    if (!isBoss) {
      // Etapa 1: As 4 figuras do problema da Helena (Livro p. 107)
      const figs = [
        { label: "Figura A", num: 2, den: 4, pct: "50%", dec: "0,5", pat: "stripes", color: "#3B82F6" },
        { label: "Figura B", num: 2, den: 5, pct: "40%", dec: "0,4", pat: "dots", color: "#16A34A" },
        { label: "Figura C", num: 5, den: 8, pct: "62,5%", dec: "0,625", pat: "cross", color: "#F59E0B" },
        { label: "Figura D", num: 3, den: 4, pct: "75%", dec: "0,75", pat: "stripes", color: "#8B5CF6" }
      ];

      ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
      ctx.font = "bold 14px 'Segoe UI', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Problema da Helena: Qual figura representa exatamente 40% (2/5 = 0,4) da área total?", W / 2, 25);

      figs.forEach((f, idx) => {
        const x = 28 + idx * 155;
        const y = 48;
        const w = 138, h = 155;
        const isSel = state.m13.selectedFig === idx;

        ctx.strokeStyle = isSel ? "#FF6B00" : "#CBD5E1";
        ctx.lineWidth = isSel ? 3.5 : 1.5;
        ctx.strokeRect(x, y, w, h);

        ctx.fillStyle = state.highContrast ? "#FFFF00" : "#1E3A8A";
        ctx.font = "bold 13px 'Segoe UI', sans-serif";
        ctx.fillText(`${f.label} (${f.num}/${f.den})`, x + w / 2, y + 18);

        // Barra dividida em f.den partes iguais com hachura e rótulo numérico
        const bx = x + 12, by = y + 32, bw = w - 24, bh = 68;
        const partW = bw / f.den;
        for (let p = 0; p < f.den; p++) {
          if (p < f.num) {
            fillWithAccessiblePattern(ctx, bx + p * partW, by, partW, bh, f.color, f.pat, { text: String(p + 1), force: true });
          } else {
            ctx.fillStyle = "#F1F5F9";
            ctx.fillRect(bx + p * partW, by, partW, bh);
          }
          ctx.strokeStyle = "#0A192F";
          ctx.lineWidth = 1.2;
          ctx.strokeRect(bx + p * partW, by, partW, bh);
        }

        const g = gcd(f.num, f.den);
        ctx.fillStyle = state.highContrast ? "#FFFFFF" : "#0A192F";
        ctx.font = "bold 12px 'Segoe UI', sans-serif";
        ctx.fillText(`Irredutível: ${f.num / g}/${f.den / g}`, x + w / 2, y + 118);
        ctx.fillStyle = f.pct === "40%" ? "#16A34A" : "#475569";
        ctx.fillText(`${f.dec} = ${f.pct}`, x + w / 2, y + 138);
      });

      ctx.fillStyle = "#FF6B00";
      ctx.font = "bold 13px 'Segoe UI', sans-serif";
      ctx.fillText("Dica DUA: Compare com a metade (50%)! 40% é menor que a metade -> Apenas a Figura B (2/5) tem menos da metade pintada!", W / 2, 240);
      ctx.fillStyle = state.highContrast ? "#FFFF00" : "#1E3A8A";
      ctx.fillText("Fique ligado: 6/8 simplificado por 2 = 3/4 (forma irredutível) = 0,75 = 75%", W / 2, 275);
    } else {
      // Etapa Final: Mosaico Fracionário Personalizável + Roleta Equiprovável
      const num = state.m13.customNum;
      const den = state.m13.customDen;
      const g = gcd(num, den);
      const dec = (num / den).toFixed(3).replace(/\.?0+$/, "");
      const pct = ((num / den) * 100).toFixed(1).replace(/\.0$/, "") + "%";

      const cx = 170, cy = 155, r = 90;
      for (let i = 0; i < den; i++) {
        const a1 = (i * 2 * Math.PI) / den - Math.PI / 2;
        const a2 = ((i + 1) * 2 * Math.PI) / den - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, r, a1, a2);
        ctx.closePath();
        ctx.fillStyle = i < num ? "#FF6B00" : "#E2E8F0";
        ctx.fill();
        ctx.strokeStyle = "#0A192F";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Rótulo direto acessível em cada setor
        const mid = (a1 + a2) / 2;
        ctx.fillStyle = i < num ? "#FFFFFF" : "#0A192F";
        ctx.font = "bold 11px 'Segoe UI', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(i < num ? `★${i + 1}` : `${i + 1}`, cx + r * 0.62 * Math.cos(mid), cy + r * 0.62 * Math.sin(mid));
      }

      // Card da Tríade Racional à direita
      ctx.textAlign = "left";
      ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
      ctx.font = "bold 16px 'Segoe UI', sans-serif";
      ctx.fillText("Tríade Racional & Probabilidade (5E2.3):", 325, 65);
      ctx.font = "bold 15px 'Segoe UI', sans-serif";
      ctx.fillStyle = "#1E3A8A";
      ctx.fillText(`• Fração Original: ${num}/${den}`, 325, 105);
      ctx.fillStyle = "#16A34A";
      ctx.fillText(`• Forma Irredutível (÷${g}): ${num / g}/${den / g}`, 325, 138);
      ctx.fillStyle = "#FF6B00";
      ctx.fillText(`• Número Decimal: ${dec.replace(".", ",")}`, 325, 171);
      ctx.fillStyle = "#9333EA";
      ctx.fillText(`• Porcentagem / Chance: ${pct.replace(".", ",")}`, 325, 204);
      if (state.m13.spinResult !== null) {
        ctx.fillStyle = "#0A192F";
        ctx.fillText(`🎯 Sorteio da Roleta: Setor ${state.m13.spinResult}`, 325, 245);
      }
    }
    ctx.restore();
  }

  // MISSÃO 14: PDV e Carteira Digital MathLab (Cédulas, Moedas, Troco e Parcelamento)
  function drawMission14(ctx, W, H) {
    const { cartTotal, paid, bikePrice, entry, installments } = state.m14;
    const change = Math.max(0, paid - cartTotal);
    const balance = bikePrice - entry;
    const parcelVal = balance / installments;

    ctx.save();
    // Painel esquerdo: Caixa Registradora e Moedas
    ctx.fillStyle = "#0A192F";
    ctx.fillRect(25, 25, 295, 255);
    ctx.fillStyle = "#FF6B00";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("PDV - Caixa Registradora MathLab", 40, 52);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 14px Consolas, monospace";
    ctx.fillText(`Total da Compra: R$ ${cartTotal.toFixed(2).replace(".", ",")}`, 40, 88);
    ctx.fillText(`Valor Recebido : R$ ${paid.toFixed(2).replace(".", ",")}`, 40, 115);
    ctx.fillStyle = "#00FF66";
    ctx.font = "bold 16px Consolas, monospace";
    ctx.fillText(`TROCO A DEVOLVER: R$ ${change.toFixed(2).replace(".", ",")}`, 40, 148);

    ctx.fillStyle = "#FDBA74";
    ctx.font = "12px 'Segoe UI', sans-serif";
    ctx.fillText(`Em moedas de R$ 0,25: ${Math.round(change * 4)} moedas`, 40, 182);
    ctx.fillText(`Em moedas de R$ 0,50: ${Math.round(change * 2)} moedas`, 40, 204);
    ctx.fillText(`4×R$0,25 = R$1,00 | 20×R$0,05 = R$1,00`, 40, 232);

    // Painel direito: Simulador de Prestações sem Juros (N6.16)
    ctx.fillStyle = "#FFF7ED";
    ctx.strokeStyle = "#FF6B00";
    ctx.lineWidth = 2;
    ctx.fillRect(340, 25, 305, 255);
    ctx.strokeRect(340, 25, 305, 255);

    ctx.fillStyle = "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.fillText("Simulador de Compra a Prazo (N6.16)", 355, 52);
    ctx.font = "13.5px 'Segoe UI', sans-serif";
    ctx.fillText(`Preço Total: R$ ${bikePrice.toFixed(2).replace(".", ",")}`, 355, 88);
    ctx.fillText(`(−) Entrada à vista: R$ ${entry.toFixed(2).replace(".", ",")}`, 355, 115);
    ctx.fillStyle = "#1E3A8A";
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillText(`(=) Saldo a parcelar: R$ ${balance.toFixed(2).replace(".", ",")}`, 355, 145);
    ctx.fillStyle = "#16A34A";
    ctx.font = "bold 16px 'Segoe UI', sans-serif";
    ctx.fillText(`÷ ${installments} prestações = R$ ${parcelVal.toFixed(2).replace(".", ",")} / mês`, 355, 185);
    ctx.restore();
  }

  // MISSÃO 15: Régua de Descontos e Proporcionalidade Percentual (10%, 25%, 50%, 75%, 100%)
  function drawMission15(ctx, W, H) {
    const { basePrice, pct } = state.m15;
    const discount = (basePrice * pct) / 100;
    const finalPrice = basePrice - discount;
    const fracMap = { 10: "1/10 (÷10)", 25: "1/4 (÷4)", 50: "1/2 (÷2)", 75: "3/4 (3×25%)", 100: "1/1 (Inteiro)" };

    ctx.save();
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 16px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`Vitrine de Descontos: Preço Original R$ ${basePrice.toFixed(2).replace(".", ",")} com Cupom de ${pct}%`, W / 2, 32);

    // Barra de Proporcionalidade Segmentada
    const bx = 55, by = 65, bw = 550, bh = 64;
    const cutW = (bw * pct) / 100;

    // Parte cortada (Desconto)
    fillWithAccessiblePattern(ctx, bx, by, cutW, bh, "#EF4444", "stripes", { text: `Desconto ${pct}% (-R$ ${discount.toFixed(2).replace(".", ",")})`, force: true });
    // Parte a pagar
    fillWithAccessiblePattern(ctx, bx + cutW, by, bw - cutW, bh, "#16A34A", "dots", { text: `Pagar ${100 - pct}% (R$ ${finalPrice.toFixed(2).replace(".", ",")})`, force: true });

    ctx.strokeStyle = "#0A192F";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(bx, by, bw, bh);

    // Marcações de 10%, 25%, 50%, 75%, 100%
    [0, 10, 25, 50, 75, 100].forEach((m) => {
      const mx = bx + (bw * m) / 100;
      ctx.beginPath();
      ctx.moveTo(mx, by + bh);
      ctx.lineTo(mx, by + bh + 10);
      ctx.stroke();
      ctx.fillStyle = state.highContrast ? "#FFFF00" : "#1E3A8A";
      ctx.font = "bold 12px 'Segoe UI', sans-serif";
      ctx.fillText(`${m}%`, mx, by + bh + 24);
    });

    // Resumo de Cálculo Mental (EF05MA06)
    ctx.fillStyle = state.highContrast ? "#FFFFFF" : "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.fillText(`Fração Equivalente: ${pct}% = ${fracMap[pct] || pct + "/100"}`, W / 2, 195);
    ctx.fillStyle = "#FF6B00";
    ctx.font = "bold 17px 'Segoe UI', sans-serif";
    ctx.fillText(`Desconto: R$ ${discount.toFixed(2).replace(".", ",")}  |  Valor Final a Pagar: R$ ${finalPrice.toFixed(2).replace(".", ",")}`, W / 2, 230);
    ctx.fillStyle = "#475569";
    ctx.font = "13px 'Segoe UI', sans-serif";
    ctx.fillText(`Cálculo mental rápido: 50% = R$ ${(basePrice / 2).toFixed(2)} | 25% = R$ ${(basePrice / 4).toFixed(2)} | 10% = R$ ${(basePrice / 10).toFixed(2)}`, W / 2, 268);
    ctx.restore();
  }

  // MISSÃO 16: Reta Numérica com Lupa Decimal (Zoom 2× e 10×) + Trilha de Sequências
  function drawMission16(ctx, W, H) {
    const { start, end, subdivisions, markerIdx, seqStep } = state.m16;
    const stepVal = (end - start) / subdivisions;
    const currentVal = start + markerIdx * stepVal;

    ctx.save();
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#0A192F";
    ctx.font = "bold 15px 'Segoe UI', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`Lupa na Reta Numérica entre ${start} e ${end} (${subdivisions} subdivisões -> Passo = ${stepVal.toString().replace(".", ",")})`, W / 2, 32);

    const lx = 60, rx = 600, ly = 115;
    ctx.strokeStyle = "#1E3A8A";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(lx - 15, ly);
    ctx.lineTo(rx + 15, ly);
    ctx.stroke();

    for (let i = 0; i <= subdivisions; i++) {
      const x = lx + (i * (rx - lx)) / subdivisions;
      const isEnds = i === 0 || i === subdivisions;
      const isMid = i * 2 === subdivisions;
      const hTick = isEnds ? 20 : isMid ? 14 : 9;

      ctx.strokeStyle = isEnds ? "#0A192F" : "#2563EB";
      ctx.lineWidth = isEnds ? 3 : 2;
      ctx.beginPath();
      ctx.moveTo(x, ly - hTick);
      ctx.lineTo(x, ly + hTick);
      ctx.stroke();

      const v = Number((start + i * stepVal).toFixed(2)).toString().replace(".", ",");
      if (isEnds || isMid || subdivisions <= 10) {
        ctx.fillStyle = i === markerIdx ? "#FF6B00" : (state.highContrast ? "#FFFFFF" : "#334155");
        ctx.font = i === markerIdx ? "bold 14px 'Segoe UI', sans-serif" : "12px 'Segoe UI', sans-serif";
        ctx.fillText(v, x, ly + 32);
      }

      if (i === markerIdx) {
        // Marcador Lupa Laranja
        ctx.fillStyle = "#FF6B00";
        ctx.beginPath();
        ctx.arc(x, ly, 9, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText(`📍 Ponto = ${v}`, x, ly - 30);
      }
    }

    // Trilha de Sequência Recursiva na parte inferior (5A1.1 / N4.9)
    ctx.fillStyle = state.highContrast ? "#FFFF00" : "#1E3A8A";
    ctx.font = "bold 14px 'Segoe UI', sans-serif";
    ctx.fillText(`Trilha de Sequência Recursiva (Regra: +${seqStep} a cada pedra):`, W / 2, 195);

    const baseSeq = 135;
    for (let k = 0; k < 6; k++) {
      const sx = 75 + k * 95;
      const sy = 220;
      const val = baseSeq + k * seqStep;
      ctx.fillStyle = k === 3 ? "#FFF7ED" : "#EFF6FF";
      ctx.strokeStyle = k === 3 ? "#FF6B00" : "#1E3A8A";
      ctx.lineWidth = 2;
      ctx.fillRect(sx, sy, 76, 42);
      ctx.strokeRect(sx, sy, 76, 42);
      ctx.fillStyle = "#0A192F";
      ctx.font = "bold 15px 'Segoe UI', sans-serif";
      ctx.fillText(k === 3 ? `[ ${val} ]` : String(val), sx + 38, sy + 24);
    }
    ctx.restore();
  }

  // Controles interativos dinâmicos para cada Canvas
  function buildControls(containerId, missionId, isBoss, canvasId) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const rerender = () => renderMissionCanvas(canvasId, missionId, isBoss);

    let html = "";
    switch (missionId) {
      case 1:
        html = `<span style="font-weight:700">Clique em qualquer célula da malha acima para mudar o destino e medir a rota!</span>`;
        break;
      case 2:
        html = `
          <button class="btn-secondary" data-act="poly" data-v="3">Triângulo (3)</button>
          <button class="btn-secondary" data-act="poly" data-v="4">Quadrado (4)</button>
          <button class="btn-secondary" data-act="poly" data-v="5">Pentágono (5)</button>
          <button class="btn-secondary" data-act="poly" data-v="6">Hexágono (6)</button>
          <button class="btn-secondary" data-act="poly" data-v="8">Octógono (8)</button>
          <button class="btn-action" data-act="ang">Girar Ângulo (${state.m2.angleDeg}°)</button>
        `;
        break;
      case 3:
        html = `
          <button class="btn-secondary" data-act="solid">Alternar Sólido 3D</button>
          <button class="btn-action" data-act="addZ">+ Camada de Cubos (Altura: ${state.m3.cubesZ})</button>
          <button class="btn-outline" data-act="addX">Largura (${state.m3.cubesX})</button>
        `;
        break;
      case 4:
        html = `
          <button class="btn-secondary" data-act="scale" data-v="1">Escala 1× (Original)</button>
          <button class="btn-action" data-act="scale" data-v="2">Ampliar 2× (Dobro)</button>
          <button class="btn-secondary" data-act="scale" data-v="3">Ampliar 3× (Triplo)</button>
        `;
        break;
      case 5:
        html = `
          <button class="btn-secondary" data-act="num" data-v="248530">248.530 (IBGE)</button>
          <button class="btn-secondary" data-act="num" data-v="604085">604.085</button>
          <button class="btn-action" data-act="num" data-v="985310">985.310 (Maior)</button>
        `;
        break;
      case 6:
        html = `
          <button class="btn-secondary" data-act="magic" data-v="11">Testar ★ = 11</button>
          <button class="btn-action" data-act="magic" data-v="13">Testar ★ = 13 (Soma 34!)</button>
          <button class="btn-secondary" data-act="magic" data-v="15">Testar ★ = 15</button>
        `;
        break;
      case 7:
        html = `
          <button class="btn-secondary" data-act="comb" data-s="4" data-p="3">4 Camisetas × 3 Calças</button>
          <button class="btn-action" data-act="comb" data-s="3" data-p="4">3 Pães × 4 Recheios</button>
        `;
        break;
      case 8:
        html = `
          <button class="btn-secondary" data-act="time" data-m="-15">−15 min</button>
          <button class="btn-action" data-act="time" data-m="15">+15 min no Relógio</button>
          <button class="btn-secondary" data-act="dur" data-d="90">Duração: 1h30 (90 min)</button>
          <button class="btn-secondary" data-act="dur" data-d="135">Duração: 2h15 (135 min)</button>
        `;
        break;
      case 9:
        html = `
          <button class="btn-secondary" data-act="ruler" data-v="10">Lápis: 10 cm (100 mm)</button>
          <button class="btn-action" data-act="ruler" data-v="14.5">Lápis: 14,5 cm (145 mm)</button>
          <button class="btn-secondary" data-act="milk" data-v="2">Receita Dobrada (3 L + 800 mL)</button>
        `;
        break;
      case 10:
        html = `
          <button class="btn-secondary" data-act="sc10" data-v="1">Escala: 1 lado = 1 m</button>
          <button class="btn-action" data-act="sc10" data-v="2">Escala: 1 lado = 2 m</button>
          <button class="btn-secondary" data-act="sc10" data-v="5">Escala: 1 lado = 5 cm</button>
        `;
        break;
      case 11:
        html = `
          <button class="btn-secondary" data-act="area" data-f="18" data-h="6">Castelo (18□ + 6◢ = 21 u²)</button>
          <button class="btn-action" data-act="area" data-f="14" data-h="8">Fachada (14□ + 8◢ = 18 u²)</button>
          <button class="btn-secondary" data-act="area" data-f="10" data-h="4">Barco (10□ + 4◢ = 12 u²)</button>
        `;
        break;
      case 12:
        html = `
          <button class="btn-action" data-act="vote" data-i="1">+1 Voto Futsal</button>
          <button class="btn-secondary" data-act="vote" data-i="0">+1 Voto Vôlei</button>
          <button class="btn-secondary" data-act="voteReset">Restaurar Pesquisa Original</button>
        `;
        break;
      case 13:
        if (!isBoss) {
          html = `
            <button class="btn-secondary" data-act="fig13" data-v="0">Destacar Fig. A (2/4=50%)</button>
            <button class="btn-action" data-act="fig13" data-v="1">Destacar Fig. B (2/5=40%)</button>
            <button class="btn-secondary" data-act="fig13" data-v="2">Destacar Fig. C (5/8=62,5%)</button>
            <button class="btn-secondary" data-act="fig13" data-v="3">Destacar Fig. D (3/4=75%)</button>
          `;
        } else {
          html = `
            <button class="btn-secondary" data-act="frac13" data-n="2" data-d="5">2/5 (40%)</button>
            <button class="btn-secondary" data-act="frac13" data-n="6" data-d="8">6/8 = 3/4 (75%)</button>
            <button class="btn-secondary" data-act="frac13" data-n="9" data-d="12">9/12 = 3/4 (75%)</button>
            <button class="btn-action" data-act="spin13">🎲 Girar Roleta Equiprovável</button>
          `;
        }
        break;
      case 14:
        html = `
          <button class="btn-secondary" data-act="pdv" data-c="53" data-p="60">Compra Bia (R$ 53 / Pago R$ 60)</button>
          <button class="btn-secondary" data-act="pdv" data-c="32.25" data-p="45">Compra Pedro (R$ 32,25 / Pago R$ 45)</button>
          <button class="btn-action" data-act="parcel" data-b="1450" data-e="250" data-i="5">Notebook (1450 − 250) ÷ 5</button>
        `;
        break;
      case 15:
        html = `
          <button class="btn-secondary" data-act="pct15" data-p="10">Cupom 10% (1/10)</button>
          <button class="btn-action" data-act="pct15" data-p="25">Cupom 25% (1/4)</button>
          <button class="btn-secondary" data-act="pct15" data-p="50">Cupom 50% (1/2)</button>
          <button class="btn-secondary" data-act="pct15" data-p="75">Cupom 75% (3/4)</button>
          <button class="btn-outline" data-act="price15">Alternar Preço Base (R$ ${state.m15.basePrice})</button>
        `;
        break;
      case 16:
        html = `
          <button class="btn-secondary" data-act="zoom16" data-s="4" data-e="5" data-sub="2" data-m="1">Zoom 2× (Metade: 4,5)</button>
          <button class="btn-action" data-act="zoom16" data-s="4" data-e="5" data-sub="10" data-m="7">Zoom 10× Décimos (4,7)</button>
          <button class="btn-secondary" data-act="zoom16" data-s="1990" data-e="2000" data-sub="10" data-m="6">Linha do Tempo (1996)</button>
          <button class="btn-outline" data-act="move16">Avançar Ponto 📍</button>
        `;
        break;
    }

    el.innerHTML = html;
    el.querySelectorAll("button[data-act]").forEach((btn) => {
      btn.onclick = () => {
        const act = btn.dataset.act;
        if (act === "poly") state.m2.sides = Number(btn.dataset.v);
        if (act === "ang") state.m2.angleDeg = state.m2.angleDeg === 60 ? 90 : state.m2.angleDeg === 90 ? 120 : 60;
        if (act === "solid") state.m3.solidIdx = (state.m3.solidIdx + 1) % 4;
        if (act === "addZ") state.m3.cubesZ = (state.m3.cubesZ % 4) + 1;
        if (act === "addX") state.m3.cubesX = (state.m3.cubesX % 4) + 2;
        if (act === "scale") state.m4.scale = Number(btn.dataset.v);
        if (act === "num") state.m5.digits = String(btn.dataset.v).split("").map(Number);
        if (act === "magic") state.m6.magic[3] = Number(btn.dataset.v);
        if (act === "comb") { state.m7.shirts = Number(btn.dataset.s); state.m7.pants = Number(btn.dataset.p); }
        if (act === "time") {
          let tot = state.m8.hours * 60 + state.m8.minutes + Number(btn.dataset.m);
          tot = (tot + 1440) % 1440;
          state.m8.hours = Math.floor(tot / 60);
          state.m8.minutes = tot % 60;
        }
        if (act === "dur") state.m8.addMinutes = Number(btn.dataset.d);
        if (act === "ruler") state.m9.cmVal = Number(btn.dataset.v);
        if (act === "milk") { state.m9.milkL = 3.0; state.m9.cocoML = 800; }
        if (act === "sc10") state.m10.scaleM = Number(btn.dataset.v);
        if (act === "area") { state.m11.fullSquares = Number(btn.dataset.f); state.m11.halfTriangles = Number(btn.dataset.h); }
        if (act === "vote") state.m12.boys[Number(btn.dataset.i)]++;
        if (act === "voteReset") { state.m12.girls = [7, 6, 5]; state.m12.boys = [5, 9, 4]; }
        if (act === "fig13") state.m13.selectedFig = Number(btn.dataset.v);
        if (act === "frac13") { state.m13.customNum = Number(btn.dataset.n); state.m13.customDen = Number(btn.dataset.d); }
        if (act === "spin13") state.m13.spinResult = Math.floor(Math.random() * state.m13.customDen) + 1;
        if (act === "pdv") { state.m14.cartTotal = Number(btn.dataset.c); state.m14.paid = Number(btn.dataset.p); }
        if (act === "parcel") { state.m14.bikePrice = Number(btn.dataset.b); state.m14.entry = Number(btn.dataset.e); state.m14.installments = Number(btn.dataset.i); }
        if (act === "pct15") state.m15.pct = Number(btn.dataset.p);
        if (act === "price15") state.m15.basePrice = state.m15.basePrice === 160 ? 120 : state.m15.basePrice === 120 ? 80 : 160;
        if (act === "zoom16") {
          state.m16.start = Number(btn.dataset.s);
          state.m16.end = Number(btn.dataset.e);
          state.m16.subdivisions = Number(btn.dataset.sub);
          state.m16.markerIdx = Number(btn.dataset.m);
        }
        if (act === "move16") state.m16.markerIdx = (state.m16.markerIdx + 1) % (state.m16.subdivisions + 1);
        rerender();
        buildControls(containerId, missionId, isBoss, canvasId);
      };
    });
  }

  function setAccessibilityModes(colorblind, highContrast) {
    state.colorblind = !!colorblind;
    state.highContrast = !!highContrast;
  }

  return {
    renderMissionCanvas,
    setAccessibilityModes,
    state
  };
})();
