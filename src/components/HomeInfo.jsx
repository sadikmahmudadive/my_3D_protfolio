import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi I am <span className='font-semibold'>Md. Sadik Mahmud Adive</span>👋 <br />
            A software engineer and a AI enthusiast from Bangladesh. <br />
        </h1>
    ),
    2: (
        <InfoBox 
            text="I bridge the gap between advanced AI research and high-performance product engineering. From GNN architectures to polished digital interfaces."
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <h1>Stage 3</h1>
    ),
    4: (
        <h1>Stage 4</h1>
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo