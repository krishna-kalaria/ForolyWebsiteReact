import { useState } from 'react'

function FaqAccordion({ items }) {
  const [active, setActive] = useState(null)

  return (
    <div className="services faq-wrap">
      <div className="accordion">
        {items.map((item, i) => {
          const isOpen = active === i
          return (
            <div className={`accordion-item${isOpen ? ' active' : ''}`} key={item.q}>
              <h3 className="accordion-header">
                <button
                  type="button"
                  className={`accordion-button${isOpen ? '' : ' collapsed'}`}
                  aria-expanded={isOpen}
                  onClick={() => setActive(isOpen ? null : i)}
                >
                  {item.q}
                </button>
              </h3>
              <div className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}>
                <div className="accordion-body">
                  <p className="faq-answer">{item.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FaqAccordion
