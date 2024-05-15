import React from 'react'
import { HeaderSocials } from './HeaderSocials';
import './Header.css';

export const Header = () => {
  return (
    <>
    <header id="home">
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>KALAIVANI.S</h1>
        <h5 className="text-light">A New MERN Developer Excited To Kickstart My Journey In Web Development</h5>
        {/* <CTA />  for REsume */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
    </>
  )
}
