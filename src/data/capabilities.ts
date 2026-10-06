export const CAPABILITIES = [
  {
    id: 'accounts',
    title: 'Account management',
    items: [
      'Multi-currency support',
      'Interest calculations',
      'Account hierarchies',
      'Balance management',
    ],
  },
  {
    id: 'payments',
    title: 'Payment processing',
    items: [
      'Real-time transfers',
      'International payments',
      'Batch processing',
      'Payment scheduling',
    ],
  },
  {
    id: 'risk',
    title: 'Risk and compliance',
    items: [
      'Real-time monitoring',
      'Regulatory compliance',
      'Fraud detection',
      'Audit trails',
    ],
  },
  {
    id: 'channels',
    title: 'Digital channels',
    items: ['Mobile banking', 'API integration', 'Digital wallets', 'Open banking'],
  },
] as const

export const SECURITY_POINTS = [
  {
    title: 'Encrypted in transit and at rest',
    text: 'Customer and transaction data is protected as it moves and while it is stored.',
  },
  {
    title: 'Audit trails',
    text: 'Activity is recorded, so institutions can review who did what and when.',
  },
  {
    title: 'Monitored infrastructure',
    text: 'Systems are monitored and built to stay available for daily banking operations.',
  },
]