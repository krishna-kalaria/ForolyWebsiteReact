import LegalPage from '../../components/LegalPage'
import { privacySections } from '../../data/legal/privacy'

function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How InviteApp, a mobile app by Foroly Technologies, collects, uses, stores and protects your personal information."
      path="/inviteapp/privacy-policy"
      sections={privacySections}
    />
  )
}

export default Privacy
