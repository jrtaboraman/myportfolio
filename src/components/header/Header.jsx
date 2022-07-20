import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png'
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
                <img src={ME} alt='me'/>
            </div>
            <a href='#contact' className='scroll__down'>Scroll down</a>
        </div>
        
    </header>
  )
}

export default Header