import React from 'react'
import './about.css'
import yellowlady from '../../assets/yellowlady.png'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>    
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="yellowlady"/>
        <div className="rotated">
          <div className="rotated_translate">
        <img src={yellowlady} alt="yellowlady"/>
        </div>
        </div>
        </div>  
        <div className="about_content">
      <div className="about_cards">
        <article className='about_card'>
          <FaAward className='about_icon'/>
         <h5>Experience</h5>
         <small>3+ Years Working</small>
        </article>
        <article className='about_card'>
          <FiUsers className='about_icon'/>
          <h5>Clients</h5>
           <small>200+ Worldwide</small>
        </article>
        <article className='about_card'>
          <VscFolderLibrary className='about_icon'/>
          <h5>Projects</h5>
          <small>80+ Completed Projects</small>
        </article>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, assumenda expedita, unde quas quae, excepturi nemo veritatis cum impedit omnis quia? Eum eligendi ex quibusdam necessitatibus itaque enim at. Eligendi?
     </p>
     <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
     </div>
    </section>

  )
}

export default About