const questions = [
    {
        question: "Como os sete princípios orientadores devem ser combinados quando uma organização precisa tomar uma decisão?",
        answers: [
            { text: "Aplicar todos os princípios orientadores igualmente ao tomar qualquer decisão", correct: false },
            { text: "Aplicar um ou dois princípios orientadores mais relevantes à decisão específica", correct: false },
            { text: "Aplicar o princípio 'Foco no Valor' e mais um ou dois mais relevantes à decisão específica", correct: false },
            { text: "Revisar cada princípio orientador para decidir a relevância em relação à decisão específica.", correct: true }
        ]
    },
    {
        question: "Que princípio orientador ITIL recomenda o uso de serviços, processos e ferramentas existentes para melhorar o serviço?",
        answers: [
            { text: "Progredir Iterativamente com feedback", correct: false },
            { text: "Manter de forma simples e prática", correct: false },
            { text: "Começar de onde você está", correct: true },
            { text: "Foco no valor", correct: false }
        ]
    },
    {
        question: "Qual das opções a seguir é a abordagem CORRETA referente à autorização de mudança?",
        answers: [
            { text: "As mudanças incluídas no calendário de mudanças são pré-autorizadas e não precisam de autorização adicional", correct: false },
            { text: "As mudanças normais devem ser avaliadas e autorizadas antes de implantadas", correct: true },
            { text: "As mudanças emergenciais devem ser autorizadas pelo número máximo de pessoas possível, para reduzir o risco", correct: false },
            { text: "As mudanças normais, tipicamente, são implementadas como requisições de serviços e autorizadas pela central de serviços", correct: false }
        ]
    },
    {
        question: "Qual é o principal uso de um calendário de mudanças?",
        answers: [
            { text: "Ajudar a planejar, autorizar e programar mudanças emergenciais", correct: false },
            { text: "Publicar uma lista de requisições de serviço que os usuários podem selecionar", correct: false },
            { text: "Garantir que uma única autoridade de mudança revise todas as mudanças", correct: false },
            { text: "Ajudar a planejar mudanças, auxiliar na comunicação e evitar conflitos", correct: true }
        ]
    },
    {
        question: "Quais partes interessadas colaboram na criação de valor em um relacionamento de serviço?",
        answers: [
            { text: "Investidor e fornecedor", correct: false },
            { text: "Consumidor e provedor", correct: true },
            { text: "Provedor e fornecedor", correct: false },
            { text: "Investidor e consumidor", correct: false }
        ]
    },
    {
        question: "O que pode ajudar a diminuir a resistência a uma melhoria planejada na aplicação do princípio orientador colaborar e promover visibilidade?",
        answers: [
            { text: "Restringir as informações sobre a melhoria somente às partes interessadas essenciais", correct: false },
            { text: "Aumentar a colaboração e a visibilidade da melhoria", correct: true },
            { text: "Envolver os clientes após o término de todo o planejamento", correct: false },
            { text: "Envolver cada grupo de partes interessadas igualmente com a mesma comunicação", correct: false }
        ]
    },
    {
        question: "O que é utilidade?",
        answers: [
            { text: "Funcionalidade oferecida por um serviço para atender a uma necessidade específica", correct: true },
            { text: "Confirmação de que um serviço atenderá aos requisitos acordados", correct: false },
            { text: "Quantia em dinheiro gasta em uma determinada atividade ou recurso", correct: false },
            { text: "Benefícios, utilidade e importância percebidos em algo", correct: false }
        ]
    },
    {
        question: "Qual dessas atividades é realizada como parte do gerenciamento de problemas?",
        answers: [
            { text: "Criação de registro de incidente", correct: false },
            { text: "Diagnóstico e solução de incidentes", correct: false },
            { text: "Escalada de incidentes para a resolução por uma equipe de suporte", correct: false },
            { text: "Análise de tendência dos registros de incidente", correct: true }
        ]
    },
    {
        question: "O que ajuda a diagnosticar e resolver um incidente simples?",
        answers: [
            { text: "Escalada rápida", correct: false },
            { text: "Formação de uma equipe temporária", correct: false },
            { text: "Uso de roteiros", correct: true },
            { text: "Priorização dos problemas", correct: false }
        ]
    },
    {
        question: "Qual das opções a seguir abrange governança, práticas de gerenciamento e melhoria contínua?",
        answers: [
            { text: "O sistema de valor de serviço", correct: true },
            { text: "A atividade de cadeia de valor de entrega e suporte", correct: false },
            { text: "O princípio orientador foco no valor", correct: false },
            { text: "A dimensão fluxo de valor e processos", correct: false }
        ]
    },
    {
        question: "Que prática envolve o gerenciamento de vulnerabilidades que foram analisadas mas não resolvidas?",
        answers: [
            { text: "Habilitação de mudança", correct: false },
            { text: "Gerenciamento de requisição de serviço", correct: false },
            { text: "Gerenciamento de problema", correct: true },
            { text: "Gerenciamento de nível de serviço", correct: false }
        ]
    },
    {
        question: "O propósito da prática de gerenciamento de fornecedor é garantir que os fornecedores da organização e o _______ deles sejam gerenciados adequadamente para oferecer suporte a produtos e serviços de qualidade contínua.",
        answers: [
            { text: "Custo", correct: false },
            { text: "Usuário", correct: false },
            { text: "Valor", correct: false },
            { text: "Desempenho", correct: true }
        ]
    },
    {
        question: "Qual das opções a seguir deve ser considerada parte da dimensão parceiros e fornecedores?",
        answers: [
            { text: "O nível de integração e de informalidade envolvido nos relacionamentos entre as organizações", correct: true },
            { text: "As atividades, fluxo de trabalho, controles e procedimentos necessários para atingir os objetivos acordados", correct: false },
            { text: "As informações criadas, gerenciadas e usadas durante a provisão e o consumo de serviço", correct: false },
            { text: "As qualificações e competências requeridas das equipes e dos membros individuais da organização", correct: false }
        ]
    },
    {
        question: "Um usuário é _______ quem usa os serviços.",
        answers: [
            { text: "Uma organização", correct: false },
            { text: "Um papel", correct: true },
            { text: "Uma equipe", correct: false },
            { text: "Um fornecedor", correct: false }
        ]
    },
    {
        question: "Qual das atividades a seguir é realizada durante a etapa 'chegamos lá?' do modelo de melhoria contínua?",
        answers: [
            { text: "Definição de metas mensuráveis", correct: false },
            { text: "Realização de avaliações de linhas de base", correct: false },
            { text: "Execução de ações de melhoria", correct: false },
            { text: "Avaliação de medições e métricas", correct: true }
        ]
    },
    {
        question: "Qual das atividades a seguir faz parte da prática de melhoria contínua?",
        answers: [
            { text: "Identificação e registro de oportunidades", correct: true },
            { text: "Engajamento tático e operacional com os clientes", correct: false },
            { text: "Preenchimento e manutenção do registro de ativo", correct: false },
            { text: "Fornecimento de um caminho claro para os usuários relatarem questões, fazerem consultas e enviarem requisições", correct: false }
        ]
    },
    {
        question: "Qual é o propósito da prática de gerenciamento de incidentes?",
        answers: [
            { text: "Minimizar o impacto negativo de incidentes, restaurando a operação normal do serviço o mais rápido possível", correct: true },
            { text: "Capturar a demanda de resolução de incidentes e requisições de serviço", correct: false },
            { text: "Reduzir a probabilidade e o impacto de incidentes ao identificar suas causas reais e potenciais", correct: false },
            { text: "Suportar a qualidade acordada do serviço por meio do tratamento de todas as requisições de serviço acordadas e iniciadas pelos usuários", correct: false }
        ]
    },
    {
        question: "Qual destas afirmativas sobre as etapas de atendimento de requisições de serviço está correta?",
        answers: [
            { text: "Devem ser complexas e detalhadas", correct: false },
            { text: "Devem ser reconhecidas e comprovadas", correct: false },
            { text: "Devem abranger o tratamento do incidente", correct: false },
            { text: "Devem ser resumidas e simples", correct: true }
        ]
    },
    {
        question: "Que prática coordena a classificação, propriedade e comunicação das requisições e incidentes?",
        answers: [
            { text: "Gerenciamento de incidente", correct: false },
            { text: "Gerenciamento de relacionamento com o negócio", correct: false },
            { text: "Central de serviço", correct: true },
            { text: "Habilitação de mudança", correct: false }
        ]
    },
    {
        question: "Que prática da ITIL consiste em mover novos ou alterados componentes para ambientes de produção?",
        answers: [
            { text: "Gerenciamento de ativos de TI", correct: false },
            { text: "Controle de mudanças", correct: false },
            { text: "Gerenciamento de problemas", correct: false },
            { text: "Gerenciamento de liberação", correct: true }
        ]
    },
    {
        question: "Qual princípio orientador enfatiza a necessidade de entender como todos os componentes de uma organização interagem para criar valor como um sistema?",
        answers: [
            { text: "Manter de forma simples e prática", correct: false },
            { text: "Pensar e trabalhar holisticamente", correct: true },
            { text: "Otimizar e automatizar", correct: false },
            { text: "Progredir iterativamente com feedback", correct: false }
        ]
    },
    {
        question: "O que a central de serviço deve ajudar a atingir?",
        answers: [
            { text: "Apoiar a melhoria contínua", correct: false },
            { text: "Gerenciar a transição do serviço", correct: false },
            { text: "Reduzir a probabilidade e o impacto de incidentes", correct: false },
            { text: "Reduzir o impacto negativo de incidentes proativos", correct: true }
        ]
    },
    {
        question: "Quais são as duas funções da central de serviços?",
        answers: [
            { text: "Prover um único ponto de contato e comunicação entre o provedor de serviço e todos os seus usuários", correct: true },
            { text: "Gerenciar problemas e realizar a gestão de incidentes", correct: false },
            { text: "Estabelecer a criticidade dos problemas e habilitar mudanças", correct: false },
            { text: "Estabelecer fluxos de trabalho e realizar gestão de problemas", correct: false }
        ]
    },
    {
        question: "O que deve ser feito ao selecionar ou projetar uma ferramenta de central de serviço?",
        answers: [
            { text: "Escolher uma ferramenta que automatize um único processo", correct: false },
            { text: "A ferramenta deve ter a capacidade de suportar procedimentos complexos", correct: false },
            { text: "A ferramenta deve ser capaz de suportar procedimentos organizacionais simples", correct: false },
            { text: "Escolher uma ferramenta que suporte trabalho colaborativo e complexo", correct: true }
        ]
    },
    {
        question: "O que significa risco?",
        answers: [
            { text: "Um resultado positivo ou negativo de um evento", correct: true },
            { text: "Uma provável causa de uma falha", correct: false },
            { text: "Um fator que pode causar uma ameaça", correct: false },
            { text: "Um evento que pode causar uma falha", correct: false }
        ]
    },
    {
        question: "Qual é o propósito da prática de habilitação de mudança?",
        answers: [
            { text: "Gerenciar as mudanças em produtos e serviços de forma controlada para reduzir o risco", correct: true },
            { text: "Garantir que as mudanças sejam tratadas rapidamente para minimizar impacto nos serviços", correct: false },
            { text: "Minimizar o impacto de incidentes por meio de procedimentos pré-estabelecidos", correct: false },
            { text: "Garantir que as mudanças sejam tratadas de forma a atender a expectativas e desejos dos usuários", correct: false }
        ]
    },
    {
        question: "Que dimensão envolve a gestão da complexidade dos relacionamentos?",
        answers: [
            { text: "Produtos e serviços", correct: false },
            { text: "Organização e pessoas", correct: false },
            { text: "Informação e tecnologia", correct: false },
            { text: "Parceiros e fornecedores", correct: true }
        ]
    },
    {
        question: "O que é garantia?",
        answers: [
            { text: "A funcionalidade oferecida por um serviço para atender a uma necessidade específica", correct: false },
            { text: "A segurança de que um serviço atenderá aos requisitos acordados", correct: true },
            { text: "O nível de flexibilidade e adequação de um serviço", correct: false },
            { text: "O resultado positivo ou negativo de um evento", correct: false }
        ]
    },
    {
        question: "Qual é o propósito da prática de gerenciamento de nível de serviço?",
        answers: [
            { text: "Garantir que todas as requisições de serviço sejam tratadas conforme o nível acordado", correct: false },
            { text: "Minimizar o impacto de incidentes por meio de atendimento prioritário", correct: false },
            { text: "Capturar a demanda por incidentes e requisições de serviço", correct: false },
            { text: "Garantir que os níveis acordados de serviço sejam claramente definidos, medidos e gerenciados", correct: true }
        ]
    },
    {
        question: "Qual é o efeito da introdução de práticas ágeis em uma organização?",
        answers: [
            { text: "Reduzir a capacidade da organização de responder rapidamente a mudanças", correct: false },
            { text: "Aumentar a probabilidade de sucesso de mudanças", correct: true },
            { text: "Minimizar a importância do pensamento holístico", correct: false },
            { text: "Estabelecer uma abordagem prescritiva para a mudança", correct: false }
        ]
    },
    {
        question: "Qual das seguintes opções descreve o melhor propósito para a prática de gerenciamento de liberação?",
        answers: [
            { text: "Mover componentes novos ou alterados para ambientes de produção", correct: true },
            { text: "Avaliar e autorizar mudanças nos serviços", correct: false },
            { text: "Gerenciar fornecedores para garantir desempenho", correct: false },
            { text: "Registrar e resolver incidentes rapidamente", correct: false }
        ]
    },
    {
        question: "Qual é o propósito da prática de gerenciamento de fornecedores?",
        answers: [
            { text: "Minimizar a probabilidade de falhas em serviços", correct: false },
            { text: "Garantir que os fornecedores sejam gerenciados adequadamente", correct: true },
            { text: "Aumentar o valor percebido pelo cliente", correct: false },
            { text: "Coordenar a execução de atividades de fornecedores", correct: false }
        ]
    },
    {
        question: "Qual das seguintes opções descreve melhor o gerenciamento de incidentes?",
        answers: [
            { text: "Gerenciar a solicitação de serviço de forma eficaz", correct: false },
            { text: "Restaurar a operação normal o mais rápido possível", correct: true },
            { text: "Minimizar o impacto de incidentes por meio de prevenção", correct: false },
            { text: "Avaliar e priorizar incidentes para evitar problemas futuros", correct: false }
        ]
    },
    {
        question: "Qual prática da ITIL tem o propósito de capturar a demanda por resolução de incidentes e requisições de serviço?",
        answers: [
            { text: "Habilitação de mudança", correct: false },
            { text: "Gerenciamento de liberação", correct: false },
            { text: "Central de serviço", correct: true },
            { text: "Gerenciamento de incidentes", correct: false }
        ]
    },
    {
        question: "Qual prática ITIL é responsável por movimentar componentes novos ou alterados para ambientes de produção?",
        answers: [
            { text: "Gerenciamento de liberação", correct: true },
            { text: "Gerenciamento de ativos de TI", correct: false },
            { text: "Controle de mudanças", correct: false },
            { text: "Gerenciamento de problemas", correct: false }
        ]
    },
    {
        question: "Qual das seguintes opções descreve melhor o propósito da prática de habilitação de mudança?",
        answers: [
            { text: "Minimizar o impacto de mudanças em serviços", correct: false },
            { text: "Gerenciar as mudanças de forma controlada para reduzir o risco", correct: true },
            { text: "Garantir que as mudanças sejam autorizadas e registradas", correct: false },
            { text: "Capturar a demanda por mudanças de serviços", correct: false }
        ]
    },
    {
        question: "O que a prática de gerenciamento de problemas busca minimizar?",
        answers: [
            { text: "O impacto negativo de incidentes", correct: true },
            { text: "O impacto de mudanças", correct: false },
            { text: "O tempo de resolução de incidentes", correct: false },
            { text: "O número de requisições de serviço", correct: false }
        ]
    },
    {
        question: "Qual das opções a seguir descreve a garantia?",
        answers: [
            { text: "Confirmação de que um serviço atende aos requisitos acordados", correct: true },
            { text: "Valor percebido por um cliente com base no desempenho", correct: false },
            { text: "Confirmação de que o serviço entregará o valor esperado", correct: false },
            { text: "Percepção do valor com base na utilidade do serviço", correct: false }
        ]
    },
    {
        question: "Qual das opções a seguir descreve a prática de gerenciamento de nível de serviço?",
        answers: [
            { text: "Monitorar e gerenciar níveis de desempenho dos serviços", correct: false },
            { text: "Garantir que os níveis acordados de serviço sejam definidos e gerenciados", correct: true },
            { text: "Reduzir o número de incidentes por meio de monitoramento proativo", correct: false },
            { text: "Capturar a demanda por mudanças e incidentes", correct: false }
        ]
    }
];

export default questions;
