import { MODULES } from './fincore'
import type { Motif } from '../components/ui/CardMotif/CardMotif'

/*
  Optional: save a real screenshot (from a DEMO account only) in public/screens/ and put its path in
  `image`. Until then the panel shows a large animated drawing for the module.
*/
const PICKS: { name: string; motif: Motif; image: string }[] = [
  { name: 'Core Banking Module', motif: 'bars', image: '' },
  { name: 'Mobile Banking Module', motif: 'phone', image: '' },
  { name: 'Cards Module', motif: 'card', image: '' },
  { name: 'InterBanking Module', motif: 'transfer', image: '' },
  { name: 'Agency Banking Module', motif: 'network', image: '' },
  { name: 'USSD Module', motif: 'keypad', image: '' },
]

export const SHOWCASE = PICKS.flatMap(({ name, motif, image }) => {
  const m = MODULES.find((x) => x.name === name)
  if (!m) return []
  return [
    {
      id: name.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-+$/, ''),
      label: name.replace(' Module', ''),
      description: m.description,
      tags: m.tags,
      motif,
      image,
    },
  ]
})