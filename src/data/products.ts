export type Product = {
  id: 'fincore' | 'safi' | 'settle'
  name: string
  category: string
  description: string
  points?: string[]
  to: string
  featured?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 'fincore',
    name: 'Fincore',
    category: 'Core banking',
    description:
      'Core banking for microfinance banks and fintechs, with 12 deployable modules for accounts, payments, risk and digital channels.',
    points: [
      'Accounts, payments and lending',
      'Mobile and internet banking',
      'Audit trails and compliance tools',
    ],
    to: '/fincore',
    featured: true,
  },
  {
    id: 'safi',
    name: 'Safi AI',
    category: 'AI assistant',
    description:
      'An AI assistant for customer support, fraud detection and business insights.',
    to: '/safi',
  },
  {
    id: 'settle',
    name: 'Settle Africa',
    category: 'Money transfers',
    description: 'Fast, secure transfers across Africa and beyond.',
    to: '/settle',
  },
]