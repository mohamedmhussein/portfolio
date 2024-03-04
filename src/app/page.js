import "./page.scss"
import { Navbar } from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"
import Parallax from "@/components/parallax/Parallax"
import Services from "@/components/services/Services"
import Portfolio from "@/components/portfolio/Portfolio"
import Contact from "@/components/contact/Contact"
import Cursor from "@/components/cursor/Cursor"

export default function Home() {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="Services">
        <Parallax  title='services'/>
      </section>
      
      <section>
        <Services />
      </section>

      <section id="Portfolio">
        <Parallax  title='portfolio'/>
      </section>

      <Portfolio />
      
      <section id="Contact">
        <Contact />
      </section>
      
    </div>
  )
}
