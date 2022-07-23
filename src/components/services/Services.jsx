import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className='service'>
        <div className='service__head'>
          <h3>UI/UX Design</h3>
        </div>
      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Designs UI/UX for your web app using Firma, Maze or Flutter</p>
        </li>
      </ul>
      </article>
      {/* END of UI/UX */}
      <article className='service'>
        <div className='service__head'>
          <h3>Web Development</h3>
        </div>
      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Develop your web app using the latest technology such as Rectjr, Angular, Bootstrap and more..</p>
        </li>
      </ul>
      </article>
      {/* END OF WEB DEVELOPMENT */}
      <article className='service'>
        <div className='service__head'>
          <h3>Game Development</h3>
        </div>
      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Game development using Unity Game Engine</p>
        </li>
      </ul>
      </article>
      {/* END OF GAME DEVELOPMENT */}
      </div>
    </section>
  )
}

export default Services