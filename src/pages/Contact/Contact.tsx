import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation } from 'react-router'
import { Mail, CalendarDays, MapPin, ChevronDown } from 'lucide-react'
import Button from '../../components/ui/Button'
import { CONTACT } from '../../config/links'
import { SUBJECTS, OFFICES, FAQS } from '../../data/contact'
import styles from './Contact.module.css'

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    if (data.get('website')) return // honeypot

    const subject = SUBJECTS.find((s) => s.value === data.get('subject'))?.label ?? ''
    const payload = {
      name: String(data.get('name') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      company: String(data.get('company') ?? '').trim(),
      subject,
      message: String(data.get('message') ?? '').trim(),
    }

    if (CONTACT.formEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(CONTACT.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        setStatus(res.ok ? 'sent' : 'error')
      } catch {
        setStatus('error')
      }
      return
    }

    if (CONTACT.email) {
      const body = `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\n\n${payload.message}`
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        payload.subject || 'Enquiry',
      )}&body=${encodeURIComponent(body)}`
      setStatus('sent')
      return
    }
    setStatus('unconfigured')
  }

  const faqs = FAQS.filter((f) => f.a)

  return (
    <>
      <section className={styles.hero}>
        <h1>Get in touch</h1>
        <p>Book a demo, ask a question or explore a partnership. We would like to hear from you.</p>
      </section>

      <section className={styles.wrap}>
        <div className={styles.channels}>
          <a className={styles.channel} href={`mailto:${CONTACT.email}`}>
            <Mail size={22} aria-hidden="true" />
            <h2>Email</h2>
            <p>Send us a message and we will reply.</p>
            <strong>{CONTACT.email}</strong>
          </a>
          <a className={styles.channel} href="#schedule">
            <CalendarDays size={22} aria-hidden="true" />
            <h2>Schedule a meeting</h2>
            <p>Book a call with our team.</p>
            <small>{CONTACT.hours}</small>
          </a>
          <a className={styles.channel} href="#offices">
            <MapPin size={22} aria-hidden="true" />
            <h2>Office</h2>
            <p>Visit our headquarters.</p>
            <strong>
              {OFFICES[0].address}, {OFFICES[0].city}
            </strong>
          </a>
        </div>
      </section>

      <section className={styles.wrap} id="schedule">
        <h2 className={styles.title}>Schedule a meeting</h2>
        <p className={styles.lead}>Pick a time that works for you and we will connect.</p>
        {CONTACT.calendlyUrl ? (
          <>
            <iframe
              className={styles.calendly}
              src={CONTACT.calendlyUrl}
              title="Schedule a meeting"
              loading="lazy"
            />
            <p className={styles.fallback}>
              Calendar not loading? <a href={CONTACT.calendlyUrl}>Open it in a new tab.</a>
            </p>
          </>
        ) : (
          <div className={styles.placeholder}>
            <p>Online booking is being set up. Email us and we will arrange a time.</p>
            <Button href={`mailto:${CONTACT.email}?subject=Demo%20request`}>Email us to book</Button>
          </div>
        )}
      </section>

      <section className={styles.wrap} id="message">
        <h2 className={styles.title}>Send us a message</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label>
              Full name *
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              Email address *
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <div className={styles.row}>
            <label>
              Company name
              <input name="company" type="text" autoComplete="organization" />
            </label>
            <label>
              Subject *
              <select name="subject" defaultValue="demo" required>
                {SUBJECTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Message *
            <textarea name="message" rows={5} required placeholder="Tell us how we can help..." />
          </label>

          <div className={styles.hp} aria-hidden="true">
            <label>
              Leave this empty
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <button type="submit" className={styles.submit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          <p className={styles.note}>We use your details only to reply to this message.</p>

          <div role="status" aria-live="polite">
            {status === 'sent' && <p className={styles.ok}>Thank you. Your message is on its way.</p>}
            {status === 'error' && <p className={styles.err}>Something went wrong. Please try again.</p>}
            {status === 'unconfigured' && (
              <p className={styles.err}>Form not connected yet: set CONTACT.email or CONTACT.formEndpoint.</p>
            )}
          </div>
        </form>
      </section>

      <section className={styles.wrap} id="offices">
        <h2 className={styles.title}>Our offices</h2>
        <div className={styles.offices}>
          {OFFICES.map((o) => (
            <article key={o.address} className={styles.office}>
              <p>{o.country}</p>
              <h3>{o.city}</h3>
              <span>
                <MapPin size={16} aria-hidden="true" /> {o.address}
              </span>
              <span>{o.timezone}</span>
            </article>
          ))}
        </div>
      </section>

      {faqs.length > 0 && (
        <section className={styles.wrap}>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <div className={styles.faqs}>
            {faqs.map((f) => (
              <details key={f.q} className={styles.faq}>
                <summary>
                  {f.q}
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </>
  )
}