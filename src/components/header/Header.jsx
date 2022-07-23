import React from 'react';
import CTA from './CTA';
import './header.css';
import Francis from '../../assets/franciscotaborajr.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Francisco Tabora Jr</h1>
            <h5 className='text-light'>Frontend Web developer</h5>
            <CTA />
            <HeaderSocials />
            <div className='me'>
                <img src={Francis} alt='Franciscotaborajr'/>
            </div>
            <a href='#contact' className='scroll__down'>Scroll down</a>
        </div>
        
    </header>
  )
}

export default Header