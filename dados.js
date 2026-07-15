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
      {nome: "Comissionamento em prol da eficiência energética", ano: "2025",
       assuntos: [
          "Planejamento do Comissionamento",
          "Medição e Verificação",
          "Otimização do Consumo de Energia",
        ],
        certificado: "certificados/(2025) Schneider Electric -  Comissionamento em prol da eficiência energética.pdf",
      },
      { nome: "Eficiência energética usando variação de velocidade em motores", ano: "2025", 
       assuntos: [
         "Princípios da Variação de Velocidade",
         "Aplicações de Inversores de Frequência",
         "Economia de Energia e Estudos de Caso",
       ], 
       certificado: "certificados/(2025) Schneider Electric -  Eficiência energética usando variação de velocidade em motores.pdf",
      },
      { nome: "Energy Efficiency Fundamentals for Industrial Automation & Control Professionals", ano: "2025", 
       assuntos: [
         "Motores Elétricos e Sistemas de Acionamento Eficientes",
         "Monitoramento e Análise de Indicadores Energéticos",
         "Automação Industrial Aplicada à Redução do Consumo de Energia",
         "Análise de ROI e Payback de Projetos",
       ], 
       certificado: "certificados/(2025) Schneider Electric - Energy Efficiency Fundamentals for Industrial Automation & Control Professionals.pdf" 
      },
      { nome: "Medição e Benchmarking Energético", ano: "2025", 
       assuntos: [
         "Sistemas de Medição e Qualidade dos Dados",
         "Avaliação de Indicadores de Consumo",
         "Benchmarking e Melhores Práticas Industriais",
       ], 
       certificado: "certificados/(2025) Schneider Electric - Medição e Benchmarking Energético.pdf" 
      },
      { nome: "Motors: A Performance Opportunity Roadmap", ano: "2025", 
       assuntos: [
         "Eficiência e Desempenho de Motores Elétricos",
         "Dimensionamento e Seleção de Motores",
         "Otimização da Operação e do Consumo Energético",
       ], 
       certificado: "certificados/(2025) Schneider -  Motors_ A Performance Opportunity Roadmap.pdf" },
    ]
  },
  {
    instituicao: "SIEMENS",
    cor: "#111184", // azul escuro
    cursos: [
      { nome: "AS-i e IO-Link", ano: "2024", assuntos: [], certificado: "certificados/(2024) Siemens - AS-i e IO-Link.pdf" },
      { nome: "Comando e Proteção de Motores SMART", ano: "2024", assuntos: [], certificado: "certificados/(2024) Siemens - Comando e Proteção de Motores SMART.pdf" },
      { nome: "Relé de Interface", ano: "2024", assuntos: [], certificado: "certificados/(2024) Siemens - Relé de Interface.pdf" },
      { nome: "Relés e Contatores de Estado Sólido", ano: "2024", assuntos: [], certificado: "certificados(2024) Siemens - Relés e Contatores de Estado Sólido.pdf" },
      { nome: "Aplicações em Abastecimento de Hidrogênio", ano: "2025", assuntos: [], certificado: "certificados/(2025) Siemens - Aplicações em Abastecimento de Hidrogênio.png" },
      { nome: "Chaves de Partida e Soft Starters", ano: "2025", assuntos: [], certificado: "certificados/(2025) Siemens - Chaves de Partida Suave_Soft Starters.pdf" },
      { nome: "Correção de Fator de Potência Básico", ano: "2025", assuntos: [], certificado: "certificados/(2025) Siemens - Correção de Fator de Potência Básico.pdf" },
      { nome: "Disjuntores Abertos 3WL", ano: "2025", assuntos: [], certificado: "certificados/(2025) Siemens - Disjuntores Abertos 3WL.pdf" },
      { nome: "Dispositivos de Controles Industriais SIRIUS", ano: "2025", assuntos: [], certificado: "certificados/(2025) Siemens - Dispositivos de Controles Industriais SIRIUS Básico.pdf" },
      { nome: "Gerenciamento de Energia", ano: "2025", assuntos: [], certificado: "certificados/(2025) Siemens - Gerenciamento de Energia.pdf" },
      { nome: "Proteção Elétrica na Construção Civil", ano: "2025", assuntos: [], certificado: "certificados/(2025) Siemens - Proteção Elétrica na Construção Civil.pdf" },
      { nome: "Segurança de Máquinas", ano: "2025", assuntos: [], certificado: "certificados/(2025) Siemens - Segurança de Máquinas .png" },
      { nome: "SIMOCODE", ano: "2025", assuntos: [], certificado: "certificados/(2025) Siemens - SIMOCODE.png" },
    ]
  },
  {
    instituicao: "DANFOSS",
    cor: "#ED0000", // vermelho
    cursos: [
      { nome: "DD-G-ALL46. AC Drives", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - AC Drives.pdf" },
      { nome: "DD-G-ALL48 Best Practices in installing a drive", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Best Practices in installing a drive.pdf" },
      { nome: "DD-G-ALL58 Danfoss Drives Product Store Tutorials", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Drives Product Store Tutorials.pdf" },
      { nome: "DD-G-ALL47 Electronic Starter Introduction", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Electronic Starter Introduction.pdf" },
      { nome: "DD-P-VLT68 VLT® FC 321 Automation Drive EZ Product Presentation", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - FC 321 Automation Drive EZ Product Presentation.pdf" },
      { nome: "DD-P-VLT45 FC51 Drive Product Presentation", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - FC51 Drive Product Presentation.pdf" },
      { nome: "DD-P-VLT49 VLT FC102 Product Presentation", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - FC102 Product Presentation.pdf" },
      { nome: "DD-P-VLT52 FC202 Aqua Drive Product Presentation", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - FC202 Aqua Drive Product.pdf" },
      { nome: "DD-P-VLT56 FC202 Aqua Drive Setup Video", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - FC202 Aqua Drive Setup Video.pdf" },
      { nome: "DD-P-VLT47 FC280 Midi Drive Product Presentation", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - FC280 Midi Drive Product Presentation.pdf" },
      { nome: "DD-P-VLT44 FC302 Automation Drive Product Presentation", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - FC302 Automation Drive Product.pdf" },
      { nome: "DD-P-VLT57 FC302 Automation Drive Setup Videon", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - FC302 Automation Drive Setup Video.pdf" },
      { nome: "DD-P-FB6 Fieldbus Communication options overview", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Fieldbus Communication options.pdf" },
      { nome: "DD-T-39 Harmonics and Mitigation Introduction", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Harmonics and Mitigation Introduction.pdf" },
      { nome: "DD-P-VLT59 Introduction to Condition Based Monitoring Video", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Introduction to Condition Based.pdf" },
      { nome: "DD-P-VLT58 Introduction to MCT10 functionality Video", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Introduction to MCT10 functionality.pdf" },
      { nome: "DD-P-VAC53 Introduction to VACON Live", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Introduction to VACON Live.pdf" },
      { nome: "DD-T-42 Inverting DC to AC", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Inverting DC to AC.pdf" },
      { nome: "DD-T-41 Long Motor Cables with Drives", ano: "2025", assuntos: [], certificado: "certificados/(2025) DANFOSS - Long Motor Cables with Drives.pdf" },
      { nome: "DD-P-VLT63 MCT10 Parameter Handling Video", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - MCT10 Parameter Handling Video.pdf" },
      { nome: "DD-P-VLT60 MCT10 Preventive Maintenance Wizard Video", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - MCT10 Preventive Maintenance.pdf" },
      { nome: "DD-P-VLT61 MCT10 Timed Events Wizard Video", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - MCT10 Timed Events Wizard Video.pdf" },
      { nome: "DD-T-34. Ohm's Law", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Ohm_s Law.pdf" },
      { nome: "DD-G-ALL49 Overiew of Software tools for connecting to Danfoss Drives", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Overiew of Software tools for.pdf" },
      { nome: "DD-T-35 NAM Proper VFD Motor Cable Selection", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Proper VFD Motor Cable Selection.pdf" },
      { nome: "DD-P-FS7 Safety Options Overview", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Safety Options Overview.pdf" },
      { nome: "DD-T-40 Selecting input and output devices with Drives", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - Selecting input and output devices with Drives.pdf" },
      { nome: "DD-P-VAC54 VACON 100 Fluxo industrial e vídeo de configuração 100X", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - VACON 100 Fluxo industrial e vídeo.pdf" },
      { nome: "DD-P-VAC56 VACON 100 Technical Introduction", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - VACON 100 Technical Introduction.pdf" },
      { nome: "DD-P-VAC60 VACON NC Drive Basic Functionality Video", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - VACON NC Drive Basic Functionality.pdf" },
      { nome: "DDD-P-VAC43 VACON NXP Air Cooled Drives Presentation", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - VACON NXP Air Cooled Drives.pdf" },
      { nome: "DD-P-VAC39. VACON® 100 Product Presentation", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - VACON® 100 Product Presentation.pdf" },
      { nome: "DD-P-VLT64 VLT MCT10 Scope Function Introduction", ano: "2025", assuntos: [], certificado: "certificados/(2025) Danfoss - VLT MCT10 Scope Function.pdf" },
    ]
  },
  {
    instituicao: "WEG",
    cor: "#00A8FF", // azul claro
    cursos: [
      { nome: "Acionamentos de Motores Elétricos", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Acionamentos de Motores  Elétricos.pdf" },
      { nome: "Adequação de Máquinas e Equipamentos à NR12 e CLP de Segurança", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Adequação de Máquinas e Equipamentos à NR12 e CLP de Segurança (DT-09).pdf" },
      { nome: "Características de Motores Elétricos industriais Trifásicos", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Características de Motores Elétricos.pdf" },
      { nome: "Controlador Programável PLC300", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Controlador Programável PLC300.pdf" },
      { nome: "instalação de Inversores de Frequência - A Distância", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Instalação de Inversores de Frequência.pdf" },
      { nome: "Introdução à Geração de Energia Solar", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Introdução à Geração de Energia Solar.pdf" },
      { nome: "Inversores de Frequência", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Inversores de Frequência.pdf" },
      { nome: "Plataforma IoT WEegnology", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Plataforma IOT Wegnology.pdf" },
      { nome: "WCAM Basics", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Wcam Basics.pdf" },
      { nome: "Wegnology Edge Suite - SCADA", 
       ano: "2025", 
       assuntos: [
         
       ], 
       certificado: "certificados/(2025) WEG - Wegnology Edge Suite - Scada.pdf" },
    ]
  },
];

// Nome exibido no topo — altere para o seu nome
const NOME = "Rodrigo Cominato";
const SUBTITULO = "Portfólio dos cursos que já realizei, organizado de acordo com as instituições";

// Nome do arquivo da sua foto — coloque o arquivo na raiz do repositório
// (do lado do index.html) e ajuste o nome aqui se for diferente
const FOTO = "foto_rodrigo.png";
