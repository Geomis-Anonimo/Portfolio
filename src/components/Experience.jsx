export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Assistente técnico",
      company: "Virtual Informática LTDA",
      period: "2017 - 2018",
      description: "Manutenção de computadores e notebooks, configuração de redes Wi-Fi, instalação de softwares e suporte técnico. Contato direto com o cliente",
    },
    {
      id: 2,
      role: "Atendente Telemarketing",
      company: "Brasilcard Instituição de Pagamento LTDA",
      period: "2019 - 2021",
      description: "Atendimento ao cliente, venda de produtos e serviços bancários. Inicio no setor de atendimento ao cliente e posteriormente transferido para o setor de Negociação de débitos."
    },
    {
      id: 2,
      role: "Monitor de Operações",
      company: "Brasilcard Instituição de Pagamento LTDA",
      period: "2021 - 2023",
      description: "Monitoramento de operações, Testes de atualização de sistema, Análise e autorização de propostas, feedbacks semanais e mensais. Soft skills. Estratégia e gestão empresarial."
    },
    {
      id: 3,
      role: "Supervisor de Operações",
      company: "Brasilcard Instituição de Pagamento LTDA",
      period: "2023 - 2024",
      description: "Supervisão de equipe, monitoramento de operações, fechamento de metas mensais, feedbacks semanais e mensais. Soft skills. Estratégia e gestão empresarial."
    },
    {
      id: 4,
      role: "Desenvolvedor fullstack",
      company: "Cobuccio Tecnologia LTDA",
      period: "2024 - Atualmente",
      description: "Desenvolvimento de soluções escaláveis, no começo a principal linguagem era PHP, posteriormente Node.js com Typescript sendo utilizado para desenvolvimento de API's, Tailwind para estilização e React para o Front-end."
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100/10 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
            Experiência Profissional
          </span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-600">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 