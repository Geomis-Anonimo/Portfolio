import { useTheme } from '../context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [displayedName, setDisplayedName] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const names = ['Junior', 'Dev', 'FullStack', 'Backend', 'Frontend', 'Programador']
  const typingDelay = 150 // Velocidade de digitação
  const deletingDelay = 50 // Velocidade de apagamento
  const pauseDelay = 2000 // Pausa antes de começar a apagar

  useEffect(() => {
    const tick = () => {
      const i = loopNum % names.length
      const fullText = names[i]

      if (isDeleting) {
        // Apagando
        setDisplayedName(fullText.substring(0, displayedName.length - 1))
        if (displayedName.length === 0) {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
        }
      } else {
        // Digitando
        setDisplayedName(fullText.substring(0, displayedName.length + 1))
        if (displayedName.length === fullText.length) {
          // Pausa antes de começar a apagar
          setTimeout(() => setIsDeleting(true), pauseDelay)
          return
        }
      }
    }

    let timer = setTimeout(tick, isDeleting ? deletingDelay : typingDelay)
    return () => clearTimeout(timer)
  }, [displayedName, isDeleting, loopNum])

  return (
    <nav className="fixed w-full bg-gray-900/10 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="bg-clip-text text-xl font-bold text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
              Messias_{displayedName}
              <span className="animate-blink">|</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="text-green-50 hover:text-white px-3 py-2">Home</a>
              <a href="/#experience" className="text-green-50 hover:text-white px-3 py-2">Experiência</a>
              <a href="/#projects" className="text-green-50 hover:text-white px-3 py-2">Projetos</a>
              <a href="/#contact" className="text-green-50 hover:text-white px-3 py-2">Contato</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 