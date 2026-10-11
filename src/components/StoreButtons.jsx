import ios from '../assets/ios.png'
import android from '../assets/android.png'
import { storeLinks } from '../data/inviteapp'

const stores = [
  { key: 'ios', label: 'App Store', icon: ios, alt: 'iOS' },
  { key: 'android', label: 'Google Play', icon: android, alt: 'Android' },
]

function StoreButtons() {
  return (
    <div className="download-link">
      {stores.map(({ key, label, icon, alt }) => {
        const href = storeLinks[key]
        const content = (
          <>
            <img src={icon} alt={alt} />
            <span>
              {label}
              {!href && <small>Coming soon</small>}
            </span>
          </>
        )
        return href ? (
          <a key={key} className="d-link btn" href={href} target="_blank" rel="noreferrer">
            {content}
          </a>
        ) : (
          <span key={key} className="d-link btn disabled" aria-disabled="true">
            {content}
          </span>
        )
      })}
    </div>
  )
}

export default StoreButtons
