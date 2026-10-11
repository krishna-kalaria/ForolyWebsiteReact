import PolicyPage from '../components/PolicyPage'

const sections = [
  {
    blocks: [
      "Welcome to Foroly..!",
      "Here are some terms and conditions that we think are important to abide by for the use of Foroly. By availing of our services, you agree to follow Foroly's terms and conditions of use. Foroly provides service as explained hereunder.",
    ],
  },
  {
    title: "The Foroly Service:",
    blocks: [
      "By agreeing to be bound with our terms of use, Foroly delivers you several services that include features, Foroly products, applications, technologies, services, and software that enhances your relationships with people and the things you love, and that is our only mission.",
      "These terms and conditions [\"Agreement\"] narrate to you the general principles before starting the use of the \"Foroly\" mobile application [\"Mobile Application\" or \"service\"] including the related products and service [Collectively, \"services\"]. This Agreement is legally binding you, given references as \"you\" or \"your\" [\"User\"] and Foroly, mobile application developer as \"We,\" \"Us,\" or \"Our\" [\"Operator\"]. By accessing our mobile application and services, you affirm Foroly’s reading, understanding, and acceptance to be liable. Even if you agree to the Agreement on behalf of a business or other legal entity, you are referred to as \"User,\" \"You,\" or \"Your,\" and it is understood that you have the authority to follow this Agreement. You are refrained from using our mobile application and services if you do not have the authority to follow the Agreement or if you do not stay bound by the Agreement. This Agreement is a conclusive contract between the operator and the user even though it is virtual and not physically signed by you. Still, you have agreed and then took the forward step of accessing our mobile application and services.",
    ],
  },
  {
    title: "Accounts and Membership:",
    blocks: [
      "The user should be 18 years old to use Foroly's mobile application and services. When using our mobile application and services, you warrant and justify being 18 years old. Suppose you have an account on our mobile application. In that case, you are solely responsible for maintaining the account's security and being in charge of the activities under the account and other connected measures. We have no obligations before the user signs in and starts using the services. We do not appreciate invalid and false contact information provided by the user, and therefore it may lead to termination of that particular account. If you face any unauthorized uses of your account or experience an ordinary incident or breaches of security, immediately contact us. We will not be liable for any act of damage or omission you did that has caused harm. Suppose we discover that any of our provisions stated in the Agreement are violated, or your conduct may harm our reputation. In that case, your account might get disabled or suspended from further access by us. And if your account is disabled for reasons mentioned earlier, you are not allowed to create a new account and use our services. Furthermore, your email address and internet protocol address may get blocked for our safety.",
    ],
  },
  {
    title: "User Content:",
    blocks: [
      "While using our mobile application and services, you should know that we do not own any information, data, or material [Collectively, \"Content\"] that you submit. So, it is in your hands to maintain the integrity, quality, accuracy, legality, and intellectual property ownership of your content. We are also not obliged to review and check the content you created using the features of our mobile application and services. You grant us permission to access, distribute, copy, transmit, store, reformat, display, and perform the content of your user account that too because it requires us to provide our services to you. Keeping our security in mind and the warranties, we have the right, though not an obligation, to, in our sole discretion to deny or delete any content that we find is violating any of our policies or is harmful to our reputation and name. So for fair reasons, you also grant us the license for modifying, adapting, and publishing the content created by you or gathered in your user account for commercial, marketing, or similar purposes.",
    ],
  },
  {
    title: "Backups:",
    blocks: [
      "We schedule backups in regular intervals of your content to avoid havoc. Also, in case of hardware failure or data loss, we restore the backups to prevent disturbance and minimize time wastage.",
    ],
  },
  {
    title: "Links to other Resources:",
    blocks: [
      "Although there are many linked resources [such as websites, mobile applications, etc.] to the mobile applications, we disapprove that we have associated, sponsored, or endorsed with any of those unless and until expressly stated. There may be affiliated links that the operator gets affiliated commission after purchasing items. We are not responsible for a third party's purchases, services, actions, and content. We do not evaluate and warrant any of these links offered by businesses, individuals, or the content of these sources. So, it is your responsibility to be aware and read everything carefully about the legal statements and other conditions before using the resource through our mobile application and services. Your linking to any other off-site resources is at your own risk.",
    ],
  },
  {
    title: "Changes and Amendments:",
    blocks: [
      "We hold the right to alter the Agreement and make the changes in terms and conditions in our mobile application and services. Updating our Agreement as soon as possible on the mobile application after making the changes is our topmost priority. You can see the updated date on the bottom page so that you stay updated too. Your consent will also be asked after making such changes. Website policies created the policy.",
    ],
  },
  {
    title: "Acceptance of these Terms:",
    blocks: [
      "After reading all the terms and conditions, you confirm to agree to the Agreement. And have access to Foroly's mobile application and services. If you do not abide to follow the terms stated in the Agreement described earlier, you are not authorized to access mobile applications and services.",
    ],
  },
  {
    title: "Contacting Us:",
    blocks: [
      <p key="contact">
        {"If you are not still clear about some statements mentioned in the Agreement, you can contact us, or even if you have any other concerns, you can email us on the given email id below-"}{' '}
        <a href="mailto:forolytechnologies@gmail.com">
          <b>forolytechnologies@gmail.com</b>
        </a>
      </p>,
      <p key="updated">
        This document was last updated on <b>November 8, 2020</b>
      </p>,
    ],
  },
]

function TermsAndConditions() {
  return (
    <PolicyPage
      title="Terms And Conditions"
      description="The terms and conditions for using Foroly Technologies' mobile application and services."
      path="/terms-and-conditions"
      sections={sections}
    />
  )
}

export default TermsAndConditions
