import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export const HeaderSocials = () => {
  return (
    <>
     <div className="header__socials">
      <a href="https://www.linkedin.com/in/kalaivani-sakthivel-31477a191/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Kalaivanisudee" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
    
    </>
  )
}
