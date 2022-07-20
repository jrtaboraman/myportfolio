import React from 'react';
import './nav.css';
import {FaHome, FaBook} from 'react-icons/fa';
import {ImUserTie} from 'react-icons/im';
import {AiFillCode} from 'react-icons/ai';
import {MdContactPhone} from 'react-icons/md'
import { useState } from 'react';
 

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
        <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
        <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><ImUserTie/></a>
        <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook/></a>
        <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiFillCode/></a>
        <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPhone/></a>
    </nav>
  )
}

export default Nav