import About from "./Components/About"
import Contact from "./Components/Contact"
import Education from "./Components/Education"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"

function Root() {

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar></Navbar>
        <main>
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          <Education></Education>
          <Projects></Projects>
          <Contact></Contact>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Root
