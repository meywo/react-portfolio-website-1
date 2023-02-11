import React from 'react'
import './header.css'
import CTA from './CTA'
import bluewoman from '../../assets/bluewoman.png'
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
    <div className="bluewoman">
    <img src={bluewoman} alt="bluewoman" />
    </div>

    <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header