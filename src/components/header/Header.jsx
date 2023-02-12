import React from 'react'
import './header.css'
import CTA from './CTA'
import sidelady from '../../assets/sidelady.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
    <h5>Hello I'm </h5>
    <h1>Me-Yen Wong</h1>
    <h5 className="text-light">Junior Web Developer</h5>
    <CTA />
    <HeaderSocial />
    <div className="sidelady">
    <img src={sidelady} alt="sidelady" />
    </div>

    <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header