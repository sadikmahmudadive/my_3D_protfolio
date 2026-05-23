import linkedin from "../assets/icons/linkedin.svg"

const SocialIcon = ({ children }) => (
  <span className="flex aspect-square h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-900 text-white shadow-card transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500">
    {children}
  </span>
)

const FooterLink = ({ href, label, detail, icon, external = false }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 px-4 py-4 shadow-card transition-all hover:-translate-y-1 hover:border-blue-500"
  >
    <SocialIcon>{icon}</SocialIcon>
    <div className="min-w-0">
      <span className="block text-xs uppercase tracking-[0.2em] text-slate-400">{label}</span>
      <span className="block truncate font-medium text-slate-700 group-hover:text-blue-500">{detail}</span>
    </div>
  </a>
)

const Footer = () => {
  return (
    <footer className="footer mt-16 border-t border-slate-200/80 bg-white/70 backdrop-blur-sm">
      <div className="footer-container py-6">
        <div>
          <h3 className="subhead-text">Let&apos;s connect</h3>
          <p className="mt-2 max-w-xl text-sm text-slate-500">
            Find me on social media or send a mail directly. Replace the placeholder links with your real Facebook and Instagram profiles when ready.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <FooterLink
            href="https://www.facebook.com/sadik.sadikmahmud/"
            label="Facebook"
            detail="Md. Sadik Mahmud Adive"
            external
            icon={(
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.2-1.5 1.6-1.5H17V4.7c-.4 0-1.5-.1-2.8-.1-2.7 0-4.6 1.7-4.6 4.8v1.5H6.8V14h2.9v8h3.8z" />
              </svg>
            )}
          />

          <FooterLink
            href="https://www.linkedin.com/in/sadik-mahmud-8340a9408/"
            label="LinkedIn"
            detail="Md. Sadik Mahmud Adive"
            external
            icon={<img src={linkedin} alt="LinkedIn" className="h-full w-full p-2 object-contain brightness-0 invert" />}
          />

          <FooterLink
            href="https://www.instagram.com/_lifewithmockingbird_/"
            label="Instagram"
            detail="Md. Sadik Mahmud Adive"
            external
            icon={(
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm4.5 3.1a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.1-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
              </svg>
            )}
          />

          <FooterLink
            href="mailto:siradive137@gmail.com"
            label="Gmail"
            detail="siradive137@gmail.com"
            icon={(
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                <path d="M4 5.8A2.8 2.8 0 0 1 6.8 3h10.4A2.8 2.8 0 0 1 20 5.8v12.4A2.8 2.8 0 0 1 17.2 21H6.8A2.8 2.8 0 0 1 4 18.2V5.8Zm2.2-.2 5.8 4.2 5.8-4.2H6.2ZM6.2 19h11.6a1 1 0 0 0 1-1V8.1l-6.1 4.4a1 1 0 0 1-1.2 0L5.2 8.1V18a1 1 0 0 0 1 1Z" />
              </svg>
            )}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer