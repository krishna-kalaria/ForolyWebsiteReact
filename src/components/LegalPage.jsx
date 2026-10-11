import PageBanner from './PageBanner'
import Meta from './Meta'
import { LAST_UPDATED } from '../data/inviteapp'

const linkPattern =
  /(support@forolytechnologies\.com|reportaproblem\.apple\.com|supabase\.com\/privacy|twilio\.com\/legal\/privacy|forolytechnologies\.com)/g

// Turns emails and known domains in the policy text into links.
function linkify(text) {
  return text.split(linkPattern).map((part, i) => {
    if (i % 2 === 0) return part
    const href = part.includes('@') ? `mailto:${part}` : `https://${part}`
    return (
      <a key={i} href={href}>
        {part}
      </a>
    )
  })
}

function Block({ block }) {
  if (typeof block === 'string') return <p>{linkify(block)}</p>
  if (Array.isArray(block)) {
    return (
      <ul>
        {block.map((item) => (
          <li key={item}>{linkify(item)}</li>
        ))}
      </ul>
    )
  }
  return (
    <p>
      {block.lines.map((line, i) => (
        <span key={line}>
          {i > 0 && <br />}
          {linkify(line)}
        </span>
      ))}
    </p>
  )
}

function LegalPage({ title, description, path, sections }) {
  return (
    <div className="legal-page">
      <Meta title={`${title} | InviteApp by Foroly Technologies`} description={description} path={path} />
      <PageBanner title={title} />
      <section className="container page-content">
        <p className="last-updated" data-anim="up">Last updated: {LAST_UPDATED}</p>
        {sections.map((section) => (
          <div className="legal-section" key={section.title} data-anim="up">
            <h3>{section.title}</h3>
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}

export default LegalPage
