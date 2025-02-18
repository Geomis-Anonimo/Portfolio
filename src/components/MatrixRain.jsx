import { useEffect, useRef } from 'react'

const MatrixRain = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    // Configuração inicial
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    setCanvasSize()

    // Configurações do efeito Matrix
    const letters = "0123456789ABCDEF"
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = Array.from({ length: columns }).fill(1)

    // Preencher o fundo inicialmente com preto
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Função de desenho
    function draw() {
      // Criar efeito de fade
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Definir cor dos caracteres para um azul digital
      ctx.fillStyle = "#004000"
      ctx.font = `bold ${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    // Iniciar a animação
    const intervalId = setInterval(draw, 50)

    // Lidar com redimensionamento da janela
    window.addEventListener('resize', setCanvasSize)

    // Cleanup
    return () => {
      clearInterval(intervalId)
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'black'
      }}
    />
  )
}

export default MatrixRain 