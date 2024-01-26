import Link from "next/link"
import "./main.scss"
import { Navbar } from "@/components/navbar/Navbar"

export default function Home() {
  return (
    <div>
      <section><Navbar /></section>
      <section>parallex</section>
      <section>Services</section>
      <section>parallex</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section>Contat</section>
    </div>
  )
}
