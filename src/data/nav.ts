import type { LucideIcon } from 'lucide-react'
import type { ProductKey } from '../config/logos'

export type MenuItem = {
  label: string
  to?: string
  href?: string
  product?: ProductKey
  icon?: LucideIcon
  description?: string
}

export const PRODUCT_MENU: MenuItem[] = [
  { label: 'Fincore', product: 'fincore', to: '/fincore', description: 'Financial infrastructure for institutions' },
  { label: 'Safi AI', product: 'safi', to: '/safi', description: 'Intelligence for financial teams' },
  { label: 'Settle Africa', product: 'settle', to: '/settle', description: 'Payments across Africa' },
  { label: 'Skynet', product: 'skynet', to: '/skynet', description: 'Cloud and GPU infrastructure' },
]

// No Resources menu for now. Status stays reachable from the footer.
export const RESOURCE_MENU: MenuItem[] = []

export const MAIN_LINKS = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'TVerify', to: '/track' },
  { label: 'Status', to: '/status' },
  { label: 'Company', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]
