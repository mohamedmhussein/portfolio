'use client'
import { useRef } from 'react'
import './parallax.scss'
import {motion, useScroll, useTransform} from 'framer-motion'
import { urlToUrlWithoutFlightMarker } from 'next/dist/client/components/app-router'
const Parallax = ({title}) => {

  const ref= useRef()
  
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const yAnimation = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"])



  return (
    <div ref = {ref}className='parallax' style = {{
        background: 
            title === 'services' 
                ? "linear-gradient(180deg, #111132, #0c0c1d)" 
                : "linear-gradient(180deg, #111132, #505064)" }}>
        <motion.h1 style={{y: yText}}>{ title === 'services'? 'What I do?' : 'What I did?'}</motion.h1>
        <motion.div  className="mountains"></motion.div>
        <motion.div 
        style = {{
          y: yAnimation,
          backgroundImage: `url(${title === 'services' ? '/planets.png': '/sun.png'})`
        }} 
        className="planets"></motion.div>
        <motion.div style = {{x: yAnimation}} className="stars"></motion.div>
    </div>
  )
}

export default Parallax