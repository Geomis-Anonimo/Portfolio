import html5Icon from '../assets/html5-512px.png'
import cssIcon from '../assets/css-512px.png'
import gitIcon from '../assets/git-512px.png'
import sqlServerIcon from '../assets/sql-server-512px.png'
import mysqlIcon from '../assets/mysql-512px.png'
import postgresIcon from '../assets/PostgresSQL-512px.png'
import sqliteIcon from '../assets/sqlite-512px.png'
import dockerIcon from '../assets/docker-512px.png'
import typescriptIcon from '../assets/typescript-512px.png'
import jsIcon from '../assets/js-512px.png'
import reactIcon from '../assets/react-512px.png'
import phpIcon from '../assets/php-512px.png'
import bootstrapIcon from '../assets/bootstrap-512px.png'
import nodejsIcon from '../assets/nodejs-512px.png'
import prismaIcon from '../assets/prisma-512px.png'
import nestjsIcon from '../assets/nestjs-800px.png'
import vscodeIcon from '../assets/vscode-512px.png'
import azureIcon from '../assets/Azure_SQL-512px.png'
import insomniaIcon from '../assets/insomnia-512px.png'
import codeigniterIcon from '../assets/codeigniter-512px.png'
import npmIcon from '../assets/npm-512px.png'
import composerIcon from '../assets/composer-512px.png'
import gptIcon from '../assets/chat-gpt-512px.png'

export default function Stats() {
  const stats = [
    { id: 1, value: '2+', label: 'Anos de Experiência' },
    { id: 2, value: '999  +', label: 'Commits realizados' },
    { id: 3, value: '20+', label: 'Tecnologias Dominadas' },
    { id: 4, value: '100%', label: 'Satisfação' },
  ]

  const technologies = [
    { icon: nodejsIcon, name: 'Node.js' },
    { icon: jsIcon, name: 'JavaScript' },
    { icon: typescriptIcon, name: 'TypeScript' },
    { icon: sqlServerIcon, name: 'SQL Server' },
    { icon: mysqlIcon, name: 'MySQL' },
    { icon: postgresIcon, name: 'PostgreSQL' },
    { icon: sqliteIcon, name: 'SQLite' },
    { icon: html5Icon, name: 'HTML5' },
    { icon: cssIcon, name: 'CSS3' },
    { icon: gitIcon, name: 'Git' },
    { icon: dockerIcon, name: 'Docker' },
    { icon: reactIcon, name: 'React' },
    { icon: phpIcon, name: 'PHP' },
    { icon: bootstrapIcon, name: 'Bootstrap' },
    { icon: prismaIcon, name: 'Prisma' },
    { icon: nestjsIcon, name: 'NestJS' },
    { icon: vscodeIcon, name: 'VSCode' },
    { icon: azureIcon, name: 'Azure' },
    { icon: insomniaIcon, name: 'Insomnia' },
    { icon: codeigniterIcon, name: 'CodeIgniter' },
    { icon: npmIcon, name: 'NPM' },
    { icon: composerIcon, name: 'Composer' },
    { icon: gptIcon, name: 'ChatGPT' },
  ]

  return (
    <>
    <div className="py-24 bg-gray-100/10 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all"
            >
              <dt className="text-4xl font-bold text-green-600 dark:green-blue-400 mb-2">
                {stat.value}
              </dt>
              <dd className="text-gray-600 dark:text-gray-400">{stat.label}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="py-24 bg-gray-100/10 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-50 dark:text-white">
          Stack Tecnológica
        </h2>
        <p className="text-center mb-20 text-gray-600 dark:text-gray-400 text-lg">
          Ferramentas e tecnologias comuns no dia a dia
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm hover:transform hover:scale-105 transition-all">
              <img src={tech.icon} alt={tech.name} className="w-16 h-16 mb-3"/>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
} 
