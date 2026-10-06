import { Lock, Eye, ShieldCheck, CircleCheck } from 'lucide-react'

export const UPDATED = 'October 6, 2026' // set to the real date whenever the policy is actually changed

export const LEAD =
  "Your privacy is important to us. We're committed to protecting your data and being transparent about how we use it."

export const HERO_CARDS = [
  { icon: Lock, title: 'Secure by Design', text: 'End-to-end encryption and security best practices' },
  { icon: Eye, title: 'Transparency', text: 'Clear communication about data collection and use' },
  { icon: ShieldCheck, title: 'Your Control', text: "You decide what data to share and how it's used" },
  { icon: CircleCheck, title: 'Compliance', text: 'Adherence to GDPR, CCPA, and other regulations' },
]

export const INTRO =
  'Insolify ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.'

export const COLLECT_PERSONAL = {
  title: 'Personal Information',
  lead: 'We may collect personal information that you voluntarily provide to us when you:',
  items: [
    'Register for an account or use our services',
    'Subscribe to our newsletter or marketing communications',
    'Contact us for support or inquiries',
    'Participate in surveys, contests, or promotions',
    'Make a purchase or transaction',
  ],
}

export const COLLECT_AUTO = {
  title: 'Automatically Collected',
  lead: 'When you visit our website or use our services, we may automatically collect the following:',
  items: [
    'IP address and location data',
    'Browser type and version',
    'Operating system and device identifiers',
    'Pages visited and navigation patterns',
    'Cookies and similar tracking technologies',
  ],
}

export const USE_ITEMS = [
  'Provide, maintain, and improve our services',
  'Process transactions and send related information',
  'Send administrative information and security alerts',
  'Respond to your inquiries and requests',
  'Send marketing communications (with your consent)',
  'Personalize your experience',
  'Monitor and analyze usage patterns',
  'Detect and prevent security threats',
  'Comply with legal obligations',
].map((text) => ({ text }))

export const SHARING_BANNER = {
  title: 'We do not sell your personal information.',
  text: 'Your data is never sold to third parties for marketing purposes.',
}

/*
  TODO: the four texts below were collapsed in the screenshots. On the live page, expand each one
  and paste its wording into `body`. An entry with an empty body is not shown.
*/
export const SHARING_ITEMS = [
  { title: 'Service Providers', body: '' },
  { title: 'Legal Requirements', body: '' },
  { title: 'Business Transfers', body: '' },
  { title: 'With Your Consent', body: '' },
]

export const SECURITY = {
  lead: 'We implement appropriate technical and organizational security measures to protect your personal information:',
  items: [
    'Encryption of data in transit and at rest',
    'Regular security assessments and audits',
    'Access controls and authentication',
    'Employee training on data protection',
    'Incident response procedures',
    'Compliance with industry standards',
  ],
  note: {
    label: 'Note:',
    text: 'No method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.',
  },
}

export const RIGHTS = [
  { title: 'Access', text: 'Request access to your personal information' },
  { title: 'Correction', text: 'Request correction of inaccurate information' },
  { title: 'Deletion', text: 'Request deletion of your personal information' },
  { title: 'Portability', text: 'Request transfer of your data to another service' },
  { title: 'Objection', text: 'Object to processing of your personal information' },
  { title: 'Restriction', text: 'Request restriction of processing' },
  { title: 'Withdraw Consent', text: 'Withdraw consent where processing is based on consent' },
]

export const COOKIES = {
  lead: 'We use cookies and similar tracking technologies to collect and store information about your preferences and activity.',
  items: [
    { title: 'Essential Cookies', text: 'Required for the website to function properly' },
    { title: 'Analytics Cookies', text: 'Help us understand how visitors use our website' },
    { title: 'Marketing Cookies', text: 'Used to deliver relevant advertisements' },
  ],
}

export const RETENTION =
  'We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.'

export const CONTACT = {
  lead: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
  heading: 'Insolify Privacy Team',
  rows: [
    { label: 'Email', value: 'privacy@insolify.com' },
    // The live page shows "[Your Business Address]" and "[removed]" here. Fill in real values; empty rows are hidden.
    { label: 'Address', value: '' },
    { label: 'Phone', value: '' },
  ],
}