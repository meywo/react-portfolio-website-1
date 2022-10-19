import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vx6is7q', 'template_cgdkbhp', form.current, 'asnN60dI1PW_UHhng')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact-option">
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>egator tutorials</h5>
            <a href="https://m.me/ernest.achiever" target="_blank">Send a Message</a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className='contact_option-icon' />
            <h4>What's App</h4>
            <h5>+123456789</h5>
            <a href="http://api.whatsapp.com/send?phone+123456789" target="_blank">Send a Message</a>
          </article>
        </div>
  {/*end of contact options */}
      
    <form ref ={form} onSubmit={sendEmail}>
      <input type ="text" name='name' placeholder='Your Full Name' required />
      <input type ="email" name='name' placeholder='Your Message' required />
      <textarea name="message" rows="7" placeholder='Your Message' required />
     <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    </section>
  )
}

export default Contact