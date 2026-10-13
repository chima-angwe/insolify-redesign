import type { LucideIcon } from 'lucide-react'
import type { ProductKey } from '../config/logos'

export type MenuItem = {
  label: string
  to?: string
  href?: string
  product?: ProductKey
  icon?: LucideIcon
}

export const PRODUCT_MENU: MenuItem[] = [
  { label: 'Fincore', product: 'fincore', to: '/fincore' },
  { label: 'Safi AI', product: 'safi', to: '/safi' },
  { label: 'Settle Africa', product: 'settle', to: '/settle' },
]

// No Resources menu for now. Status stays reachable from the footer.
export const RESOURCE_MENU: MenuItem[] = []

export const MAIN_LINKS = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'TVerify', to: '/track' },
  { label: 'Status', to: '/status' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]