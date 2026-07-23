// ============================================================
// SEUS DADOS — edite este arquivo para adicionar/remover cursos,
// instituições, assuntos abordados e certificados.
// Este arquivo é usado tanto pela página principal (index.html)
// quanto pela página de detalhes de cada curso (curso.html).
//
// Cada curso agora tem nome_pt/nome_en e assuntos_pt/assuntos_en,
// para o site mostrar o idioma certo conforme o botão PT/EN.
// ============================================================

const DADOS = [
  {
    instituicao: "SENAI",
    cor: "#111184", // azul escuro
    cursos: [
      {
        nome_pt: "Ensino Médio",
        nome_en: "High School",
        ano: "2021",
        assuntos_pt: ["Artes", "Biologia", "Educação Física", "Filosofia", "Física", "Geografia", "História", "Língua Estrangeira - Espanhol", "Língua Portuguesa e Literatura", "Matemática", "Química", "Sociologia"],
        assuntos_en: ["Arts","Biology","Physical Education","Philosophy","Physics","Geography","History","Foreign Language - Spanish","Portuguese Language and Literature","Mathematics","Chemistry","Sociology"],
        certificado: "certificados/(2021) SENAI Ensino Médio.pdf",
      },
      {
        nome_pt: "Técnico em Automação Industrial",
        nome_en: "Technical Diploma in Industrial Automation",
        ano: "2021",
        assuntos_pt: ["Fundamentos da Comunicação", "Fundamentos da Eletrotécnica", "Fundamentos da Mecânica", "Acionamento de Dispositivos Atuadores", "Processamentos de Sinais", "Gestão da Manutenção", "Implementação de Equipamentos e Dispositivos", "Instrumentação e Controle", "Manutenção de Equipamentos e Dispositivos", "Desenvolvimento de Sistemas de Controle", "Sistemas Lógicos Programáveis", "Técnicas de Controle"],
        assuntos_en: ["Communication Fundamentals", "Electrical Engineering Fundamentals", "Mechanics Fundamentals", "Actuator Device Operation", "Signal Processing", "Maintenance Management", "Equipment and Device Implementation", "Instrumentation and Control", "Equipment and Device Maintenance", "Control Systems Development", "Programmable Logic Systems", "Control Techniques"],
        certificado: "certificados/(2021) SENAI Técnico em Automação Industrial.PDF",
      },
      {
        nome_pt: "Ferramentas Google",
        nome_en: "Google Tools",
        ano: "2023",
        assuntos_pt: ["Ferramentas de Comunicação e Organização", "Ferramentas de Compartilhamento de Arquivos e Edição de Texto"],
        assuntos_en: ["Communication and Organization Tools", "File Sharing and Text Editing Tools"],
        certificado: "certificados/(2023) Ferramentas Google.pdf",
      },
    ]
  },
  {
    instituicao: "WEG",
    cor: "#00A8FF", // azul claro
    cursos: [
      {
        nome_pt: "Acionamentos de Motores Elétricos",
        nome_en: "Electric Motor Drives",
        ano: "2025",
        assuntos_pt: ["Princípios de acionamento de motores elétricos", "Métodos de partida direta e indireta", "Dimensionamento de acionamento", "Proteção e comando de motores"],
        assuntos_en: ["Electric motor drive principles", "Direct and indirect starting methods", "Drive sizing", "Motor protection and control"],
        certificado: "certificados/(2025) WEG - Acionamentos de Motores  Elétricos.pdf",
      },
      {
        nome_pt: "Adequação de Máquinas e Equipamentos à NR12 e CLP de Segurança",
        nome_en: "Machinery and Equipment Compliance with NR-12 and Safety PLC",
        ano: "2025",
        assuntos_pt: ["Requisitos da NR-12", "Avaliação e redução de riscos", "Arquiteturas de segurança com CLPs Safety", "Configuração de funções de segurança", "Validação e documentação de sistemas de segurança"],
        assuntos_en: ["NR-12 requirements", "Risk assessment and reduction", "Safety architectures with Safety PLCs", "Safety function configuration", "Safety system validation and documentation"],
        certificado: "certificados/(2025) WEG - Adequação de Máquinas e Equipamentos à NR12 e CLP de Segurança (DT-09).pdf",
      },
      {
        nome_pt: "Características de Motores Elétricos industriais Trifásicos",
        nome_en: "Characteristics of Three-Phase Industrial Electric Motors",
        ano: "2025",
        assuntos_pt: ["Princípios de funcionamento dos motores trifásicos", "Curvas de torque e rendimento", "Classes de eficiência (IE2, IE3, IE4, IE5)", "Critérios de seleção e dimensionamento", "Aplicações industriais"],
        assuntos_en: ["Operating principles of three-phase motors", "Torque and efficiency curves", "Efficiency classes (IE2, IE3, IE4, IE5)", "Selection and sizing criteria", "Industrial applications"],
        certificado: "certificados/(2025) WEG - Características de Motores Elétricos.pdf",
      },
      {
        nome_pt: "Controlador Programável PLC300",
        nome_en: "PLC300 Programmable Controller",
        ano: "2025",
        assuntos_pt: ["Arquitetura e funcionamento do PLC300", "Programação Ladder", "Configuração de entradas e saídas", "Temporizadores, contadores e blocos de função", "Comunicação industrial e diagnóstico"],
        assuntos_en: ["PLC300 architecture and operation", "Ladder programming", "Input and output configuration", "Timers, counters and function blocks", "Industrial communication and diagnostics"],
        certificado: "certificados/(2025) WEG - Controlador Programável PLC300.pdf",
      },
      {
        nome_pt: "Instalação de Inversores de Frequência - A Distância",
        nome_en: "Remote Installation of Frequency Inverters",
        ano: "2025",
        assuntos_pt: ["Instalação elétrica de inversores", "Parametrização inicial", "Dimensionamento de cabos e proteções", "Boas práticas de aterramento e EMC", "Comissionamento e testes"],
        assuntos_en: ["Electrical installation of inverters", "Initial parameterization", "Cable and protection sizing", "Grounding and EMC best practices", "Commissioning and testing"],
        certificado: "certificados/(2025) WEG - Instalação de Inversores de Frequência.pdf",
      },
      {
        nome_pt: "Introdução à Geração de Energia Solar",
        nome_en: "Introduction to Solar Power Generation",
        ano: "2025",
        assuntos_pt: ["Fundamentos da energia fotovoltaica", "Componentes de um sistema solar", "Dimensionamento básico", "Inversores fotovoltaicos", "Normas e segurança em instalações solares"],
        assuntos_en: ["Photovoltaic energy fundamentals", "Solar system components", "Basic sizing", "Photovoltaic inverters", "Standards and safety in solar installations"],
        certificado: "certificados/(2025) WEG - Introdução à Geração de Energia Solar.pdf",
      },
      {
        nome_pt: "Inversores de Frequência",
        nome_en: "Frequency Inverters",
        ano: "2025",
        assuntos_pt: ["Princípios de funcionamento", "Parametrização e configuração", "Controle escalar e vetorial", "Diagnóstico e solução de falhas"],
        assuntos_en: ["Operating principles", "Parameterization and configuration", "Scalar and vector control", "Fault diagnosis and troubleshooting"],
        certificado: "certificados/(2025) WEG - Inversores de Frequência.pdf",
      },
      {
        nome_pt: "Plataforma IoT WEgnology",
        nome_en: "WEGnology IoT Platform",
        ano: "2025",
        assuntos_pt: ["Conceitos de Internet das Coisas (IoT)", "Coleta e transmissão de dados industriais", "Monitoramento remoto de ativos", "Dashboards e análise de dados", "Integração com sistemas industriais"],
        assuntos_en: ["Internet of Things (IoT) concepts", "Industrial data collection and transmission", "Remote asset monitoring", "Dashboards and data analysis", "Integration with industrial systems"],
        certificado: "certificados/(2025) WEG - Plataforma IOT Wegnology.pdf",
      },
      {
        nome_pt: "Fundamentos do WCAM",
        nome_en: "WCAM Basics",
        ano: "2025",
        assuntos_pt: ["Introdução ao software WCAM"],
        assuntos_en: ["Introduction to WCAM software"],
        certificado: "certificados/(2025) WEG - Wcam Basics.pdf",
      },
      {
        nome_pt: "Wegnology Edge Suite - SCADA",
        nome_en: "Wegnology Edge Suite - SCADA",
        ano: "2025",
        assuntos_pt: ["Fundamentos de sistemas SCADA", "Supervisão e monitoramento de processos", "Comunicação com CLPs e dispositivos industriais"],
        assuntos_en: ["SCADA systems fundamentals", "Process supervision and monitoring", "Communication with PLCs and industrial devices"],
        certificado: "certificados/(2025) WEG - Wegnology Edge Suite - Scada.pdf",
      },
    ]
  },
  {
    instituicao: "SIEMENS",
    cor: "#3DCF96", // verde agua
    cursos: [
      {
        nome_pt: "AS-i e IO-Link",
        nome_en: "AS-i and IO-Link",
        ano: "2024",
        assuntos_pt: ["Fundamentos do AS-i e IO-Link", "Arquitetura e topologia da rede", "Parametrização de dispositivos", "Diagnóstico e manutenção"],
        assuntos_en: ["AS-i and IO-Link fundamentals", "Network architecture and topology", "Device parameterization", "Diagnostics and maintenance"],
        certificado: "certificados/(2024) Siemens - AS-i e IO-Link.pdf",
      },
      {
        nome_pt: "Comando e Proteção de Motores SMART",
        nome_en: "SMART Motor Control and Protection",
        ano: "2024",
        assuntos_pt: ["Princípios de acionamento de motores", "Dispositivos inteligentes de proteção", "Parametrização e monitoramento", "Diagnóstico de falhas", "Comunicação industrial e integração ao CLP"],
        assuntos_en: ["Motor drive principles", "Smart protection devices", "Parameterization and monitoring", "Fault diagnostics", "Industrial communication and PLC integration"],
        certificado: "certificados/(2024) Siemens - Comando e Proteção de Motores SMART.pdf",
      },
      {
        nome_pt: "Relé de Interface",
        nome_en: "Interface Relay",
        ano: "2024",
        assuntos_pt: ["Funcionamento dos relés de interface", "Isolação entre circuitos", "Dimensionamento e seleção"],
        assuntos_en: ["How interface relays work", "Circuit isolation", "Sizing and selection"],
        certificado: "certificados/(2024) Siemens - Relé de Interface.pdf",
      },
      {
        nome_pt: "Relés e Contatores de Estado Sólido",
        nome_en: "Solid State Relays and Contactors",
        ano: "2024",
        assuntos_pt: ["Funcionamento dos SSRs", "Comparação entre contatores eletromecânicos e estado sólido", "Dissipação térmica", "Aplicações industriais"],
        assuntos_en: ["How SSRs work", "Comparison between electromechanical and solid-state contactors", "Thermal dissipation", "Industrial applications"],
        certificado: "certificados/(2024) Siemens - Relés e Contatores de Estado Sólido.pdf",
      },
      {
        nome_pt: "Aplicações em Abastecimento de Hidrogênio",
        nome_en: "Applications in Hydrogen Refueling",
        ano: "2025",
        assuntos_pt: ["Cadeia de produção e abastecimento de hidrogênio", "Segurança em instalações", "Automação do processo"],
        assuntos_en: ["Hydrogen production and refueling chain", "Facility safety", "Process automation"],
        certificado: "certificados/(2025) Siemens - Aplicações em Abastecimento de Hidrogênio.png",
      },
      {
        nome_pt: "Chaves de Partida e Soft Starters",
        nome_en: "Starting Switches and Soft Starters",
        ano: "2025",
        assuntos_pt: ["Métodos de partida de motores", "Configuração de soft starters", "Proteções elétricas", "Dimensionamento"],
        assuntos_en: ["Motor starting methods", "Soft starter configuration", "Electrical protection", "Sizing"],
        certificado: "certificados/(2025) Siemens - Chaves de Partida Suave_Soft Starters.pdf",
      },
      {
        nome_pt: "Correção de Fator de Potência Básico",
        nome_en: "Basic Power Factor Correction",
        ano: "2025",
        assuntos_pt: ["Conceitos de potência ativa, reativa e aparente", "Fator de potência", "Bancos de capacitores", "Benefícios econômicos e energéticos", "Dimensionamento básico"],
        assuntos_en: ["Active, reactive and apparent power concepts", "Power factor", "Capacitor banks", "Economic and energy benefits", "Basic sizing"],
        certificado: "certificados/(2025) Siemens - Correção de Fator de Potência Básico.pdf",
      },
      {
        nome_pt: "Disjuntores Abertos 3WL",
        nome_en: "3WL Air Circuit Breakers",
        ano: "2025",
        assuntos_pt: ["Características dos disjuntores 3WL", "Proteções eletrônicas", "Parametrização", "Coordenação e seletividade"],
        assuntos_en: ["3WL circuit breaker characteristics", "Electronic protection", "Parameterization", "Coordination and selectivity"],
        certificado: "certificados/(2025) Siemens - Disjuntores Abertos 3WL.pdf",
      },
      {
        nome_pt: "Dispositivos de Controles Industriais SIRIUS",
        nome_en: "SIRIUS Industrial Control Devices",
        ano: "2025",
        assuntos_pt: ["Linha Siemens SIRIUS", "Contatores, relés e partidas", "Seleção de componentes", "Aplicações em painéis elétricos"],
        assuntos_en: ["Siemens SIRIUS product line", "Contactors, relays and starters", "Component selection", "Applications in electrical panels"],
        certificado: "certificados/(2025) Siemens - Dispositivos de Controles Industriais SIRIUS Básico.pdf",
      },
      {
        nome_pt: "Gerenciamento de Energia",
        nome_en: "Energy Management",
        ano: "2025",
        assuntos_pt: ["Monitoramento do consumo energético", "Indicadores de desempenho (KPIs)", "Medição e análise de energia", "Sistemas de gerenciamento de energia"],
        assuntos_en: ["Energy consumption monitoring", "Performance indicators (KPIs)", "Energy measurement and analysis", "Energy management systems"],
        certificado: "certificados/(2025) Siemens - Gerenciamento de Energia.pdf",
      },
      {
        nome_pt: "Proteção Elétrica na Construção Civil",
        nome_en: "Electrical Protection in Civil Construction",
        ano: "2025",
        assuntos_pt: ["Proteção contra sobrecorrente", "Proteção diferencial residual (DR)", "Proteção contra surtos (DPS)"],
        assuntos_en: ["Overcurrent protection", "Residual current protection (RCD)", "Surge protection (SPD)"],
        certificado: "certificados/(2025) Siemens - Proteção Elétrica na Construção Civil.pdf",
      },
      {
        nome_pt: "Segurança de Máquinas",
        nome_en: "Machine Safety",
        ano: "2025",
        assuntos_pt: ["NR-12 e normas internacionais", "Categorias e níveis de desempenho (PL)", "Relés e controladores de segurança", "Cortinas de luz e chaves de segurança", "Validação do sistema de segurança"],
        assuntos_en: ["NR-12 and international standards", "Categories and performance levels (PL)", "Safety relays and controllers", "Light curtains and safety switches", "Safety system validation"],
        certificado: "certificados/(2025) Siemens - Segurança de Máquinas .png",
      },
      {
        nome_pt: "SIMOCODE",
        nome_en: "SIMOCODE",
        ano: "2025",
        assuntos_pt: ["Conceitos do sistema SIMOCODE", "Parametrização e configuração", "Proteção e monitoramento de motores", "Diagnóstico de falhas", "Comunicação via PROFINET/PROFIBUS", "Integração com TIA Portal"],
        assuntos_en: ["SIMOCODE system concepts", "Parameterization and configuration", "Motor protection and monitoring", "Fault diagnostics", "Communication via PROFINET/PROFIBUS", "Integration with TIA Portal"],
        certificado: "certificados/(2025) Siemens - SIMOCODE.png",
      },
    ]
  },
  {
    instituicao: "DANFOSS",
    cor: "#ED0000", // vermelho
    cursos: [
      {
        nome_pt: "DD-G-ALL46. Inversores de Frequência CA",
        nome_en: "DD-G-ALL46. AC Drives",
        ano: "2025",
        assuntos_pt: ["Princípios dos inversores de frequência", "Parametrização básica", "Aplicações industriais"],
        assuntos_en: ["Frequency inverter principles", "Basic parameterization", "Industrial applications"],
        certificado: "certificados/(2025) Danfoss - AC Drives.pdf",
      },
      {
        nome_pt: "DD-G-ALL48 Boas Práticas na Instalação de um Inversor",
        nome_en: "DD-G-ALL48 Best Practices in installing a drive",
        ano: "2025",
        assuntos_pt: ["Instalação correta de inversores", "Boas práticas de cabeamento", "Aterramento e EMC"],
        assuntos_en: ["Correct inverter installation", "Cabling best practices", "Grounding and EMC"],
        certificado: "certificados/(2025) Danfoss - Best Practices in installing a drive.pdf",
      },
      {
        nome_pt: "DD-G-ALL58 Tutoriais da Loja de Produtos Danfoss Drives",
        nome_en: "DD-G-ALL58 Danfoss Drives Product Store Tutorials",
        ano: "2025",
        assuntos_pt: ["Navegação na plataforma", "Busca de produtos", "Documentação técnica"],
        assuntos_en: ["Platform navigation", "Product search", "Technical documentation"],
        certificado: "certificados/(2025) Danfoss - Drives Product Store Tutorials.pdf",
      },
      {
        nome_pt: "DD-G-ALL47 Introdução à Partida Eletrônica",
        nome_en: "DD-G-ALL47 Electronic Starter Introduction",
        ano: "2025",
        assuntos_pt: ["Conceitos de partidas eletrônicas", "Aplicações industriais", "Benefícios operacionais"],
        assuntos_en: ["Electronic starter concepts", "Industrial applications", "Operational benefits"],
        certificado: "certificados/(2025) Danfoss - Electronic Starter Introduction.pdf",
      },
      {
        nome_pt: "DD-P-VLT68 Apresentação do Produto VLT® FC 321 Automation Drive EZ",
        nome_en: "DD-P-VLT68 VLT® FC 321 Automation Drive EZ Product Presentation",
        ano: "2025",
        assuntos_pt: ["Características do FC 321", "Recursos de controle"],
        assuntos_en: ["FC 321 features", "Control resources"],
        certificado: "certificados/(2025) Danfoss - FC 321 Automation Drive EZ Product Presentation.pdf",
      },
      {
        nome_pt: "DD-P-VLT45 Apresentação do Produto Inversor FC51",
        nome_en: "DD-P-VLT45 FC51 Drive Product Presentation",
        ano: "2025",
        assuntos_pt: ["Funcionalidades do FC51", "Aplicações em motores"],
        assuntos_en: ["FC51 functionalities", "Motor applications"],
        certificado: "certificados/(2025) Danfoss - FC51 Drive Product Presentation.pdf",
      },
      {
        nome_pt: "DD-P-VLT49 Apresentação do Produto VLT FC102",
        nome_en: "DD-P-VLT49 VLT FC102 Product Presentation",
        ano: "2025",
        assuntos_pt: ["Características do FC102", "Aplicações HVAC"],
        assuntos_en: ["FC102 features", "HVAC applications"],
        certificado: "certificados/(2025) Danfoss - FC102 Product Presentation.pdf",
      },
      {
        nome_pt: "DD-P-VLT52 Apresentação do Produto FC202 Aqua Drive",
        nome_en: "DD-P-VLT52 FC202 Aqua Drive Product Presentation",
        ano: "2025",
        assuntos_pt: ["Controle de bombas", "Aplicações em saneamento"],
        assuntos_en: ["Pump control", "Water and sanitation applications"],
        certificado: "certificados/(2025) Danfoss - FC202 Aqua Drive Product.pdf",
      },
      {
        nome_pt: "DD-P-VLT56 Configuração do FC202 Aqua Drive",
        nome_en: "DD-P-VLT56 FC202 Aqua Drive Setup",
        ano: "2025",
        assuntos_pt: ["Configuração inicial", "Comissionamento"],
        assuntos_en: ["Initial configuration", "Commissioning"],
        certificado: "certificados/(2025) Danfoss - FC202 Aqua Drive Setup Video.pdf",
      },
      {
        nome_pt: "DD-P-VLT47 Apresentação do Produto FC280 Midi Drive",
        nome_en: "DD-P-VLT47 FC280 Midi Drive Product Presentation",
        ano: "2025",
        assuntos_pt: ["Recursos do FC280", "Aplicações industriais"],
        assuntos_en: ["FC280 features", "Industrial applications"],
        certificado: "certificados/(2025) Danfoss - FC280 Midi Drive Product Presentation.pdf",
      },
      {
        nome_pt: "DD-P-VLT44 Apresentação do Produto FC302 Automation Drive",
        nome_en: "DD-P-VLT44 FC302 Automation Drive Product Presentation",
        ano: "2025",
        assuntos_pt: ["Características do FC302", "Integração em automação"],
        assuntos_en: ["FC302 features", "Automation integration"],
        certificado: "certificados/(2025) Danfoss - FC302 Automation Drive Product.pdf",
      },
      {
        nome_pt: "DD-P-VLT57 Configuração do FC302 Automation Drive",
        nome_en: "DD-P-VLT57 FC302 Automation Drive Setup",
        ano: "2025",
        assuntos_pt: ["Configuração do FC302", "Testes de operação"],
        assuntos_en: ["FC302 configuration", "Operation testing"],
        certificado: "certificados/(2025) Danfoss - FC302 Automation Drive Setup Video.pdf",
      },
      {
        nome_pt: "DD-P-FB6 Visão Geral das Opções de Comunicação Fieldbus",
        nome_en: "DD-P-FB6 Fieldbus Communication options overview",
        ano: "2025",
        assuntos_pt: ["Protocolos Fieldbus", "Configuração de comunicação"],
        assuntos_en: ["Fieldbus protocols", "Communication configuration"],
        certificado: "certificados/(2025) Danfoss - Fieldbus Communication options.pdf",
      },
      {
        nome_pt: "DD-T-39 Introdução a Harmônicas e Mitigação",
        nome_en: "DD-T-39 Harmonics and Mitigation Introduction",
        ano: "2025",
        assuntos_pt: ["Harmônicas elétricas", "Impactos na instalação", "Métodos de mitigação"],
        assuntos_en: ["Electrical harmonics", "Impact on installations", "Mitigation methods"],
        certificado: "certificados/(2025) Danfoss - Harmonics and Mitigation Introduction.pdf",
      },
      {
        nome_pt: "DD-P-VLT59 Introdução ao Monitoramento Baseado em Condição",
        nome_en: "DD-P-VLT59 Introduction to Condition Based Monitoring",
        ano: "2025",
        assuntos_pt: ["Monitoramento baseado em condição", "Manutenção preditiva"],
        assuntos_en: ["Condition-based monitoring", "Predictive maintenance"],
        certificado: "certificados/(2025) Danfoss - Introduction to Condition Based.pdf",
      },
      {
        nome_pt: "DD-P-VLT58 Introdução às Funcionalidades do MCT10",
        nome_en: "DD-P-VLT58 Introduction to MCT10 functionality",
        ano: "2025",
        assuntos_pt: ["Recursos do MCT10"],
        assuntos_en: ["MCT10 features"],
        certificado: "certificados/(2025) Danfoss - Introduction to MCT10 functionality.pdf",
      },
      {
        nome_pt: "DD-P-VAC53 Introdução ao VACON Live",
        nome_en: "DD-P-VAC53 Introduction to VACON Live",
        ano: "2025",
        assuntos_pt: ["Interface do VACON Live", "Configuração de parâmetros"],
        assuntos_en: ["VACON Live interface", "Parameter configuration"],
        certificado: "certificados/(2025) Danfoss - Introduction to VACON Live.pdf",
      },
      {
        nome_pt: "DD-T-42 Convertendo CC em CA",
        nome_en: "DD-T-42 Inverting DC to AC",
        ano: "2025",
        assuntos_pt: ["Conversão CC/CA", "Aplicações práticas"],
        assuntos_en: ["DC/AC conversion", "Practical applications"],
        certificado: "certificados/(2025) Danfoss - Inverting DC to AC.pdf",
      },
      {
        nome_pt: "DD-T-41 Cabos Longos de Motor com Inversores",
        nome_en: "DD-T-41 Long Motor Cables with Drives",
        ano: "2025",
        assuntos_pt: ["Efeitos elétricos", "Boas práticas de instalação"],
        assuntos_en: ["Electrical effects", "Installation best practices"],
        certificado: "certificados/(2025) DANFOSS - Long Motor Cables with Drives.pdf",
      },
      {
        nome_pt: "DD-P-VLT63 Gerenciamento de Parâmetros do MCT10",
        nome_en: "DD-P-VLT63 MCT10 Parameter Handling",
        ano: "2025",
        assuntos_pt: ["Gerenciamento de parâmetros", "Organização de projetos"],
        assuntos_en: ["Parameter management", "Project organization"],
        certificado: "certificados/(2025) Danfoss - MCT10 Parameter Handling Video.pdf",
      },
      {
        nome_pt: "DD-P-VLT60 Assistente de Manutenção Preventiva do MCT10",
        nome_en: "DD-P-VLT60 MCT10 Preventive Maintenance Wizard",
        ano: "2025",
        assuntos_pt: ["Manutenção preventiva", "Monitoramento do equipamento"],
        assuntos_en: ["Preventive maintenance", "Equipment monitoring"],
        certificado: "certificados/(2025) Danfoss - MCT10 Preventive Maintenance.pdf",
      },
      {
        nome_pt: "DD-P-VLT61 Assistente de Eventos Programados do MCT10",
        nome_en: "DD-P-VLT61 MCT10 Timed Events Wizard",
        ano: "2025",
        assuntos_pt: ["Automação de funções", "Configuração de horários"],
        assuntos_en: ["Function automation", "Schedule configuration"],
        certificado: "certificados/(2025) Danfoss - MCT10 Timed Events Wizard Video.pdf",
      },
      {
        nome_pt: "DD-T-34. Lei de Ohm",
        nome_en: "DD-T-34. Ohm's Law",
        ano: "2025",
        assuntos_pt: ["Relação entre tensão, corrente e resistência", "Aplicações em circuitos"],
        assuntos_en: ["Relationship between voltage, current and resistance", "Circuit applications"],
        certificado: "certificados/(2025) Danfoss - Ohm_s Law.pdf",
      },
      {
        nome_pt: "DD-G-ALL49 Visão Geral das Ferramentas de Software para Conexão com Inversores Danfoss",
        nome_en: "DD-G-ALL49 Overiew of Software tools for connecting to Danfoss Drives",
        ano: "2025",
        assuntos_pt: ["Ferramentas de software", "Comunicação com inversores", "Diagnóstico remoto"],
        assuntos_en: ["Software tools", "Communication with inverters", "Remote diagnostics"],
        certificado: "certificados/(2025) Danfoss - Overiew of Software tools for.pdf",
      },
      {
        nome_pt: "DD-T-35 NAM Seleção Correta de Cabos de Motor para Inversores (VFD)",
        nome_en: "DD-T-35 NAM Proper VFD Motor Cable Selection",
        ano: "2025",
        assuntos_pt: ["Critérios de dimensionamento"],
        assuntos_en: ["Sizing criteria"],
        certificado: "certificados/(2025) Danfoss - Proper VFD Motor Cable Selection.pdf",
      },
      {
        nome_pt: "DD-P-FS7 Visão Geral das Opções de Segurança",
        nome_en: "DD-P-FS7 Safety Options Overview",
        ano: "2025",
        assuntos_pt: ["Funções de segurança", "Integração com sistemas de segurança"],
        assuntos_en: ["Safety functions", "Integration with safety systems"],
        certificado: "certificados/(2025) Danfoss - Safety Options Overview.pdf",
      },
      {
        nome_pt: "DD-T-40 Seleção de Dispositivos de Entrada e Saída com Inversores",
        nome_en: "DD-T-40 Selecting input and output devices with Drives",
        ano: "2025",
        assuntos_pt: ["Seleção de entradas e saídas", "Sensores e atuadores", "Configuração de I/O"],
        assuntos_en: ["Input and output selection", "Sensors and actuators", "I/O configuration"],
        certificado: "certificados/(2025) Danfoss - Selecting input and output devices with Drives.pdf",
      },
      {
        nome_pt: "DD-P-VAC54 VACON 100 Fluxo industrial e configuração 100X",
        nome_en: "DD-P-VAC54 VACON 100 Industrial Flow and 100X Setup",
        ano: "2025",
        assuntos_pt: ["Configuração do VACON 100X", "Parametrização"],
        assuntos_en: ["VACON 100X configuration", "Parameterization"],
        certificado: "certificados/(2025) Danfoss - VACON 100 Fluxo industrial e vídeo.pdf",
      },
      {
        nome_pt: "DD-P-VAC56 Introdução Técnica ao VACON 100",
        nome_en: "DD-P-VAC56 VACON 100 Technical Introduction",
        ano: "2025",
        assuntos_pt: ["Arquitetura do VACON 100", "Aplicações industriais"],
        assuntos_en: ["VACON 100 architecture", "Industrial applications"],
        certificado: "certificados/(2025) Danfoss - VACON 100 Technical Introduction.pdf",
      },
      {
        nome_pt: "DD-P-VAC60 Funcionalidades Básicas do Inversor VACON NC",
        nome_en: "DD-P-VAC60 VACON NC Drive Basic Functionality",
        ano: "2025",
        assuntos_pt: ["Funções básicas", "Operação do inversor"],
        assuntos_en: ["Basic functions", "Inverter operation"],
        certificado: "certificados/(2025) Danfoss - VACON NC Drive Basic Functionality.pdf",
      },
      {
        nome_pt: "DDD-P-VAC43 Apresentação dos Inversores VACON NXP Resfriados a Ar",
        nome_en: "DDD-P-VAC43 VACON NXP Air Cooled Drives Presentation",
        ano: "2025",
        assuntos_pt: ["Características do VACON NXP", "Aplicações industriais"],
        assuntos_en: ["VACON NXP features", "Industrial applications"],
        certificado: "certificados/(2025) Danfoss - VACON NXP Air Cooled Drives.pdf",
      },
      {
        nome_pt: "DD-P-VAC39. Apresentação do Produto VACON® 100",
        nome_en: "DD-P-VAC39. VACON® 100 Product Presentation",
        ano: "2025",
        assuntos_pt: ["Controle de motores", "Eficiência energética"],
        assuntos_en: ["Motor control", "Energy efficiency"],
        certificado: "certificados/(2025) Danfoss - VACON® 100 Product Presentation.pdf",
      },
      {
        nome_pt: "DD-P-VLT64 Introdução à Função de Osciloscópio do VLT MCT10",
        nome_en: "DD-P-VLT64 VLT MCT10 Scope Function Introduction",
        ano: "2025",
        assuntos_pt: ["Análise de sinais", "Diagnóstico de operação"],
        assuntos_en: ["Signal analysis", "Operation diagnostics"],
        certificado: "certificados/(2025) Danfoss - VLT MCT10 Scope Function.pdf",
      },
    ]
  },
  {
    instituicao: "SCHNEIDER ELECTRIC",
    cor: "#88e788", // verde claro
    cursos: [
      {
        nome_pt: "Comissionamento em prol da eficiência energética",
        nome_en: "Commissioning for Energy Efficiency",
        ano: "2025",
        assuntos_pt: ["Planejamento do Comissionamento", "Medição e Verificação", "Otimização do Consumo de Energia"],
        assuntos_en: ["Commissioning Planning", "Measurement and Verification", "Energy Consumption Optimization"],
        certificado: "certificados/(2025) Schneider Electric -  Comissionamento em prol da eficiência energética.pdf",
      },
      {
        nome_pt: "Eficiência energética usando variação de velocidade em motores",
        nome_en: "Energy Efficiency Using Variable Speed Drives in Motors",
        ano: "2025",
        assuntos_pt: ["Princípios da Variação de Velocidade", "Aplicações de Inversores de Frequência", "Economia de Energia e Estudos de Caso"],
        assuntos_en: ["Variable Speed Principles", "Frequency Inverter Applications", "Energy Savings and Case Studies"],
        certificado: "certificados/(2025) Schneider Electric -  Eficiência energética usando variação de velocidade em motores.pdf",
      },
      {
        nome_pt: "Fundamentos de Eficiência Energética para Profissionais de Automação e Controle Industrial",
        nome_en: "Energy Efficiency Fundamentals for Industrial Automation & Control Professionals",
        ano: "2025",
        assuntos_pt: ["Motores Elétricos e Sistemas de Acionamento Eficientes", "Monitoramento e Análise de Indicadores Energéticos", "Automação Industrial Aplicada à Redução do Consumo de Energia", "Análise de ROI e Payback de Projetos"],
        assuntos_en: ["Efficient Electric Motors and Drive Systems", "Energy Indicator Monitoring and Analysis", "Industrial Automation Applied to Energy Consumption Reduction", "ROI and Payback Analysis for Projects"],
        certificado: "certificados/(2025) Schneider Electric - Energy Efficiency Fundamentals for Industrial Automation & Control Professionals.pdf",
      },
      {
        nome_pt: "Medição e Benchmarking Energético",
        nome_en: "Energy Measurement and Benchmarking",
        ano: "2025",
        assuntos_pt: ["Sistemas de Medição e Qualidade dos Dados", "Avaliação de Indicadores de Consumo", "Benchmarking e Melhores Práticas Industriais"],
        assuntos_en: ["Measurement Systems and Data Quality", "Consumption Indicator Assessment", "Benchmarking and Industrial Best Practices"],
        certificado: "certificados/(2025) Schneider Electric - Medição e Benchmarking Energético.pdf",
      },
      {
        nome_pt: "Motores: um Roteiro de Oportunidades de Desempenho",
        nome_en: "Motors: A Performance Opportunity Roadmap",
        ano: "2025",
        assuntos_pt: ["Eficiência e Desempenho de Motores Elétricos", "Dimensionamento e Seleção de Motores", "Otimização da Operação e do Consumo Energético"],
        assuntos_en: ["Electric Motor Efficiency and Performance", "Motor Sizing and Selection", "Operation and Energy Consumption Optimization"],
        certificado: "certificados/(2025) Schneider -  Motors_ A Performance Opportunity Roadmap.pdf",
      },
    ]
  },
  {
    instituicao: "OUTROS",
    cor: "#E8A33D", // âmbar
    cursos: [
      {
        nome_pt: "Introdução à Robótica Móvel - EV3 (UDESC)",
        nome_en: "Introduction to Mobile Robotics – EV3 (UDESC)",
        ano: "2016",
        assuntos_pt: ["Introdução à plataforma LEGO e montagem do robö","Introdução ao software de programação LEGO MINDSTORMS EV3 e apresentação dos blocos de movimento do robô","Apresentação de sensores e do bloco de programação espera","Utilização, em exercícios, dos sensores de ultrassom, infravermelho e de som","Apresentação da estrutura de loop e suas configurações","Apresentação da estrutura de condição e suas configuragções","Construção e desenvolvimento da lógica de um robô seguidor de linha","Construção e desenvolvimento da lógica de um robô sumô"],
        assuntos_en: ["Introduction to the LEGO platform and robot assembly","Introduction to the LEGO MINDSTORMS EV3 programming software and robot movement blocks","Introduction to sensors and the Wait programming block","Practical use of the ultrasonic, infrared, and sound sensors","Introduction to loop structures and their configurations","Introduction to conditional structures and their configurations","Design and programming logic of a line-following robot","Design and programming logic of a sumo robot"],
        certificado: "certificados/(2016) Introdução à Robótica Móvel - EV3.pdf",
      },          
      {
        nome_pt: "Ensino Fundamental (E. M. Pastor Hans Müller)",
        nome_en: "Elementary and Middle School Education (E. M. Pastor Hans Müller)",
        ano: "2018",
        // Adicione aqui o que foi abordado (opcional)
        assuntos_pt: ["Lingua Portuguesa","Arte","Educação Fisica","História","Geografia","Matemática","Ciências Naturais","Lingua Estrangeira Moderna (Inglês)","Ensino Religioso"],
        assuntos_en: ["Portuguese Language","Art","Physical Education","History","Geography","Mathematics","Natural Sciences","Modern Foreign Language (English)","Religious Education"],
        certificado: "certificados/(2018) Ensino Fundamental.pdf",
      },
      {
        nome_pt: "Faixa Preta de Karatê (Hitotsu)",
        nome_en: "Karate Black Belt (Hitotsu)",
        ano: "2021",
        assuntos_pt: ["Disciplina e autocontrole","Respeito e ética","Coordenação motora e condicionamento físico"],
        assuntos_en: ["Discipline and Self-Control","Respect and Ethics","Motor Coordination and Physical Conditioning"],
        certificado: "certificados/(2021) Faixa Preta.pdf",
      },
      {
        nome_pt: "Curso de Mergulho (PADI)",
        nome_en: "Diving Course (PADI)",
        ano: "2022",
        assuntos_pt: ["Navegação subaquática","Procedimentos de segurança no mergulho","Montagem e utilização de equipamentos de mergulho"],
        assuntos_en: ["Underwater Navigation","Diving Safety Procedures","Equipment Assembly and Use"],
        certificado: "certificados/(2022) Curso de Mergulho.pdf",
      },  
      {
        nome_pt: "Libras Básico",
        nome_en: "Basic Brazilian Sign Language (Libras)",
        ano: "2022",
        assuntos_pt: ["Comunicação Inclusiva","Alfabeto Manual","Vocabulário Básico em Libras"],
        assuntos_en: ["Inclusive Communication","Manual Alphabet (Fingerspelling)","Basic Brazilian Sign Language Vocabulary"],
        certificado: "certificados/libras.pdf",
      },
    ]
  },
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
// mensagens).
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

// Retorna o nome e os assuntos do curso no idioma certo
function nomeCurso(curso, idioma){
  return idioma === 'en' ? (curso.nome_en || curso.nome_pt) : (curso.nome_pt || curso.nome_en);
}
function assuntosCurso(curso, idioma){
  const lista = idioma === 'en' ? curso.assuntos_en : curso.assuntos_pt;
  return Array.isArray(lista) ? lista : [];
}
