import React from 'react';
import './portfolio.css';
import storytoken from '../../assets/storytoken.png'
import aureustoken from '../../assets/aureustoken.png'
import socialbridge from '../../assets/socialbridge.png'
import metazombietoken from '../../assets/metazombie.png'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: storytoken,
      title: 'Story Token',
      demo: 'https://storytoken.app'

    },
    {
      id: 2,
      image: aureustoken,
      title: 'Aureus Token',
      demo: 'https://aureus-token.com'

    },
    {
      id: 3,
      image: socialbridge,
      title: 'Socialbridge',
      demo: 'https://socialbridge.pro'

    },
    {
      id: 4,
      image: metazombietoken,
      title: 'MetaZombie Token',
      demo: 'https://metazombietoken.com'

    },
  ]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
          <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
          <img src={image} alt={title} />
          </div>          
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={demo} className='btn ntn-primary' target='_blank'>Live Demo</a>
          </div>          
        </article>

            )
          })
        }
        </div>
    </section>
  )
}

export default Portfolio
