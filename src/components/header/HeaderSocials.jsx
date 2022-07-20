import React from 'react'
import {BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linked.com' target='_black'><BsLinkedin/></a>
        <a href='https://github.com' target='_black'><BsGithub/></a>
        <a href='https://whatsapp.com' target='_black'><BsWhatsapp/></a>

    </div>
  )
}

export default HeaderSocials