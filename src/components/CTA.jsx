import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Ready to take your project to the next level? <br className='sm:block hidden' /> 
            Let's collaborate!
        </p>
        <Link to="/contact" className='btn'>
            Get in Touch
        </Link>
    </section>
  )
}

export default CTA