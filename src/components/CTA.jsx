import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Need someone who can connect AI, software, and hardware into one clear product?</p>
        <Link to="/contact" className='btn'>
            Start a conversation
        </Link>
    </section>
  )
}

export default CTA
