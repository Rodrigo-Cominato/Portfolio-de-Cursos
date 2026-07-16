// ============================================================ 
// SEUS DADOS — edite este arquivo para adicionar/remover cursos,
// instituições, assuntos abordados e certificados.
// Este arquivo é usado tanto pela página principal (index.html)
// quanto pela página de detalhes de cada curso (curso.html).
// ============================================================ 

const DADOS = [
  {  
  instituicao: "SENAI",
    cor: "#111184", // azul escuro
    cursos: [
      { nome: "Técnico em Automação Industrial", ano: "2021", assuntos: ["Fundamentos da Comunicação", "Fundamentos da Eletrotécnica", "Fundamentos da Mecânica","Acionamento de Dispositivos Atuadores","Processamentos de Sinais","Gestão da Manutenção","Implementação de Equipamentos e Dispositivos","Instrumentação e Controle","Manutenção de Equipamentos e Dispositivos","Desenvolvimento de Sistemas de Controle","Sistemas Lógicos Programáveis","Técnicas de Controle",], certificado: "certificados/(2021) SENAI Técnico em Automação Industrial.PDF" },
      { nome: "Ferramentas Google", ano: "2023", assuntos: ["Ferramentas de Comunicação e Organização", "Ferramentas de Compartilhamento de Arquivos e Edição de Texto",], certificado: "certificados/(2023) Ferramentas Google.pdf" },]},
  {
    instituicao: "WEG",
    cor: "#00A8FF", // azul claro
    cursos: [
      { nome: "Acionamentos de Motores Elétricos", ano: "2025", assuntos: ["Princípios de acionamento de motores elétricos", "Métodos de partida direta e indireta", "Dimensionamento de acionamento", "Proteção e comando de motores",], certificado: "certificados/(2025) WEG - Acionamentos de Motores  Elétricos.pdf" },
      { nome: "Adequação de Máquinas e Equipamentos à NR12 e CLP de Segurança", ano: "2025", assuntos: ["Requisitos da NR-12", "Avaliação e redução de riscos", "Arquiteturas de segurança com CLPs Safety", "Configuração de funções de segurança", "Validação e documentação de sistemas de segurança",], certificado: "certificados/(2025) WEG - Adequação de Máquinas e Equipamentos à NR12 e CLP de Segurança (DT-09).pdf" },
      { nome: "Características de Motores Elétricos industriais Trifásicos", ano: "2025", assuntos: ["Princípios de funcionamento dos motores trifásicos","Curvas de torque e rendimento","Classes de eficiência (IE2, IE3, IE4, IE5","Critérios de seleção e dimensionamento","Aplicações industriais",], certificado: "certificados/(2025) WEG - Características de Motores Elétricos.pdf" },
      { nome: "Controlador Programável PLC300", ano: "2025", assuntos: ["Arquitetura e funcionamento do PLC300","Programação Ladder","Configuração de entradas e saídas","Temporizadores, contadores e blocos de função","Comunicação industrial e diagnóstico",], certificado: "certificados/(2025) WEG - Controlador Programável PLC300.pdf" },
      { nome: "instalação de Inversores de Frequência - A Distância", ano: "2025", assuntos: ["Instalação elétrica de inversores","Parametrização inicial","Dimensionamento de cabos e proteções","Boas práticas de aterramento e EMC","Comissionamento e testes",], certificado: "certificados/(2025) WEG - Instalação de Inversores de Frequência.pdf" },
      { nome: "Introdução à Geração de Energia Solar", ano: "2025", assuntos: ["Fundamentos da energia fotovoltaica","Componentes de um sistema solar","Dimensionamento básico","Inversores fotovoltaicos","Normas e segurança em instalações solares",], certificado: "certificados/(2025) WEG - Introdução à Geração de Energia Solar.pdf" },
      { nome: "Inversores de Frequência", ano: "2025", assuntos: ["Princípios de funcionamento","Parametrização e configuração","Controle escalar e vetorial","Diagnóstico e solução de falhas",], certificado: "certificados/(2025) WEG - Inversores de Frequência.pdf" },
      { nome: "Plataforma IoT WEegnology", ano: "2025", assuntos: ["Conceitos de Internet das Coisas (IoT)","Coleta e transmissão de dados industriais","Monitoramento remoto de ativos","Dashboards e análise de dados","Integração com sistemas industriais",        ], certificado: "certificados/(2025) WEG - Plataforma IOT Wegnology.pdf" },
      { nome: "WCAM Basics", ano: "2025", assuntos: ["Introdução ao software WCAM",], certificado: "certificados/(2025) WEG - Wcam Basics.pdf" },
      { nome: "Wegnology Edge Suite - SCADA", ano: "2025", assuntos: ["Fundamentos de sistemas SCADA","Supervisão e monitoramento de processos","Comunicação com CLPs e dispositivos industriais",], certificado: "certificados/(2025) WEG - Wegnology Edge Suite - Scada.pdf" },]},
  {
    instituicao: "SIEMENS",
    cor: "#3DCF96", // verde agua
    cursos: [
      { nome: "AS-i e IO-Link", ano: "2024", assuntos: ["Fundamentos do AS-i e IO-Link","Arquitetura e topologia da rede","Parametrização de dispositivos","Diagnóstico e manutenção",], certificado: "certificados/(2024) Siemens - AS-i e IO-Link.pdf" },
      { nome: "Comando e Proteção de Motores SMART", ano: "2024", assuntos: ["Princípios de acionamento de motores","Dispositivos inteligentes de proteção","Parametrização e monitoramento","Diagnóstico de falhas","Comunicação industrial e integração ao CLP",], certificado: "certificados/(2024) Siemens - Comando e Proteção de Motores SMART.pdf" },
      { nome: "Relé de Interface", ano: "2024", assuntos: ["Funcionamento dos relés de interface","Isolação entre circuitos","Dimensionamento e seleção",], certificado: "certificados/(2024) Siemens - Relé de Interface.pdf" },
      { nome: "Relés e Contatores de Estado Sólido", ano: "2024", assuntos: ["Funcionamento dos SSRs","Comparação entre contatores eletromecânicos e estado sólido","Dissipação térmica","Aplicações industriais",], certificado: "certificados(2024) Siemens - Relés e Contatores de Estado Sólido.pdf" },
      { nome: "Aplicações em Abastecimento de Hidrogênio", ano: "2025", assuntos: ["Cadeia de produção e abastecimento de hidrogênio","Segurança em instalações","Automação do processo",], certificado: "certificados/(2025) Siemens - Aplicações em Abastecimento de Hidrogênio.png" },
      { nome: "Chaves de Partida e Soft Starters", ano: "2025", assuntos: ["Métodos de partida de motores","Configuração de soft starters","Proteções elétricas","Dimensionamento",], certificado: "certificados/(2025) Siemens - Chaves de Partida Suave_Soft Starters.pdf" },
      { nome: "Correção de Fator de Potência Básico", ano: "2025", assuntos: ["Conceitos de potência ativa, reativa e aparente","Fator de potência","Bancos de capacitores","Benefícios econômicos e energéticos","Dimensionamento básico",], certificado: "certificados/(2025) Siemens - Correção de Fator de Potência Básico.pdf" },
      { nome: "Disjuntores Abertos 3WL", ano: "2025", assuntos: ["Características dos disjuntores 3WL","Proteções eletrônicas","Parametrização","Coordenação e seletividade",], certificado: "certificados/(2025) Siemens - Disjuntores Abertos 3WL.pdf" },
      { nome: "Dispositivos de Controles Industriais SIRIUS", ano: "2025", assuntos: ["Linha Siemens SIRIUS","Contatores, relés e partidas","Seleção de componentes","Aplicações em painéis elétricos",], certificado: "certificados/(2025) Siemens - Dispositivos de Controles Industriais SIRIUS Básico.pdf" },
      { nome: "Gerenciamento de Energia", ano: "2025", assuntos: ["Monitoramento do consumo energético","Indicadores de desempenho (KPIs)","Medição e análise de energia","Sistemas de gerenciamento de energia",], certificado: "certificados/(2025) Siemens - Gerenciamento de Energia.pdf" },
      { nome: "Proteção Elétrica na Construção Civil", ano: "2025", assuntos: ["Proteção contra sobrecorrente","Proteção diferencial residual (DR)","Proteção contra surtos (DPS)",], certificado: "certificados/(2025) Siemens - Proteção Elétrica na Construção Civil.pdf" },
      { nome: "Segurança de Máquinas", ano: "2025", assuntos: ["NR-12 e normas internacionais","Categorias e níveis de desempenho (PL)","Relés e controladores de segurança","Cortinas de luz e chaves de segurança","Validação do sistema de segurança",], certificado: "certificados/(2025) Siemens - Segurança de Máquinas .png" },
      { nome: "SIMOCODE", ano: "2025", assuntos: ["Conceitos do sistema SIMOCODE","Parametrização e configuração","roteção e monitoramento de motores","Diagnóstico de falhas","Comunicação via PROFINET/PROFIBUS","Integração com TIA Portal",], certificado: "certificados/(2025) Siemens - SIMOCODE.png" },]},
  {
    instituicao: "DANFOSS",
    cor: "#ED0000", // vermelho
    cursos: [
      { nome: "DD-G-ALL46. AC Drives", ano: "2025", assuntos: ["Princípios dos inversores de frequência", "Parametrização básica", "Aplicações industriais",], certificado: "certificados/(2025) Danfoss - AC Drives.pdf" },
      { nome: "DD-G-ALL48 Best Practices in installing a drive", ano: "2025", assuntos: ["Instalação correta de inversores","Boas práticas de cabeamento","Aterramento e EMC",], certificado: "certificados/(2025) Danfoss - Best Practices in installing a drive.pdf" },
      { nome: "DD-G-ALL58 Danfoss Drives Product Store Tutorials", ano: "2025", assuntos: ["Navegação na plataforma", "Busca de produtos", "Documentação técnica",], certificado: "certificados/(2025) Danfoss - Drives Product Store Tutorials.pdf" },
      { nome: "DD-G-ALL47 Electronic Starter Introduction", ano: "2025", assuntos: ["Conceitos de partidas eletrônicas","Aplicações industriais","Benefícios operacionais",], certificado: "certificados/(2025) Danfoss - Electronic Starter Introduction.pdf" },
      { nome: "DD-P-VLT68 VLT® FC 321 Automation Drive EZ Product Presentation", ano: "2025", assuntos: ["Características do FC 321","Recursos de controle",], certificado: "certificados/(2025) Danfoss - FC 321 Automation Drive EZ Product Presentation.pdf" },
      { nome: "DD-P-VLT45 FC51 Drive Product Presentation", ano: "2025", assuntos: ["Funcionalidades do FC51","Aplicações em motores",], certificado: "certificados/(2025) Danfoss - FC51 Drive Product Presentation.pdf" },
      { nome: "DD-P-VLT49 VLT FC102 Product Presentation", ano: "2025", assuntos: ["Características do FC102","Aplicações HVAC",], certificado: "certificados/(2025) Danfoss - FC102 Product Presentation.pdf" },
      { nome: "DD-P-VLT52 FC202 Aqua Drive Product Presentation", ano: "2025", assuntos: ["Controle de bombas","Aplicações em saneamento",], certificado: "certificados/(2025) Danfoss - FC202 Aqua Drive Product.pdf" },
      { nome: "DD-P-VLT56 FC202 Aqua Drive Setup Video", ano: "2025", assuntos: ["Configuração inicial","Comissionamento",], certificado: "certificados/(2025) Danfoss - FC202 Aqua Drive Setup Video.pdf" },
      { nome: "DD-P-VLT47 FC280 Midi Drive Product Presentation", ano: "2025", assuntos: ["Recursos do FC280","Aplicações industriais",], certificado: "certificados/(2025) Danfoss - FC280 Midi Drive Product Presentation.pdf" },
      { nome: "DD-P-VLT44 FC302 Automation Drive Product Presentation", ano: "2025", assuntos: ["Características do FC302","Integração em automação",], certificado: "certificados/(2025) Danfoss - FC302 Automation Drive Product.pdf" },
      { nome: "DD-P-VLT57 FC302 Automation Drive Setup Videon", ano: "2025", assuntos: ["Configuração do FC302","Testes de operação",], certificado: "certificados/(2025) Danfoss - FC302 Automation Drive Setup Video.pdf" },
      { nome: "DD-P-FB6 Fieldbus Communication options overview", ano: "2025", assuntos: ["Protocolos Fieldbus","Configuração de comunicação",], certificado: "certificados/(2025) Danfoss - Fieldbus Communication options.pdf" },
      { nome: "DD-T-39 Harmonics and Mitigation Introduction", ano: "2025", assuntos: ["Harmônicas elétricas","Impactos na instalação","Métodos de mitigação",], certificado: "certificados/(2025) Danfoss - Harmonics and Mitigation Introduction.pdf" },
      { nome: "DD-P-VLT59 Introduction to Condition Based Monitoring Video", ano: "2025", assuntos: ["Monitoramento baseado em condição","Manutenção preditiva",], certificado: "certificados/(2025) Danfoss - Introduction to Condition Based.pdf" },
      { nome: "DD-P-VLT58 Introduction to MCT10 functionality Video", ano: "2025", assuntos: ["Recursos do MCT10",], certificado: "certificados/(2025) Danfoss - Introduction to MCT10 functionality.pdf" },
      { nome: "DD-P-VAC53 Introduction to VACON Live", ano: "2025", assuntos: ["nterface do VACON Live","Configuração de parâmetros",], certificado: "certificados/(2025) Danfoss - Introduction to VACON Live.pdf" },
      { nome: "DD-T-42 Inverting DC to AC", ano: "2025", assuntos: ["Conversão CC/CA","Aplicações práticas",], certificado: "certificados/(2025) Danfoss - Inverting DC to AC.pdf" },
      { nome: "DD-T-41 Long Motor Cables with Drives", ano: "2025", assuntos: ["Efeitos elétricos","Boas práticas de instalação",], certificado: "certificados/(2025) DANFOSS - Long Motor Cables with Drives.pdf" },
      { nome: "DD-P-VLT63 MCT10 Parameter Handling Video", ano: "2025", assuntos: ["Gerenciamento de parâmetros","Organização de projetos",], certificado: "certificados/(2025) Danfoss - MCT10 Parameter Handling Video.pdf" },
      { nome: "DD-P-VLT60 MCT10 Preventive Maintenance Wizard Video", ano: "2025", assuntos: ["Manutenção preventiva","Monitoramento do equipamento",], certificado: "certificados/(2025) Danfoss - MCT10 Preventive Maintenance.pdf" },
      { nome: "DD-P-VLT61 MCT10 Timed Events Wizard Video", ano: "2025", assuntos: ["Automação de funções","Configuração de horários",], certificado: "certificados/(2025) Danfoss - MCT10 Timed Events Wizard Video.pdf" },
      { nome: "DD-T-34. Ohm's Law", ano: "2025", assuntos: ["Relação entre tensão, corrente e resistência","Aplicações em circuitos",], certificado: "certificados/(2025) Danfoss - Ohm_s Law.pdf" },
      { nome: "DD-G-ALL49 Overiew of Software tools for connecting to Danfoss Drives", ano: "2025", assuntos: ["Ferramentas de software","Comunicação com inversores","Diagnóstico remoto",], certificado: "certificados/(2025) Danfoss - Overiew of Software tools for.pdf" },
      { nome: "DD-T-35 NAM Proper VFD Motor Cable Selection", ano: "2025", assuntos: ["Critérios de dimensionamento",], certificado: "certificados/(2025) Danfoss - Proper VFD Motor Cable Selection.pdf" },
      { nome: "DD-P-FS7 Safety Options Overview", ano: "2025", assuntos: ["Funções de segurança","Integração com sistemas de segurança",], certificado: "certificados/(2025) Danfoss - Safety Options Overview.pdf" },
      { nome: "DD-T-40 Selecting input and output devices with Drives", ano: "2025", assuntos: ["Seleção de entradas e saídas","Sensores e atuadores","Configuração de I/O",], certificado: "certificados/(2025) Danfoss - Selecting input and output devices with Drives.pdf" },
      { nome: "DD-P-VAC54 VACON 100 Fluxo industrial e vídeo de configuração 100X", ano: "2025", assuntos: ["Configuração do VACON 100X","Parametrização",], certificado: "certificados/(2025) Danfoss - VACON 100 Fluxo industrial e vídeo.pdf" },
      { nome: "DD-P-VAC56 VACON 100 Technical Introduction", ano: "2025", assuntos: ["Arquitetura do VACON 100","Aplicações industriais",], certificado: "certificados/(2025) Danfoss - VACON 100 Technical Introduction.pdf" },
      { nome: "DD-P-VAC60 VACON NC Drive Basic Functionality Video", ano: "2025", assuntos: ["Funções básicas","Operação do inversor",], certificado: "certificados/(2025) Danfoss - VACON NC Drive Basic Functionality.pdf" },
      { nome: "DDD-P-VAC43 VACON NXP Air Cooled Drives Presentation", ano: "2025", assuntos: ["Características do VACON NXP","Aplicações industriais",], certificado: "certificados/(2025) Danfoss - VACON NXP Air Cooled Drives.pdf" },
      { nome: "DD-P-VAC39. VACON® 100 Product Presentation", ano: "2025", assuntos: ["Controle de motores","Eficiência energética",], certificado: "certificados/(2025) Danfoss - VACON® 100 Product Presentation.pdf" },
      { nome: "DD-P-VLT64 VLT MCT10 Scope Function Introduction", ano: "2025", assuntos: ["Análise de sinais","Diagnóstico de operação",], certificado: "certificados/(2025) Danfoss - VLT MCT10 Scope Function.pdf" },]},
    {
    instituicao: "SCHNEIDER ELECTRIC",
    cor: "#88e788", // verde claro
    cursos: [
      { nome: "Comissionamento em prol da eficiência energética", ano: "2025", assuntos: ["Planejamento do Comissionamento", "Medição e Verificação", "Otimização do Consumo de Energia",], certificado: "certificados/(2025) Schneider Electric -  Comissionamento em prol da eficiência energética.pdf",},
      { nome: "Eficiência energética usando variação de velocidade em motores", ano: "2025", assuntos: ["Princípios da Variação de Velocidade", "Aplicações de Inversores de Frequência", "Economia de Energia e Estudos de Caso",], certificado: "certificados/(2025) Schneider Electric -  Eficiência energética usando variação de velocidade em motores.pdf",},
      { nome: "Energy Efficiency Fundamentals for Industrial Automation & Control Professionals", ano: "2025", assuntos: ["Motores Elétricos e Sistemas de Acionamento Eficientes", "Monitoramento e Análise de Indicadores Energéticos", "Automação Industrial Aplicada à Redução do Consumo de Energia", "Análise de ROI e Payback de Projetos", ], certificado: "certificados/(2025) Schneider Electric - Energy Efficiency Fundamentals for Industrial Automation & Control Professionals.pdf" },
      { nome: "Medição e Benchmarking Energético", ano: "2025", assuntos: ["Sistemas de Medição e Qualidade dos Dados", "Avaliação de Indicadores de Consumo", "Benchmarking e Melhores Práticas Industriais",], certificado: "certificados/(2025) Schneider Electric - Medição e Benchmarking Energético.pdf" },
      { nome: "Motors: A Performance Opportunity Roadmap", ano: "2025", assuntos: ["Eficiência e Desempenho de Motores Elétricos", "Dimensionamento e Seleção de Motores", "Otimização da Operação e do Consumo Energético",], certificado: "certificados/(2025) Schneider -  Motors_ A Performance Opportunity Roadmap.pdf" },]},
];

// Nome exibido no topo — altere para o seu nome
const NOME = "Rodrigo Cominato";
const SUBTITULO = "Conhecimento só gera valor quando é colocado em prática. Este portfólio reúne os cursos e certificações que complementam minha experiência profissional e refletem meu compromisso com a atualização constante e a excelência técnica na engenharia.";

// Versão em inglês do subtítulo (usada quando o site está no modo EN)
const SUBTITULO_EN = "Knowledge only creates value when put into practice. This portfolio brings together the courses and certifications that complement my professional experience and reflect my commitment to continuous learning and technical excellence in engineering.";

// Nome do arquivo da sua foto — coloque o arquivo na raiz do repositório
// (do lado do index.html) e ajuste o nome aqui se for diferente
const FOTO = "foto_rodrigo.png";

// ============================================================
// TEXTOS DA INTERFACE (PT / EN)
// Isso controla os textos fixos do site (botões, títulos de seção,
// mensagens). Os nomes dos cursos e os assuntos abordados continuam
// só em português, já que vêm dos certificados originais.
// ============================================================
const UI_TEXT = {
  pt: {
    htmlLang: "pt-BR",
    dateLocale: "pt-BR",
    eyebrow: "Cursos Realizados",
    statCursos: "cursos",
    statInstituicoes: "instituições",
    verDetalhes: "Ver detalhes ↗",
    portfolioAtualizado: "Portfólio atualizado em",
    voltarLink: "← Voltar para o portfólio",
    voltarBtn: "Voltar para o portfólio",
    naoEncontradoTitulo: "Curso não encontrado",
    naoEncontradoTexto: "O link pode estar incompleto ou desatualizado.",
    assuntosTitulo: "Assuntos abordados",
    assuntosVazio: "A lista de assuntos abordados ainda não foi adicionada para este curso.",
    certificadoTitulo: "Certificado",
    certificadoVazio: "O certificado deste curso ainda não foi adicionado.",
    abrirNovaAba: "Abrir certificado em nova aba ↗",
    verCertificado: "Ver certificado ↗",
    langBtn: "EN",
    langBtnTitle: "Switch to English",
  },
  en: {
    htmlLang: "en",
    dateLocale: "en-US",
    eyebrow: "Completed Courses",
    statCursos: "courses",
    statInstituicoes: "institutions",
    verDetalhes: "View details ↗",
    portfolioAtualizado: "Portfolio last updated in",
    voltarLink: "← Back to portfolio",
    voltarBtn: "Back to portfolio",
    naoEncontradoTitulo: "Course not found",
    naoEncontradoTexto: "The link may be incomplete or outdated.",
    assuntosTitulo: "Topics covered",
    assuntosVazio: "The list of topics covered hasn't been added for this course yet.",
    certificadoTitulo: "Certificate",
    certificadoVazio: "The certificate for this course hasn't been added yet.",
    abrirNovaAba: "Open certificate in new tab ↗",
    verCertificado: "View certificate ↗",
    langBtn: "PT",
    langBtnTitle: "Mudar para português",
  },
};

// Guarda e recupera o idioma escolhido (compartilhado entre as páginas,
// já que localStorage é o mesmo para todo o site)
function getIdioma(){
  return localStorage.getItem('idioma') === 'en' ? 'en' : 'pt';
}
function setIdioma(lang){
  localStorage.setItem('idioma', lang);
}
