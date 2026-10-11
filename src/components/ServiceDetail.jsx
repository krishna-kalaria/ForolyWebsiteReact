import PageBanner from './PageBanner'

function ServiceDetail({ title, image, imageAlt, paragraphs, imageRight = false }) {
  return (
    <div className="service-page">
      <PageBanner title="Services" />
      <section className="container page-content">
        <h2 className="section-title" data-anim="left">{title}</h2>
        <div className="description service-description">
          <img
            className={`service-image${imageRight ? ' right' : ''}`}
            src={image}
            alt={imageAlt || title}
            data-anim={imageRight ? 'right' : 'left'}
          />
          {paragraphs.map((text) => (
            <p key={text} data-anim="up">
              {text}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail
