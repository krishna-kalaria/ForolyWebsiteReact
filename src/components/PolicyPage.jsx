import PageBanner from './PageBanner'
import Meta from './Meta'

// Generic page for the website's own policy pages. `sections` is a list of
// { title?, blocks } where a block is a paragraph string, an array of bullet strings,
// or a ready-made React element (for paragraphs with links).
function PolicyPage({ title, description, path, sections }) {
  return (
    <div className="legal-page">
      <Meta
        title={`${title} | Foroly Technologies`}
        description={description || `${title} of Foroly Technologies.`}
        path={path}
      />
      <PageBanner title={title} />
      <section className="container page-content">
        {sections.length === 0 && <p>Content coming soon.</p>}
        {sections.map((section, n) => (
          <div className="legal-section" key={section.title || n} data-anim="up">
            {section.title && <h3>{section.title}</h3>}
            {section.blocks.map((block, i) => {
              if (Array.isArray(block)) {
                return (
                  <ul key={i}>
                    {block.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              }
              if (typeof block === 'string') return <p key={i}>{block}</p>
              return <div key={i}>{block}</div>
            })}
          </div>
        ))}
      </section>
    </div>
  )
}

export default PolicyPage
