import { Link } from 'react-router-dom'
import PolicyPage from '../components/PolicyPage'

const sections = [
  {
    blocks: [
      'Copyright is a legal right that protects original works of authorship (e.g., music, videos, etc.). Generally, copyright protects an original expression of an idea (e.g., the specific way a video or music is expressed or created) but does not protect underlying ideas or facts.',
    ],
  },
  {
    title: 'Copyright Infringement',
    blocks: [
      'We do not allow any content that infringes copyright. The use of copyrighted content of others without proper authorization or legally valid reason may lead to a violation of Foroly’s policies.',
      'At the same time, not all unauthorized uses of copyrighted content constitute an infringement. Exceptions to copyright infringement, such as the fair use doctrine or other applicable laws, allow use of copyrighted work under certain circumstances.',
    ],
  },
  {
    title: 'Trademark',
    blocks: [
      'A trademark is a word, symbol, slogan, design, or combination of any of the foregoing that identifies the source of a product or service and distinguishes it from other products or services.',
    ],
  },
  {
    title: 'Removal of Content; Suspension or Termination of Account',
    blocks: [
      <p key="removal">
        Any user content that infringes, violate other person’s copyright may be removed. The account may be
        suspended or terminated for multiple copyright violations in connection with the use of the Foroly app, or
        other violations of the <Link to="/terms-and-conditions">Terms of Service</Link> and{' '}
        <Link to="/community-guidelines">Community Guidelines</Link> may result in the suspension or termination of
        the user account. We reserve the right to refuse any account holder whose account was used for improper
        activities from opening a new account on Foroly app, or otherwise hosted by Foroly.
      </p>,
    ],
  },
  {
    title: 'Trademark Complaint',
    blocks: [
      'Contacting the user directly may resolve your complaint more quickly and in a way that is more beneficial to you, the user, and our community.',
    ],
  },
  {
    title: 'General Note:',
    blocks: [
      'As a Foroly user, you are responsible for the content you post. If you have questions about copyright law or trademark law, such as questions about whether your content or your use of another person’s name or brand infringes or otherwise violates another person’s rights, you may want to contact an attorney.',
      'If you are unsure whether the material you plan to report to us is infringing or otherwise violating another person’s right, you may also want to first seek legal advice before reporting such content to us.',
    ],
  },
]

function Copyright() {
  return (
    <PolicyPage
      title="Copyright"
      description="Foroly Technologies policy on copyright and trademark, including content removal and account suspension."
      path="/copyright"
      sections={sections}
    />
  )
}

export default Copyright
