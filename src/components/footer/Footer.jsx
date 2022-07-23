import React from 'react';
import './footer.css';
import {BsFacebook, BsLinkedin, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>FSTJ</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#certificates'>Certificates</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    <div  className='footer__socials'>
    <a href='https://facebook.com/wynry.winter' target='_blank'><BsFacebook/></a>
    <a href='https://www.linkedin.com/in/francisco-jr-tabora-91a7351ba/' target='_blank'><BsLinkedin /></a>
    <a href='https://twitter.com/jrtaboraman' target='_blank'><BsTwitter /></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Francisco Tabora Jr. All rights reserved</small>
    </div>
    </footer>
  )
}

export default Footer