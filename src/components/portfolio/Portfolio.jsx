'use client'
import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'
import {projects} from '../../app/data'

const SingleProject = ({project}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    })
    const y = useTransform(scrollYProgress, [0,1], ["-50%", "50%"])
  return (
    <section >
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={project.img} alt="" />
                </div>
                
                <motion.div className="textContainer" style={{y: y}}  >
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                    <button>Live Demo</button>
                </motion.div>
            </div>
        </div>
    </section>
  )
}


const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div className="progressBar" style={{scaleX: scaleX}}></motion.div>
        </div>
        {projects.map(project => (
            <SingleProject project = {project} key={project.id}/>
            ))}

    </div>
  )
}

export default Portfolio