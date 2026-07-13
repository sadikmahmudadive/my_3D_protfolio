import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
import { projects } from '../constants'

export const Projects = () => {
  return (
    <section className="max-container">
      <div className="space-y-6">
        <span className="section-kicker">Selected work</span>
        <h1 className="head-text">
          Projects that combine research, software, and practical implementation.
        </h1>
        <p className="section-copy">
          These are the kinds of projects I like building: technically grounded, visually clean, and useful in the real world.
          Some are research-heavy, others are product-focused, and a few connect hardware to software through IoT.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="flex items-start justify-between gap-4">
              <div className="block-container h-16 w-16 shrink-0">
                <div className={`btn-back rounded-2xl ${project.theme}`} />
                <div className="btn-front flex items-center justify-center rounded-2xl">
                  <img src={project.iconUrl} alt={project.name} className="h-9 w-9 object-contain" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Project</p>
                <p className="mt-1 text-sm font-medium text-white/80">Featured build</p>
              </div>
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-white">{project.name}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

            <div className="project-tags">
              {project.tags?.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2">
              <Link to={project.link} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View project
                <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <CTA />
    </section>
  )
}

export default Projects
