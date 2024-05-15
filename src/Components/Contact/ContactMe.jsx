import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';

export const ContactMe = () => {
  return (
    <>
    <section id="contact">
        <h5>Get In Touch</h5>
        <h5>
        I acknowledge receipt of your messages and will respond promptly if you provide a valid email address."
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gkalaisakthi22@gmail.com</h5>
            <a href="gkalaisakthi22@gmail.com">Send a message</a>
            <h4>Contact No</h4>
            <h5>7548825495</h5>
            <a href="7548825495">Contact Me</a>
          </article>
        </div>
        </div>
    </section>
    
    </>
  )
}
