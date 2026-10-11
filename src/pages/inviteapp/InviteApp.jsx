import { Link } from 'react-router-dom'
import Meta from '../../components/Meta'
import StoreButtons from '../../components/StoreButtons'
import FaqAccordion from '../../components/FaqAccordion'
import { steps, features, languages, faqs, SUPPORT_EMAIL } from '../../data/inviteapp'

function PhonePlaceholder({ label }) {
  return (
    <div className="phone-placeholder">
      <span>{label}</span>
      <small>Screenshot coming soon</small>
    </div>
  )
}

function InviteApp() {
  return (
    <div className="inviteapp-page">
      <Meta
        title="InviteApp | Personalised Invitation PDFs for Every Guest | Foroly Technologies"
        description="InviteApp by Foroly Technologies creates personalised wedding and event invitation PDFs for every guest in minutes, with guest names printed in 13 languages."
        path="/inviteapp"
      />

      <section className="banner inviteapp-hero">
        <div className="banner-content container">
          <h1>InviteApp</h1>
          <p>Personalised wedding and event invitation PDFs for every guest, in minutes.</p>
          <p className="hero-sub">Available for iPhone and Android.</p>
        </div>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title">How it works</h2>
        <ol className="steps">
          {steps.map((step, i) => (
            <li key={step.title}>
              <span className="step-number">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title">See it in action</h2>
        <div className="phone-row">
          <PhonePlaceholder label="Place the name" />
          <PhonePlaceholder label="Add your guest list" />
          <PhonePlaceholder label="Preview and generate" />
        </div>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title">Features</h2>
        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title">Supported languages</h2>
        <p>Print guest names in any of these 13 languages and scripts:</p>
        <ul className="language-list">
          {languages.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title">Pricing</h2>
        <div className="pricing-card">
          <h3>Monthly Plan</h3>
          <p className="price">Rs 699</p>
          <ul>
            <li>Valid for 30 days from purchase</li>
            <li>10 invitation generations</li>
            <li>Unlimited guests in every generation</li>
            <li>One-time purchase, no automatic renewal</li>
          </ul>
          <p className="price-note">
            Bought inside the app through the Apple App Store or Google Play. Your store may show local
            pricing and taxes.
          </p>
        </div>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title">Frequently asked questions</h2>
        <FaqAccordion items={faqs} />
      </section>

      <section className="container inviteapp-section inviteapp-cta">
        <h2 className="section-title">Ready to send your invitations?</h2>
        <p>Create a personalised invitation for every guest with InviteApp.</p>
        <StoreButtons />
        <p className="cta-support">
          Questions? Visit <Link to="/inviteapp/support">Support</Link> or email{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </section>
    </div>
  )
}

export default InviteApp
