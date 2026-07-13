import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 transition-colors duration-300 ${
      isActive
        ? "bg-white/10 text-cyan-200"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-2xl px-4 py-3 text-sm transition-colors duration-300 ${
      isActive
        ? "bg-white/10 text-cyan-200"
        : "text-slate-300 hover:bg-white/5 hover:text-white"
    }`

  return (
    <header className="header">
      <div className="header-shell relative gap-4">
        <NavLink to="/" className="group min-w-0 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 transition hover:bg-white/10">
          <span className="block min-w-0 font-poppins text-base font-semibold leading-tight text-white sm:text-lg">
            Sadik Mahmud
          </span>
        </NavLink>
        <nav className="hidden items-center gap-2 text-sm font-medium sm:flex sm:gap-3">
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 sm:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Toggle menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>

        {isMenuOpen ? (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-[calc(100%+0.75rem)] rounded-3xl border border-white/10 bg-slate-950/95 p-3 shadow-[0_24px_120px_rgba(15,23,42,0.5)] backdrop-blur-xl sm:hidden"
          >
            <div className="grid gap-1">
              <NavLink to="/about" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                About
              </NavLink>
              <NavLink to="/projects" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                Projects
              </NavLink>
              <NavLink to="/contact" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}

export default Navbar
