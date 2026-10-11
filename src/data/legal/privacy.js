const contact = {
  lines: [
    'Foroly Technologies',
    'Email: support@forolytechnologies.com',
    'Website: forolytechnologies.com',
    'App: InviteApp',
  ],
}

export const privacySections = [
  {
    title: '1. Introduction',
    blocks: [
      `InviteApp ("we", "our", or "us") is a mobile application developed by Foroly Technologies. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our app.`,
      `By using InviteApp, you agree to the collection and use of information in accordance with this policy.`,
    ],
  },
  {
    title: '2. Information We Collect',
    blocks: [
      `We collect the following information when you register and use the app:`,
      [
        `Full Name — used to personalize your experience`,
        `Phone Number — used for account registration and OTP verification`,
        `Email Address — optional, used for account recovery`,
        `Guest Names — names you type, upload (CSV/Excel/TXT) or that are read from a photo of a guest list, used to generate invitations. They are saved with your generation history so you can see them in your profile`,
        `Subscription Information — your plan type and expiry date`,
        `Generation History — number of PDFs generated, date, language used, the invitation file name and the guest names`,
        `Support Messages — the messages and optional screenshots you send us`,
        `Notification Token — used to send you notifications about your support requests`,
        `Device Information — basic device data for app functionality`,
      ],
    ],
  },
  {
    title: '3. How We Use Your Information',
    blocks: [
      `We use the collected information to:`,
      [
        `Create and manage your account`,
        `Verify your identity via OTP`,
        `Process your subscription purchases via the App Store / Google Play`,
        `Generate personalized invitation PDFs with guest names`,
        `Display your generation history in your profile`,
        `Respond to your support requests`,
        `Improve app performance and fix issues`,
      ],
    ],
  },
  {
    title: '4. Guest Data & PDF Generation',
    blocks: [
      `When you add a guest list (typed, CSV, Excel, TXT, or a photo):`,
      [
        `Invitation PDFs are created on your device from your template and the guest names`,
        `If you use a photo of a guest list, the photo is sent to our server and to Google Gemini only to read the names. We do not keep the photo`,
        `To convert names into another Indian language, the names are sent to Google Input Tools`,
        `Guest names are saved with your generation history (see Data Retention)`,
        `A copy of each generated ZIP file is saved in your private storage for 30 days so you can download it again from your profile, then it is deleted automatically`,
        `Temporary PDF files on your device are deleted after the ZIP is created`,
        `You are responsible for obtaining consent from your guests before using their names in the app`,
      ],
    ],
  },
  {
    title: '5. Payment Information',
    blocks: [
      `Subscriptions are purchased through the Apple App Store or Google Play.`,
      [
        `We do NOT receive or store your card, UPI, or bank details`,
        `Payments are handled by Apple or Google under their own privacy policies`,
        `We only store your subscription status (active/inactive), plan type, purchase reference and expiry date`,
      ],
    ],
  },
  {
    title: '6. Data Storage & Security',
    blocks: [
      [
        `Your data is stored securely on Supabase servers`,
        `We use industry-standard encryption for data transmission`,
        `Access to your data is protected by authentication`,
        `We implement Row Level Security (RLS) ensuring users can only access their own data`,
        `We regularly review our security practices`,
      ],
      `However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.`,
    ],
  },
  {
    title: '7. Third-Party Services',
    blocks: [
      `InviteApp uses the following third-party services:`,
      [
        `Supabase — database and authentication (supabase.com/privacy)`,
        `Twilio — OTP SMS verification (twilio.com/legal/privacy)`,
        `Apple App Store / Google Play — subscription billing`,
        `Google Gemini API — reading guest names from photos of guest lists`,
        `Google Input Tools — converting guest names into Indian scripts (the names are sent to Google for this)`,
        `Expo, Firebase Cloud Messaging and Apple Push Notification service — delivering notifications about your support requests`,
        `Resend — transactional email service`,
      ],
      `Each service has its own privacy policy governing their data practices.`,
    ],
  },
  {
    title: '8. Data Retention',
    blocks: [
      [
        `Account data is retained as long as your account is active`,
        `Generation history, including guest names, is kept until you delete your account`,
        `Generated ZIP files are retained for 30 days`,
        `Support messages are retained for 6 months`,
        `If you delete your account, all your personal data will be permanently deleted within 30 days`,
        `Payment records may be retained for 7 years as required by Indian tax laws`,
      ],
    ],
  },
  {
    title: '9. Your Rights',
    blocks: [
      `Under applicable Indian data protection laws, you have the right to:`,
      [
        `Access — request a copy of your personal data`,
        `Correction — request correction of inaccurate data`,
        `Deletion — request deletion of your account and data`,
        `Portability — request your data in a portable format`,
        `Objection — object to processing of your data`,
      ],
      `To exercise any of these rights, contact us at:`,
      `support@forolytechnologies.com`,
    ],
  },
  {
    title: "10. Children's Privacy",
    blocks: [
      `InviteApp is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.`,
    ],
  },
  {
    title: '11. Changes to This Policy',
    blocks: [
      `We may update this Privacy Policy from time to time. We will notify you of any significant changes by:`,
      [`Updating the "Last updated" date at the top of this policy`],
      `Continued use of the app after changes constitutes acceptance of the updated policy.`,
    ],
  },
  {
    title: '12. Contact Us',
    blocks: [`If you have any questions about this Privacy Policy, please contact us:`, contact],
  },
]
