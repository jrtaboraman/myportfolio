import React from 'react';
import cv from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download>Download CV</a>
        <a href='#contact'>Let's talk</a>

    </div>
  )
}

export default CTA