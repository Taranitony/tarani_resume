import './index.css'
import { ThemeProvider, useTheme } from './lib/ThemeContext'
import ThemeSelector from './components/ThemeSelector'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Portfolio() {
  const { hasChosen, tokens } = useTheme()

  if (!hasChosen) return <ThemeSelector />

  return (
    <div style={{ background: tokens.bg, minHeight: '100vh', transition: 'background 0.3s, color 0.3s' }}>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Awards />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
