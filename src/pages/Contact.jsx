import { Canvas } from '@react-three/fiber'
import emailjs from '@emailjs/browser'
import { Suspense, useState } from 'react'
import Alert from '../components/Alert'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Fox from '../models/Fox'

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { alert, showAlert } = useAlert()

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  const resetForm = () => {
    setForm({
      name: '',
      email: '',
      message: '',
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Md. Sadik Mahmud Adive',
          from_email: form.email,
          to_email: 'siradive137@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false)
        showAlert('Message sent successfully. I will get back to you soon.', 'success')
        resetForm()
        setTimeout(() => {
          setCurrentAnimation('idle')
        }, 3000)
      })
      .catch((error) => {
        setIsLoading(false)
        setCurrentAnimation('idle')
        console.log(error)
        showAlert('I could not send your message right now. Please try again later.', 'danger')
      })
  }

  return (
    <section className="max-container">
      {alert.show && <Alert {...alert} />}

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="contact-card">
          <span className="section-kicker">Contact</span>
          <h1 className="mt-4 head-text">Let&apos;s talk about your next build.</h1>
          <p className="mt-4 section-copy">
            Whether you need an AI prototype, a software product, or an IoT proof of concept, I&apos;m happy to discuss
            scope, goals, and the best way to move forward.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="panel-soft p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Email</p>
              <a href="mailto:siradive137@gmail.com" className="mt-2 block text-sm font-semibold text-white">
                siradive137@gmail.com
              </a>
            </div>
            <div className="panel-soft p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Location</p>
              <p className="mt-2 text-sm font-semibold text-white">Dhaka, Bangladesh</p>
            </div>
          </div>

          <form className="mt-8 flex flex-col gap-5" onSubmit={handleSubmit}>
            <label className="text-sm font-semibold text-white">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your name"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className="text-sm font-semibold text-white">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className="text-sm font-semibold text-white">
              Your message
              <textarea
                name="message"
                className="textarea min-h-40"
                rows={6}
                placeholder="Tell me a little about the project, timeline, or challenge."
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button type="submit" className="btn w-full sm:w-fit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>

        <div className="panel relative min-h-[560px] overflow-hidden p-4 sm:p-6">
          <div className="absolute inset-x-4 top-4 z-10 flex justify-center">
            <div className="panel-soft max-w-md px-5 py-4 text-center">
              <p className="text-sm font-medium text-slate-100">
                I usually reply with clarity on scope, timeline, and what I can help with next.
              </p>
            </div>
          </div>
          <div className="h-[540px] rounded-[1.75rem] border border-white/10 bg-slate-950/40">
            <Canvas
              camera={{
                position: [0, -1, 5],
                fov: 75,
                near: 0.1,
                far: 1000,
              }}
            >
              <directionalLight position={[0, 0, 1]} intensity={2.5} />
              <ambientLight intensity={0.5} />
              <Suspense fallback={<Loader />}>
                <Fox
                  currentAnimation={currentAnimation}
                  position={[0.5, 0.35, 0]}
                  rotation={[12.629, -0.6, 0]}
                  scale={[0.5, 0.5, 0.5]}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
