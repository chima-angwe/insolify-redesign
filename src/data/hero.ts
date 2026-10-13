import type { StripCard } from '../components/sections/StripCards/StripCards'

export const HERO = {
  headline: 'Core banking built for African banks',
  subheading:
    'Fincore runs accounts, loans, payments and mobile banking for microfinance banks and fintechs. Switch on the modules you need as you grow.',
}

// Every line comes from the Fincore module list. No figures, names or amounts.
export const HERO_CARDS: StripCard[] = [
  { tone: 'yellow', label: 'Core banking', title: '12 modules', text: 'Accounts, loans, ledger', motif: 'bars' },
  { tone: 'light', label: 'Mobile banking', title: 'Android and iOS', text: 'Fully branded apps', motif: 'phone' },
  { tone: 'dark', label: 'Interbank', title: 'NIBSS and Interswitch', text: 'Real-time transfers', motif: 'transfer' },
  { tone: 'yellow', label: 'Cards', title: 'Full card lifecycle', text: 'Issue, block, monitor', motif: 'card' },
  { tone: 'light', label: 'USSD', title: 'No internet needed', text: 'Banking on any phone', motif: 'keypad' },
  { tone: 'dark', label: 'Agency banking', title: 'Field agents and POS', text: 'Reach beyond branches', motif: 'network' },
]