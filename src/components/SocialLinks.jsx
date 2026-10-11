import { socialLinks } from '../data/social'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaSkype, FaTwitter } from 'react-icons/fa'

const links = [
  { label: 'Facebook', href: socialLinks.facebook, Icon: FaFacebookF },
  { label: 'LinkedIn', href: socialLinks.linkedin, Icon: FaLinkedinIn },
  { label: 'Instagram', href: socialLinks.instagram, Icon: FaInstagram },
  { label: 'Skype', href: socialLinks.skype, Icon: FaSkype },
  { label: 'Twitter', href: socialLinks.twitter, Icon: FaTwitter },
]

function SocialLinks() {
  return (
    <aside className="social-media-wrap">
      <ul>
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SocialLinks
