import "./page.scss"
import { Navbar } from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"
import Parallax from "@/components/parallax/Parallax"
import Services from "@/components/services/Services"
import Portfolio from "@/components/portfolio/Portfolio"

export default function Home() {
  return (
    <div>

      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section>
        <Parallax  title='services'/>
      </section>
      
      <section>
        <Services />
      </section>

      <section>
        <Parallax  title='portfolio'/>
      </section>

      <Portfolio />
      
      <section id="Contact">Contact</section>
    </div>
  )
}
