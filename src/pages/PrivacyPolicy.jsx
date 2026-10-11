import PolicyPage from '../components/PolicyPage'

const Email = () => <a href="mailto:forolytechnologies@gmail.com">forolytechnologies@gmail.com</a>

// Numbered list of plain-text items
const Numbered = ({ items, type }) => (
  <ol type={type}>
    {items.map((text) => (
      <li key={text}>{text}</li>
    ))}
  </ol>
)

// List item with a bold label
const Labeled = ({ label, children }) => (
  <li>
    <b>{label}</b> {children}
  </li>
)

const introduction = [
  <li key="1">
    <b>Foroly Technologies</b>{' '}
    {`technologies ["company" or "we"] take appropriate steps to ensure your privacy has not been invaded by all means. We are committed to protecting your privacy. Our privacy policy will be effective by installing, subscribing to, and accessing our Foroly Platform. You should accept our policy to move further.`}
  </li>,
  `We as a company are obliged to protect the personal information you provide to us through our app. Foroly technologies consider this as a responsibility for your security.`,
  `Foroly only asks for the necessary information to provide you with our best service. Furthermore, you are informed of what information we need and what works. So you are always notified and consented before moving forward. Information is collected through legal and adequate procedures.`,
  `Your stored data is secured within commercially acceptable means to prevent loss and theft. Also, only required information is preserved, and then once that is not useful anymore is eradicated from our system.`,
  <li key="5">
    Here we are informing you about:
    <ul>
      <li>
        while installing, subscribing, or accessing our app, what information we might collect from your side even
        while using the feature of Foroly platform;
      </li>
      <li>
        during an interaction with an advertisement on account of any survey campaign or anything else what
        information we tend to collect;
      </li>
      <li>informing you the basis of collecting the data; [d] how we disclose such information.</li>
    </ul>
  </li>,
  `Here is what we mean by the term "Foroly Platform." When you use a company's website or application or any other proprietary social entertainment platform called 'Foroly,' we refer to it as Foroly Platform. Foroly enables various options for the users to explore, watch, discover, upload, and share videos and other content created by you or even someone else. It can be of any category, such as entertainment, news, exciting stories, events, and homespun videos. We also include Ad partners [defined below] and other promotional content on our Platform. Foroly is an excellent forum for content creators.`,
  `When you provide information to suppose any third party, this policy is not applicable. This policy is restricted until the information you provide to us through any Foroly platform. This policy is limited only to the Foroly Platform.`,
  `Please see that your smart device may sometimes integrate other privacy policies according to their approach with the Foroly Platform already preloaded feature or widget as an application. So the privacy policy may differ in this case for the Foroly Platform. In this case, you can refer to the settings page of your smart device, or you can even find it in terms of use in which the company has pilled the relevant privacy policy.`,
]

const sections = [
  {
    title: '1. Introduction',
    blocks: [
      <ol key="intro">
        {introduction.map((item, i) => (typeof item === 'string' ? <li key={i}>{item}</li> : item))}
      </ol>,
    ],
  },
  {
    title: '2. Information we collect and how we collect it',
    blocks: [
      <h4 key="how" className="sub-heading">
        This is how we collect information about our users of Foroly Platform from them:
      </h4>,
      <h5 key="h1">1. Prompts information that we collect from our users:</h5>,
      `When you try accessing our services and install, launch, and access our features, we ask you for certain information such as name, telephone number, age, and gender. Also, you may fill in some other data according to your liking, such as content category, location, language, areas of interest, region preferences, etc., for a personalised experience.`,
      `Foroly is a platform that does not focus on an audience under 18 years old. So, we do not knowingly give access and collect information of any such user.`,
      <h5 key="h2">2. Other information that we collect without prompts:</h5>,
      `When you start using the Foroly Platform, there may be advertisements that pop up, and when you view the ad displayed, Foroly may collect:`,
      <ol key="collect" type="i">
        <Labeled label="Foroly Platform Usage Details:">
          {`It includes your usage details, including the features you have interacted with and the content you viewed, such as stories, videos, and other content. We maintain all the statistics with the interaction data, logs accessed, and even performance data.`}
        </Labeled>
        <Labeled label="Device Information:">
          {`we may collect your information to use our Foroly Platform. The information that we may capture of your device includes online device identifiers, advertising identifiers, IP address, device make, display features, browsing type, operating system make, network/WIFI identifying the content type of ad [what the ad is about, e.g., entertainment, news, games, etc.]; the ad type [the form of ads such as image, videos, or text-based ad]; address of the ad [on which site the ad appears].`}
        </Labeled>
        <Labeled label="Location Information:">
          {`Foroly also collects information about your location with your consent. Also, this location is needed to access some features. If you do not agree to provide the location, some parts of the Foroly Platform may be inaccessible or not function properly. Foroly Platform can detect your location at the city level for a better experience from our side.`}
        </Labeled>
        <Labeled label="Third Party Data:">
          {`the advertising partner addressed as the third party. And this is information provided by our partners follows the privacy policies of such third parties. So the third party ["Ad partners"] may also reveal some of the information separately collected by them, and we can provide our services.`}
        </Labeled>
        <li>
          <b>Tracking Technologies:</b>
          <ol type="a">
            <li>
              <b>Cookies or Pixels (or mobile cookies/pixel</b>{' '}
              {`): cookies are files that include small pieces of data such as a username. So if you accept the cookies, then next time you visit a site or any application, you will be recognised. You either activate this on your smartphone and also enable this on the website. And by agreeing to this, you may get access to certain features of Foroly.`}
            </li>
            <Labeled label="Beacons:">
              {`foroly Platform may contain beacons that are small files that help the company to improvise in their service, for example, such as knowing the demand of certain application content, verifying system, and content integrity.`}
            </Labeled>
          </ol>
        </li>
        <Labeled label="Third-Party Information Collection:">
          {`while using Foroly certain third parties such as Ad partners, ad servers, attribution partners, and analytical companies may use and collect your information and your device information through automated information collection technologies. This third party can collect your personal information track your activity on the Foroly Platform, and even your website activity, apps, and online services.`}
        </Labeled>
        <Labeled label="Information about advertisements presented on your the Foroly Platform:">
          {`the company collects the information about the ad displayed on your device, such as the category of the content[eg. Entertainment, games, news, etc.]; the ad type[such as format like texts, videos, etc.]; address where add is displayed [specific website or app]; and information about users interaction with the ad such as post-click activity.`}
        </Labeled>
      </ol>,
      <h5 key="h3">3. Information provided through surveys displayed on the Foroly Platform</h5>,
      `Foroly Platform may display certain marketing surveys or survey related applications to you where you are requested to fill in a survey, at your election, for services or products that you use or request to provide your opinion regarding certain products or services.`,
    ],
  },
  {
    title: '3. How Your Information is used',
    blocks: [
      `We [including our partners and affiliates] use the information that you provide, to [ collectively referred to as "permitted purposes"] -`,
      <Numbered
        key="used"
        items={[
          `To provide you with the best experience by using all our features, including offers and featured stories, and not being restricted to a few of them. Such as by agreeing to share the location.`,
          `Provide you with some fantastic offers, advertisements of your interests, and other promotions through Ad partners and affiliates.`,
          `To notify that you have securely registered to Foroly.`,
          `To keep you updated with the upgrades in Foroly Platform through notifications.`,
          `For knowing the approximate audience number and usage activity.`,
          `Help you to explore and increase searches.`,
          `To enhance and build up a custom audience[using data provided herein, or by third party or affiliates] for increasing target advertisements and offers.`,
          `To improve the customer-Foroly relationship by providing security and protecting the users from frauds through our systems.`,
          `To provide general reports to our ad partners about profit and loss gained through advertisements.`,
          `We are taking feedback at regular intervals and sharing the response data with the brands who are the customers of Foroly.`,
        ]}
      />,
      <p key="email">
        If you subscribe to our feature of receiving emails, you will be updated about future updates, company news,
        information about products, etc. Anytime in the future, if you wish to unsubscribe from receiving our emails,
        you can follow guidelines given at the bottom of every email or else you can contact Foroly via Foroly
        customer service email id <Email />
      </p>,
    ],
  },
  {
    title: '4. Disclosure of your information for Permitted Purpose',
    blocks: [
      `We may disclose the information provided by you without your identity or without providing device information. We may disclose your information to -`,
      <ol key="disclose">
        <li>
          We may give our shareholders, board, investors [debt or equity], and affiliates. Affiliates use the
          information for permitted purposes.
        </li>
        <Labeled label="Partner:">
          As mentioned earlier, we may share our data with our Ad Partners, analytics companies, and other third
          parties.
        </Labeled>
        <Labeled label="Legal Disclosures:">
          We may access and preserve your information to comply with law enforcement and secure your rights. Also, to
          enforce our policies, collect amounts owed to us, etc., to perform legal activities, we may use the data
          submitted by you.
        </Labeled>
      </ol>,
    ],
  },
  {
    title: '5. Data Security',
    blocks: [
      `To safeguard your personal information, we have executed several techniques in compliance with our legal and privacy requirements. We are solely committed to securing user data, so we also keep contractual protection through our partners regarding their collection and use of user data. The internet is not the safest option to provide your information due to security reasons.`,
    ],
  },
  {
    title: '6. Data Retention Period',
    blocks: [
      `The information collected by the company is retained only till the time duration of 36 months. Except required for the legal condition or applicable contract.`,
      `The company can have customers' data after fulfilling the contractual obligations of Foroly.`,
      `The company can use data to resolve disputes, follow legal obligations, and enforce agreements after the retention period.`,
    ],
  },
  {
    title: '7. Contact Information',
    blocks: [
      <p key="contact">
        For any further questions regarding our privacy policy and to clear other suspects, please get in touch with us
        at <Email />
      </p>,
    ],
  },
]

function PrivacyPolicy() {
  return (
    <PolicyPage
      title="Privacy Policy"
      description="How Foroly Technologies collects, uses, discloses and retains your information when you use the Foroly Platform."
      path="/privacy-policy"
      sections={sections}
    />
  )
}

export default PrivacyPolicy
