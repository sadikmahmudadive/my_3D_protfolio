import linkedin from "../assets/icons/linkedin.svg"
import { Link } from "react-router-dom"

const SocialIcon = ({ children }) => (
  <span className="flex aspect-square h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-400/20">
    {children}
  </span>
)

const FooterLink = ({ href, label, detail, icon, external = false }) => {
  const Wrapper = external ? 'a' : Link

  return (
  <Wrapper
    href={external ? href : undefined}
    to={external ? undefined : href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-all hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
  >
    <SocialIcon>{icon}</SocialIcon>
    <div className="min-w-0">
      <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">{label}</span>
      <span className="block truncate font-medium text-white/90 group-hover:text-cyan-200">{detail}</span>
    </div>
  </Wrapper>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
          <span className="section-kicker">Open to opportunities</span>
          <h3 className="mt-4 subhead-text">Let&apos;s build something useful together.</h3>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
            I am open to roles and collaborations across AI/ML, software engineering, and IoT. If you need a builder who can move from idea to delivery, let&apos;s talk.
          </p>
        </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <FooterLink
            href="mailto:siradive137@gmail.com"
            label="Email"
            detail="siradive137@gmail.com"
            icon={(
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M4 5.8A2.8 2.8 0 0 1 6.8 3h10.4A2.8 2.8 0 0 1 20 5.8v12.4A2.8 2.8 0 0 1 17.2 21H6.8A2.8 2.8 0 0 1 4 18.2V5.8Zm2.2-.2 5.8 4.2 5.8-4.2H6.2ZM6.2 19h11.6a1 1 0 0 0 1-1V8.1l-6.1 4.4a1 1 0 0 1-1.2 0L5.2 8.1V18a1 1 0 0 0 1 1Z" />
              </svg>
            )}
          />

          <FooterLink
            href="https://github.com/sadikmahmudadive"
            label="GitHub"
            detail="sadikmahmudadive"
            external
            icon={(
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.67c-2.77.6-3.36-1.16-3.36-1.16-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.04-2.68-.1-.26-.45-1.28.1-2.66 0 0 .85-.27 2.77 1.03a9.64 9.64 0 0 1 5.04 0c1.92-1.3 2.77-1.03 2.77-1.03.55 1.38.2 2.4.1 2.66.65.7 1.04 1.59 1.04 2.68 0 3.85-2.35 4.69-4.58 4.94.36.31.69.92.69 1.86v2.76c0 .26.18.57.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            )}
          />

          <FooterLink
            href="https://www.linkedin.com/in/sadikmahmudadive"
            label="LinkedIn"
            detail="sadikmahmudadive"
            external
            icon={<img src={linkedin} alt="LinkedIn" className="h-full w-full p-2 object-contain brightness-0 invert" />}
          />

          <FooterLink
            href="/contact"
            label="Contact"
            detail="Get in touch"
            icon={(
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M4 6.75A2.75 2.75 0 0 1 6.75 4h10.5A2.75 2.75 0 0 1 20 6.75v10.5A2.75 2.75 0 0 1 17.25 20H6.75A2.75 2.75 0 0 1 4 17.25V6.75Zm2.9-.95 5.1 4 5.1-4H6.9Zm11.35 2.24-5.62 4.41a1 1 0 0 1-1.24 0L6.75 8.04v9.21c0 .41.34.75.75.75h9c.41 0 .75-.34.75-.75V8.04Z" />
              </svg>
            )}
          />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
