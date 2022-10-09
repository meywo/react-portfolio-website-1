import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>Experience
    <h5>What skills I have</h5>
    <h2>My Experience</h2>

    <div className="container experience_container">
      <div ClassName="experience_content">
      <div className='experience_frontend'>
        <h3>Frontend Development</h3>
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
             </div> 
        </article>
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
             <div>
             <h4>CSS</h4>
             <small className='text-light'>Experienced</small>
             </div>
        </article>
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>  
        </article>
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
        </article>
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
         
        </article>
        <article ClassName="experience_details">
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
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>NodeJS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          
        </article>
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
            </div>
          
        </article>
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
            </div>
          
        </article>
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experienced</small>
            </div> 
         </article>
        <article ClassName="experience_details">
          <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>MySQl</h4>
            <small className='text-light'>Experienced</small>
            </div>
         
        </article>
        </div>
    </div>
      </section>
   
  )
}

export default Experience