import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="panel-soft mx-4 max-w-xl px-5 py-5 text-center shadow-xl">
    <p className="text-base font-medium leading-7 text-slate-100 sm:text-lg">{text}</p>
    <Link to={link} className="btn-secondary mx-auto mt-5 w-fit">
      {btnText}
      <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="panel mx-4 max-w-2xl px-6 py-5 text-center text-base leading-7 text-slate-100 sm:text-lg">
      Hi, I&apos;m <span className="font-semibold text-cyan-200">Md. Sadik Mahmud Adive</span>.
      I build practical products across AI/ML, software engineering, and IoT.
    </h1>
  ),
  2: (
    <InfoBox
      text="I bridge the gap between research and delivery, from graph learning and explainable AI to polished product interfaces."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="My work spans full-stack applications, Android products, and embedded IoT prototypes built to solve real problems."
      link="/projects"
      btnText="View Projects"
    />
  ),
  4: (
    <InfoBox
      text="I am open to internships, freelance work, and collaborations where engineering quality really matters."
      link="/contact"
      btnText="Get in Touch"
    />
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
