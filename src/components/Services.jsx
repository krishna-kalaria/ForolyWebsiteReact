import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Web Design',
    href: '/services/web-design',
    items: ['HTML', 'HTML 5', 'CSS', 'CSS 3', 'Bootstrap', 'jQuery', 'SASS', 'SCSS', 'LESS'],
  },
  {
    title: 'Web Development',
    href: '/services/web-development',
    items: ['ASP.NET MVC', 'ASP.NET Core', 'ASP.NET Rest API', 'ASP.NET Web Forms', 'Angular', 'React'],
  },
  {
    title: 'Mobile Application Development',
    href: '/services/app-development',
    items: ['Android', 'iOS', 'Flutter', 'React Native'],
  },
  {
    title: 'Other Services',
    href: '/services/digital-marketing',
    items: ['SEO', 'Digital Marketing', 'Post Creation', 'AI Videos'],
  },
]

function Services() {
  const [active, setActive] = useState(0)

  return (
    <section className="services">
      <div className="container services-inner">
        <h2 className="section-title" data-anim="up">Services</h2>
        <div className="accordion" data-anim="up">
          {services.map((service, i) => {
            const isOpen = active === i
            return (
              <div className={`accordion-item${isOpen ? ' active' : ''}`} key={service.title}>
                <h2 className="accordion-header">
                  <button
                    type="button"
                    className={`accordion-button${isOpen ? '' : ' collapsed'}`}
                    aria-expanded={isOpen}
                    onClick={() => setActive(isOpen ? null : i)}
                  >
                    {service.title}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}>
                  <div className="accordion-body">
                    <ul className="service-list">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <Link className="read-more" to={service.href}>Read More</Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
