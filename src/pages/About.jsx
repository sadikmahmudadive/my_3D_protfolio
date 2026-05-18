import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from "../constants"

export const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Md. Sadik Mahmud Adive</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3  text-slate-500">
        <p className="description">
          I am a multidisciplinary AI researcher and full-stack builder crafting impactful web, mobile, and IoT products from idea to reality.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h2 className="subhead-text">My Skills</h2>
      </div>

      <div className="mt-8 flex flex-wrap gap-12">
        {skills.map((skill, idx) => (
          <div className="block-container w-20 h-20" key={skill.name + idx}>
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img src={skill.imageUrl} alt={skill.name} className="w-12 h-12 object-contain" />
            </div>
          </div>
        ))}
      </div>

      <div className="py-16">
        <h3 className="subhead-text">My Experience</h3>
          <div className="mt-5 flex flex-col gap-3  text-slate-500">
          <p className="description">
            As a fresher, my experience is built through real projects, technical leadership, and long-term teaching impact. I have led IEEE BUBT Student Branch initiatives as Chairperson of IEEE RAS BUBT SB and General Secretary in 2025, after serving as Graphics Designer (In-charge) in 2024, where I managed teams, events, communication, and execution. Alongside leadership, I have developed practical work across AI research, full-stack web, Android, and IoT projects, turning ideas into deployable systems. I also bring 6 years of teaching experience as an ICT and Biology instructor at SM Science Academy, Mirpur-1, Dhaka, which strengthened my communication, mentoring, and problem-solving skills..
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, idx) => (
              <VerticalTimelineElement 
              key={experience.company_name + idx}
              date={experience.date}
              icon={<div className='flex justify-center items-center w-full h-full rounded-full'>
                <img src={experience.icon} alt={experience.company_name}
                className='w-[60%] h-[6-%] object-contain' />
              </div>}
              contentStyle={{ 
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none'
               }}>
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                  <p className='text-black-500 font-base font-medium'  style={{margin:0}}>{experience.company_name}</p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, idx) => (
                    <li key={'experience-point-${index}'} className='text-black-500//50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}
