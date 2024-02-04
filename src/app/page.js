import Link from "next/link"
import "./main.scss"
import { Navbar } from "@/components/navbar/Navbar"
import Hero from "@/components/hero/Hero"

export default function Home() {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">parallex</section>
      <section>Services</section>
      <section id="Portfolio">parallex</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">Contat</section>
    </div>
  )
}
