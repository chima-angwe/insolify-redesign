export const EXTERNAL_LINKS = {
  register: 'https://dash.insolify.com/register',
  registerFincore: 'https://dash.insolify.com/register?product=fincore', // TODO: test that this works
  account: 'https://dash.insolify.com', // TODO: confirm the real login URL
  registerSafi: 'https://dash.insolify.com/register?product=safiai',
  registerSettle: 'https://dash.insolify.com/register', // TODO: use a Settle-specific link if one exists
  docs: 'https://docs.insolify.com/', // TODO: paste the Documentation link (hover it on the live site and copy the address)
}

export const NAV_LINKS = [
  { label: 'Fincore', to: '/fincore' },
  { label: 'Safi AI', to: '/safi' },
  { label: 'Settle Africa', to: '/settle' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_GROUPS = [
  {
    title: 'Products',
    links: [
      { label: 'Fincore', to: '/fincore' },
      { label: 'Safi AI', to: '/safi' },
      { label: 'Settle Africa', to: '/settle' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { label: 'Verify a transfer', to: '/track' }, // TODO: confirm name (TVerify / Track)
      { label: 'Status', to: '/status' }, // TODO: confirm the URL
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Legacy', to: '/legacy' },
    ],
  },
]

export const TRUST_POINTS = [
  'Built for regulated financial institutions',
  'Encrypted in transit and at rest',
  'Resilient, monitored infrastructure',
  'Dedicated onboarding and support',
]

export const CONTACT = {
  email: 'sales@insolify.com', // shown on the live Contact page
  hours: 'Monday to Friday, 9 AM to 6 PM WAT', // from the live page
  calendlyUrl: '', // TODO: paste the Calendly link from the live page
  formEndpoint: '', // TODO: ask Ibrahim where the live form posts
}

export type PricingProduct = 'fincore' | 'safi' | 'settle'

// Opens the Pricing page with the right product tab selected
export const pricingLink = (product: PricingProduct) => `/pricing?product=${product}`

export const STORE_LINKS = {
  settleIos: '', // paste the Settle App Store link here
  settleAndroid: '', // paste the Settle Google Play link here
}

export const TRACKING = {
  // TODO: ask Ibrahim. A URL ending where the reference goes, e.g. 'https://api.example.com/track?reference='
  lookupEndpoint: '',
  // TODO: ask Ibrahim. A URL that accepts a receipt file (multipart form, field name "file")
  receiptEndpoint: '',
}