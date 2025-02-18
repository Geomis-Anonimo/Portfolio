export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Tracking API",
      description: "API para rastreamento de objetos",
      technologies: ["Nest.js", "Node.js"],
      githubUrl: ""
    },
    {
      id: 2,
      title: "Data Control",
      description: "Backend para controle de dados de uma empresa, podendo salvar, editar, deletar e filtrar dados de uma empresa, contendo um Endpoint salvamento de dados permanente ",
      technologies: ["Nest.js", "SQLite", "Prisma"],
      githubUrl: ""
    },
    {
      id: 3,
      title: "Jitsu Control",
      description: "Site de uma empresa de jiu-jitsu, contendo um sistema de login, cadastro de alunos, cadastro de professores, cadastro de aulas, cadastro de horários, controle de frequência, entre outros.",
      technologies: ["Nest.js", "React.js", "TypeScript", "Prisma", "Tailwind", "PostgreSQL"],
      githubUrl: ""
    },
    {
      id: 4,
      title: "Conexão com bot de atendimento",
      description: "Manutenção e desenvolvimento de Webservice para atendimento automático, contendo rotas que trazem informações necessárias para atendimento automático.",
      technologies: ["Java"],
      githubUrl: ""
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100/10 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
            Projetos em Destaque
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition-all flex flex-col min-h-[400px]"
            >
              <h3 className="text-xl font-bold text-blue-400 h-[40px]">
                {project.title}
              </h3>
              <p className="text-gray-300 h-[120px] overflow-auto mb-4">
                {project.description}
              </p>
              <div className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-2 min-h-[80px]">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-900/50 rounded-full text-sm text-blue-300 h-8 flex items-center justify-center min-w-[80px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  {project.githubUrl && project.githubUrl.includes('https') ? (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Ver Projeto
                    </a>
                  ) : (
                    <span className="text-blue-400">
                      {project.githubUrl}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 