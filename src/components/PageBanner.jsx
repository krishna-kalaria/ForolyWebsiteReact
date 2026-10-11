function PageBanner({ title }) {
  return (
    <section className="banner page-banner">
      <div className="banner-content">
        <h1 data-anim="up">{title}</h1>
      </div>
    </section>
  )
}

export default PageBanner
