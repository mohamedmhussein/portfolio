import Link from "next/link"
import "./main.scss"
import { Navbar } from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"
import Parallax from "@/components/parallax/Parallax"

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
      
      <section>Services</section>
      <Parallax />
      <section>
        <Parallax  title='portfolio'/>
      </section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">Contat</section>
    </div>
  )
}
