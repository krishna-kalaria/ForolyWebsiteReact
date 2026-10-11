import { Link } from 'react-router-dom'
import PageBanner from '../../components/PageBanner'
import Meta from '../../components/Meta'
import { SUPPORT_EMAIL } from '../../data/inviteapp'

function DeleteAccount() {
  return (
    <div className="legal-page">
      <Meta
        title="Delete Your Account | InviteApp by Foroly Technologies"
        description="How to delete your InviteApp account and data, what is deleted and when, and what may be kept."
        path="/inviteapp/delete-account"
      />
      <PageBanner title="Delete Account" />
      <section className="container page-content">
        <div className="legal-section" data-anim="up">
          <h3>Delete your InviteApp account and data</h3>
          <p>
            You can delete your InviteApp account and the data linked to it at any time. There are
            two ways to do it.
          </p>
        </div>

        <div className="legal-section" data-anim="up">
          <h3>Option 1: Delete it in the app</h3>
          <ol>
            <li>Open InviteApp and sign in.</li>
            <li>Go to Profile.</li>
            <li>Tap Delete Account and confirm.</li>
          </ol>
        </div>

        <div className="legal-section" data-anim="up">
          <h3>Option 2: Ask us by email</h3>
          <p>
            Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> from the phone number or
            email address registered on your account and ask us to delete your account. We reply
            within 3 business days.
          </p>
        </div>

        <div className="legal-section" data-anim="up">
          <h3>What is deleted</h3>
          <ul>
            <li>Your account and profile</li>
            <li>Your generation history, including guest names</li>
            <li>Generated ZIP files stored for you</li>
            <li>Your support messages and any images you sent us</li>
          </ul>
          <p>
            All of your personal data is permanently deleted within 30 days of your request.
            Deleting your account also permanently removes your subscription, so no refund is given
            for unused plan time.
          </p>
        </div>

        <div className="legal-section" data-anim="up">
          <h3>What may be kept</h3>
          <p>
            Payment records may be kept for up to 7 years, as required by Indian tax laws.
          </p>
        </div>

        <div className="legal-section" data-anim="up">
          <h3>Cancelling a store purchase</h3>
          <p>
            Deleting your account does not cancel or refund a purchase made through the Apple App
            Store or Google Play. Purchases are managed in your Apple or Google account settings.
            InviteApp plans are one-time purchases and do not renew automatically. See our{' '}
            <Link to="/inviteapp/refund-policy">Refund Policy</Link> for how to request a refund.
          </p>
        </div>

        <div className="legal-section" data-anim="up">
          <h3>More information</h3>
          <p>
            Read our <Link to="/inviteapp/privacy-policy">Privacy Policy</Link> for how we handle
            your data, or <Link to="/inviteapp/support">contact support</Link> if you need help.
          </p>
        </div>
      </section>
    </div>
  )
}

export default DeleteAccount
