import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: '#030712', minHeight: '100vh' }}>
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

export default App
