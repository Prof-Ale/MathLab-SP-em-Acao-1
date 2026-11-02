// Banco de Dados Curricular das 16 Missões - São Paulo em Ação: Matemática 1 (Selo MathLab)
window.MISSIONS_DATA = [
  // ==================== 1º BIMESTRE ====================
  {
    id: 1,
    bimestre: 1,
    semanas: "Semanas 1 e 2 (Aulas 1 a 4)",
    titulo: "Localização e deslocamento",
    eixo: "Geometria",
    saeb: ["5G1.1", "5G1.2", "5G2.1"],
    niveisSaeb: ["N3.1"],
    bncc: ["EF03MA12", "EF04MA16", "EF05MA15"],
    canvasEngine: "grid_cartesian",
    abertura: {
      contexto: "Olá, exploradores! Eu sou o Prof. Alê Chocolate. Você já usou um aplicativo de mapa para encontrar uma praça em Santa Bárbara d'Oeste ou Campinas, ou jogou Batalha Naval? Quando combinamos colunas (letras) e linhas (números) ou usamos os pontos cardeais da Rosa dos Ventos, nunca nos perdemos!",
      questoesMobilizadoras: [
        "Como você explicaria o caminho da entrada da escola até a sua sala de aula para um colega novo usando apenas 'virar à direita', 'virar à esquerda' e 'seguir em frente'?",
        "Em uma planilha ou mapa quadriculado, por que a ordem do par ordenado (Coluna, Linha) faz toda a diferença?",
        "Se o Sol nasce a Leste (L), para qual direção aponta o seu braço esquerdo quando você estende o braço direito para o nascente?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Atenção à ordem das coordenadas! No plano quadriculado, localizamos primeiro o deslocamento horizontal (coluna/eixo X) e depois o vertical (linha/eixo Y).",
      enunciado: "No mapa quadriculado do bairro, a Biblioteca está em (B, 2) e o Parque está em (E, 5). Use o simulador em Canvas para traçar a rota da Biblioteca até o Parque caminhando pelas linhas da malha. Quantas quadras para Leste (direita) e quantas para Norte (cima) você percorreu no total?",
      opcoes: [
        "A) 2 quadras para Leste e 4 para Norte (Total: 6 quadras)",
        "B) 3 quadras para Leste e 3 para Norte (Total: 6 quadras)",
        "C) 4 quadras para Leste e 2 para Norte (Total: 6 quadras)",
        "D) 5 quadras para Leste e 2 para Norte (Total: 7 quadras)"
      ],
      correta: 1,
      passoAPasso: [
        "1. Localizamos o ponto de partida na coluna B, linha 2: par ordenado (B, 2).",
        "2. Para ir da coluna B até a coluna E (B -> C -> D -> E), avançamos 3 unidades para o Leste (direita).",
        "3. Para ir da linha 2 até a linha 5 (2 -> 3 -> 4 -> 5), subimos 3 unidades para o Norte (cima).",
        "4. Portanto, o deslocamento é de 3 quadras para Leste e 3 para Norte, somando 6 quadras (Alternativa B)."
      ],
      fiqueLigado: "Par ordenado (x, y) ou (Coluna, Linha): o primeiro valor indica a posição horizontal e o segundo indica a posição vertical. Na Rosa dos Ventos: Norte (N) é acima, Sul (S) abaixo, Leste (L) à direita e Oeste (O) à esquerda!"
    },
    etapa2: [
      {
        id: "m1_e2_q1",
        enunciado: "1. Na sala de aula organizada em fileiras (A até E) e carteiras (1 até 6), Lucas senta na coluna C, fileira 4. Se ele trocar de lugar indo 2 colunas para a direita e 1 fileira para frente (diminuindo o número), qual será sua nova coordenada?",
        opcoes: ["(A, 3)", "(E, 3)", "(D, 5)", "(E, 5)"],
        correta: 1,
        dica: "Avançar 2 colunas a partir de C: C -> D -> E. Diminuir 1 na fileira 4: 4 - 1 = 3.",
        fiqueLigado: "Deslocar para a direita avança nas letras das colunas; ir para frente reduz o número da linha."
      },
      {
        id: "m1_e2_q2",
        enunciado: "2. Um robô parte do ponto (1, 1) no 1º quadrante e executa os comandos: 4 passos para Leste, 2 passos para Norte e 1 passo para Oeste. Em qual par ordenado o robô parou?",
        opcoes: ["(4, 3)", "(5, 3)", "(3, 4)", "(6, 2)"],
        correta: 0,
        dica: "No eixo horizontal (X): 1 + 4 (Leste) - 1 (Oeste) = 4. No eixo vertical (Y): 1 + 2 (Norte) = 3.",
        fiqueLigado: "Leste soma no eixo horizontal e Oeste subtrai. Norte soma no eixo vertical e Sul subtrai."
      },
      {
        id: "m1_e2_q3",
        enunciado: "3. Olhando para o Norte em um cruzamento, Ana girou um quarto de volta (90°) para a sua esquerda. Para qual ponto cardeal ela passou a olhar?",
        opcoes: ["Leste", "Sul", "Oeste", "Nordeste"],
        correta: 2,
        dica: "De frente para o Norte, a direita é o Leste e a esquerda é o Oeste.",
        fiqueLigado: "Um giro de 90° à esquerda a partir do Norte aponta para o Oeste (O)."
      }
    ],
    etapa3: [
      {
        id: "m1_e3_q1",
        saeb: "5G1.1",
        nivel: "N3.1",
        bloom: "Fácil",
        enunciado: "Observe no painel da malha viária que o Hospital está na coluna D e linha 6. Qual representação indica corretamente a localização do Hospital?",
        opcoes: ["A) (6, D)", "B) (D, 6)", "C) (C, 6)", "D) (D, 5)"],
        correta: 1,
        explicacao: "Em planilhas e mapas de coordenadas, indicamos primeiro a coluna (D) e depois a linha (6): (D, 6)."
      },
      {
        id: "m1_e3_q2",
        saeb: "5G1.2",
        nivel: "N3.1",
        bloom: "Médio",
        enunciado: "Para sair da Escola em (A, 1) e chegar à Quadra em (D, 4) sem passar pelo pátio em obras em (B, 1), qual sequência de movimentos sobre a malha é válida?",
        opcoes: [
          "A) 3 para Norte e depois 3 para Leste",
          "B) 3 para Leste e depois 3 para Norte",
          "C) 2 para Norte e depois 4 para Leste",
          "D) 3 para Sul e depois 3 para Oeste"
        ],
        correta: 0,
        explicacao: "Subindo 3 para Norte primeiro: (A,1) -> (A,4), desviando de (B,1), e depois 3 para Leste: (A,4) -> (D,4)."
      },
      {
        id: "m1_e3_q3",
        saeb: "5G2.1",
        nivel: "N3.1",
        bloom: "Difícil",
        enunciado: "Um drone de entrega saiu da base (2, 5), voou 3 km para Leste, 3 km para Sul e 2 km para Leste. Qual é a coordenada final do drone?",
        opcoes: ["A) (5, 2)", "B) (7, 2)", "C) (7, 8)", "D) (4, 2)"],
        correta: 1,
        explicacao: "Horizontal (X): 2 + 3 + 2 = 7. Vertical (Y): 5 - 3 = 2. Posição final: (7, 2)."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Criador de Rota de Caça ao Tesouro",
      instrucao: "Clique nas células da malha viária em Canvas para posicionar 3 pistas e o Baú do Tesouro! O sistema registra automaticamente os pares ordenados e a distância total em quadras.",
      metaMinima: 4
    }
  },
  {
    id: 2,
    bimestre: 1,
    semanas: "Semanas 3 e 4 (Aulas 5 a 8)",
    titulo: "Ângulos, polígonos e noção de reta",
    eixo: "Geometria",
    saeb: ["5G1.6", "5G1.7", "5G2.2"],
    niveisSaeb: ["N3.2", "N3.3"],
    bncc: ["EF03MA15", "EF05MA17"],
    canvasEngine: "geometry_tangram",
    abertura: {
      contexto: "Já reparou que as esquinas dos quarteirões, as placas de trânsito e as peças do Tangram são cheias de ângulos e polígonos? Com uma simples régua em formato de 'L' (nosso cantinho reto de 90°), conseguimos descobrir se um giro é reto, mais fechado (agudo) ou mais aberto (obtuso)!",
      questoesMobilizadoras: [
        "Onde você enxerga ângulos retos (90°, como o canto de uma folha de caderno) dentro da nossa sala de aula?",
        "Qual é a diferença entre duas ruas paralelas e duas ruas concorrentes (que se cruzam)?",
        "Por que todas as 7 peças do Tangram são chamadas de polígonos?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Use a 'Régua L' (90°) como referência! Se a abertura for menor que o canto em L, o ângulo é AGUDO (< 90°). Se coincidir com o L, é RETO (= 90°). Se for maior que o L, é OBTUSO (> 90° e < 180°).",
      enunciado: "No laboratório de Geometria acima, gire o ponteiro do transferidor em 'L' e observe os polígonos. Um polígono fechado formado por 6 lados retos e 6 ângulos internos maiores que 90° (como uma porca de parafuso regular) classifica-se como:",
      opcoes: [
        "A) Pentágono com ângulos agudos",
        "B) Hexágono com ângulos internos obtusos (120°)",
        "C) Octógono com ângulos retos (90°)",
        "D) Quadrilátero paralelogramo"
      ],
      correta: 1,
      passoAPasso: [
        "1. Contamos o número de lados retos da figura: 6 lados = Hexágono (hexa = 6).",
        "2. Comparamos cada canto interno com a régua em 'L' (90°): a abertura de 120° é maior que 90°.",
        "3. Ângulos entre 90° e 180° são chamados de obtusos. Logo, é um hexágono com ângulos obtusos (Alternativa B)."
      ],
      fiqueLigado: "Nomenclatura dos polígonos pelo número de lados: Triângulo (3), Quadrilátero (4), Pentágono (5), Hexágono (6), Heptágono (7), Octógono (8), Eneágono (9), Decágono (10) e Icoságono (20)!"
    },
    etapa2: [
      {
        id: "m2_e2_q1",
        enunciado: "1. No jogo do Tangram, temos 5 triângulos retângulos, 1 quadrado e 1 paralelogramo. Quantos ângulos retos (90°) possui o quadrado do Tangram?",
        opcoes: ["2 ângulos retos", "3 ângulos retos", "4 ângulos retos", "Nenhum ângulo reto"],
        correta: 2,
        dica: "Compare cada um dos 4 cantos do quadrado com a régua L.",
        fiqueLigado: "Todo retângulo e todo quadrado possuem 4 ângulos internos retos (90°)."
      },
      {
        id: "m2_e2_q2",
        enunciado: "2. Um quadrilátero que possui apenas UM par de lados paralelos (como o telhado visto de frente) é chamado de:",
        opcoes: ["Paralelogramo", "Losango", "Trapézio", "Pentágono"],
        correta: 2,
        dica: "Paralelogramos têm 2 pares de lados paralelos; o quadrilátero com apenas 1 par de bases paralelas tem nome próprio!",
        fiqueLigado: "Trapézio = 1 par de lados paralelos. Paralelogramo (retângulo, losango, quadrado) = 2 pares de lados paralelos."
      },
      {
        id: "m2_e2_q3",
        enunciado: "3. Quando os ponteiros de um relógio marcam exatamente 2 horas, a abertura menor entre eles mede 60°. Esse ângulo é classificado como:",
        opcoes: ["Reto (90°)", "Agudo (< 90°)", "Obtuso (> 90°)", "Raso (180°)"],
        correta: 1,
        dica: "60° é menor que o canto reto de 90° (que ocorre às 3 horas).",
        fiqueLigado: "Agudo: menor que 90°. Reto: igual a 90°. Obtuso: maior que 90° e menor que 180°."
      }
    ],
    etapa3: [
      {
        id: "m2_e3_q1",
        saeb: "5G1.6",
        nivel: "N3.2",
        bloom: "Fácil",
        enunciado: "Uma placa de 'PARE' tem o formato de um polígono regular de 8 lados iguais. Qual é o nome desse polígono?",
        opcoes: ["A) Hexágono", "B) Heptágono", "C) Octógono", "D) Decágono"],
        correta: 2,
        explicacao: "O polígono de 8 lados, 8 vértices e 8 ângulos internos chama-se octógono."
      },
      {
        id: "m2_e3_q2",
        saeb: "5G1.7",
        nivel: "N3.3",
        bloom: "Médio",
        enunciado: "Qual dos quadriláteros abaixo possui os 4 lados de mesma medida, 2 ângulos agudos e 2 ângulos obtusos?",
        opcoes: ["A) Quadrado", "B) Retângulo não quadrado", "C) Losango não quadrado", "D) Trapézio retângulo"],
        correta: 2,
        explicacao: "O losango possui 4 lados congruentes (iguais) e lados opostos paralelos, podendo ter 2 ângulos agudos e 2 obtusos."
      },
      {
        id: "m2_e3_q3",
        saeb: "5G2.2",
        nivel: "N3.3",
        bloom: "Difícil",
        enunciado: "Na planta de um bairro, a Avenida Brasil e a Avenida Paulista mantêm sempre a mesma distância entre si e nunca se cruzam. Já a Rua Sete cruza as duas avenidas formando cantos de 90°. Podemos afirmar que:",
        opcoes: [
          "A) As duas avenidas são concorrentes e a Rua Sete é paralela.",
          "B) As duas avenidas são paralelas e a Rua Sete é perpendicular a elas.",
          "C) Todas as três vias são paralelas entre si.",
          "D) A Rua Sete forma apenas ângulos obtusos com as avenidas."
        ],
        correta: 1,
        explicacao: "Retas que nunca se encontram são paralelas; retas que se cruzam formando 90° são perpendiculares."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Construtor de Cidade Poligonal e Tangram",
      instrucao: "Teste os ângulos com a Régua L e alterne os polígonos no Canvas para projetar os quarteirões da cidade identificando lados paralelos e tipos de ângulos!",
      metaMinima: 3
    }
  },
  {
    id: 3,
    bimestre: 1,
    semanas: "Semanas 5 e 6 (Aulas 9 a 12)",
    titulo: "Sólidos geométricos",
    eixo: "Geometria e Medidas",
    saeb: ["5G1.3", "5G1.4", "5G1.5", "5M1.4"],
    niveisSaeb: ["N4.2", "N5.2"],
    bncc: ["EF03MA13", "EF03MA14", "EF05MA16", "EF05MA21"],
    canvasEngine: "solids_3d",
    abertura: {
      contexto: "Caixas de leite, latas de ervilha, casquinhas de sorvete e pirâmides do Egito! No mundo tridimensional (3D), alguns sólidos têm apenas faces planas e não rolam fácil (os Poliedros), enquanto outros têm superfícies curvas e rolam pela mesa (os Corpos Redondos).",
      questoesMobilizadoras: [
        "Qual é a diferença principal entre um Prisma (como uma caixa de sapato) e uma Pirâmide quando observamos suas bases e faces laterais?",
        "Por que uma lata de refrigerante (cilindro) consegue rolar quando deitada, mas fica parada quando apoiada na base circular?",
        "Quando desmontamos uma caixa de papelão sem rasgar as abas, que figura plana obtemos?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Para contar Vértices (V), Faces (F) e Arestas (A) sem esquecer nenhum: conte primeiro os da base inferior, depois os da base superior (se for prisma) e por fim as ligações laterais!",
      enunciado: "No simulador 3D acima, selecione o Prisma de Base Hexagonal (como uma caixa de lápis de cor sextavada). Quantas faces (F), vértices (V) e arestas (A) esse poliedro possui?",
      opcoes: [
        "A) 6 faces, 6 vértices e 12 arestas",
        "B) 8 faces, 12 vértices e 18 arestas",
        "C) 7 faces, 7 vértices e 12 arestas",
        "D) 8 faces, 18 vértices e 12 arestas"
      ],
      correta: 1,
      passoAPasso: [
        "1. Bases: todo prisma tem 2 bases iguais (1 hexágono embaixo + 1 hexágono em cima = 2 faces) mais 6 faces retangulares laterais -> F = 2 + 6 = 8 faces.",
        "2. Vértices (pontas): 6 vértices na base de baixo + 6 vértices na base de cima -> V = 12 vértices.",
        "3. Arestas (encontros entre faces): 6 embaixo + 6 em cima + 6 subindo nas laterais -> A = 18 arestas (Alternativa B)."
      ],
      fiqueLigado: "Prismas têm 2 bases paralelas iguais e faces laterais retangulares. Pirâmides têm apenas 1 base poligonal e faces laterais triangulares que se encontram em um único vértice no topo! E para o volume: 1 cubinho unitário = 1 unidade de volume."
    },
    etapa2: [
      {
        id: "m3_e2_q1",
        enunciado: "1. Uma pirâmide de base quadrada (como a Grande Pirâmide de Gizé) é montada a partir de uma planificação. Quais figuras planas formam os moldes dessa planificação?",
        opcoes: [
          "2 quadrados e 4 retângulos",
          "1 quadrado e 4 triângulos",
          "4 quadrados e 1 triângulo",
          "1 círculo e 1 setor circular"
        ],
        correta: 1,
        dica: "A pirâmide tem apenas 1 base (quadrada) e suas faces laterais sobem fechando em ponta.",
        fiqueLigado: "Pirâmide de base quadrada = 1 base quadrada + 4 faces laterais triangulares (total de 5 faces)."
      },
      {
        id: "m3_e2_q2",
        enunciado: "2. Qual dos conjuntos abaixo contém APENAS corpos redondos?",
        opcoes: [
          "Cubo, cilindro e esfera",
          "Cilindro, cone e esfera",
          "Pirâmide, cone e bloco retangular",
          "Prisma triangular, cubo e pirâmide"
        ],
        correta: 1,
        dica: "Corpos redondos possuem superfície curva e podem rolar.",
        fiqueLigado: "Os três principais corpos redondos são o Cilindro, o Cone e a Esfera."
      },
      {
        id: "m3_e2_q3",
        enunciado: "3. No construtor de blocos 3D, Pedro empilhou cubinhos de 1 cm³ formando uma caixa com 3 cubinhos de comprimento, 2 de largura e 2 de altura. Qual é o volume total dessa pilha?",
        opcoes: ["7 cm³", "10 cm³", "12 cm³", "14 cm³"],
        correta: 2,
        dica: "Cada camada tem 3 × 2 = 6 cubinhos. Como são 2 camadas de altura, multiplique por 2!",
        fiqueLigado: "Volume do bloco retangular = Comprimento × Largura × Altura (3 × 2 × 2 = 12 cubinhos)."
      }
    ],
    etapa3: [
      {
        id: "m3_e3_q1",
        saeb: "5G1.3",
        nivel: "N4.2",
        bloom: "Fácil",
        enunciado: "Um chapéu de aniversário lembra um sólido geométrico cuja planificação é formada por 1 círculo (base) e 1 setor circular (lateral). Que sólido é esse?",
        opcoes: ["A) Cilindro", "B) Pirâmide triangular", "C) Cone", "D) Esfera"],
        correta: 2,
        explicacao: "O cone é um corpo redondo com apenas uma base circular e um vértice oposto à base."
      },
      {
        id: "m3_e3_q2",
        saeb: "5G1.4",
        nivel: "N5.2",
        bloom: "Médio",
        enunciado: "Uma caixa de presente tem o formato de um prisma de base triangular. Quantas faces retangulares e quantas faces triangulares compõem a sua planificação?",
        opcoes: [
          "A) 3 faces retangulares e 2 faces triangulares",
          "B) 2 faces retangulares e 3 faces triangulares",
          "C) 1 face quadrada e 4 faces triangulares",
          "D) 4 faces retangulares e 2 faces triangulares"
        ],
        correta: 0,
        explicacao: "O prisma triangular possui 2 bases triangulares e 3 faces laterais retangulares."
      },
      {
        id: "m3_e3_q3",
        saeb: "5M1.4",
        nivel: "N5.2",
        bloom: "Difícil",
        enunciado: "Em um armazém, caixas cúbicas foram empilhadas em 3 andares: o 1º andar (base) tem 9 caixas (3×3), o 2º andar tem 4 caixas e o 3º andar tem 1 caixa no topo. Quantas caixas há no total?",
        opcoes: ["A) 12 caixas", "B) 13 caixas", "C) 14 caixas", "D) 27 caixas"],
        correta: 2,
        explicacao: "Somando os cubos de cada andar: 9 + 4 + 1 = 14 caixas cúbicas."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Construtor Isométrico de Volume com Cubos",
      instrucao: "Adicione ou remova camadas de cubos no Canvas 3D e alterne entre Poliedros e Planificações para atingir o volume-alvo da missão!",
      metaMinima: 8
    }
  },
  {
    id: 4,
    bimestre: 1,
    semanas: "Semanas 7 e 8 (Aulas 13 a 16)",
    titulo: "Ampliação e redução de figuras planas",
    eixo: "Geometria, Álgebra e Medidas",
    saeb: ["5A2.1", "5A2.2", "5G1.9", "5M2.3", "5M2.4"],
    niveisSaeb: ["N1.1", "N5.3", "N6.5", "N7.3", "N8.10"],
    bncc: ["EF05MA12", "EF05MA13", "EF05MA18", "EF05MA20"],
    canvasEngine: "grid_cartesian",
    abertura: {
      contexto: "Quando você dá zoom em uma foto no celular sem distorcer o rosto de ninguém, todos os lados aumentam na mesma proporção! Mas cuidado com uma pegadinha clássica da Geometria: quando dobramos os lados de uma figura, o perímetro dobra, mas a ÁREA fica multiplicada por 4!",
      questoesMobilizadoras: [
        "O que acontece com uma fotografia se aumentarmos a largura pelo dobro, mas deixarmos a altura do mesmo tamanho?",
        "Se um quadrado de lado 2 cm na malha tiver seus lados dobrados para 4 cm, quantos quadradinhos de área caberão dentro dele?",
        "Os ângulos internos de um triângulo mudam de medida quando ampliamos a figura?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Para ampliar ou reduzir sem deformar: multiplique (ou divida) TODOS os lados pelo mesmo fator de escala k! Os ângulos internos permanecem exatamente iguais.",
      enunciado: "No Canvas de malha dupla acima, observe o retângulo original de base 3 unidades e altura 2 unidades (Perímetro = 10 u e Área = 6 quadradinhos). Se aplicarmos o fator de ampliação 2× (dobrando as medidas dos lados para 6 × 4), quais serão o novo perímetro e a nova área?",
      opcoes: [
        "A) Perímetro = 20 u (dobrou) e Área = 12 u² (dobrou)",
        "B) Perímetro = 20 u (dobrou) e Área = 24 u² (quadruplicou)",
        "C) Perímetro = 40 u (quadruplicou) e Área = 24 u² (quadruplicou)",
        "D) Perímetro = 12 u e Área = 18 u²"
      ],
      correta: 1,
      passoAPasso: [
        "1. Novos lados multiplicados por 2: base = 3 × 2 = 6 u; altura = 2 × 2 = 4 u.",
        "2. Novo perímetro (soma dos 4 lados): 6 + 4 + 6 + 4 = 20 u (note que 10 × 2 = 20, efeito linear!).",
        "3. Nova área (base × altura): 6 × 4 = 24 quadradinhos (note que 6 × 4 = 24, ou seja, multiplicou por 2² = 4, efeito quadrático! Alternativa B)."
      ],
      fiqueLigado: "Na ampliação de fator k: os lados e o perímetro são multiplicados por k (efeito linear), a área é multiplicada por k × k = k² (efeito quadrático), e os ângulos internos NÃO mudam!"
    },
    etapa2: [
      {
        id: "m4_e2_q1",
        enunciado: "1. Um arquiteto desenhou uma praça quadrada de lado 6 quadradinhos na malha e decidiu fazer uma redução dividindo as medidas dos lados por 3. Qual será a medida do lado e o perímetro da praça reduzida?",
        opcoes: [
          "Lado = 2 u e Perímetro = 8 u",
          "Lado = 3 u e Perímetro = 12 u",
          "Lado = 2 u e Perímetro = 4 u",
          "Lado = 18 u e Perímetro = 72 u"
        ],
        correta: 0,
        dica: "6 dividido por 3 = 2 unidades de lado. O quadrado tem 4 lados iguais.",
        fiqueLigado: "Na redução por 3, tanto o lado (6 ÷ 3 = 2) quanto o perímetro (24 ÷ 3 = 8) são divididos por 3."
      },
      {
        id: "m4_e2_q2",
        enunciado: "2. Se triplicarmos (multiplicar por 3) o lado de um quadrado que tinha área de 4 cm², qual passará a ser a área do quadrado ampliado?",
        opcoes: ["12 cm²", "16 cm²", "36 cm²", "24 cm²"],
        correta: 2,
        dica: "Quadrado de área 4 cm² tem lado 2 cm. Triplicando o lado: 2 × 3 = 6 cm. Qual é a área de um quadrado 6 × 6?",
        fiqueLigado: "Triplicando os lados (×3), a área fica multiplicada por 3 × 3 = 9! Assim, 4 cm² × 9 = 36 cm²."
      },
      {
        id: "m4_e2_q3",
        enunciado: "3. Para preparar 2 jarras de limonada proporcionalmente iguais, usamos 6 limões. Quantos limões são necessários para 5 jarras com a mesma concentração?",
        opcoes: ["10 limões", "12 limões", "15 limões", "18 limões"],
        correta: 2,
        dica: "Descubra primeiro quantos limões vão em 1 jarra (6 ÷ 2 = 3 limões por jarra).",
        fiqueLigado: "Redução à unidade: 6 ÷ 2 = 3 limões por jarra. Para 5 jarras: 5 × 3 = 15 limões."
      }
    ],
    etapa3: [
      {
        id: "m4_e3_q1",
        saeb: "5G1.9",
        nivel: "N6.5",
        bloom: "Médio",
        enunciado: "Um triângulo retângulo desenhado na malha quadriculada tem catetos medindo 4 cm e 6 cm, e um ângulo reto de 90°. Ao ampliar esse triângulo dobrando seus lados, o ângulo reto passará a medir:",
        opcoes: ["A) 45°", "B) 90°", "C) 180°", "D) 120°"],
        correta: 1,
        explicacao: "Na ampliação ou redução de polígonos semelhantes, as medidas dos ângulos internos permanecem inalteradas (90°)."
      },
      {
        id: "m4_e3_q2",
        saeb: "5M2.3",
        nivel: "N7.3",
        bloom: "Médio",
        enunciado: "Um canteiro retangular mede 5 m por 3 m (perímetro = 16 m). Se triplicarmos todas as dimensões desse canteiro, seu novo perímetro será:",
        opcoes: ["A) 32 m", "B) 48 m", "C) 45 m", "D) 144 m"],
        correta: 1,
        explicacao: "O perímetro varia linearmente com o fator de ampliação: 16 m × 3 = 48 m (lados 15 m e 9 m)."
      },
      {
        id: "m4_e3_q3",
        saeb: "5M2.4",
        nivel: "N8.10",
        bloom: "Difícil",
        enunciado: "Uma logomarca ocupa uma área de 10 quadradinhos na malha. Se fizermos uma ampliação multiplicando tanto a largura quanto a altura por 2, quantos quadradinhos a logomarca ampliada ocupará?",
        opcoes: ["A) 12", "B) 20", "C) 40", "D) 100"],
        correta: 2,
        explicacao: "Dobrando comprimento e largura, a área quadruplica (×4): 10 × 4 = 40 quadradinhos."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Desenho de Escala e Raio Triplicado",
      instrucao: "Use os controles de escala (1×, 2×, 3×) no Canvas de malha dupla para comparar visualmente o efeito linear no perímetro e quadrático na área!",
      metaMinima: 3
    }
  },

  // ==================== 2º BIMESTRE ====================
  {
    id: 5,
    bimestre: 2,
    semanas: "Semanas 9 e 10 (Aulas 17 a 20)",
    titulo: "Sistema de Numeração Decimal",
    eixo: "Números",
    saeb: ["5N1.1", "5N1.2", "5N1.4", "5N2.1", "5N2.2"],
    niveisSaeb: ["N4.14", "N5.1", "N6.20"],
    bncc: ["EF04MA02", "EF05MA01", "EF05MA07", "EF05MA08"],
    canvasEngine: "place_value_magic",
    abertura: {
      contexto: "Você sabia que com apenas 10 algarismos (0, 1, 2, 3, 4, 5, 6, 7, 8 e 9) escrevemos a população de qualquer cidade do Brasil no censo do IBGE? O segredo do nosso sistema Indo-Arábico é que ele é decimal (agrupa de 10 em 10) e posicional: o valor de um algarismo depende da ordem que ele ocupa!",
      questoesMobilizadoras: [
        "No número 194.210 (população aproximada de um município paulista), o algarismo 1 aparece duas vezes. Ele vale a mesma coisa nas duas posições?",
        "Por que o zero é fundamental para diferenciar os números 305, 350 e 3.005?",
        "Quantas ordens formam uma classe completa no Quadro de Ordens e Classes?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Separe o número de 3 em 3 ordens da direita para a esquerda! As 3 primeiras formam a Classe das Unidades Simples (U, D, C) e as 3 seguintes formam a Classe dos Milhares (UM, DM, CM).",
      enunciado: "No Quadro Posicional interativo acima, represente o número 248.530 (habitantes de uma cidade segundo o IBGE). Qual é o valor posicional do algarismo 4 e qual é a decomposição polinomial correta desse número?",
      opcoes: [
        "A) O 4 vale 4.000 e a decomposição é 200.000 + 4.000 + 800 + 50 + 3",
        "B) O 4 vale 40.000 e a decomposição é 2×100.000 + 4×10.000 + 8×1.000 + 5×100 + 3×10",
        "C) O 4 vale 400.000 e a decomposição é 248 + 530",
        "D) O 4 vale 40 e a decomposição é 2×10.000 + 4×1.000 + 8×100 + 53"
      ],
      correta: 1,
      passoAPasso: [
        "1. Lemos da direita para a esquerda: 0 (1ª ordem - U), 3 (2ª ordem - D = 30), 5 (3ª ordem - C = 500), 8 (4ª ordem - UM = 8.000), 4 (5ª ordem - DM = 40.000), 2 (6ª ordem - CM = 200.000).",
        "2. O algarismo 4 ocupa a 5ª ordem (Dezena de Milhar), portanto vale 4 × 10.000 = 40.000.",
        "3. Decomposição polinomial: 2×100.000 + 4×10.000 + 8×1.000 + 5×100 + 3×10 (Alternativa B)."
      ],
      fiqueLigado: "6ª Ordem = Centena de Milhar (×100.000) | 5ª Ordem = Dezena de Milhar (×10.000) | 4ª Ordem = Unidade de Milhar (×1.000) | 3ª Ordem = Centena (×100) | 2ª Ordem = Dezena (×10) | 1ª Ordem = Unidade (×1)."
    },
    etapa2: [
      {
        id: "m5_e2_q1",
        enunciado: "1. Qual é o maior número natural de 6 ordens que podemos formar usando os algarismos 3, 0, 8, 5, 9 e 1 sem repeti-los?",
        opcoes: ["985.310", "985.130", "103.589", "999.999"],
        correta: 0,
        dica: "Para obter o maior valor possível, coloque os maiores algarismos nas maiores ordens (da esquerda para a direita).",
        fiqueLigado: "Ordenando os algarismos em ordem decrescente da 6ª até a 1ª ordem: 985.310."
      },
      {
        id: "m5_e2_q2",
        enunciado: "2. A composição de 5 centenas de milhar + 7 unidades de milhar + 4 centenas + 9 unidades corresponde ao número:",
        opcoes: ["57.409", "507.409", "570.490", "507.490"],
        correta: 1,
        dica: "Atenção às ordens vazias! Não há dezenas de milhar (0 na 5ª ordem) nem dezenas simples (0 na 2ª ordem).",
        fiqueLigado: "500.000 + 0 + 7.000 + 400 + 0 + 9 = 507.409. O zero guarda o lugar das ordens vazias!"
      },
      {
        id: "m5_e2_q3",
        enunciado: "3. Quantas centenas completas cabem no número 43.800?",
        opcoes: ["8 centenas", "38 centenas", "438 centenas", "4.380 centenas"],
        correta: 2,
        dica: "Divida 43.800 por 100 (basta cortar dois zeros do final).",
        fiqueLigado: "O algarismo da centena é o 8, mas o total de centenas contidas no número todo é 43.800 ÷ 100 = 438 centenas!"
      }
    ],
    etapa3: [
      {
        id: "m5_e3_q1",
        saeb: "5N1.2",
        nivel: "N4.14",
        bloom: "Fácil",
        enunciado: "No número 376.492, qual algarismo ocupa a ordem das dezenas de milhar?",
        opcoes: ["A) 3", "B) 7", "C) 6", "D) 9"],
        correta: 1,
        explicacao: "Contando da direita para a esquerda: 2(U), 9(D), 4(C), 6(UM), 7(DM - 5ª ordem), 3(CM)."
      },
      {
        id: "m5_e3_q2",
        saeb: "5N1.4",
        nivel: "N5.1",
        bloom: "Médio",
        enunciado: "O número 604.085 pode ser decomposto na forma polinomial como:",
        opcoes: [
          "A) 6 × 100.000 + 4 × 10.000 + 8 × 10 + 5",
          "B) 6 × 100.000 + 4 × 1.000 + 8 × 10 + 5 × 1",
          "C) 6 × 10.000 + 4 × 1.000 + 8 × 100 + 5",
          "D) 600 + 4.000 + 85"
        ],
        correta: 1,
        explicacao: "604.085 = 600.000 (6×100.000) + 4.000 (4×1.000) + 80 (8×10) + 5 (5×1)."
      },
      {
        id: "m5_e3_q3",
        saeb: "5N1.1",
        nivel: "N6.20",
        bloom: "Difícil",
        enunciado: "Segundo dados do IBGE, quatro cidades paulistas tinham as seguintes populações: Cidade X (199.890), Cidade Y (201.045), Cidade Z (198.999) e Cidade W (201.405). Colocando-as em ordem crescente de população, temos:",
        opcoes: [
          "A) Z, X, Y, W",
          "B) X, Z, Y, W",
          "C) W, Y, X, Z",
          "D) Z, X, W, Y"
        ],
        correta: 0,
        explicacao: "Comparando da maior ordem para a menor: 198.999 (Z) < 199.890 (X) < 201.045 (Y) < 201.405 (W)."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Cruzadinha Demográfica do IBGE no Quadro de Ordens",
      instrucao: "Ajuste os algarismos das 6 ordens no Canvas para formar os números solicitados pelos desafios demográficos do IBGE!",
      metaMinima: 3
    }
  },
  {
    id: 6,
    bimestre: 2,
    semanas: "Semanas 11 e 12 (Aulas 21 a 24)",
    titulo: "Adição e subtração",
    eixo: "Números e Álgebra",
    saeb: ["5N1.5", "5N1.6", "5N2.1", "5A1.5", "5A1.6"],
    niveisSaeb: ["N2.1", "N4.6", "N5.11"],
    bncc: ["EF04MA04", "EF04MA05", "EF04MA15", "EF05MA07", "EF05MA11"],
    canvasEngine: "place_value_magic",
    abertura: {
      contexto: "Quando juntamos quantidades ou descobrimos quanto falta para atingir uma meta, usamos a adição e a subtração! Como uma desfaz o que a outra faz, elas são operações inversas — o que nos permite descobrir qualquer valor escondido atrás de um símbolo e até resolver o famoso Quadrado Mágico de soma 34!",
      questoesMobilizadoras: [
        "O que significa de verdade o 'vai 1' na adição e o 'pedir emprestado' na subtração?",
        "Se você sabe que ★ + 145 = 400, que operação você faz para descobrir o valor da estrela ★?",
        "No Quadrado Mágico 4×4 de Albrecht Dürer, todas as linhas, colunas e diagonais somam 34. Como começar a preenchê-lo?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Alinhe sempre ordem embaixo de ordem (Unidade com Unidade, Dezena com Dezena)! E lembre-se: se A + B = C, então C − B = A (operação inversa).",
      enunciado: "No tabuleiro do Quadrado Mágico 4×4 (com números de 1 a 16 sem repetir), a soma mágica de cada linha, coluna ou diagonal é sempre 34. Se uma linha já possui os números 16, 3 e 2, qual número falta na quarta casa dessa linha?",
      opcoes: ["A) 11", "B) 12", "C) 13", "D) 15"],
      correta: 2,
      passoAPasso: [
        "1. Somamos os três números já conhecidos da linha: 16 + 3 + 2 = 21.",
        "2. Sabemos que a soma total da linha deve ser 34: 21 + ★ = 34.",
        "3. Pela operação inversa (subtração): ★ = 34 − 21 = 13 (Alternativa C)."
      ],
      fiqueLigado: "Adição e subtração são operações inversas! Para achar uma parcela desconhecida, subtraímos a outra parcela do total. Para tirar a prova real da subtração, somamos o resto com o subtraendo para obter o minuendo."
    },
    etapa2: [
      {
        id: "m6_e2_q1",
        enunciado: "1. Um estádio de futebol tem capacidade para 42.000 torcedores. Se já entraram 28.650 pessoas, quantos lugares ainda estão disponíveis?",
        opcoes: ["13.350 lugares", "14.350 lugares", "13.450 lugares", "26.650 lugares"],
        correta: 0,
        dica: "Faça 42.000 − 28.650 realizando os reagrupamentos (trocas) das ordens superiores.",
        fiqueLigado: "42.000 − 28.650 = 13.350. Confira pela operação inversa: 13.350 + 28.650 = 42.000!"
      },
      {
        id: "m6_e2_q2",
        enunciado: "2. Descubra o valor do símbolo ♦ na igualdade: ♦ − 1.480 = 2.750.",
        opcoes: ["1.270", "3.130", "4.230", "4.130"],
        correta: 2,
        dica: "Se tiramos 1.480 de ♦ e sobrou 2.750, então ♦ é a soma de 2.750 + 1.480!",
        fiqueLigado: "Para achar o minuendo desconhecido (♦), somamos o resultado com o subtraendo: 2.750 + 1.480 = 4.230."
      },
      {
        id: "m6_e2_q3",
        enunciado: "3. Na igualdade 340 + 190 = 500 + ▲, qual número deve substituir o triângulo ▲ para manter a balança em equilíbrio?",
        opcoes: ["20", "30", "40", "190"],
        correta: 1,
        dica: "Calcule primeiro o lado esquerdo (340 + 190 = 530) e veja quanto falta a 500 para chegar a 530.",
        fiqueLigado: "O sinal de igual (=) indica equivalência entre os dois lados: 530 = 500 + 30."
      }
    ],
    etapa3: [
      {
        id: "m6_e3_q1",
        saeb: "5N1.5",
        nivel: "N4.6",
        bloom: "Fácil",
        enunciado: "O resultado da subtração 50.003 − 14.287 é igual a:",
        opcoes: ["A) 35.716", "B) 35.826", "C) 44.284", "D) 36.716"],
        correta: 0,
        explicacao: "Reagrupando as dezenas de milhar através dos zeros: 50.003 − 14.287 = 35.716."
      },
      {
        id: "m6_e3_q2",
        saeb: "5A1.5",
        nivel: "N5.11",
        bloom: "Médio",
        enunciado: "Em uma gincana escolar, a Equipe Azul tinha certa pontuação, ganhou mais 1.850 pontos na última tarefa e terminou com 5.420 pontos. Quantos pontos a Equipe Azul tinha antes da última tarefa?",
        opcoes: ["A) 3.570", "B) 3.630", "C) 4.430", "D) 7.270"],
        correta: 0,
        explicacao: "P + 1.850 = 5.420 -> P = 5.420 − 1.850 = 3.570 pontos."
      },
      {
        id: "m6_e3_q3",
        saeb: "5A1.6",
        nivel: "N5.11",
        bloom: "Difícil",
        enunciado: "Sabendo que ★ + ★ = 180 e que ★ + ● = 250, qual é o valor de ● − ★?",
        opcoes: ["A) 70", "B) 90", "C) 160", "D) 80"],
        correta: 0,
        explicacao: "Se ★ + ★ = 180, então ★ = 90. Como 90 + ● = 250, temos ● = 160. Logo, ● − ★ = 160 − 90 = 70."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Desafio do Quadrado Mágico 4×4 (Soma 34)",
      instrucao: "Complete as casas vazias do Quadrado Mágico 4×4 no Canvas de modo que todas as linhas, colunas e diagonais somem exatamente 34!",
      metaMinima: 4
    }
  },
  {
    id: 7,
    bimestre: 2,
    semanas: "Semanas 13 e 14 (Aulas 25 a 28)",
    titulo: "Multiplicação e divisão",
    eixo: "Números e Álgebra",
    saeb: ["5N1.6", "5N2.2", "5N2.6", "5A1.5", "5A1.6"],
    niveisSaeb: ["N4.8", "N5.4", "N6.21"],
    bncc: ["EF04MA04", "EF04MA15", "EF05MA08", "EF05MA09", "EF05MA11"],
    canvasEngine: "place_value_magic",
    abertura: {
      contexto: "Vai arrumar a mala de viagem? Se você levar 3 camisetas e 4 calças diferentes, quantos looks distintos consegue montar? A multiplicação resolve desde fileiras de poltronas no cinema até a árvore de possibilidades combinatórias, enquanto a divisão reparte e mede com precisão!",
      questoesMobilizadoras: [
        "Como podemos conferir se uma conta de divisão com resto está certa usando a multiplicação e a adição (Prova Real)?",
        "Por que o resto de uma divisão inteira NUNCA pode ser maior ou igual ao divisor?",
        "Se uma sorveteria oferece 4 sabores de sorvete e 3 tipos de calda, como a árvore de possibilidades mostra todos os pedidos possíveis?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Relação fundamental da divisão (Prova Real): Dividendo = Divisor × Quociente + Resto (com Resto < Divisor). Na combinatória, multiplique as opções de cada etapa!",
      enunciado: "No construtor de Árvore de Possibilidades em Canvas, Júlia está planejando sua mala de viagem com 4 camisetas, 3 calças e 2 pares de tênis. Quantas combinações diferentes (1 camiseta + 1 calça + 1 tênis) ela pode vestir?",
      opcoes: [
        "A) 9 combinações (4 + 3 + 2)",
        "B) 14 combinações (4 × 3 + 2)",
        "C) 24 combinações (4 × 3 × 2)",
        "D) 12 combinações (4 × 3)"
      ],
      correta: 2,
      passoAPasso: [
        "1. Para cada uma das 4 camisetas, há 3 opções de calças: 4 × 3 = 12 pares de roupa.",
        "2. Para cada um desses 12 pares, há 2 opções de tênis: 12 × 2 = 24 combinações completas.",
        "3. Pelo Princípio Multiplicativo: 4 × 3 × 2 = 24 combinações (Alternativa C)."
      ],
      fiqueLigado: "Princípio Multiplicativo (Combinatória): se uma decisão tem M opções e outra tem N opções independentes, o total de pares possíveis é M × N. E na divisão: Dividendo = Divisor × Quociente + Resto!"
    },
    etapa2: [
      {
        id: "m7_e2_q1",
        enunciado: "1. Em uma divisão, o divisor é 15, o quociente é 24 e o resto é o maior possível. Qual é o valor do dividendo?",
        opcoes: ["360", "374", "375", "361"],
        correta: 1,
        dica: "Se o divisor é 15, o maior resto possível é 14 (um a menos que o divisor). Depois faça: 15 × 24 + 14.",
        fiqueLigado: "Maior resto possível = Divisor − 1 = 14. Dividendo = 15 × 24 + 14 = 360 + 14 = 374."
      },
      {
        id: "m7_e2_q2",
        enunciado: "2. Um auditório possui 18 fileiras com 25 poltronas em cada fileira. Quantas poltronas há ao todo no auditório?",
        opcoes: ["350 poltronas", "400 poltronas", "450 poltronas", "480 poltronas"],
        correta: 2,
        dica: "Você pode calcular mentalmente: 18 × 25 = 9 × 50 = 450!",
        fiqueLigado: "Configuração retangular: fileiras × poltronas por fileira = 18 × 25 = 450 poltronas."
      },
      {
        id: "m7_e2_q3",
        enunciado: "3. Uma escola de Santa Bárbara d'Oeste vai levar 260 alunos ao museu em ônibus que transportam até 42 estudantes sentados cada um. Quantos ônibus, no mínimo, precisam ser contratados para levar todos?",
        opcoes: ["5 ônibus", "6 ônibus", "7 ônibus", "8 ônibus"],
        correta: 2,
        dica: "Divida 260 por 42: 6 × 42 = 252 (sobram 8 alunos). Os 8 alunos que sobraram podem ficar para trás?",
        fiqueLigado: "260 ÷ 42 dá quociente 6 e resto 8. Para transportar os 8 alunos restantes, é necessário mais 1 ônibus: 6 + 1 = 7 ônibus!"
      }
    ],
    etapa3: [
      {
        id: "m7_e3_q1",
        saeb: "5N1.6",
        nivel: "N4.8",
        bloom: "Fácil",
        enunciado: "O quociente e o resto da divisão de 1.845 por 15 são, respectivamente:",
        opcoes: [
          "A) Quociente 123 e resto 0",
          "B) Quociente 120 e resto 45",
          "C) Quociente 13 e resto 0",
          "D) Quociente 123 e resto 5"
        ],
        correta: 0,
        explicacao: "1.845 ÷ 15 = 123 exato (pois 15 × 100 = 1.500, 15 × 20 = 300 e 15 × 3 = 45; soma = 1.845, resto 0)."
      },
      {
        id: "m7_e3_q2",
        saeb: "5N2.6",
        nivel: "N5.4",
        bloom: "Médio",
        enunciado: "Uma lanchonete monta lanches combinando 1 tipo de pão (francês, integral ou sírio), 1 recheio (frango, queijo, atum ou carne) e 1 suco (laranja ou uva). Quantos combos diferentes podem ser pedidos?",
        opcoes: ["A) 9 combos", "B) 12 combos", "C) 14 combos", "D) 24 combos"],
        correta: 3,
        explicacao: "Pelo princípio multiplicativo: 3 pães × 4 recheios × 2 sucos = 24 combos distintos."
      },
      {
        id: "m7_e3_q3",
        saeb: "5A1.5",
        nivel: "N6.21",
        bloom: "Difícil",
        enunciado: "Pensei em um número natural, multipliquei-o por 6, somei 18 ao resultado e obtive 90. Em qual número pensei?",
        opcoes: ["A) 11", "B) 12", "C) 15", "D) 18"],
        correta: 1,
        explicacao: "Desfazendo pelas operações inversas: 90 − 18 = 72; e 72 ÷ 6 = 12."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Planejador de Mala de Viagem e Prova Real",
      instrucao: "Use o simulador combinatório no Canvas para montar árvores de possibilidades e validar divisões com prova real!",
      metaMinima: 3
    }
  },
  {
    id: 8,
    bimestre: 2,
    semanas: "Semanas 15 e 16 (Aulas 29 a 32)",
    titulo: "Medida de tempo",
    eixo: "Grandezas e Medidas",
    saeb: ["5M1.5", "5M2.2", "5M2.5"],
    niveisSaeb: ["N3.5", "N4.5", "N6.4"],
    bncc: ["EF03MA23", "EF04MA22", "EF05MA19"],
    canvasEngine: "time_measures",
    abertura: {
      contexto: "Por que 1 hora não tem 100 minutos, e sim 60 minutos? Os antigos babilônios escolheram o número 60 (sistema sexagesimal) porque ele pode ser dividido exatamente por 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30 e 60! Vamos sincronizar o relógio de ponteiros com o visor digital de 24 horas!",
      questoesMobilizadoras: [
        "No relógio analógico (de ponteiros), quantos minutos equivalem ao deslocamento do ponteiro grande de um número até o próximo (por exemplo, do 12 até o 1)?",
        "Se um filme começa às 14h40min e dura 1h35min, por que não podemos simplesmente somar 40 + 35 e escrever '15h75min'?",
        "Como representamos 3 horas da tarde e 9 horas da noite no relógio digital de 24 horas?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Base 60 (Sistema Sexagesimal): 1 hora = 60 minutos e 1 minuto = 60 segundos! Sempre que os minutos atingirem 60 ou mais, troque cada grupo de 60 minutos por +1 hora.",
      enunciado: "No Relógio Sincronizado em Canvas, ajuste o início de uma peça de teatro às 15h45min (3h45 da tarde). Se a peça teve duração de 1 hora e 30 minutos, em qual horário ela terminou?",
      opcoes: [
        "A) 16h75min",
        "B) 16h15min",
        "C) 17h15min",
        "D) 17h30min"
      ],
      correta: 2,
      passoAPasso: [
        "1. Somamos horas com horas e minutos com minutos: 15h + 1h = 16h; e 45min + 30min = 75min.",
        "2. Como 75 minutos passam de 60, reagrupamos: 75min = 60min (1h) + 15min.",
        "3. Juntamos +1h às 16h: 16h + 1h + 15min = 17h15min (Alternativa C)."
      ],
      fiqueLigado: "No relógio de ponteiros: o ponteiro menor marca as HORAS e se move proporcionalmente aos minutos; o ponteiro maior marca os MINUTOS (cada número do mostrador vale ×5 minutos). Após o meio-dia (12h), somamos 12: 1h PM = 13h, 3h PM = 15h, 8h PM = 20h!"
    },
    etapa2: [
      {
        id: "m8_e2_q1",
        enunciado: "1. Uma partida de vôlei durou 2 horas e 15 minutos. Quantos minutos ao todo durou essa partida?",
        opcoes: ["115 minutos", "135 minutos", "215 minutos", "125 minutos"],
        correta: 1,
        dica: "Cada hora tem 60 minutos. Então 2 horas têm 2 × 60 = 120 minutos. Depois some 15!",
        fiqueLigado: "2 h 15 min = (2 × 60) + 15 = 120 + 15 = 135 minutos."
      },
      {
        id: "m8_e2_q2",
        enunciado: "2. O treino de natação começou às 9h50min e terminou às 11h20min do mesmo dia. Qual foi a duração exata do treino?",
        opcoes: ["1h10min", "1h30min", "1h70min", "2h30min"],
        correta: 1,
        dica: "Use a linha do tempo: de 9h50 até 10h00 são 10 minutos; de 10h00 até 11h20 são 1h20min. Agora junte os dois intervalos!",
        fiqueLigado: "Completar a hora cheia é a estratégia mais rápida: 10 min (até 10h) + 1h20min (até 11h20) = 1h30min."
      },
      {
        id: "m8_e2_q3",
        enunciado: "3. Quantos segundos existem em meia hora (30 minutos)?",
        opcoes: ["300 segundos", "600 segundos", "1.800 segundos", "3.600 segundos"],
        correta: 2,
        dica: "1 minuto = 60 segundos. Multiplique 30 minutos por 60!",
        fiqueLigado: "1 hora tem 60 × 60 = 3.600 segundos. Meia hora (30 min) tem 30 × 60 = 1.800 segundos."
      }
    ],
    etapa3: [
      {
        id: "m8_e3_q1",
        saeb: "5M1.5",
        nivel: "N3.5",
        bloom: "Fácil",
        enunciado: "Em um relógio analógico à noite, o ponteiro das horas está entre o 8 e o 9, e o ponteiro dos minutos aponta exatamente para o 6. Que horas um relógio digital de 24h marca nesse instante?",
        opcoes: ["A) 08:06", "B) 20:06", "C) 20:30", "D) 21:30"],
        correta: 2,
        explicacao: "À noite, 8 horas equivalem a 20h (8 + 12). O ponteiro dos minutos no 6 indica 6 × 5 = 30 minutos: 20:30."
      },
      {
        id: "m8_e3_q2",
        saeb: "5M2.2",
        nivel: "N4.5",
        bloom: "Médio",
        enunciado: "Um ônibus saiu da rodoviária de Campinas às 13h45min e chegou a São Paulo às 15h25min. Quanto tempo durou a viagem?",
        opcoes: [
          "A) 1 hora e 20 minutos",
          "B) 1 hora e 40 minutos",
          "C) 2 horas e 20 minutos",
          "D) 2 horas e 40 minutos"
        ],
        correta: 1,
        explicacao: "De 13h45 às 14h00 são 15 min; de 14h00 às 15h25 são 1h25min. Total: 1h40min."
      },
      {
        id: "m8_e3_q3",
        saeb: "5M2.5",
        nivel: "N6.4",
        bloom: "Difícil",
        enunciado: "Rafael ouviu 3 músicas seguidas: a primeira com 3 min 40 s, a segunda com 4 min 35 s e a terceira com 2 min 45 s. Qual foi o tempo total de reprodução?",
        opcoes: [
          "A) 9 minutos e 120 segundos",
          "B) 10 minutos e 20 segundos",
          "C) 11 minutos exatos",
          "D) 11 minutos e 20 segundos"
        ],
        correta: 2,
        explicacao: "Minutos: 3 + 4 + 2 = 9 min. Segundos: 40 + 35 + 45 = 120 s = 2 min. Total: 9 + 2 = 11 minutos exatos."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Calculadora Sexagesimal e Conversor de Lazer (h/min/s)",
      instrucao: "Arraste os ponteiros do relógio analógico no Canvas e converta suas atividades de lazer para minutos e segundos!",
      metaMinima: 3
    }
  }
];

// ==================== 3º E 4º BIMESTRES ====================
window.MISSIONS_DATA.push(
  {
    id: 9,
    bimestre: 3,
    semanas: "Semanas 17 e 18 (Aulas 33 a 36)",
    titulo: "Medidas de comprimento, de massa e de capacidade",
    eixo: "Grandezas e Medidas",
    saeb: ["5M1.2", "5M2.1", "5M2.2"],
    niveisSaeb: ["N5.7", "N6.3", "N8.8"],
    bncc: ["EF03MA17", "EF03MA19", "EF03MA20", "EF05MA19"],
    canvasEngine: "time_measures",
    abertura: {
      contexto: "Se você medir a sua carteira usando o seu palmo e o professor medir usando o palmo dele, os números serão iguais? Foi por isso que a humanidade criou unidades padronizadas: o Metro (m), o Quilograma (kg) e o Litro (L)! Vamos medir na bancada e converter uma deliciosa receita de canjica nordestina!",
      questoesMobilizadoras: [
        "Por que medir com o palmo ou com passos pode gerar confusão no comércio ou na construção de uma casa?",
        "Quantos centímetros há em 1 metro? E quantos milímetros há em 1 centímetro na sua régua escolar?",
        "Nas embalagens da cozinha, o que significam 1 kg = 1.000 g e 1 L = 1.000 mL?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Guarde os fatores de conversão: 1 km = 1.000 m | 1 m = 100 cm = 1.000 mm | 1 cm = 10 mm | 1 kg = 1.000 g | 1 g = 1.000 mg | 1 L = 1.000 mL!",
      enunciado: "Na Bancada de Medidas e Culinária em Canvas, para preparar uma receita de canjica para a festa da escola usamos 1,5 L de leite de vaca e 400 mL de leite de coco. Qual é o volume total de líquidos em mililitros (mL)?",
      opcoes: [
        "A) 550 mL",
        "B) 1.540 mL",
        "C) 1.900 mL",
        "D) 5.500 mL"
      ],
      correta: 2,
      passoAPasso: [
        "1. Antes de somar, convertemos para a mesma unidade (mililitros): 1 L = 1.000 mL, então 1,5 L = 1,5 × 1.000 = 1.500 mL.",
        "2. Somamos com os 400 mL de leite de coco: 1.500 mL + 400 mL = 1.900 mL (Alternativa C)."
      ],
      fiqueLigado: "Nunca some medidas em unidades diferentes sem converter primeiro! O prefixo 'quilo' (km, kg) significa ×1.000, e o prefixo 'mili' (mm, mg, mL) significa a milésima parte (÷1.000)."
    },
    etapa2: [
      {
        id: "m9_e2_q1",
        enunciado: "1. Na régua milimetrada do laboratório, um lápis começa na marca 0 cm e termina na marca de 14,5 cm. Qual é o comprimento desse lápis em milímetros (mm)?",
        opcoes: ["14,5 mm", "145 mm", "1.450 mm", "104,5 mm"],
        correta: 1,
        dica: "Cada 1 cm tem 10 mm. Multiplique 14,5 por 10!",
        fiqueLigado: "1 cm = 10 mm -> 14,5 × 10 = 145 mm."
      },
      {
        id: "m9_e2_q2",
        enunciado: "2. Dona Tereza comprou 2 kg de milho de canjica e usou 650 g na primeira panela. Quantos gramas de milho ainda sobraram no pacote?",
        opcoes: ["1.350 g", "1.450 g", "350 g", "648 g"],
        correta: 0,
        dica: "Transforme 2 kg em gramas (2.000 g) e subtraia 650 g.",
        fiqueLigado: "2 kg = 2.000 g. Fazendo 2.000 g − 650 g = 1.350 g (ou 1,35 kg)."
      },
      {
        id: "m9_e2_q3",
        enunciado: "3. Quantos copos de 250 mL conseguimos encher completamente com uma garrafa de 2 litros de suco?",
        opcoes: ["4 copos", "6 copos", "8 copos", "10 copos"],
        correta: 2,
        dica: "Cada 1 litro (1.000 mL) enche 4 copos de 250 mL. E 2 litros?",
        fiqueLigado: "2 L = 2.000 mL. Dividindo 2.000 ÷ 250 = 8 copos."
      }
    ],
    etapa3: [
      {
        id: "m9_e3_q1",
        saeb: "5M1.2",
        nivel: "N5.7",
        bloom: "Fácil",
        enunciado: "Qual é a unidade de medida mais adequada para expressar a distância rodoviária entre Santa Bárbara d'Oeste e a capital São Paulo?",
        opcoes: ["A) Milímetro (mm)", "B) Centímetro (cm)", "C) Metro (m)", "D) Quilômetro (km)"],
        correta: 3,
        explicacao: "Grandes distâncias geográficas entre cidades são medidas em quilômetros (km)."
      },
      {
        id: "m9_e3_q2",
        saeb: "5M2.1",
        nivel: "N6.3",
        bloom: "Médio",
        enunciado: "Uma caminhonete pode transportar no máximo 1.200 kg de carga. Se já foram colocadas 3 caixas de 250 kg e 1 saco de 80.000 g, quantos quilogramas ainda podem ser colocados?",
        opcoes: ["A) 370 kg", "B) 450 kg", "C) 830 kg", "D) 350 kg"],
        correta: 0,
        explicacao: "80.000 g = 80 kg. Carga atual: (3 × 250) + 80 = 750 + 80 = 830 kg. Disponível: 1.200 − 830 = 370 kg."
      },
      {
        id: "m9_e3_q3",
        saeb: "5M2.2",
        nivel: "N8.8",
        bloom: "Difícil",
        enunciado: "Uma fita de cetim de 3,6 metros foi cortada em pedaços iguais de 40 centímetros para enfeitar lembrancinhas. Quantos pedaços foram obtidos?",
        opcoes: ["A) 6 pedaços", "B) 8 pedaços", "C) 9 pedaços", "D) 90 pedaços"],
        correta: 2,
        explicacao: "3,6 m = 360 cm. Dividindo 360 cm ÷ 40 cm = 9 pedaços."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Bancada de Medidas e Conversor de Receita de Canjica",
      instrucao: "Teste a régua milimetrada, a balança e os recipientes no Canvas para converter todas as medidas da receita culinária!",
      metaMinima: 3
    }
  },
  {
    id: 10,
    bimestre: 3,
    semanas: "Semanas 19 e 20 (Aulas 37 a 40)",
    titulo: "Perímetro de figuras planas",
    eixo: "Grandezas e Medidas",
    saeb: ["5M1.3", "5M2.3"],
    niveisSaeb: ["N7.3"],
    bncc: ["EF04MA20", "EF05MA20"],
    canvasEngine: "grid_cartesian",
    abertura: {
      contexto: "Vai cercar uma horta com tela, colocar rodapé no quarto ou contornar uma quadra correndo? Então você precisa medir o PERÍMETRO, que é a soma das medidas de todo o contorno da figura! Mas cuidado: se cada lado do quadradinho da planta baixa vale 2 metros na vida real, precisamos multiplicar pela escala!",
      questoesMobilizadoras: [
        "Qual é a diferença entre contar os quadradinhos de DENTRO de uma figura (área) e contar os segmentos da BORDA (perímetro)?",
        "Duas figuras diferentes no geoplano podem ter áreas diferentes e o mesmo perímetro?",
        "Por que os cantos da figura na malha têm dois segmentos de borda (um horizontal e um vertical)?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Conte apenas os segmentos EXTERNOS que formam o contorno da figura (nunca conte as linhas internas da malha!). Depois, verifique a escala: se 1 lado de quadradinho = 3 m, multiplique o total de lados por 3!",
      enunciado: "No Geoplano e Malha de Contorno em Canvas, desenhamos uma horta em formato de 'L' cujo contorno externo mede 16 lados de quadradinho. Se cada lado de quadradinho representa 2 metros na escala real, qual é o perímetro real da horta?",
      opcoes: [
        "A) 16 metros",
        "B) 24 metros",
        "C) 32 metros",
        "D) 64 metros"
      ],
      correta: 2,
      passoAPasso: [
        "1. Contamos todos os segmentos da borda externa da figura em L: são 16 unidades de lado.",
        "2. Aplicamos a escala indicada na legenda (cada segmento = 2 m): 16 × 2 m = 32 metros (Alternativa C)."
      ],
      fiqueLigado: "Perímetro = soma de todos os lados do contorno! Atenção à escala da malha: se 1 lado = k metros, então Perímetro Real = (nº de segmentos da borda) × k."
    },
    etapa2: [
      {
        id: "m10_e2_q1",
        enunciado: "1. Um campo de futebol society retangular mede 45 m de comprimento por 25 m de largura. Quantos metros um jogador percorre ao dar uma volta completa exatamente sobre as linhas laterais e de fundo?",
        opcoes: ["70 m", "115 m", "140 m", "1.125 m"],
        correta: 2,
        dica: "O retângulo tem 2 comprimentos (45 + 45) e 2 larguras (25 + 25).",
        fiqueLigado: "Perímetro do retângulo = 45 + 25 + 45 + 25 = 140 metros."
      },
      {
        id: "m10_e2_q2",
        enunciado: "2. Na malha quadriculada onde cada lado de quadradinho mede 5 cm, foi desenhado um quadrado de 4 quadradinhos de lado. Qual é o perímetro desse quadrado em centímetros?",
        opcoes: ["16 cm", "20 cm", "64 cm", "80 cm"],
        correta: 3,
        dica: "O contorno tem 4 × 4 = 16 lados de quadradinho. Como cada lado vale 5 cm, faça 16 × 5!",
        fiqueLigado: "Cada lado do quadrado mede 4 × 5 cm = 20 cm. Os 4 lados somam 4 × 20 cm = 80 cm!"
      },
      {
        id: "m10_e2_q3",
        enunciado: "3. Um retângulo de lados 6 cm e 2 cm tem perímetro de 16 cm. Qual quadrado abaixo tem exatamente o MESMO perímetro desse retângulo?",
        opcoes: [
          "Quadrado de lado 3 cm",
          "Quadrado de lado 4 cm",
          "Quadrado de lado 6 cm",
          "Quadrado de lado 8 cm"
        ],
        correta: 1,
        dica: "Divida o perímetro 16 cm pelos 4 lados iguais do quadrado.",
        fiqueLigado: "O quadrado de lado 4 cm também tem perímetro 4 × 4 = 16 cm (embora sua área seja 16 cm², maior que os 12 cm² do retângulo!)."
      }
    ],
    etapa3: [
      {
        id: "m10_e3_q1",
        saeb: "5M1.3",
        nivel: "N7.3",
        bloom: "Fácil",
        enunciado: "Um pentágono regular tem todos os seus 5 lados medindo 7 cm cada. Qual é o perímetro desse pentágono?",
        opcoes: ["A) 12 cm", "B) 28 cm", "C) 35 cm", "D) 49 cm"],
        correta: 2,
        explicacao: "Como os 5 lados são iguais a 7 cm, o perímetro é 5 × 7 = 35 cm."
      },
      {
        id: "m10_e3_q2",
        saeb: "5M2.3",
        nivel: "N7.3",
        bloom: "Médio",
        enunciado: "Na planta de uma praça desenhada em malha quadriculada, o contorno tem 22 lados de quadradinho. Se cada lado de quadradinho equivale a 3 metros, quantos metros de meio-fio serão necessários para contornar toda a praça?",
        opcoes: ["A) 22 m", "B) 25 m", "C) 44 m", "D) 66 m"],
        correta: 3,
        explicacao: "Multiplicando os 22 segmentos de contorno pela escala de 3 m: 22 × 3 = 66 metros."
      },
      {
        id: "m10_e3_q3",
        saeb: "5M2.3",
        nivel: "N7.3",
        bloom: "Difícil",
        enunciado: "Para cercar um terreno retangular com 3 voltas completas de arame farpado, foram gastos 240 metros de arame. Qual é o perímetro (1 volta) desse terreno?",
        opcoes: ["A) 60 m", "B) 80 m", "C) 120 m", "D) 720 m"],
        correta: 1,
        explicacao: "Se 3 voltas completas somam 240 m, então 1 volta (o perímetro) mede 240 ÷ 3 = 80 metros."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Geoplano Virtual e Lousa Criativa de Perímetro",
      instrucao: "Clique nas células da malha no Canvas para criar sua obra geométrica e veja o cálculo automático do perímetro em diferentes escalas!",
      metaMinima: 5
    }
  },
  {
    id: 11,
    bimestre: 3,
    semanas: "Semanas 21 e 22 (Aulas 41 a 44)",
    titulo: "Área de figuras planas",
    eixo: "Números e Medidas",
    saeb: ["5N2.2", "5M1.3", "5M2.4"],
    niveisSaeb: ["N1.1", "N5.3", "N6.6"],
    bncc: ["EF04MA21", "EF05MA08", "EF05MA20"],
    canvasEngine: "grid_cartesian",
    abertura: {
      contexto: "Quantos pisos cerâmicos cabem no chão da sala? Quantos metros quadrados (m²) terá a piscina com jardim? Enquanto o perímetro mede a borda, a ÁREA mede a superfície interna! E quando aparecem telhados de castelo inclinados (triângulos), basta lembrar: 2 meios-quadradinhos formam 1 quadradinho inteiro!",
      questoesMobilizadoras: [
        "Na atividade do castelo na malha quadriculada, como fazemos para somar as partes triangulares (metades de quadradinho)?",
        "Por que no Modo Daltonismo usamos hachuras (listras, pontinhos e xadrez) além das cores para identificar cada cômodo da planta baixa?",
        "Como calculamos rapidamente a área de um retângulo sem precisar contar de 1 em 1 quadradinho?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Regra de Ouro da Malha de Área: conte primeiro todos os quadradinhos INTEIROS (□ = 1 u²) e depois conte os triângulos de MEIA unidade (◢ = 0,5 u²). Cada par de triângulos (2 metades) vale 1 quadradinho inteiro!",
      enunciado: "No Canvas do Castelo e Planta Baixa acima, uma fachada desenhada na malha possui 18 quadradinhos inteiros e 6 triângulos de meio quadradinho (nos telhados das torres). Qual é a área total dessa figura em unidades de área (u²)?",
      opcoes: [
        "A) 18 u²",
        "B) 21 u²",
        "C) 24 u²",
        "D) 30 u²"
      ],
      correta: 1,
      passoAPasso: [
        "1. Quadradinhos inteiros: 18 u².",
        "2. Triângulos de meio quadradinho: são 6 metades -> 6 ÷ 2 = 3 quadradinhos inteiros (3 u²).",
        "3. Somando inteiros + metades: 18 + 3 = 21 u² (Alternativa B)."
      ],
      fiqueLigado: "1 quadradinho inteiro = 1 u². 2 metades (triângulos) = 1 u². E para qualquer retângulo: Área = Base × Altura (Comprimento × Largura)!"
    },
    etapa2: [
      {
        id: "m11_e2_q1",
        enunciado: "1. Na planta baixa de uma casa, o quarto retangular mede 4 metros de largura por 5 metros de comprimento. Qual é a área desse quarto em metros quadrados (m²)?",
        opcoes: ["9 m²", "18 m²", "20 m²", "25 m²"],
        correta: 2,
        dica: "Multiplique o comprimento pela largura: 5 m × 4 m.",
        fiqueLigado: "Área do retângulo = 5 m × 4 m = 20 m² (caberiam 20 quadrados de 1 m × 1 m no piso)."
      },
      {
        id: "m11_e2_q2",
        enunciado: "2. Um barco desenhado na malha quadriculada é composto por 10 quadradinhos inteiros no casco ena vela, mais 4 metades de quadradinho nas pontas. Qual é a área total do barco?",
        opcoes: ["11 quadradinhos", "12 quadradinhos", "14 quadradinhos", "18 quadradinhos"],
        correta: 1,
        dica: "4 metades formam quantos quadradinhos inteiros? (4 ÷ 2 = 2).",
        fiqueLigado: "10 inteiros + (4 ÷ 2) = 10 + 2 = 12 quadradinhos de área."
      },
      {
        id: "m11_e2_q3",
        enunciado: "3. Um terreno quadrado tem 10 m de lado (área total = 100 m²). Se construirmos nele uma piscina retangular de 6 m por 4 m, quantos metros quadrados sobrarão para o jardim e o deck?",
        opcoes: ["24 m²", "60 m²", "76 m²", "80 m²"],
        correta: 2,
        dica: "Calcule a área da piscina (6 × 4 = 24 m²) e subtraia da área total do terreno (100 m²).",
        fiqueLigado: "Área restante = Área do terreno (100 m²) − Área da piscina (24 m²) = 76 m²."
      }
    ],
    etapa3: [
      {
        id: "m11_e3_q1",
        saeb: "5M1.3",
        nivel: "N5.3",
        bloom: "Fácil",
        enunciado: "Uma figura na malha quadriculada (onde cada quadradinho vale 1 cm²) é formada por 14 quadradinhos inteiros e 8 metades de quadradinho. A área dessa figura é:",
        opcoes: ["A) 16 cm²", "B) 18 cm²", "C) 20 cm²", "D) 22 cm²"],
        correta: 1,
        explicacao: "8 metades equivalem a 4 quadradinhos inteiros. Total: 14 + 4 = 18 cm²."
      },
      {
        id: "m11_e3_q2",
        saeb: "5M2.4",
        nivel: "N6.6",
        bloom: "Médio",
        enunciado: "Para revestir uma parede retangular de 6 m de comprimento por 3 m de altura, quantos metros quadrados de azulejo serão necessários?",
        opcoes: ["A) 9 m²", "B) 12 m²", "C) 18 m²", "D) 36 m²"],
        correta: 2,
        explicacao: "Área do retângulo = 6 m × 3 m = 18 m²."
      },
      {
        id: "m11_e3_q3",
        saeb: "5N2.2",
        nivel: "N6.6",
        bloom: "Difícil",
        enunciado: "Dois irmãos querem dividir um salão retangular de 12 m por 8 m. O primeiro ficará com um espaço quadrado de 6 m de lado, e o segundo ficará com o restante. Qual será a área do segundo irmão?",
        opcoes: ["A) 36 m²", "B) 60 m²", "C) 72 m²", "D) 96 m²"],
        correta: 1,
        explicacao: "Área total = 12 × 8 = 96 m². Espaço quadrado = 6 × 6 = 36 m². Restante = 96 − 36 = 60 m²."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Projeto de Piscina com Jardim em m² (Quadrados e Metades)",
      instrucao: "No Canvas de Área, alterne entre quadrados inteiros (1 m²) e meios-quadrados (0,5 m²) com texturas acessíveis para projetar a piscina e o jardim!",
      metaMinima: 6
    }
  },
  {
    id: 12,
    bimestre: 3,
    semanas: "Semanas 23 e 24 (Aulas 45 a 48)",
    titulo: "Tabelas e gráficos",
    eixo: "Números e Estatística",
    saeb: ["5N2.1", "5N2.3", "5E1.2", "5E1.3", "5E1.4", "5E1.5", "5E1.6", "5E2.1", "5E2.2"],
    niveisSaeb: ["N2.2", "N4.19", "N6.23"],
    bncc: ["EF03MA26", "EF04MA27", "EF05MA07", "EF05MA24", "EF05MA25"],
    canvasEngine: "charts_fractions_numberline",
    abertura: {
      contexto: "Qual é o esporte favorito do 6º ano? Quando fazemos uma pesquisa amostral na turma e organizamos os votos em uma tabela de dupla entrada (Meninas × Meninos), podemos transformar os números em gráficos de colunas, barras, linhas ou setores (pizza) para enxergar padrões num piscar de olhos!",
      questoesMobilizadoras: [
        "Para que servem o título, a fonte de pesquisa e a legenda em uma tabela ou gráfico?",
        "Quando é melhor usar um gráfico de colunas (comparar categorias) e quando é melhor usar um gráfico de linhas (acompanhar evolução no tempo)?",
        "Por que os gráficos do nosso laboratório trazem valores numéricos e padrões hachurados no topo das barras?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Para ler uma Tabela de Dupla Entrada: cruze a LINHA com a COLUNA desejada! E para achar o total geral, some os totais de todas as linhas (ou de todas as colunas).",
      enunciado: "Na pesquisa de esportes da turma exibida no Estúdio de Gráficos em Canvas: Vôlei teve 12 votos (7 meninas e 5 meninos), Futsal teve 15 votos (6 meninas e 9 meninos) e Basquete teve 9 votos (5 meninas e 4 meninos). Qual é a diferença entre o total de votos do esporte mais votado e o menos votado, e quantos alunos votaram ao todo?",
      opcoes: [
        "A) Diferença de 3 votos e total de 36 alunos",
        "B) Diferença de 6 votos e total de 36 alunos",
        "C) Diferença de 6 votos e total de 30 alunos",
        "D) Diferença de 5 votos e total de 36 alunos"
      ],
      correta: 1,
      passoAPasso: [
        "1. Esporte mais votado: Futsal (15 votos). Esporte menos votado: Basquete (9 votos).",
        "2. Diferença entre o mais e o menos votado: 15 − 9 = 6 votos.",
        "3. Total de alunos participantes: 12 (Vôlei) + 15 (Futsal) + 9 (Basquete) = 36 alunos (Alternativa B)."
      ],
      fiqueLigado: "Todo gráfico ou tabela precisa de: Título, Fonte dos dados, Eixos/Categorias e Escala! No gráfico de setores (pizza), o círculo inteiro representa 100% dos pesquisados."
    },
    etapa2: [
      {
        id: "m12_e2_q1",
        enunciado: "1. Na mesma tabela de esportes (Meninas: 7 Vôlei, 6 Futsal, 5 Basquete | Meninos: 5 Vôlei, 9 Futsal, 4 Basquete), quantas meninas participaram da pesquisa ao todo?",
        opcoes: ["15 meninas", "18 meninas", "20 meninas", "36 meninas"],
        correta: 1,
        dica: "Some apenas os votos da linha/coluna das Meninas: 7 + 6 + 5.",
        fiqueLigado: "Total de meninas = 7 + 6 + 5 = 18 meninas (exatamente a metade da turma de 36 alunos!)."
      },
      {
        id: "m12_e2_q2",
        enunciado: "2. Um gráfico de linhas mostra a temperatura em Campinas ao longo do dia: 6h (14 °C), 10h (21 °C), 14h (29 °C) e 18h (22 °C). Qual foi a variação (aumento) de temperatura entre as 6h e as 14h?",
        opcoes: ["7 °C", "8 °C", "15 °C", "29 °C"],
        correta: 2,
        dica: "Subtraia a temperatura das 6h (14 °C) da temperatura máxima das 14h (29 °C).",
        fiqueLigado: "Variação = Valor final − Valor inicial = 29 °C − 14 °C = 15 °C de aumento."
      },
      {
        id: "m12_e2_q3",
        enunciado: "3. Em um gráfico de setores (pizza) com 40 alunos, a fatia dos que preferem leitura de quadrinhos ocupa exatamente um quarto (1/4) do círculo. Quantos alunos escolheram quadrinhos?",
        opcoes: ["4 alunos", "10 alunos", "20 alunos", "25 alunos"],
        correta: 1,
        dica: "Um quarto (1/4 ou 25%) do círculo significa dividir o total de 40 alunos por 4!",
        fiqueLigado: "1/4 do círculo = 25% do total -> 40 ÷ 4 = 10 alunos."
      }
    ],
    etapa3: [
      {
        id: "m12_e3_q1",
        saeb: "5E1.2",
        nivel: "N2.2",
        bloom: "Fácil",
        enunciado: "Em um gráfico de colunas sobre coleta seletiva na escola, a coluna de Papel marca 320 kg, Plástico marca 210 kg, Metal marca 150 kg e Vidro marca 90 kg. Qual material teve a maior arrecadação?",
        opcoes: ["A) Vidro", "B) Metal", "C) Plástico", "D) Papel"],
        correta: 3,
        explicacao: "A maior coluna corresponde ao Papel, com 320 kg arrecadados."
      },
      {
        id: "m12_e3_q2",
        saeb: "5E2.1",
        nivel: "N4.19",
        bloom: "Médio",
        enunciado: "Considerando os dados da coleta seletiva (Papel: 320 kg, Plástico: 210 kg, Metal: 150 kg, Vidro: 90 kg), quantos quilogramas o Papel arrecadou a mais do que Plástico e Vidro juntos?",
        opcoes: ["A) 20 kg", "B) 110 kg", "C) 230 kg", "D) 300 kg"],
        correta: 0,
        explicacao: "Plástico + Vidro = 210 + 90 = 300 kg. Papel (320 kg) − 300 kg = 20 kg a mais."
      },
      {
        id: "m12_e3_q3",
        saeb: "5E2.2",
        nivel: "N6.23",
        bloom: "Difícil",
        enunciado: "Uma biblioteca registrou os empréstimos do trimestre em uma tabela de dupla entrada: 6º Ano A (45 romances e 38 aventuras) e 6º Ano B (52 romances e 35 aventuras). Qual foi o total geral de livros emprestados às duas turmas?",
        opcoes: ["A) 83 livros", "B) 97 livros", "C) 160 livros", "D) 170 livros"],
        correta: 3,
        explicacao: "6º A = 45 + 38 = 83; 6º B = 52 + 35 = 87. Total geral = 83 + 87 = 170 livros."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Pesquisa Amostral e Gerador de Gráficos (Colunas, Linhas e Setores)",
      instrucao: "Altere os votos da pesquisa amostral da turma e alterne entre gráfico de Colunas, Linhas e Setores no Canvas com padrões acessíveis!",
      metaMinima: 3
    }
  },

  // ==================== 4º BIMESTRE ====================
  {
    id: 13,
    bimestre: 4,
    semanas: "Semanas 25 e 26 (Aulas 49 a 52)",
    titulo: "Números racionais",
    eixo: "Números e Probabilidade",
    saeb: ["5N1.1", "5N1.8", "5N1.9", "5N2.3", "5N2.7", "5E2.3"],
    niveisSaeb: ["N3.6", "N4.15", "N5.17", "N6.7", "N6.14"],
    bncc: ["EF05MA01", "EF05MA03", "EF05MA04", "EF05MA06", "EF05MA07", "EF05MA23"],
    canvasEngine: "charts_fractions_numberline",
    abertura: {
      contexto: "Hora do lanche coletivo com empatia e justiça! Se a nossa turma de 30 alunos vai repartir igualmente 5 L de suco, 1 bolo e 60 pães, cada estudante receberá 2 pães inteiros (60/30 = 2), mas que fração do bolo (1/30) e do suco (5/30 = 1/6 L ≈ 0,167 L) caberá a cada um? Um mesmo número racional pode vestir três roupas diferentes: Fração, Decimal e Porcentagem!",
      simuladorPartilha: {
        ativo: true,
        sucoLitros: 5,
        bolos: 1,
        paes: 60,
        alunosPadrao: 30
      },
      questoesMobilizadoras: [
        "Na partilha de 5 L de suco, 1 bolo e 60 pães para 30 alunos, por que a divisão dos pães dá um número natural exato (2) e a do bolo e do suco precisam de frações ou decimais?",
        "Como podemos estimar rapidamente no olho se uma parte pintada da figura é maior, menor ou igual à metade (50%)?",
        "Quando dizemos que 3/4 = 0,75 = 75%, estamos falando de três valores diferentes ou do MESMO número racional?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Estratégia DUA de Estimativa: primeiro compare com a metade (50% = 1/2)! Como 40% é MENOR que 50%, descarte de cara as figuras que têm a metade ou mais da metade pintada! Depois, lembre-se: 40% = 40/100 = 4/10 = 0,4 = 2/5.",
      enunciado: "Problema da Helena (Livro p. 107): Helena precisa identificar qual das 4 figuras subdivididas no Canvas acima (com cores, hachuras e rótulos acessíveis) tem exatamente 40% de sua área total pintada: Figura A (2/4 pintados), Figura B (2/5 pintados), Figura C (5/8 pintados) ou Figura D (3/4 pintados). Qual figura Helena deve escolher?",
      opcoes: [
        "A) Figura A (2/4 pintados = 1/2 = 50%)",
        "B) Figura B (2/5 pintados = 40/100 = 0,4 = 40%)",
        "C) Figura C (5/8 pintados = 0,625 = 62,5%)",
        "D) Figura D (3/4 pintados = 0,75 = 75%)"
      ],
      correta: 1,
      passoAPasso: [
        "1. Estimativa rápida pela metade (50%): 40% é menor que a metade. A Figura A tem exatamente a metade (2/4 = 50%), e as Figuras C (5/8) e D (3/4) têm mais da metade pintada!",
        "2. Transformando 40% em fração centesimal e decimal: 40% = 40/100 = 0,4.",
        "3. Simplificando 40/100 (dividindo numerador e denominador por 20): 40 ÷ 20 = 2 e 100 ÷ 20 = 5 -> fração irredutível 2/5.",
        "4. Na Figura B, há 2 partes pintadas de um total de 5 partes iguais (2/5 = 40%). Gabarito: Alternativa B!"
      ],
      fiqueLigado: "Simplificação até a forma irredutível (Exemplo do livro): na fração 6/8, dividimos numerador e denominador por 2 -> 3/4 (forma irredutível). Dividindo 6 ÷ 8 (ou 3 ÷ 4) obtemos o decimal 0,75, que equivale a 75/100 = 75%!"
    },
    etapa2: [
      {
        id: "m13_e2_q1",
        enunciado: "1. (N4.15 / N5.17) Em uma bandeja há 5 frutas (3 maçãs e 2 peras), e ao lado há um vitral octogonal (8 partes iguais) com 6 partes coloridas. Quais frações representam, respectivamente, as maçãs no conjunto de frutas e a parte colorida do octógono na forma irredutível?",
        opcoes: [
          "3/5 e 3/4",
          "3/2 e 6/8",
          "2/5 e 3/4",
          "3/5 e 1/4"
        ],
        correta: 0,
        dica: "Nas frutas: 3 maçãs em um total de 5 frutas (3/5). No octógono: 6/8 simplificado por 2 dá quanto?",
        fiqueLigado: "3 em 5 frutas = 3/5 (60%). E no polígono de 8 partes: 6/8 = 3/4 (75%) na forma irredutível!"
      },
      {
        id: "m13_e2_q2",
        enunciado: "2. (5N1.9 / N6.14) Sem apoio de figuras, qual das frações abaixo é equivalente à fração 3/5?",
        opcoes: ["6/15", "9/10", "12/20", "5/3"],
        correta: 2,
        dica: "Multiplique o numerador (3) e o denominador (5) pelo mesmo número natural (por exemplo, por 4).",
        fiqueLigado: "Multiplicando numerador e denominador por 4: (3 × 4) / (5 × 4) = 12/20 (ambas valem 0,6 = 60%)."
      },
      {
        id: "m13_e2_q3",
        enunciado: "3. (5N2.3 / N6.7) Em uma prova de salto em distância, Marcos saltou 4,25 metros e Lucas saltou 3,8 metros. Qual foi a diferença, em metros, entre os dois saltos?",
        opcoes: ["0,45 m", "1,45 m", "0,87 m", "3,87 m"],
        correta: 0,
        dica: "Alinhe vírgula embaixo de vírgula e iguale as casas decimais: 4,25 − 3,80.",
        fiqueLigado: "Igualando as casas decimais (3,8 = 3,80): 4,25 − 3,80 = 0,45 m."
      },
      {
        id: "m13_e2_q4",
        enunciado: "4. (5E2.3) Uma roleta de sorteio é dividida em 10 setores iguais numerados de 1 a 10, sendo 4 setores azuis (listrados), 3 verdes (pontilhados) e 3 laranjas (xadrez). Qual é a probabilidade de a seta parar em um setor azul?",
        opcoes: [
          "3/10 = 0,3 = 30%",
          "4/10 = 2/5 = 0,4 = 40%",
          "4/6 = 2/3",
          "1/4 = 0,25 = 25%"
        ],
        correta: 1,
        dica: "Probabilidade = (casos favoráveis) / (total de casos possíveis equiprováveis).",
        fiqueLigado: "São 4 setores azuis em 10 possíveis: P = 4/10 = 2/5 = 0,4 = 40%."
      }
    ],
    etapa3: [
      {
        id: "m13_e3_q1",
        saeb: "5N1.8",
        nivel: "N5.17",
        bloom: "Fácil",
        enunciado: "Um dodecágono regular (polígono de 12 lados) foi dividido em 12 triângulos iguais a partir do centro, e 9 deles foram hachurados. Que fração irredutível e que porcentagem representam a parte hachurada?",
        opcoes: [
          "A) 9/12 -> 1/3 (33,3%)",
          "B) 9/12 -> 3/4 (75%)",
          "C) 3/12 -> 1/4 (25%)",
          "D) 9/10 -> 90%"
        ],
        correta: 1,
        explicacao: "Simplificando 9/12 por 3 obtemos 3/4, que equivale a 0,75 ou 75%."
      },
      {
        id: "m13_e3_q2",
        saeb: "5N1.9",
        nivel: "N6.14",
        bloom: "Médio",
        enunciado: "Dos 40 estudantes de uma turma de 6º ano, 16 participam do clube de robótica. A razão entre os participantes de robótica e o total da turma, na forma irredutível e decimal, é:",
        opcoes: [
          "A) 1/4 = 0,25",
          "B) 2/5 = 0,4",
          "C) 3/5 = 0,6",
          "D) 4/8 = 0,5"
        ],
        correta: 1,
        explicacao: "Simplificando 16/40 por 8: (16 ÷ 8) / (40 ÷ 8) = 2/5 = 0,4 (ou 40%)."
      },
      {
        id: "m13_e3_q3",
        saeb: "5N2.3",
        nivel: "N6.7",
        bloom: "Médio",
        enunciado: "Uma garrafa térmica continha 2,5 litros de água. Foram consumidos 0,85 litro pela manhã. Quantos litros de água restaram na garrafa?",
        opcoes: ["A) 1,35 L", "B) 1,65 L", "C) 1,75 L", "D) 2,35 L"],
        correta: 1,
        explicacao: "Igualando as casas decimais: 2,50 − 0,85 = 1,65 litro."
      },
      {
        id: "m13_e3_q4",
        saeb: "5E2.3",
        nivel: "N6.14",
        bloom: "Difícil",
        enunciado: "Em uma urna há 20 bolas idênticas ao tato: 5 vermelhas, 8 amarelas e 7 brancas. Retirando-se uma bola ao acaso, qual é a probabilidade de ela ser vermelha?",
        opcoes: [
          "A) 5/20 = 1/4 = 25%",
          "B) 5/15 = 1/3",
          "C) 1/5 = 20%",
          "D) 8/20 = 40%"
        ],
        correta: 0,
        explicacao: "São 5 bolas vermelhas em um total de 20 bolas: 5/20 = 1/4 = 0,25 = 25%."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Construtor de Mosaico Fracionário e Roleta de Probabilidade",
      instrucao: "Divida o polígono em partes iguais, pinte setores com hachuras acessíveis e gire a roleta equiprovável para gerar o card completo (Fração Irredutível, Decimal e Porcentagem)!",
      metaMinima: 4
    }
  },
  {
    id: 14,
    bimestre: 4,
    semanas: "Semanas 27 e 28 (Aulas 53 a 56)",
    titulo: "Números racionais e o dinheiro",
    eixo: "Números e Medidas",
    saeb: ["5N2.3", "5N2.4", "5M1.6", "5M2.6"],
    niveisSaeb: ["N3.4", "N3.7", "N4.3", "N4.8", "N5.6", "N5.9", "N5.12", "N6.16", "N6.17"],
    bncc: ["EF04MA25", "EF05MA07", "EF05MA08"],
    canvasEngine: "charts_fractions_numberline",
    abertura: {
      contexto: "Educação financeira e consumo consciente na palma da mão! No nosso sistema monetário (Real - R$), 100 centavos formam 1 real (R$ 1,00), 4 moedas de R$ 0,25 formam R$ 1,00 e 2 moedas de R$ 0,50 também! Vamos operar o PDV (Caixa Registradora MathLab) para calcular compras, trocos em moedas e prestações sem juros!",
      questoesMobilizadoras: [
        "Qual é a diferença entre comprar algo por impulso e praticar o consumo ético e consciente?",
        "Quantas moedas de R$ 0,25 (um quarto de real) e quantas moedas de R$ 0,05 (cinco centavos) são necessárias para formar R$ 1,00?",
        "Quando um produto é vendido 'com entrada + 4 prestações iguais sem juros', que operações fazemos para achar o valor de cada prestação?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Para somar ou subtrair valores em Reais (R$): alinhe sempre VÍRGULA EMBAIXO DE VÍRGULA (Reais com Reais, décimos/dezenas de centavos com décimos, centésimos com centésimos)!",
      enunciado: "No Caixa Registradora MathLab (PDV) em Canvas, Bia comprou 3 cadernos de R$ 12,40 cada e 1 estojo de R$ 15,80. Ela pagou com uma nota de R$ 50,00 e uma nota de R$ 10,00 (Total pago: R$ 60,00). Qual foi o valor total da compra e quanto ela recebeu de troco?",
      opcoes: [
        "A) Compra de R$ 52,00 e troco de R$ 8,00",
        "B) Compra de R$ 53,00 e troco de R$ 7,00",
        "C) Compra de R$ 28,20 e troco de R$ 31,80",
        "D) Compra de R$ 53,20 e troco de R$ 6,80"
      ],
      correta: 1,
      passoAPasso: [
        "1. Multiplicamos os 3 cadernos pelo preço unitário: 3 × R$ 12,40 = R$ 37,20.",
        "2. Somamos com o estojo alinhando a vírgula: R$ 37,20 + R$ 15,80 = R$ 53,00.",
        "3. Subtraímos do valor entregue no caixa (R$ 60,00): R$ 60,00 − R$ 53,00 = R$ 7,00 de troco (Alternativa B)."
      ],
      fiqueLigado: "Troca de moedas por notas: 2 moedas de R$ 0,50 = R$ 1,00 | 4 moedas de R$ 0,25 = R$ 1,00 | 20 moedas de R$ 0,05 = R$ 1,00. E em compras parceladas com entrada: (Preço Total − Entrada) ÷ Número de Parcelas = Valor de cada prestação!"
    },
    etapa2: [
      {
        id: "m14_e2_q1",
        enunciado: "1. (N3.4 / N4.3 / N5.6) Cauã abriu seu cofrinho e contou: 6 moedas de R$ 1,00, 8 moedas de R$ 0,50, 12 moedas de R$ 0,25 e 20 moedas de R$ 0,05. Se ele trocar todas essas moedas por uma única cédula de Real no comércio, qual cédula ele receberá?",
        opcoes: [
          "Uma nota de R$ 10,00",
          "Uma nota de R$ 20,00",
          "Duas notas de R$ 5,00 (R$ 10,00)",
          "Uma nota de R$ 10,00 e duas notas de R$ 2,00 (Total: R$ 14,00)"
        ],
        correta: 3,
        dica: "Calcule por tipo de moeda: 6×1,00 = R$ 6,00 | 8×0,50 = R$ 4,00 | 12×0,25 = R$ 3,00 | 20×0,05 = R$ 1,00. Agora some tudo!",
        fiqueLigado: "6,00 + 4,00 + 3,00 + 1,00 = R$ 14,00 (equivalente a 1 cédula de R$ 10,00 e 2 cédulas de R$ 2,00)."
      },
      {
        id: "m14_e2_q2",
        enunciado: "2. (N4.8 / N5.9) Na feira livre, o quilograma do tomate custa R$ 6,75 e a dúzia de bananas custa R$ 8,50. Quanto Dona Lúcia gastou ao comprar 2 kg de tomate e 1 dúzia de bananas?",
        opcoes: ["R$ 15,25", "R$ 21,00", "R$ 22,00", "R$ 23,75"],
        correta: 2,
        dica: "Multiplique primeiro 2 × R$ 6,75 = R$ 13,50 e depois some R$ 8,50.",
        fiqueLigado: "2 × R$ 6,75 = R$ 13,50. Somando R$ 13,50 + R$ 8,50 = R$ 22,00."
      },
      {
        id: "m14_e2_q3",
        enunciado: "3. (N6.16) Uma bicicleta custa R$ 680,00 à vista, ou pode ser comprada a prazo sem juros com uma entrada de R$ 140,00 mais 6 prestações mensais iguais. Qual é o valor de cada prestação?",
        opcoes: ["R$ 80,00", "R$ 90,00", "R$ 113,33", "R$ 100,00"],
        correta: 1,
        dica: "Passo 1: subtraia a entrada do valor total (680 − 140 = 540). Passo 2: divida o saldo por 6 parcelas!",
        fiqueLigado: "Saldo a parcelar = R$ 680,00 − R$ 140,00 = R$ 540,00. Valor da parcela = R$ 540,00 ÷ 6 = R$ 90,00."
      }
    ],
    etapa3: [
      {
        id: "m14_e3_q1",
        saeb: "5M1.6",
        nivel: "N4.3",
        bloom: "Fácil",
        enunciado: "Para dar um troco exato de R$ 3,50 usando apenas moedas de R$ 0,25, quantas moedas o caixa precisará entregar?",
        opcoes: ["A) 7 moedas", "B) 10 moedas", "C) 12 moedas", "D) 14 moedas"],
        correta: 3,
        explicacao: "Cada R$ 1,00 equivale a 4 moedas de R$ 0,25. Em R$ 3,50 há (3 × 4) + 2 = 14 moedas de R$ 0,25."
      },
      {
        id: "m14_e3_q2",
        saeb: "5M2.6",
        nivel: "N5.12",
        bloom: "Médio",
        enunciado: "Pedro tinha R$ 45,00 na carteira. Comprou um livro por R$ 27,90 e um marcador de página por R$ 4,35. Quanto sobrou para Pedro?",
        opcoes: ["A) R$ 12,75", "B) R$ 13,25", "C) R$ 13,75", "D) R$ 32,25"],
        correta: 0,
        explicacao: "Total gasto: 27,90 + 4,35 = R$ 32,25. Troco/sobra: 45,00 − 32,25 = R$ 12,75."
      },
      {
        id: "m14_e3_q3",
        saeb: "5N2.4",
        nivel: "N6.16",
        bloom: "Difícil",
        enunciado: "Um notebook usado foi anunciado por R$ 1.450,00. O comprador deu R$ 250,00 de entrada no ato da compra e dividiu o restante em 5 parcelas iguais sem juros. Qual foi o valor de cada parcela?",
        opcoes: ["A) R$ 220,00", "B) R$ 240,00", "C) R$ 290,00", "D) R$ 340,00"],
        correta: 1,
        explicacao: "Saldo restante: 1.450 − 250 = R$ 1.200,00. Dividindo em 5 parcelas: 1.200 ÷ 5 = R$ 240,00."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: PDV e Carteira Digital MathLab",
      instrucao: "Adicione produtos à cesta no PDV em Canvas, clique nas cédulas e moedas de Real para pagar, confira o troco e simule o parcelamento sem juros!",
      metaMinima: 3
    }
  },
  {
    id: 15,
    bimestre: 4,
    semanas: "Semanas 29 e 30 (Aulas 57 a 60)",
    titulo: "Porcentagem",
    eixo: "Números e Medidas",
    saeb: ["5N2.7", "5M2.6"],
    niveisSaeb: ["N4.16", "N6.10", "N6.11", "N6.12"],
    bncc: ["EF04MA25", "EF05MA06"],
    canvasEngine: "charts_fractions_numberline",
    abertura: {
      contexto: "'LIQUIDAÇÃO: 25% E 50% DE DESCONTO!' Você sabe o que o símbolo % ('por cento') realmente quer dizer? Significa 'a cada 100'! E o melhor truque de cálculo mental do Prof. Alê Chocolate é conectar as porcentagens mais famosas às frações que você já domina: 50% é a metade (÷2), 25% é a quarta parte (÷4), 75% são três quartos (3 × 25%) e 10% é a décima parte (÷10)!",
      questoesMobilizadoras: [
        "Por que calcular 50% de qualquer valor é exatamente a mesma coisa que dividir esse valor por 2?",
        "Se você já sabe quanto é 50% (metade) de um preço, como pode achar 25% (a metade da metade) e 75% (50% + 25%) de cabeça?",
        "Um desconto de 25% em um tênis de R$ 200,00 faz o preço aumentar ou diminuir? Qual passa a ser o valor final a pagar?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Painel de Cálculo Mental (EF05MA06): 100% = Inteiro | 50% = 1/2 (÷ 2) | 25% = 1/4 (÷ 4, ou metade de 50%) | 75% = 3/4 (3 × 25%, ou 50% + 25%) | 10% = 1/10 (÷ 10)!",
      enunciado: "Na Régua de Descontos em Canvas, uma mochila escolar custa R$ 160,00 (100% do valor). Se a loja oferece um cupom de 25% de desconto para pagamento à vista, de quantos reais é o desconto e qual é o preço final a pagar?",
      opcoes: [
        "A) Desconto de R$ 25,00 e preço final de R$ 135,00",
        "B) Desconto de R$ 40,00 e preço final de R$ 120,00",
        "C) Desconto de R$ 80,00 e preço final de R$ 80,00",
        "D) Desconto de R$ 16,00 e preço final de R$ 144,00"
      ],
      correta: 1,
      passoAPasso: [
        "1. Associamos 25% à fração 25/100 = 1/4 (quarta parte do total).",
        "2. Calculamos a quarta parte de R$ 160,00: 160 ÷ 4 = R$ 40,00 de desconto (ou metade de 160 = 80, e metade de 80 = 40!).",
        "3. Subtraímos o desconto do preço original: R$ 160,00 − R$ 40,00 = R$ 120,00 (que corresponde aos 75% restantes! Alternativa B)."
      ],
      fiqueLigado: "Tabela Mágica das Porcentagens: 10% = 1/10 (÷10) | 25% = 1/4 (÷4) | 50% = 1/2 (÷2) | 75% = 3/4 (3 × quarta parte) | 100% = 1 inteiro! Você também pode abrir a Calculadora Pedagógica no botão Andaimes (EF05MA06) para conferir suas estimativas."
    },
    etapa2: [
      {
        id: "m15_e2_q1",
        enunciado: "1. (N4.16 / N6.10 / N6.12) Em uma escola com 480 alunos, exatamente 50% utilizam transporte público ou bicicleta para chegar às aulas. Quantos alunos isso representa e qual fração corresponde a 50%?",
        opcoes: [
          "120 alunos (1/4)",
          "240 alunos (1/2)",
          "360 alunos (3/4)",
          "48 alunos (1/10)"
        ],
        correta: 1,
        dica: "50% = 50/100 = 1/2 (metade). Qual é a metade de 480?",
        fiqueLigado: "50% é sempre a metade (1/2): 480 ÷ 2 = 240 alunos."
      },
      {
        id: "m15_e2_q2",
        enunciado: "2. (N6.11) Uma camiseta que custava R$ 80,00 entrou em promoção com 10% de desconto na etiqueta laranja, ou 25% de desconto levando duas peças. Quanto vale 10% de R$ 80,00 e quanto vale 25% de R$ 80,00?",
        opcoes: [
          "10% = R$ 8,00 e 25% = R$ 20,00",
          "10% = R$ 10,00 e 25% = R$ 25,00",
          "10% = R$ 8,00 e 25% = R$ 40,00",
          "10% = R$ 18,00 e 25% = R$ 20,00"
        ],
        correta: 0,
        dica: "Para 10% divida 80 por 10; para 25% divida 80 por 4!",
        fiqueLigado: "10% de 80 = 80 ÷ 10 = R$ 8,00. E 25% de 80 = 80 ÷ 4 = R$ 20,00."
      },
      {
        id: "m15_e2_q3",
        enunciado: "3. (5M2.6) A bateria do tablet da biblioteca está com 75% de carga. Se a duração total (100%) dessa bateria é de 12 horas, quantas horas de carga ainda restam?",
        opcoes: ["3 horas", "6 horas", "9 horas", "10 horas"],
        correta: 2,
        dica: "Ache primeiro 25% (quarta parte de 12 h -> 12 ÷ 4 = 3 h) e multiplique por 3 para achar 75% (três quartos)!",
        fiqueLigado: "25% de 12 h = 3 h. Como 75% = 3 × 25% (três quartos), temos 3 × 3 h = 9 horas!"
      }
    ],
    etapa3: [
      {
        id: "m15_e3_q1",
        saeb: "5N2.7",
        nivel: "N6.10",
        bloom: "Fácil",
        enunciado: "Em um teatro com 360 lugares, 50% dos ingressos foram vendidos no primeiro dia. Quantos ingressos foram vendidos nesse dia?",
        opcoes: ["A) 90 ingressos", "B) 160 ingressos", "C) 180 ingressos", "D) 270 ingressos"],
        correta: 2,
        explicacao: "50% equivale à metade do total: 360 ÷ 2 = 180 ingressos."
      },
      {
        id: "m15_e3_q2",
        saeb: "5N2.7",
        nivel: "N6.11",
        bloom: "Médio",
        enunciado: "De uma caixa com 120 laranjas, 25% foram usadas para fazer suco. Quantas laranjas SOBRARAM na caixa?",
        opcoes: ["A) 30 laranjas", "B) 60 laranjas", "C) 90 laranjas", "D) 95 laranjas"],
        correta: 2,
        explicacao: "Foram usadas 25% de 120 = 120 ÷ 4 = 30 laranjas. Sobraram 120 − 30 = 90 laranjas (75%)."
      },
      {
        id: "m15_e3_q3",
        saeb: "5M2.6",
        nivel: "N6.12",
        bloom: "Difícil",
        enunciado: "Um jogo de tabuleiro custa R$ 120,00. Na Loja A, ele tem 25% de desconto. Na Loja B, ele tem R$ 35,00 de desconto fixo. Em qual loja o jogo sai mais barato e qual é o preço nessa loja?",
        opcoes: [
          "A) Na Loja A, custando R$ 90,00",
          "B) Na Loja B, custando R$ 85,00",
          "C) Na Loja A, custando R$ 95,00",
          "D) Nas duas lojas o preço final é igual a R$ 90,00"
        ],
        correta: 1,
        explicacao: "Na Loja A, 25% de 120 = R$ 30,00 de desconto (preço final R$ 90,00). Na Loja B, 120 − 35 = R$ 85,00 (mais barato!)."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Vitrine de Descontos e Régua de Proporcionalidade (10%, 25%, 50%, 75%)",
      instrucao: "Escolha os produtos da loja virtual no Canvas e aplique os cupons de 10%, 25%, 50% e 75% para visualizar a fração cortada e o valor final!",
      metaMinima: 4
    }
  },
  {
    id: 16,
    bimestre: 4,
    semanas: "Semanas 31 e 32 (Aulas 61 a 64)",
    titulo: "Reta numérica com naturais e decimais",
    eixo: "Números e Álgebra",
    saeb: ["5N1.3", "5A1.1", "5A1.2", "5A1.3"],
    niveisSaeb: ["N4.9", "N4.18", "N5.14", "N5.15", "N6.15"],
    bncc: ["EF03MA10", "EF04MA11", "EF05MA02"],
    canvasEngine: "charts_fractions_numberline",
    abertura: {
      contexto: "Chegamos à Missão 16! Onde encontramos retas numéricas na vida real? Na régua escolar, no termômetro, na fita métrica e nas linhas do tempo da História! Quando damos um 'zoom óptico' entre dois números naturais consecutivos (como entre 3 e 4) e dividimos o espaço em 10 partes iguais, revelamos os DÉCIMOS (3,1; 3,2; ...; 3,5 na metade; ...; 3,9)!",
      questoesMobilizadoras: [
        "Na reta numérica horizontal, os números aumentam para a direita ou para a esquerda?",
        "Se entre o número 2 e o número 3 existe apenas UMA marcação bem no meio do intervalo, que número decimal mora nesse ponto?",
        "Se dois números visíveis na reta são 2.010 e 2.020 e há 10 subdivisões iguais entre eles, quanto vale cada tracinho?"
      ]
    },
    etapa1: {
      alertaEstrategia: "Fórmula infalível para descobrir o passo (intervalo) de cada tracinho na reta numérica: Passo = (Valor Final − Valor Inicial) ÷ (Número de subdivisões entre eles)!",
      enunciado: "Na Reta Numérica com Lupa Decimal em Canvas, observe o intervalo entre os números naturais consecutivos 4 e 5:- Se dividirmos ao meio (2 subdivisões), o ponto central é 4,5.- Se ativarmos a Lupa de 10 subdivisões (décimos), qual número decimal está localizado exatamente no 7º tracinho após o número 4?",
      opcoes: [
        "A) 4,07",
        "B) 4,5",
        "C) 4,7",
        "D) 5,7"
      ],
      correta: 2,
      passoAPasso: [
        "1. Calculamos a distância entre 4 e 5: 5 − 4 = 1 inteiro.",
        "2. Como o intervalo foi dividido em 10 partes iguais (subdivisões), cada tracinho vale 1 ÷ 10 = 0,1 (um décimo).",
        "3. Avançando 7 tracinhos a partir do 4: 4 + 7 × 0,1 = 4 + 0,7 = 4,7 (Alternativa C)."
      ],
      fiqueLigado: "Na reta numérica: dividir 1 unidade em 2 partes iguais gera passos de 0,5 (metade); dividir 1 unidade em 10 partes iguais gera passos de 0,1 (décimos); e dividir 1 décimo em 10 partes gera centésimos (0,01)!"
    },
    etapa2: [
      {
        id: "m16_e2_q1",
        enunciado: "1. (N4.9 / 5A1.1) Observe a trilha de pedras numeradas que segue um padrão recursivo: 135 — 150 — 165 — [ ? ] — 195 — 210. Qual é a regra de formação e qual número completa a pedra com [ ? ]?",
        opcoes: [
          "Somar 5 -> 170",
          "Somar 15 -> 180",
          "Somar 10 -> 175",
          "Somar 25 -> 190"
        ],
        correta: 1,
        dica: "Descubra a diferença entre dois termos vizinhos: 150 − 135 = 15 (múltiplo de 5).",
        fiqueLigado: "A sequência cresce de 15 em 15 (+15). Portanto: 165 + 15 = 180 (e 180 + 15 = 195)."
      },
      {
        id: "m16_e2_q2",
        enunciado: "2. (N4.18 / N6.15) Em uma reta graduada estão marcados os números 120 e 160, e há uma única marcação exatamente na metade do segmento entre eles. Que número corresponde a essa marcação central?",
        opcoes: ["130", "140", "145", "150"],
        correta: 1,
        dica: "A distância entre 120 e 160 é 160 − 120 = 40. A metade dessa distância é 40 ÷ 2 = 20!",
        fiqueLigado: "Ponto médio na reta: 120 + 20 = 140 (que fica à mesma distância de 120 e de 160)."
      },
      {
        id: "m16_e2_q3",
        enunciado: "3. (N5.14) Uma linha do tempo histórica começa no ano 1990 e vai até o ano 2000, dividida em 10 partes iguais. Em qual ano está posicionada a seta que aponta para a 6ª subdivisão após 1990?",
        opcoes: ["1994", "1995", "1996", "2006"],
        correta: 2,
        dica: "O intervalo total é 2000 − 1990 = 10 anos, dividido em 10 partes (cada tracinho = 1 ano).",
        fiqueLigado: "Passo = 10 anos ÷ 10 subdivisões = 1 ano por divisão. Logo, 1990 + 6 = 1996."
      },
      {
        id: "m16_e2_q4",
        enunciado: "4. (N5.15) Em uma fita métrica ampliada entre os números 8 e 9 (com 10 subdivisões iguais), a formiga parou na 3ª marcação após o 8, e o besouro parou exatamente no meio entre 8 e 9. Quais números decimais indicam as posições da formiga e do besouro?",
        opcoes: [
          "8,03 e 8,05",
          "8,3 e 8,5",
          "8,3 e 8,4",
          "3,8 e 5,8"
        ],
        correta: 1,
        dica: "Cada uma das 10 subdivisões vale 0,1 (um décimo). O meio do intervalo é a 5ª subdivisão!",
        fiqueLigado: "3ª subdivisão = 8,3; 5ª subdivisão (metade do intervalo entre 8 e 9) = 8,5."
      }
    ],
    etapa3: [
      {
        id: "m16_e3_q1",
        saeb: "5A1.2",
        nivel: "N4.9",
        bloom: "Fácil",
        enunciado: "As casas de uma avenida foram numeradas em sequência regular: 1.025, 1.050, 1.075, ____, 1.125. O número que falta na quarta casa é:",
        opcoes: ["A) 1.080", "B) 1.095", "C) 1.100", "D) 1.115"],
        correta: 2,
        explicacao: "A sequência aumenta de 25 em 25: 1.075 + 25 = 1.100."
      },
      {
        id: "m16_e3_q2",
        saeb: "5N1.3",
        nivel: "N5.15",
        bloom: "Médio",
        enunciado: "Em um termômetro clínico graduado de 0,1 em 0,1 °C, a coluna de líquido está exatamente 4 tracinhos acima da marca de 37 °C. Qual temperatura esse termômetro indica?",
        opcoes: ["A) 37,04 °C", "B) 37,4 °C", "C) 37,5 °C", "D) 41,0 °C"],
        correta: 1,
        explicacao: "Cada subdivisão vale 0,1 °C. Logo, 37 + 4 × 0,1 = 37,4 °C."
      },
      {
        id: "m16_e3_q3",
        saeb: "5N1.3",
        nivel: "N6.15",
        bloom: "Difícil",
        enunciado: "Na reta numérica, o ponto P está na marca 2.400 e o ponto R está na marca 3.000. Sabendo que o segmento entre P e R foi dividido em 3 partes iguais e o ponto Q está na primeira marcação após P, qual é o valor de Q?",
        opcoes: ["A) 2.500", "B) 2.600", "C) 2.700", "D) 2.800"],
        correta: 1,
        explicacao: "Distância total: 3.000 − 2.400 = 600. Dividida em 3 partes iguais: 600 ÷ 3 = 200 por parte. Logo, Q = 2.400 + 200 = 2.600."
      }
    ],
    etapaFinal: {
      titulo: "Missão Boss: Reta Numérica com Lupa Decimal (Zoom 2× e 10×) e Sequências",
      instrucao: "Use os controles de Zoom (Metades, Décimos e Linha do Tempo) no Canvas para localizar pontos decimais e descobrir o passo das sequências recursivas!",
      metaMinima: 4
    }
  }
);
