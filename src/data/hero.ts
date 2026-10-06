export const HERO = {
  eyebrow: 'Core banking, AI and payments infrastructure',
  lead: "Core banking for Africa's",
  // read by screen readers and search engines; the animated version is hidden from them
  headline: "Core banking for Africa's microfinance banks, fintechs and finance houses",
  subheading:
    'Fincore gives microfinance banks, fintechs and finance houses a secure core banking system, plus mobile and internet banking, ready to deploy.',
  badges: [
    { icon: 'shield', label: 'Built for regulated financial institutions' },
    { icon: 'lock', label: 'Encrypted in transit and at rest' },
    { icon: 'globe', label: 'Built for African markets' },
    { icon: 'headset', label: 'Dedicated onboarding and support' },
  ],
} as const

export const HERO_WORDS: string[] = ['microfinance banks', 'fintechs', 'finance houses']