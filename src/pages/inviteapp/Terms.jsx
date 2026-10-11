import LegalPage from '../../components/LegalPage'
import { termsSections } from '../../data/legal/terms'

function Terms() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms that apply when you download and use InviteApp, a mobile app by Foroly Technologies."
      path="/inviteapp/terms"
      sections={termsSections}
    />
  )
}

export default Terms
