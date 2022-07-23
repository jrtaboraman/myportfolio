import React from 'react';
import './testimonials.css';
import crt1 from '../../assets/crashcoursepython.png'
import crt2 from '../../assets/webapplicationtechnologiesdjango.png'
import crt3 from '../../assets/datacollectionandprocessingwithpython.png'
import crt4 from '../../assets/pythonbasics.png'
import crt5 from '../../assets/pythonfunctionsfilesanddictionaries.png'
import crt6 from '../../assets/pythonclassesandinheritance.png'
import crt7 from '../../assets/shopifyessentialtraining.png'
import crt8 from '../../assets/seofoundation.png'
import crt9 from '../../assets/bootstrap.png'
import crt10 from '../../assets/wordpressessential.png'
import crt11 from '../../assets/reactdesignpatterns.png'
import crt12 from '../../assets/buildingmodernprojectswithreact.png'
import crt13 from '../../assets/reacthooks.png'
import crt14 from '../../assets/creatingandhostingafullstacksite.png'
import crt15 from '../../assets/buildinganinterface.png'
import crt16 from '../../assets/reactjsessentialtraining.png'


import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [{
  avatar: crt1,
  name: 'Crash Course on Python',
  source: 'https://www.coursera.org/account/accomplishments/verify/9U7YZDXXZF5W'
},
{
  avatar: crt2,
  name: 'Web Application Technologies and Django',
  source: 'https://www.coursera.org/account/accomplishments/records/PQWSELPBT3EH'
},
{
  avatar: crt3,
  name: 'Data Collection and Processing with Python',
  source: 'https://www.coursera.org/account/accomplishments/records/KELU863EMGX9'
},
{
  avatar: crt4,
  name: 'Python Basics',
  source: 'https://www.coursera.org/account/accomplishments/records/NGW8P3JMYK7R'
},
{
  avatar: crt5,
  name: 'Python, Functions, Files and Dictionaries',
  source: 'https://www.coursera.org/account/accomplishments/records/BZHAAYQRU3RD'
},
{
  avatar: crt6,
  name: 'Python Classes and Inheritance',
  source: 'https://www.coursera.org/account/accomplishments/records/9NE5VHZHNA2Z'
},
{
  avatar: crt7,
  name: 'Shopify Essential Training',
  source: 'https://www.linkedin.com/learning/certificates/44df8c56879cccb072b6ee793a4419b0b402e5037fe78bb63e960b6138ee50d6?trk=share_certificate'
},
{
  avatar: crt8,
  name: 'SEO Foundation',
  source: 'https://www.linkedin.com/learning/certificates/e9b8875141bfbc1e4bfa3e3dbde10e819de5f7f5f788d3845479d553de3c026f?trk=share_certificate'
},
{
  avatar: crt9,
  name: 'Font-End Web UI Frameworks and Tools: Bootstrap 4',
  source: 'https://www.coursera.org/account/accomplishments/records/8J6DKZL9CVJ9'
},
{
  avatar: crt10,
  name: 'WordPress Essential Training',
  source: 'https://www.linkedin.com/learning/certificates/adf609c42bdaa99c48af433fa9b550b990f111f79fbe99a1696351870e3eebee?trk=share_certificate'
},
{
  avatar: crt11,
  name: 'React: Design Patterns',
  source: 'https://www.linkedin.com/learning/certificates/7b257cdb39f26da5c3e5442ddc7b99258d2254143ed1b1a5c05e529dab9f132d?trk=share_certificate'
},
{
  avatar: crt12,
  name: 'Building Modern Projects with React',
  source: 'https://www.linkedin.com/learning/certificates/a016372c00d49ed5e614cd491ee2b390e42875facde86166bded6c1c9e16ebac?trk=share_certificate'
},
{
  avatar: crt13,
  name: 'React Hooks',
  source: 'https://www.linkedin.com/learning/certificates/54ebe667e24c95c8a720415f66c00cc944de386bb965c09357af626ff9e8bc97?trk=share_certificate'
},
{
  avatar: crt14,
  name: 'React: Creating and Hosting a Full-stack Site',
  source: 'https://www.linkedin.com/learning/certificates/de683a7fff64430564e6614e59d65038450b6733dd2d2cc9363ccf0999071faf?trk=share_certificate'
},
{
  avatar: crt15,
  name: 'React.js: Building an Interface',
  source: 'https://www.linkedin.com/learning/certificates/6cbda1b623afd2b5fc45aacf7a9d93183fc72ecd95fb06d2ffb6c5066ec9a234?trk=share_certificate'
},
{
  avatar: crt16,
  name: 'React.js Essential Training',
  source: 'https://www.linkedin.com/learning/certificates/2d1983c01069d4182c81009ca57538798ba9a1b60976181fb947d7c8aefb6d05?trk=share_certificate' 
}
]

const Testimonials = () => {
  return (
    <section id='certificates'>
      <h5>Training and Certifications</h5>
      <h2>Certificates</h2>
    <Swiper className="container testimonials__container"
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    Navigation
    pagination={{ clickable: true }}>
      {
      data.map (({avatar, name, source}, index) => {
        return ( 
        <SwiperSlide key={index} className='testimonial'>
        <div className='client__avatar'>
          <img src={avatar} alt='Avatar one' />
        </div>
        <h5 className='client__name'>{name}</h5>
        <a href={source} className='btn ntn-primary' rel="noreferrer" target='_blank'>See Credentials</a>
      </SwiperSlide>
          
        )
      })
      }
    </Swiper>
    </section>
  )
}

export default Testimonials