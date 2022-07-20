import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
    <div className='container about__container'>
      <div className="about__me">
        <div className="about__me-image">
          <img  src={ME} alt='About me' />
        </div>
      </div>
      <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working in web development </small>
            <small>10+ years working on BPO</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Clients worldwide</small>
          </article>
          <article className='about__card'>
            <VscFolderActive className='about__icon'/>
            <h5>Projects</h5>
            <small>20 Completed projects</small>
          </article>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit dolore eius cupiditate, fugit incidunt placeat! Nesciunt soluta quam reiciendis esse eius quia ea maiores. Accusamus ut ea vitae quidem facilis!</p>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
      </div>

    </div>
    </section>
  )
}

export default About