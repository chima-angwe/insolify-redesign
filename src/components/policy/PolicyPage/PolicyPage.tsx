import { useMemo, useRef } from 'react'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import PolicyHero from '../PolicyHero'
import type { HeroProps } from '../PolicyHero/PolicyHero'
import SectionNav from '../SectionNav'
import PolicySection from '../PolicySection'
import { useScrollSpy } from '../../../hooks/useScrollSpy'
import styles from './PolicyPage.module.css'

export type PolicySectionDef = {
  id: string
  label: string // short text for the tab
  title: string // heading shown on the page
  icon: LucideIcon
  content: ReactNode
}

type Props = { hero: HeroProps; sections: PolicySectionDef[] }

export default function PolicyPage({ hero, sections }: Props) {
  const navRef = useRef<HTMLElement>(null)
  const ids = useMemo(() => sections.map((s) => s.id), [sections])
  const { active, select } = useScrollSpy(ids, navRef)

  return (
    <>
      <PolicyHero {...hero} />
      <SectionNav
        navRef={navRef}
        items={sections.map(({ id, label, icon }) => ({ id, label, icon }))}
        active={active}
        onSelect={select}
      />
      <div className={styles.content}>
        {sections.map((s) => (
          <PolicySection key={s.id} id={s.id} icon={s.icon} title={s.title}>
            {s.content}
          </PolicySection>
        ))}
      </div>
    </>
  )
}