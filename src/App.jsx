import './App.css'
import ParticleBackground from './components/Background/ParticleBackground'
import Header from './components/Header/Header'
import About from './components/About/About'
import Ability from './components/Abilities/Ability'
import Projects from './components/Projects/Projects'
import Contact from './components/Contatc/Contact'
function App() {

  return (
    <>
      <ParticleBackground />
      <div className="App">
        <Header />
        <About />
        <Ability />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
