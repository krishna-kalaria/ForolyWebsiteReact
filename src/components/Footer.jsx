import { Link } from 'react-router-dom'
import heart from '../assets/heart.webp'
import whatsapp from '../assets/WhatsApp.svg'
import { MailIcon, GlobeIcon, PhoneIcon } from './icons'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Community Guidlines', href: '/community-guidelines' },
  { label: 'Copyright', href: '/copyright' },
]

const inviteAppLinks = [
  { label: 'Privacy Policy', href: '/inviteapp/privacy-policy' },
  { label: 'Terms of Service', href: '/inviteapp/terms' },
  { label: 'Refund Policy', href: '/inviteapp/refund-policy' },
  { label: 'Support', href: '/inviteapp/support' },
  { label: 'Delete Account', href: '/inviteapp/delete-account' },
]

const projects = [
  { label: 'Nidhi Engineering', href: 'https://nidhiengineerings.com/' },
  { label: 'Kashyap Technologies', href: 'https://kashyaptechnology.com/' },
  { label: 'Jayraj Grinding', href: 'http://jayrajgrinding.com/' },
  { label: 'JayYogeshwar Grinding', href: 'https://jayyogeshwargrinding.com/' },
  { label: 'Kashyap Bio', href: 'https://kashyapbio.com/' },
  { label: 'Usha Taxation', href: 'https://www.ushataxation.com/' },
  { label: 'Ujas Engineering', href: 'https://uiepvtltd.com/' },
]

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-header">InviteApp</h3>
            <ul>
              {inviteAppLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-header">Quick Links</h3>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link to={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-header">Projects</h3>
            <ul>
              {projects.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-header">Contact Details</h3>
            <div className="contact email">
              <h4>Email:</h4>
              <span>
                <MailIcon />
                <a href="mailto:forolytechnologies@gmail.com">forolytechnologies@gmail.com</a>
              </span>
            </div>
            <div className="contact">
              <h4>Website:</h4>
              <span>
                <GlobeIcon />
                <a href="https://forolytechnologies.com">forolytechnologies.com</a>
              </span>
              <span>
                <GlobeIcon />
                <a href="https://foroly.in">foroly.in</a>
              </span>
            </div>
            <div className="contact">
              <h4>Phone:</h4>
              <span>
                <PhoneIcon />
                <a href="tel:+919408074713">+91 9408074713</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="copyright-text">
        Copyright &copy;{currentYear}. All Rights Reserved. Made with{' '}
        <img src={heart} alt="love" /> by Foroly Technologies
      </p>

      <a
        id="whatsapp"
        className="whatsapp"
        href="https://wa.me/919408074713"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src={whatsapp} alt="" width="40" height="40" />
      </a>
    </footer>
  )
}

export default Footer
