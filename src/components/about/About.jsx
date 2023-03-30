import React from 'react'
import './about.css'
import ME from '../../assets/Picture_esteban.png'
import CTA from './CTA'
const About = () => {
  return (
    <section id="About">
      <div className="container About__container">
        <div className="About__content">
          <h3>Get to Know me</h3>
          <h5>HI I'M JUAN ESTEBAN BEDOYA RAMIREZ</h5>
          <small>a passionate data 
            science and web development engineer. I 
            love exploring the latest technologies and 
            frameworks for both front-end and back-end 
            development. I also have experience in project 
            management.</small>
          
          <CTA/>
        </div>
        <div className="About__photo">
          <img src={ME} alt="picture-me" className='About__picture'/>
        </div>
      </div>

    </section>
  )
}

export default About