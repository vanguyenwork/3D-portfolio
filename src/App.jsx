import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Experience from "./sections/Experience"

const App = () => {
  return (
    <main className='max-w-7xl mx-auto relative'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App