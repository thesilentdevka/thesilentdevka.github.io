import { LoadingScreen } from './components/LoadingScreen'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import './styles/variables.css'
import './styles/global.css'

function App() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default App
