// Prompts Úteis para Pesquisadores em Comunicação Social
// Foco em Circulação e Recepção de Conteúdo

export const promptsUteis = {
  analiseRecepcao: [
    {
      titulo: "Análise de Sentimento em Comentários",
      categoria: "Recepção",
      prompt: `Como pesquisador em Comunicação Social investigando a recepção de conteúdo digital, analise os comentários fornecidos para identificar:

1. **Sentimentos predominantes**: Classifique cada comentário como positivo, negativo, neutro ou ambivalente
2. **Intensidade emocional**: Avalie a intensidade (baixa, média, alta) de cada sentimento identificado
3. **Temas recorrentes**: Identifique os principais tópicos mencionados nos comentários
4. **Linguagem utilizada**: Analise o registro linguístico (formal, informal, gírias, emojis)
5. **Indicadores de engajamento**: Identifique comentários que demonstram alto envolvimento com o conteúdo

Apresente os resultados em uma tabela com as seguintes colunas: ID do comentário, Sentimento, Intensidade, Temas principais, Registro linguístico, Nível de engajamento.

Considere apenas comentários com mais de 10 palavras para garantir análise substantiva.`,
      aplicacao: "Estudos de recepção, análise de audiência, pesquisa de opinião pública"
    },
    {
      titulo: "Identificação de Padrões de Engajamento",
      categoria: "Recepção",
      prompt: `Como pesquisador em Comunicação Social estudando padrões de engajamento digital, analise o corpus de postagens e interações fornecido para:

1. **Tipos de interação**: Categorize as formas de engajamento (curtidas, comentários, compartilhamentos, menções)
2. **Temporalidade do engajamento**: Identifique picos de atividade e períodos de baixa interação
3. **Perfis de usuários engajados**: Caracterize os tipos de usuários mais ativos (frequência de participação, tipo de conteúdo que compartilham)
4. **Conteúdos que geram maior engajamento**: Identifique características comuns dos posts com alta interação
5. **Estratégias de resposta**: Analise como criadores de conteúdo respondem ao engajamento

Estruture a análise em seções temáticas com dados quantitativos e exemplos qualitativos representativos.

Foque em padrões que possam indicar estratégias de comunicação eficazes ou tendências de comportamento da audiência.`,
      aplicacao: "Marketing digital, gestão de comunidades online, estudos de audiência"
    },
    {
      titulo: "Mapeamento de Comunidades de Fãs",
      categoria: "Recepção",
      prompt: `Como pesquisador em Comunicação Social investigando a formação de comunidades de fãs em plataformas digitais, analise as interações fornecidas para:

1. **Identificação de núcleos**: Mapeie grupos de usuários que interagem frequentemente entre si
2. **Hierarquias informais**: Identifique usuários que parecem ter influência ou liderança na comunidade
3. **Linguagem comunitária**: Analise gírias, referências internas e códigos específicos da comunidade
4. **Rituais de participação**: Identifique práticas recorrentes que caracterizam a participação na comunidade
5. **Conflitos e consensos**: Mapeie temas que geram debate e aqueles que unificam a comunidade
6. **Relação com o objeto de fandom**: Analise como a comunidade se relaciona com o conteúdo/pessoa/marca que admira

Apresente um relatório etnográfico digital com descrição densa das práticas comunitárias observadas.

Considere aspectos de inclusão/exclusão e dinâmicas de poder dentro da comunidade.`,
      aplicacao: "Estudos de fandom, etnografia digital, análise de comunidades online"
    },
    {
      titulo: "Análise de Apropriação Discursiva",
      categoria: "Recepção",
      prompt: `Como pesquisador em Comunicação Social estudando processos de apropriação discursiva, analise como os usuários reinterpretam e ressignificam o conteúdo original:

1. **Estratégias de recontextualização**: Identifique como elementos do conteúdo original são utilizados em novos contextos
2. **Transformações de sentido**: Analise mudanças de significado que ocorrem na apropriação
3. **Criatividade dos usuários**: Mapeie formas criativas de uso do conteúdo (memes, paródias, remixes)
4. **Resistência e negociação**: Identifique casos onde usuários contestam ou negociam significados propostos
5. **Circulação de versões**: Rastreie como diferentes versões do conteúdo circulam e se modificam
6. **Impacto na mensagem original**: Avalie como as apropriações afetam a percepção do conteúdo original

Organize a análise por tipos de apropriação identificados, com exemplos detalhados de cada categoria.

Considere tanto apropriações que mantêm o sentido original quanto aquelas que o subvertem.`,
      aplicacao: "Estudos culturais, análise do discurso, pesquisa de recepção ativa"
    }
  ],
  
  estudosCirculacao: [
    {
      titulo: "Rastreamento de Viralização",
      categoria: "Circulação",
      prompt: `Como pesquisador em Comunicação Social investigando processos de viralização, analise o corpus de dados fornecido para mapear:

1. **Ponto de origem**: Identifique onde e quando o conteúdo começou a circular
2. **Trajetória de expansão**: Mapeie as plataformas e comunidades por onde o conteúdo se espalhou
3. **Momentos de aceleração**: Identifique eventos ou fatores que intensificaram a circulação
4. **Agentes de amplificação**: Identifique usuários, páginas ou veículos que contribuíram significativamente para a viralização
5. **Modificações durante a circulação**: Analise como o conteúdo foi alterado, editado ou recontextualizado
6. **Fatores de declínio**: Identifique quando e por que a circulação diminuiu

Apresente uma linha do tempo detalhada da viralização com métricas quantitativas e análise qualitativa dos fatores envolvidos.

Considere tanto aspectos técnicos (algoritmos, funcionalidades das plataformas) quanto sociais (relevância cultural, timing).`,
      aplicacao: "Estudos de viralização, análise de tendências, comunicação viral"
    },
    {
      titulo: "Análise de Fluxos Informativos",
      categoria: "Circulação",
      prompt: `Como pesquisador em Comunicação Social estudando fluxos informativos em redes digitais, analise a circulação de informações para identificar:

1. **Fontes primárias**: Identifique os originadores da informação (veículos, instituições, indivíduos)
2. **Intermediários**: Mapeie agentes que retransmitem, comentam ou contextualizam a informação
3. **Direção dos fluxos**: Analise se a informação flui de forma hierárquica, horizontal ou multidirecional
4. **Velocidade de propagação**: Meça o tempo entre publicação original e republicações
5. **Transformações na mensagem**: Identifique como a informação é modificada durante a circulação
6. **Barreiras e facilitadores**: Analise fatores que impedem ou aceleram a circulação

Crie um diagrama de fluxo informativo com análise das dinâmicas de poder e influência identificadas.

Considere diferenças entre tipos de informação (notícias, opinião, entretenimento) e suas lógicas de circulação específicas.`,
      aplicacao: "Jornalismo digital, estudos de mídia, análise de redes informativas"
    },
    {
      titulo: "Identificação de Gatekeepers",
      categoria: "Circulação",
      prompt: `Como pesquisador em Comunicação Social investigando o papel de gatekeepers em ambientes digitais, analise os dados fornecidos para:

1. **Identificação de gatekeepers**: Localize usuários, páginas ou algoritmos que controlam fluxos informativos
2. **Tipos de gatekeeping**: Classifique diferentes formas de controle (seleção, edição, timing, contexto)
3. **Critérios de seleção**: Analise que fatores influenciam as decisões de gatekeeping
4. **Impacto na circulação**: Meça como decisões de gatekeepers afetam o alcance e recepção do conteúdo
5. **Gatekeeping colaborativo**: Identifique casos onde múltiplos agentes exercem gatekeeping conjunto
6. **Resistência ao gatekeeping**: Analise estratégias usadas para contornar controles de circulação

Elabore um mapeamento dos principais gatekeepers identificados com análise de seu poder de influência e estratégias utilizadas.

Considere tanto gatekeepers tradicionais (editores, moderadores) quanto emergentes (influenciadores, algoritmos).`,
      aplicacao: "Teoria do gatekeeping, estudos de mídia, análise de poder informativo"
    },
    {
      titulo: "Mapeamento de Redes de Distribuição",
      categoria: "Circulação",
      prompt: `Como pesquisador em Comunicação Social estudando redes de distribuição de conteúdo digital, analise a estrutura e dinâmica das redes para:

1. **Topologia da rede**: Identifique nós centrais, periféricos e conectores entre diferentes clusters
2. **Padrões de conexão**: Analise como diferentes atores se conectam (reciprocidade, hierarquia, clusters)
3. **Fluxos de conteúdo**: Mapeie direções preferenciais de circulação dentro da rede
4. **Pontos de estrangulamento**: Identifique gargalos que limitam a distribuição
5. **Redundância e resiliência**: Analise caminhos alternativos de distribuição
6. **Evolução temporal**: Observe como a rede se modifica ao longo do tempo

Produza uma análise de redes sociais com visualizações e métricas de centralidade, densidade e modularidade.

Considere tanto aspectos estruturais quanto funcionais das redes de distribuição identificadas.`,
      aplicacao: "Análise de redes sociais, estudos de distribuição, comunicação organizacional"
    }
  ],
  
  templatesMetodologicos: [
    {
      titulo: "Estrutura para Prompts Acadêmicos",
      categoria: "Metodologia",
      template: `[CONTEXTO ACADÊMICO]
Como pesquisador(a) em [ÁREA ESPECÍFICA] investigando [OBJETO DE ESTUDO]...

[OBJETIVO CLARO]
Analise [DADOS/CORPUS] para identificar/comparar/explicar [FENÔMENO ESPECÍFICO]...

[INSTRUÇÕES ESTRUTURADAS]
1. [PRIMEIRA TAREFA ANALÍTICA]
2. [SEGUNDA TAREFA ANALÍTICA]
3. [SÍNTESE OU INTERPRETAÇÃO]

[FORMATO DE SAÍDA]
Apresente os resultados em [FORMATO ESPECÍFICO: tabela/categorias/relatório]...

[RESTRIÇÕES METODOLÓGICAS]
Considere apenas [LIMITAÇÕES/CRITÉRIOS ESPECÍFICOS]...

[FUNDAMENTAÇÃO TEÓRICA]
Baseie a análise em [TEORIAS/CONCEITOS RELEVANTES]...`,
      aplicacao: "Base para desenvolvimento de qualquer prompt acadêmico"
    },
    {
      titulo: "Checklist de Replicabilidade",
      categoria: "Metodologia",
      criterios: [
        "✓ Contexto acadêmico claramente definido",
        "✓ Objetivo específico e mensurável",
        "✓ Instruções passo a passo detalhadas",
        "✓ Critérios de análise explícitos",
        "✓ Formato de saída padronizado",
        "✓ Limitações metodológicas declaradas",
        "✓ Fundamentação teórica presente",
        "✓ Exemplos de aplicação fornecidos",
        "✓ Linguagem científica apropriada",
        "✓ Possibilidade de validação dos resultados"
      ],
      aplicacao: "Verificação da qualidade metodológica de prompts"
    }
  ]
};

export default promptsUteis;

