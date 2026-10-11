import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/new-logo.webp'

const services = [
  { label: 'Web Design', href: '/services/web-design' },
  { label: 'Web Development', href: '/services/web-development' },
  { label: 'App Development', href: '/services/app-development' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'SEO', href: '/services/seo' },
]

const products = [{ label: 'InviteApp', href: '/inviteapp' }]

function Header() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(null)

  const closeAll = () => {
    setOpen(false)
    setMenu(null)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link className="navbar-brand" to="/" onClick={closeAll}>
            <img src={logo} alt="Foroly Technologies" />
          </Link>

          <button
            type="button"
            className={`navbar-toggler${open ? '' : ' collapsed'}`}
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`navbar-collapse${open ? ' show' : ''}`}>
            <ul className="navbar-nav">
              <li>
                <NavLink to="/" end onClick={closeAll}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about-us" onClick={closeAll}>About Us</NavLink>
              </li>
              <li
                className={`dropdown${menu === 'services' ? ' open' : ''}`}
              >
                <a
                  className="dropdown-toggle"
                  href="/services"
                  aria-expanded={menu === 'services'}
                  onClick={(e) => {
                    e.preventDefault()
                    setMenu(menu === 'services' ? null : 'services')
                  }}
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link className="dropdown-item" to={s.href} onClick={closeAll}>
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className={`dropdown${menu === 'products' ? ' open' : ''}`}>
                <a
                  className="dropdown-toggle"
                  href="/inviteapp"
                  aria-expanded={menu === 'products'}
                  onClick={(e) => {
                    e.preventDefault()
                    setMenu(menu === 'products' ? null : 'products')
                  }}
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  {products.map((p) => (
                    <li key={p.href}>
                      <Link className="dropdown-item" to={p.href} onClick={closeAll}>
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <NavLink to="/blog" onClick={closeAll}>Blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" onClick={closeAll}>Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
