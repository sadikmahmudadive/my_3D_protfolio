import { projects } from "../constants"

export const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3  text-slate-500">
        <p className="description">
          My projects reflect a builder mindset across AI, software, and hardware. I have worked on research-driven AI systems such as temporal explainable GNN models for real-time intrusion detection and smart-grid fault localization, while also building practical full-stack products with Next.js, Firebase, and Cloudinary. In mobile development, I created Android applications focused on real user needs, and in IoT I developed ESP32-based prototypes that connect embedded systems with interactive software. Overall, my work combines experimentation, product thinking, and execution, with the goal of turning technical ideas into useful and impactful solutions.
        </p>
      </div>

      <div className="flex flex-wrap my-30 gap-16">
        {projects.map((project, idx) => (
          <div className="w-full" style={{ width: 400 }} key={project.name}>
            <div className="block-container relative w-20 h-20">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front flex items-center justify-center rounded-xl">
                <img src={project.iconUrl} alt={project.name} className="w-10 h-10 object-contain" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Projects;