'use client'
import React, { useState } from 'react'
import './sidebar.scss'
import Links from './links/Links'
import ToggleButton from './togglebutton/ToggleButton'
import {motion} from 'framer-motion'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const variants = {
    open:{
      clipPath: "circle(12000px at 50px 50px)",
      transition: {
        type: 'spring',
        stiffness:2
      }
    },
    closed:{
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  }
  return (
    <motion.div 
    animate = {open ? 'open' : 'closed'}
    className="sidebar"
    variants = {variants}>
        <div className="bg">
            <Links />
        </div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar