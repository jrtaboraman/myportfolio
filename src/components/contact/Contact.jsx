import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {FaFacebookMessenger, FaWhatsapp} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_st2y42q',
        'template_2fw1gum',
        form.current,
        'eU6jIe28vuZVpjiw6'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
        <MdOutlineMail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>franciscotaborajr@yahoo.com</h5>
        <a href='mailto:franciscotaborajr@yahoo.com' target='_blank'>Send a message</a>
      </article>
      <article className="contact__option">
        <FaFacebookMessenger className='contact__option-icon' />
        <h4>Messenger</h4>
        <h5>Jr C Tabora</h5>
        <a href='https://m.me/wynry.winter' target='_blank'>Send a message</a>
      </article>
      <article className="contact__option">
        <FaWhatsapp className='contact__option-icon' />
        <h4>Whatsapp</h4>
        <h5>franciscotaborajr@yahoo.com</h5>
        <a href='https://wa.me/639468495791' target='_blank'>Send a message</a>
      </article>      
    </div>
    {/* END OF CONTACT OPTIONS */}
    <form action='' ref={form} onSubmit={sendEmail}>
      <input type='text' name='name' placeholder='You Full name' required />
      <input type='email' name='from_email' placeholder='You Email' required />
      <textarea rows='7' name='message' placeholder='You Message' required></textarea>
      <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>

    </div>
      
      
      
    </section>
  )
}

export default Contact