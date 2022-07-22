import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [{
  avatar: AVTR1,
  name: 'micheal oliver',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi praesentium ullam nihil nisi non aliquam asperiores vero officiis voluptas officia consequuntur harum deleniti, provident tempore mollitia voluptatibus. Asperiores, voluptate harum!'
},
{
  avatar: AVTR2,
  name: 'Dickson Marcus',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi praesentium ullam nihil nisi non aliquam asperiores vero officiis voluptas officia consequuntur harum deleniti, provident tempore mollitia voluptatibus. Asperiores, voluptate harum!'
},
{
  avatar: AVTR3,
  name: 'Sean Knight',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi praesentium ullam nihil nisi non aliquam asperiores vero officiis voluptas officia consequuntur harum deleniti, provident tempore mollitia voluptatibus. Asperiores, voluptate harum!'
},
{
  avatar: AVTR4,
  name: 'Cris Johnson',
  review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi praesentium ullam nihil nisi non aliquam asperiores vero officiis voluptas officia consequuntur harum deleniti, provident tempore mollitia voluptatibus. Asperiores, voluptate harum!'
}
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
    <Swiper className="container testimonials__container"
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    Navigation
    pagination={{ clickable: true }}>
      {
      data.map (({avatar, name, review}, index) => {
        return ( 
        <SwiperSlide key={index} className='testimonial'>
        <div className='client__avatar'>
          <img src={avatar} alt='Avatar one' />
        </div>
        <h5 className='client__name'>{name}</h5>
          <small className='client__review'>
           {review}
          </small>
      </SwiperSlide>
          
        )
      })
      }
    </Swiper>
    </section>
  )
}

export default Testimonials