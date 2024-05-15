import React from 'react';
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/images.jpeg'
import './About.css';

export const About = () => {
  return (
    <>
     <section id="about">
      <h5>Acquaint</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Kalaivani.s" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Novice</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small> Projects</small>
            </article>
          </div>
          <p>Enthusiastic MERN stack developer eager to craft seamless web experiences. JavaScript aficionado with a passion for user-centric design. Let's innovate together!</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
