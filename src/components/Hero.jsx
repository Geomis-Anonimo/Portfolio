import MatrixRain from './MatrixRain'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <MatrixRain />

      <div className="absolute inset-0"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-500">
            Messias Junior
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Desenvolvedor Full Stack | Especialista em Backend
        </p>
        <a href="/#projects">
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full font-semibold transition-colors">
            Conheça meu trabalho
          </button>
        </a>
      </div>
    </div>
  )
} 