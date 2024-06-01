import React from 'react';
import CV from "../../assets/Kalaivani sakthivel.pdf"

export const CTA = () => {
  return (
    <>
      <div className="cta">
      <a href={CV} target="_blank" className="btn">
         Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
    </>
  )
}
