import LegalPage from '../../components/LegalPage'
import { refundSections } from '../../data/legal/refund'

function Refund() {
  return (
    <LegalPage
      title="Refund Policy"
      description="How to request a refund for an InviteApp purchase made through the Apple App Store or Google Play."
      path="/inviteapp/refund-policy"
      sections={refundSections}
    />
  )
}

export default Refund
