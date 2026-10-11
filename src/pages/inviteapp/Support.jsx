import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendForm } from '../../lib/sendForm'
import PageBanner from '../../components/PageBanner'
import Meta from '../../components/Meta'
import FaqAccordion from '../../components/FaqAccordion'
import { MailIcon } from '../../components/icons'
import { SUPPORT_EMAIL } from '../../data/inviteapp'

const troubleshooting = [
  {
    q: 'Generating invitations is taking a long time',
    a: 'Generation time depends on how many guests are on your list, the print language you chose, and your device and network. Larger guest lists and non-English languages take longer. Keep InviteApp open and your device connected until generation finishes.',
  },
  {
    q: 'A guest name looks wrong in another language',
    a: 'Names are converted into other Indian scripts automatically and the result may not always be perfectly accurate. Check the live preview before you generate.',
  },
  {
    q: 'I need an invitation file I generated earlier',
    a: 'A copy of each generated ZIP file is kept for 30 days. Open your profile in the app to download it again. After 30 days it is deleted automatically.',
  },
  {
    q: 'I have a problem with a purchase or want a refund',
    a: 'Purchases are billed by Apple or Google, so refunds are requested through them. See the Refund Policy for the steps. If you think you were charged in error, email us and we will help you work out next steps.',
  },
  {
    q: 'I want to delete my account',
    a: 'Open Profile in the app and choose Delete Account, or follow the steps on the Delete Account page.',
  },
]

const initialValues = { name: '', email: '', message: '' }

function Support() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: false })
    setStatus('idle')
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = {}
    if (!values.name.trim()) found.name = true
    if (!/^\S+@\S+\.\S+$/.test(values.email)) found.email = true
    if (!values.message.trim()) found.message = true
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      document.getElementById(`support-${first}`)?.focus()
      return
    }
    // Hidden field that only bots fill in
    if (new FormData(e.currentTarget).get('_gotcha')) return

    setStatus('sending')
    try {
      await sendForm({ _subject: 'InviteApp support request', ...values })
      setValues(initialValues)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="support-page">
      <Meta
        title="Support | InviteApp by Foroly Technologies"
        description="Get help with InviteApp. Email our support team and find answers to common problems."
        path="/inviteapp/support"
      />
      <PageBanner title="InviteApp Support" />
      <section className="container page-content">
        <h2 className="section-title">Contact us</h2>
        <div className="support-layout">
          <div>
            <p>
              Email us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We reply within 3
              business days.
            </p>
            <p>
              Please include the phone number registered on your account and a short description of the
              problem. You can attach screenshots if they help.
            </p>
            <p className="support-mail">
              <MailIcon />
              <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
          </div>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <label htmlFor="support-name">Name*</label>
            <input id="support-name" name="name" type="text" className={errors.name ? 'invalid' : undefined} placeholder="Enter your name" value={values.name} onChange={onChange} />
            <label htmlFor="support-email">Email*</label>
            <input id="support-email" name="email" type="email" className={errors.email ? 'invalid' : undefined} placeholder="Enter your email" value={values.email} onChange={onChange} />
            <label htmlFor="support-message">How can we help?*</label>
            <textarea id="support-message" name="message" rows="6" className={errors.message ? 'invalid' : undefined} placeholder="Describe your problem" value={values.message} onChange={onChange} />
            <input type="text" name="_gotcha" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />

            <button type="submit" className="btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'sent' && <p className="form-success">Thank you! We will reply within 3 business days.</p>}
            {status === 'error' && (
              <p className="form-error">
                Sorry, we could not send your message. Please email us at{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
              </p>
            )}
          </form>
        </div>

        <h2 className="section-title support-faq-title">Troubleshooting</h2>
        <FaqAccordion items={troubleshooting} />

        <p className="support-links">
          <Link to="/inviteapp/privacy-policy">Privacy Policy</Link>
          <Link to="/inviteapp/terms">Terms of Service</Link>
          <Link to="/inviteapp/refund-policy">Refund Policy</Link>
          <Link to="/inviteapp/delete-account">Delete Account</Link>
        </p>
      </section>
    </div>
  )
}

export default Support
