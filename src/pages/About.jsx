import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'
import { experiences, skills, specialties } from '../constants'

export const About = () => {
  return (
    <section className="max-container">
      <div className="space-y-6">
        <span className="section-kicker">About me</span>
        <h1 className="head-text">
          I build systems that are useful, understandable, and ready for real use.
        </h1>
        <p className="section-copy">
          I work across AI/ML, software engineering, and IoT with a practical mindset. My background combines
          research, full-stack development, embedded experimentation, teaching, and student leadership, which helps me
          move from concept to delivery without losing sight of the user.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {specialties.map((item) => (
          <div key={item.title} className="panel-soft p-5">
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="py-14">
        <h2 className="subhead-text">Core skills</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          {skills.map((skill, idx) => (
            <div className="skill-card w-28" key={skill.name + idx}>
              <div className="skill-icon">
                <img src={skill.imageUrl} alt={skill.name} className="h-8 w-8 object-contain" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{skill.name}</p>
                <p className="text-xs text-slate-400">{skill.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="subhead-text">Experience</h2>
        <p className="section-copy">
          My experience is rooted in real responsibilities: student leadership, long-term teaching, and project
          execution across different technical stacks.
        </p>

        <div className="mt-10">
          <VerticalTimeline lineColor="rgba(148, 163, 184, 0.2)">
            {experiences.map((experience, idx) => (
              <VerticalTimelineElement
                key={experience.company_name + idx}
                date={experience.date}
                icon={
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white p-2">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg, boxShadow: 'none' }}
                contentStyle={{
                  borderRadius: '1.25rem',
                  background: 'rgba(15, 23, 42, 0.82)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 20px 80px rgba(15, 23, 42, 0.28)',
                }}
                contentArrowStyle={{ borderRight: '7px solid rgba(15, 23, 42, 0.82)' }}
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
                  <p className="mt-1 text-sm font-medium text-cyan-200">{experience.company_name}</p>
                </div>

                <ul className="my-5 ml-5 list-disc space-y-2">
                  {experience.points.map((point, pointIdx) => (
                    <li key={`${experience.company_name}-${pointIdx}`} className="text-sm leading-6 text-slate-300">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <CTA />
    </section>
  )
}
