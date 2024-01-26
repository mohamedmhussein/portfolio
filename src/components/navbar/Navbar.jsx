import React from 'react'
import './navbar.scss'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";


export const Navbar = () => {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <div className="wrapper">
            <span>elprince</span>
            <div className="links">
                <a href='#'><FaFacebookSquare size={18} /></a>
                <a href='#'><FaGithubSquare size={18} /></a>
                <a href='#'><FaLinkedin size={18} /></a>
            </div>
        </div>
    </div>
  )
}
