// ============================================================
// SEUS DADOS — edite este arquivo para adicionar/remover cursos,
// instituições, assuntos abordados e certificados.
// Este arquivo é usado tanto pela página principal (index.html)
// quanto pela página de detalhes de cada curso (curso.html).
// ============================================================

const DADOS = [
  {
    instituicao: "SCHNEIDER ELECTRIC",
    cor: "#88e788", // verde claro
    cursos: [
      {
        nome: "Comissionamento em prol da eficiência energética",
        ano: "2025",
        // Lista de assuntos abordados no curso (aparece na página de detalhes)
        assuntos: [
          "Planejamento do Comissionamento",
          "Medição e Verificação",
          "Otimização do Consumo de Energia",
        ],
        // Caminho ou link do certificado: pode ser um arquivo .pdf, uma
        // imagem (.png/.jpg) dentro da pasta "certificados/", ou um link
        // do Google Drive/Dropbox. Deixe "" se ainda não tiver.
        certificado: "(2025) Schneider Electric -  Comissionamento em prol da eficiência energética.pdf",
      },
      { nome: "Eficiência energética usando variação de velocidade em motores", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Energy Efficiency Fundamentals for Industrial Automation & Control Professionals", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Medição e Benchmarking Energético", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Motors: A Performance Opportunity Roadmap", ano: "2025", assuntos: [], certificado: "" },
    ]
  },
  {
    instituicao: "SIEMENS",
    cor: "#111184", // azul escuro
    cursos: [
      { nome: "AS-i e IO-Link", ano: "2024", assuntos: [], certificado: "" },
      { nome: "Comando e Proteção de Motores SMART", ano: "2024", assuntos: [], certificado: "" },
      { nome: "Relé de Interface", ano: "2024", assuntos: [], certificado: "" },
      { nome: "Relés e Contatores de Estado Sólido", ano: "2024", assuntos: [], certificado: "" },
      { nome: "Aplicações em Abastecimento de Hidrogênio", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Chaves de Partida e Soft Starters", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Correção de Fator de Potência Básico", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Disjuntores Abertos 3WL", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Dispositivos de Controles Industriais SIRIUS", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Gerenciamento de Energia", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Proteção Elétrica na Construção Civil", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Segurança de Máquinas", ano: "2025", assuntos: [], certificado: "" },
      { nome: "SIMOCODE", ano: "2025", assuntos: [], certificado: "" },
    ]
  },
  {
    instituicao: "DANFOSS",
    cor: "#ED0000", // vermelho
    cursos: [
      { nome: "DD-G-ALL46. AC Drives", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-G-ALL48 Best Practices in installing a drive", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-G-ALL58 Danfoss Drives Product Store Tutorials", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-G-ALL47 Electronic Starter Introduction", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT68 VLT® FC 321 Automation Drive EZ Product Presentation", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT45 FC51 Drive Product Presentation", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT49 VLT FC102 Product Presentation", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT52 FC202 Aqua Drive Product Presentation", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT56 FC202 Aqua Drive Setup Video", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT47 FC280 Midi Drive Product Presentation", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT44 FC302 Automation Drive Product Presentation", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT57 FC302 Automation Drive Setup Videon", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-FB6 Fieldbus Communication options overview", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-T-39 Harmonics and Mitigation Introduction", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT59 Introduction to Condition Based Monitoring Video", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT58 Introduction to MCT10 functionality Video", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VAC53 Introduction to VACON Live", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-T-42 Inverting DC to AC", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-T-41 Long Motor Cables with Drives", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT63 MCT10 Parameter Handling Video", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT60 MCT10 Preventive Maintenance Wizard Video", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT61 MCT10 Timed Events Wizard Video", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-T-34. Ohm's Law", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-G-ALL49 Overiew of Software tools for connecting to Danfoss Drives", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-T-35 NAM Proper VFD Motor Cable Selection", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-FS7 Safety Options Overview", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-T-40 Selecting input and output devices with Drives", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VAC54 VACON 100 Fluxo industrial e vídeo de configuração 100X", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VAC56 VACON 100 Technical Introduction", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VAC60 VACON NC Drive Basic Functionality Video", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DDD-P-VAC43 VACON NXP Air Cooled Drives Presentation", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VAC39. VACON® 100 Product Presentation", ano: "2025", assuntos: [], certificado: "" },
      { nome: "DD-P-VLT64 VLT MCT10 Scope Function Introduction", ano: "2025", assuntos: [], certificado: "" },
    ]
  },
  {
    instituicao: "WEG",
    cor: "#00A8FF", // azul claro
    cursos: [
      { nome: "Acionamentos de Motores Elétricos", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Adequação de Máquinas e Equipamentos à NR12 e CLP de Segurança", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Características de Motores Elétricos industriais Trifásicos", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Controlador Programável PLC300", ano: "2025", assuntos: [], certificado: "" },
      { nome: "instalação de Inversores de Frequência - A Distância", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Introdução à Geração de Energia Solar", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Inversores de Frequência", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Plataforma IoT WEegnology", ano: "2025", assuntos: [], certificado: "" },
      { nome: "WCAM Basics", ano: "2025", assuntos: [], certificado: "" },
      { nome: "Wegnology Edge Suite - SCADA", ano: "2025", assuntos: [], certificado: "" },
    ]
  },
];

// Nome exibido no topo — altere para o seu nome
const NOME = "Rodrigo Cominato";
const SUBTITULO = "Relatório dos cursos que já realizei, organizado de acordo com as instituições";
