import React from 'react';
import './about.css';
import reactDeveloper from '../../assets/react-developer.png'
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
          <img  src={reactDeveloper} alt='About me' />
        </div>
      </div>
      <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working in web development </small>
            <small>10+ years working in BPO</small>
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
        <p>I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
        <p>I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.</p>
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
      </div>

    </div>
    </section>
  )
}

export default About