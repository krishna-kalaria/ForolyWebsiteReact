import { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { socialLinks } from '../data/social'
import { sendForm, CONTACT_FALLBACK_EMAIL } from '../lib/sendForm'
import PageBanner from '../components/PageBanner'
import { MailIcon, GlobeIcon, PhoneIcon } from '../components/icons'

const initialValues = { name: '', company: '', email: '', phone: '', message: '' }

const validate = (v) => {
  const errors = {}
  if (!v.name.trim()) errors.name = true
  if (!v.email.trim()) errors.email = true
  else if (!/^\S+@\S+\.\S+$/.test(v.email)) errors.email = true
  if (!v.phone.trim()) errors.phone = true
  else if (!/^\d{10}$/.test(v.phone)) errors.phone = true
  if (!v.message.trim()) errors.message = true
  return errors
}

function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    const { name } = e.target
    // Phone accepts digits only, up to 10
    const value = name === 'phone' ? e.target.value.replace(/\D/g, '').slice(0, 10) : e.target.value
    setValues({ ...values, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: false })
    setStatus('idle')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    const firstInvalid = Object.keys(found)[0]
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus()
      return
    }
    // Hidden field that only bots fill in
    if (new FormData(e.currentTarget).get('_gotcha')) return

    setStatus('sending')
    try {
      await sendForm({ _subject: 'Foroly website: contact form', ...values })
      setValues(initialValues)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <PageBanner title="Contact US" />
      <section className="container page-content">
        <h2 className="section-title" data-anim="left">Get in Touch</h2>
        <div className="contact-layout">
          <form className="contact-form" data-anim="left" onSubmit={onSubmit} noValidate>
            <label htmlFor="name">Full Name*</label>
            <input id="name" name="name" className={errors.name ? 'invalid' : undefined} aria-invalid={!!errors.name} type="text" placeholder="Enter your full name" value={values.name} onChange={onChange} />

            <label htmlFor="company">Company Name</label>
            <input id="company" name="company" type="text" placeholder="Enter your company name" value={values.company} onChange={onChange} />

            <label htmlFor="email">Email*</label>
            <input id="email" name="email" className={errors.email ? 'invalid' : undefined} aria-invalid={!!errors.email} type="email" placeholder="Enter your email" value={values.email} onChange={onChange} />

            <label htmlFor="phone">Enter your phone number*</label>
            <input id="phone" name="phone" inputMode="numeric" maxLength={10} className={errors.phone ? 'invalid' : undefined} aria-invalid={!!errors.phone} type="tel" placeholder="Enter your phone number" value={values.phone} onChange={onChange} />

            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" className={errors.message ? 'invalid' : undefined} aria-invalid={!!errors.message} rows="7" placeholder="Enter your Message" value={values.message} onChange={onChange} />

            <input type="text" name="_gotcha" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />

            <button type="submit" className="btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Submit'}
            </button>
            {status === 'sent' && <p className="form-success">Thank you! We will get back to you soon.</p>}
            {status === 'error' && (
              <p className="form-error">
                Sorry, we could not send your message. Please email us at{' '}
                <a href={`mailto:${CONTACT_FALLBACK_EMAIL}`}>{CONTACT_FALLBACK_EMAIL}</a>.
              </p>
            )}
          </form>

          <aside className="contact-wrap" data-anim="right">
            <div className="contact-block">
              <h5>Email:</h5>
              <span><MailIcon /><a href="mailto:forolytechnologies@gmail.com">forolytechnologies@gmail.com</a></span>
            </div>
            <div className="contact-block">
              <h5>Website:</h5>
              <span><GlobeIcon /><a href="https://forolytechnologies.com">forolytechnologies.com</a></span>
              <span><GlobeIcon /><a href="https://foroly.in">foroly.in</a></span>
            </div>
            <div className="contact-block">
              <h5>Phone:</h5>
              <span><PhoneIcon /><a href="tel:+919408074713">+91 9408074713</a></span>
            </div>
            <div className="contact-block">
              <h5>Social Links:</h5>
              <div className="social-media-wrap">
                <ul>
                  <li>
                    <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                  </li>
                  <li>
                    <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                  </li>
                  <li>
                    <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Contact
