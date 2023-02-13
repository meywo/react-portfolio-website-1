import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import peachlady from '../../assets/peachlady.png'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience_container">
    
      <div className='experience_frontend'>
            <h3>Frontend Development</h3>
      
      
        <div className="experience_content">
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon' />
             <div>
             <h4>CSS</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>  
        </article>
       
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
         
        </article>
        <article className='experience_details'>
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Experienced</small>
            </div>
        </article>
        
        </div>
      </div>
      { /*END OF FRONT END*/}
      <div className="experience_backend">
      <h3>Backend Development</h3>

      
      <div className="experience_content">
        <article className='experience_details'>
        <div className="about_me">
        <div className="peachlady"/>
        <div className="rotated">
          <div className="rotated_translate">
        <img src={peachlady} alt="peachlady"/>
        </div>
        </div>
        </div>  
        </article>
        </div>
      </div>
    </div>
      </section>
   
  )
}

export default Experience