import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <section id='footer'>
      <div className="container footer__container">
        <div className="footer__how_to_page">
          <h3>About This Page</h3>
          <small>
            This website was coded using react framework, HTML, CSS, and Javascript
            it is hosted in Netifly. the code can be found here.
          </small>
          <small>
            Copyright ©2023 All rights reserved
          </small>
        </div>
        
        <div className="footer__about_page">
          <h3>Follow me</h3>
          <small>Lets be social</small>
          <div className="footer__about_page-logos">
            <a href=""><AiFillLinkedin className='footer__social_media'/></a>
            <a href=""><AiFillGithub className='footer__social_media'/></a>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer