import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Team from './sections/Team'
import Technologies from './sections/Technologies'
import About from './sections/About'
import HowWeWork from './sections/HowWeWork'
import Engagement from './sections/Engagement'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Portfolio />
        <Team />
        <Technologies />
        <About />
        <HowWeWork />
        <Engagement />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
