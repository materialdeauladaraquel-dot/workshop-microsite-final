import './App.css'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Clock, Mail, Phone, ChevronDown, ChevronRight, Target, Lightbulb, FileText, Download, Copy, ExternalLink } from 'lucide-react'
import ppgcomLogo from './assets/ppgcom_logo.png'
import { promptsUteis } from './prompts_uteis.js'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [expandedExercise, setExpandedExercise] = useState(null)
  const [expandedPrompt, setExpandedPrompt] = useState(null)

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: BookOpen },
    { id: 'programa', label: 'Programa', icon: FileText },
    { id: 'exercicios', label: 'Exercícios', icon: Target },
    { id: 'recursos', label: 'Recursos', icon: Lightbulb },
    { id: 'contato', label: 'Contato', icon: Mail }
  ]

  const exercicios = [
    {
      id: 'antivacina',
      titulo: 'Movimento Antivacina no Instagram',
      duracao: '20 min',
      descricao: 'Análise de narrativas, engajamento e redes de influência',
      subtarefas: [
        {
          tipo: 'Zero-Shot',
          objetivo: 'Identificar narrativas recorrentes no discurso antivacina',
          tempo: '7 min'
        },
        {
          tipo: 'Few-Shot',
          objetivo: 'Medir padrões de engajamento e viralização',
          tempo: '7 min'
        },
        {
          tipo: 'Chain-of-Thought',
          objetivo: 'Mapear influenciadores-chave e redes de influência',
          tempo: '6 min'
        }
      ]
    },
    {
      id: 'netflix',
      titulo: 'Estratégias da Netflix',
      duracao: '15 min',
      descricao: 'Análise comparativa e avaliação de fatores de sucesso',
      subtarefas: [
        {
          tipo: 'Comparativo por Gênero',
          objetivo: 'Analisar diferenças na recepção entre gêneros',
          tempo: '4 min'
        },
        {
          tipo: 'Comparativo Estratégico',
          objetivo: 'Contrastar posts promocionais vs. institucionais',
          tempo: '4 min'
        },
        {
          tipo: 'Tree-of-Thoughts',
          objetivo: 'Avaliar fatores de sucesso das estratégias',
          tempo: '7 min'
        }
      ]
    }
  ]

  const recursos = [
    {
      categoria: 'Prompts para Análise de Recepção',
      items: [
        'Análise de sentimento em comentários',
        'Identificação de padrões de engajamento',
        'Mapeamento de comunidades de fãs',
        'Análise de apropriação discursiva'
      ]
    },
    {
      categoria: 'Prompts para Estudos de Circulação',
      items: [
        'Rastreamento de viralização',
        'Análise de fluxos informativos',
        'Identificação de gatekeepers',
        'Mapeamento de redes de distribuição'
      ]
    },
    {
      categoria: 'Templates Metodológicos',
      items: [
        'Estrutura para prompts acadêmicos',
        'Critérios de qualidade para prompts',
        'Checklist de replicabilidade',
        'Guia de formatação de resultados'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <img src={ppgcomLogo} alt="PPGCOM-UERJ" className="h-10" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-gray-900">
                  Design de Prompts para Pesquisas em Comunicação
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>1h30</span>
              <Users className="h-4 w-4 ml-4" />
              <span>Pós-graduação</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeSection === item.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Início */}
        {activeSection === 'inicio' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Oficina: Design de Prompts para Pesquisas em Comunicação
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Foco em Circulação e Recepção de Conteúdo
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Objetivo</h3>
                <p className="text-blue-800">
                  Capacitar pesquisadores de mestrado, doutorado e professores universitários 
                  da área de Comunicação Social a criar prompts eficazes para investigações 
                  acadêmicas, com ênfase na coleta, análise e interpretação de dados sobre 
                  circulação e recepção de conteúdos em plataformas digitais.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Público-Alvo</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Pesquisadores de mestrado</li>
                  <li>• Pesquisadores de doutorado</li>
                  <li>• Professores universitários</li>
                  <li>• Área: Comunicação Social</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Duração</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600 mb-2">1h30</p>
                <p className="text-gray-600">
                  Formato intensivo com teoria, prática e discussão
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Metodologia</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fundamentos teóricos</li>
                  <li>• Demonstração guiada</li>
                  <li>• Exercícios práticos</li>
                  <li>• Discussão coletiva</li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Programa */}
        {activeSection === 'programa' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Programa da Oficina</h2>
            
            <div className="space-y-4">
              {[
                {
                  titulo: "1. Abertura e Contextualização",
                  duracao: "5 min",
                  conteudo: [
                    "Apresentação e objetivos da oficina",
                    "Contexto: A crescente importância do design de prompts",
                    "Conexão com estudos de circulação e recepção",
                    "Apresentação da agenda e metodologia"
                  ]
                },
                {
                  titulo: "2. Fundamentos Teóricos",
                  duracao: "35 min",
                  conteudo: [
                    "Comando vs. Prompt (5 min)",
                    "Fundamentos Técnicos: Tokenização e Janela de Contexto (8 min)",
                    "Elementos Constituintes de um Excelente Prompt (7 min)",
                    "Quatro Tipos Principais de Prompts (8 min)",
                    "Modos de Raciocínio do Modelo (7 min)"
                  ]
                },
                {
                  titulo: "3. Demonstração Guiada",
                  duracao: "10 min",
                  conteudo: [
                    "Evolução de um Prompt: Do Simples ao Sofisticado",
                    "Comparação de Outputs",
                    "Discussão sobre adequação metodológica"
                  ]
                },
                {
                  titulo: "4. Exercícios Práticos",
                  duracao: "35 min",
                  conteudo: [
                    "Exercício 1: Movimento Antivacina no Instagram (20 min)",
                    "Exercício 2: Postagens da Netflix (15 min)",
                    "Desenvolvimento de prompts em grupos"
                  ]
                },
                {
                  titulo: "5. Apresentação e Discussão",
                  duracao: "20 min",
                  conteudo: [
                    "Dinâmica de Compartilhamento (15 min)",
                    "Síntese Metodológica (5 min)",
                    "Feedback coletivo e identificação de soluções"
                  ]
                },
                {
                  titulo: "6. Encerramento e Próximos Passos",
                  duracao: "5 min",
                  conteudo: [
                    "Recapitulação dos conceitos-chave",
                    "Recursos para aprofundamento",
                    "Avaliação e feedback"
                  ]
                }
              ].map((secao, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{secao.titulo}</h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {secao.duracao}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {secao.conteudo.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 flex items-start">
                        <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Exercícios */}
        {activeSection === 'exercicios' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Exercícios Práticos</h2>
            
            <div className="space-y-4">
              {exercicios.map((exercicio) => (
                <div key={exercicio.id} className="bg-white rounded-lg shadow-sm border">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedExercise(
                      expandedExercise === exercicio.id ? null : exercicio.id
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {exercicio.titulo}
                        </h3>
                        <p className="text-gray-600 mb-2">{exercicio.descricao}</p>
                        <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                          {exercicio.duracao}
                        </span>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          expandedExercise === exercicio.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                  
                  {expandedExercise === exercicio.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t px-6 pb-6"
                    >
                      <div className="pt-4 space-y-4">
                        {exercicio.subtarefas.map((subtarefa, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-gray-900">
                                {subtarefa.tipo}
                              </h4>
                              <span className="text-sm text-gray-500">
                                {subtarefa.tempo}
                              </span>
                            </div>
                            <p className="text-gray-600 text-sm">
                              {subtarefa.objetivo}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Nota sobre os Bancos de Dados
              </h3>
              <p className="text-blue-800">
                Os bancos de dados para os exercícios (postagens e comentários do movimento 
                antivacina e da Netflix) serão compartilhados por email antes da oficina. 
                Certifique-se de ter acesso aos dados para participar plenamente dos exercícios práticos.
              </p>
            </div>
          </motion.div>
        )}

        {/* Recursos */}
        {activeSection === 'recursos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Recursos e Anexos</h2>
            
            {/* Prompts para Análise de Recepção */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Prompts para Análise de Recepção</h3>
              {promptsUteis.analiseRecepcao.map((prompt, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedPrompt(
                      expandedPrompt === `recepcao-${index}` ? null : `recepcao-${index}`
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {prompt.titulo}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          <strong>Aplicação:</strong> {prompt.aplicacao}
                        </p>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          expandedPrompt === `recepcao-${index}` ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                  
                  {expandedPrompt === `recepcao-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t px-6 pb-6"
                    >
                      <div className="pt-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <h5 className="font-medium text-gray-900">Prompt Completo</h5>
                            <button 
                              onClick={() => navigator.clipboard.writeText(prompt.prompt)}
                              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                            >
                              <Copy className="h-4 w-4" />
                              <span>Copiar</span>
                            </button>
                          </div>
                          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">
                            {prompt.prompt}
                          </pre>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Prompts para Estudos de Circulação */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Prompts para Estudos de Circulação</h3>
              {promptsUteis.estudosCirculacao.map((prompt, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedPrompt(
                      expandedPrompt === `circulacao-${index}` ? null : `circulacao-${index}`
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {prompt.titulo}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          <strong>Aplicação:</strong> {prompt.aplicacao}
                        </p>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          expandedPrompt === `circulacao-${index}` ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                  
                  {expandedPrompt === `circulacao-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t px-6 pb-6"
                    >
                      <div className="pt-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <h5 className="font-medium text-gray-900">Prompt Completo</h5>
                            <button 
                              onClick={() => navigator.clipboard.writeText(prompt.prompt)}
                              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                            >
                              <Copy className="h-4 w-4" />
                              <span>Copiar</span>
                            </button>
                          </div>
                          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans">
                            {prompt.prompt}
                          </pre>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Templates Metodológicos */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Templates Metodológicos</h3>
              {promptsUteis.templatesMetodologicos.map((template, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setExpandedPrompt(
                      expandedPrompt === `template-${index}` ? null : `template-${index}`
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {template.titulo}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          <strong>Aplicação:</strong> {template.aplicacao}
                        </p>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-400 transition-transform ${
                          expandedPrompt === `template-${index}` ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                  
                  {expandedPrompt === `template-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t px-6 pb-6"
                    >
                      <div className="pt-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <h5 className="font-medium text-gray-900">
                              {template.template ? 'Template' : 'Critérios'}
                            </h5>
                            <button 
                              onClick={() => navigator.clipboard.writeText(
                                template.template || template.criterios.join('\n')
                              )}
                              className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                            >
                              <Copy className="h-4 w-4" />
                              <span>Copiar</span>
                            </button>
                          </div>
                          {template.template ? (
                            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                              {template.template}
                            </pre>
                          ) : (
                            <ul className="space-y-2">
                              {template.criterios.map((criterio, criterioIndex) => (
                                <li key={criterioIndex} className="text-sm text-gray-700">
                                  {criterio}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Como Usar Estes Prompts
              </h3>
              <ul className="text-blue-800 space-y-2">
                <li>• Adapte os prompts para seu contexto específico de pesquisa</li>
                <li>• Substitua os placeholders ([ÁREA ESPECÍFICA], [DADOS/CORPUS], etc.) por informações concretas</li>
                <li>• Combine diferentes prompts para análises mais complexas</li>
                <li>• Teste os prompts com pequenas amostras antes de aplicar ao corpus completo</li>
                <li>• Documente as adaptações feitas para garantir replicabilidade</li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* Contato */}
        {activeSection === 'contato' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900">Contato</h2>
            
            <div className="bg-white rounded-lg shadow-sm border p-8 max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <img src={ppgcomLogo} alt="PPGCOM-UERJ" className="h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Programa de Pós-Graduação em Comunicação
                </h3>
                <p className="text-gray-600">Universidade do Estado do Rio de Janeiro</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <a 
                      href="mailto:raquel.loabo@uerj.br" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      raquel.loabo@uerj.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Telefone</h4>
                    <a 
                      href="tel:+5521995888668" 
                      className="text-green-600 hover:text-green-800 transition-colors"
                    >
                      (21) 99588-8668
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t text-center">
                <p className="text-gray-600 text-sm">
                  Para dúvidas sobre a oficina ou acesso aos bancos de dados, 
                  entre em contato através dos canais acima.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={ppgcomLogo} alt="PPGCOM-UERJ" className="h-8" />
              <span className="text-gray-600 text-sm">
                © 2024 PPGCOM-UERJ. Oficina de Design de Prompts.
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="mailto:raquel.loabo@uerj.br" className="hover:text-gray-900 transition-colors">
                raquel.loabo@uerj.br
              </a>
              <a href="tel:+5521995888668" className="hover:text-gray-900 transition-colors">
                (21) 99588-8668
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
