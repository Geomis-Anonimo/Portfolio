import MatrixRain from './components/MatrixRain'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Whatsapp from './components/Whatsapp'

export default function App() {
  return (
    <div className="relative">
      <MatrixRain />
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="stats">
          <Stats />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Whatsapp />
    </div>
  )
}