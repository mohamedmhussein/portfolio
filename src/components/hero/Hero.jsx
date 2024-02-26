'use client'
import './hero.scss'
import {motion} from 'framer-motion'

const Hero = () => {

  const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x:0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration:2,
            repeat: Infinity,
        }
    }
  }  
  const sliderVariants = {
    initial: {
        x:0
    },
    animate: {
        x: '-250%',
        transition: {
            repeat: Infinity,
            duration: 15,
            repeatType: 'mirror'
        }
    }

  }
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                <motion.h2 variants={textVariants}>MOHAMMAD EL PRINCE</motion.h2>
                <motion.h1 variants={textVariants}>Full-Stack <br />Web Developer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants} className='seeMyWork'>See My Work</motion.button>
                    <motion.button variants={textVariants} className='contactMe'>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} src="/scroll.png" alt="" animate='scrollButton' />
            </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
            JavaScript, Python, React, Flask, Nextjs, SQLite
        </motion.div>
        <div className="imageContainer">
            <img src="/myimage.png" alt="myimage" />
        </div>
    </div>
  )
}

export default Hero