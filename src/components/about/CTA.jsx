import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <>
    <div className="cta">
        <a href={CV} className='btn'>CV</a>
        <a href="" className='btn btn-primary'>LET'S TALK</a>
    </div>

    </>
  )
}

export default CTA