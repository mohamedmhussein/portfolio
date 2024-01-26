'use client'
import React from 'react'
import './navbar.scss'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar';


export const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className="wrapper">
            <motion.span 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}>elprince</motion.span>
            <div className="social">
                <a href='#'><FaFacebookSquare size={18} /></a>
                <a href='#'><FaGithubSquare size={18} /></a>
                <a href='#'><FaLinkedin size={18} /></a>
            </div>
        </div>
    </div>
  )
}
