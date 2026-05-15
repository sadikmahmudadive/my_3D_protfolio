import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [IsLoading, setIsLoading] = useState(false)

  const fromRef = useRef(null);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Md. sadik Mahmud Adive',
        from_email: form.email,
        to_email: 'siradive137@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      //TODO: add a success message or notification here
      //TODO: Hide the alert
      //alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: ''
      });
    }).catch((error) => {
      setIsLoading(false);
      console.log(error);
      //TODO: add an error message or notification here
    })
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form className="w-full flex flex-col gap-7 mt-14"
        onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input 
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
             />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input 
            type="Email"
            name="email"
            className="input"
            placeholder="yourmail@example.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
             />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
            name="message"
            className="textarea"
            rows={4}
            placeholder="How can I help you?"
            required
            value={form.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
             />
          </label>

          <button 
          type="submit" 
          className="btn"
          disabled={IsLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}>
            Send Message
            {IsLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
