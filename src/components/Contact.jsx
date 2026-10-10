import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import '../styles/contact.css'

// Formspree endpoint — sign up free at formspree.io, create a form, and
// replace YOUR_FORM_ID below with the ID it gives you (looks like a
// short code, e.g. "mzznwkpa"). Submissions land straight in your inbox.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meaekaoa'

const links = [
  {
    href: 'mailto:sufiyanshahid.dev@gmail.com',
    label: 'sufiyanshahid.dev@gmail.com',
    sub: 'Email',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16v16H4z" />
        <path d="m4 6 8 7 8-7" />
      </svg>
    ),
  },
  {
    href: 'tel:+923093827037',
    label: '+92 309 3827037',
    sub: 'Phone',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/muhammad-sufiyan01',
    label: 'Muhammad Sufiyan',
    sub: 'LinkedIn',
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/sufiyanshahid01',
    label: '@sufiyanshahid01',
    sub: 'Instagram',
    external: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
]

export default function Contact() {
  const cardRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="page-section" id="contact">
      <div className="wrap">
        <div className="contact-card reveal-init" ref={cardRef}>
          <div className="contact-main">
            <div className="section-label">Contact</div>
            <h2>Let's build something.</h2>
            <p>
              Have a project in mind — a website, an app, or both? I'm open to freelance work and
              always happy to talk through an idea, even an early one.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about your project..."
                  value={form.message}
                  onChange={handleChange}
                />
              </label>

              <button className="contact-submit" type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending...' : 'Send message'}
                {status !== 'submitting' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </button>

              {status === 'success' && (
                <p className="contact-status success">
                  Thanks — your message is on its way. I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="contact-status error">
                  Something went wrong sending that. Try again, or email me directly below.
                </p>
              )}
            </form>
          </div>

          <div className="contact-links">
            {links.map((l) => (
              <a
                className="contact-link"
                href={l.href}
                key={l.sub}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noopener noreferrer' : undefined}
              >
                {l.icon}
                <span>
                  {l.label}
                  <span className="sub">{l.sub}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
