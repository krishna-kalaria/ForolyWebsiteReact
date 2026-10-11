import { Link } from 'react-router-dom'
import Meta from '../../components/Meta'
import StoreButtons from '../../components/StoreButtons'
import FaqAccordion from '../../components/FaqAccordion'
import { steps, features, languages, faqs, SUPPORT_EMAIL } from '../../data/inviteapp'

function PhonePlaceholder({ label, delay = 0 }) {
  return (
    <div className="phone-placeholder" data-anim="up" data-delay={delay}>
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
          <h1 data-anim="up">InviteApp</h1>
          <p data-anim="up" data-delay="150">Personalised wedding and event invitation PDFs for every guest, in minutes.</p>
          <p className="hero-sub" data-anim="up" data-delay="300">Available for iPhone and Android.</p>
        </div>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title" data-anim="up">How it works</h2>
        <ol className="steps">
          {steps.map((step, i) => (
            <li key={step.title} data-anim={i % 2 === 0 ? 'left' : 'right'}>
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
        <h2 className="section-title" data-anim="up">See it in action</h2>
        <div className="phone-row">
          <PhonePlaceholder label="Place the name" />
          <PhonePlaceholder label="Add your guest list" delay={150} />
          <PhonePlaceholder label="Preview and generate" delay={300} />
        </div>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title" data-anim="up">Features</h2>
        <div className="feature-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={f.title} data-anim="up" data-delay={(i % 3) * 120}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title" data-anim="up">Supported languages</h2>
        <p data-anim="up">Print guest names in any of these 13 languages and scripts:</p>
        <ul className="language-list" data-anim="up">
          {languages.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      <section className="container inviteapp-section">
        <h2 className="section-title" data-anim="up">Pricing</h2>
        <div className="pricing-card" data-anim="up">
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
        <h2 className="section-title" data-anim="up">Frequently asked questions</h2>
        <FaqAccordion items={faqs} />
      </section>

      <section className="container inviteapp-section inviteapp-cta">
        <h2 className="section-title" data-anim="up">Ready to send your invitations?</h2>
        <p data-anim="up">Create a personalised invitation for every guest with InviteApp.</p>
        <StoreButtons />
        <p className="cta-support" data-anim="up">
          Questions? Visit <Link to="/inviteapp/support">Support</Link> or email{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
        </p>
      </section>
    </div>
  )
}

export default InviteApp
