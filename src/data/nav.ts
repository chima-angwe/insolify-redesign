import { FileText, Activity } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { EXTERNAL_LINKS } from '../config/links'
import type { ProductKey } from '../config/logos'

export type MenuItem = {
  label: string
  to?: string // page inside the site
  href?: string // external link
  product?: ProductKey // shows that product's logo
  icon?: LucideIcon // used when there is no product logo
}

// Fincore first, as decided for the homepage. The old site listed Safi AI first; swap the lines to match it.
export const PRODUCT_MENU: MenuItem[] = [
  { label: 'Fincore', product: 'fincore', to: '/fincore' },
  { label: 'Safi AI', product: 'safi', to: '/safi' },
  { label: 'Settle Africa', product: 'settle', to: '/settle' },
]

// An item with no link yet is skipped, so there are never dead links.
export const RESOURCE_MENU: MenuItem[] = [
  { label: 'Documentation', icon: FileText, href: EXTERNAL_LINKS.docs },
  { label: 'Status', icon: Activity, to: '/status' },
].filter((i) => i.to || i.href)

export const MAIN_LINKS = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'TVerify', to: '/track' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]