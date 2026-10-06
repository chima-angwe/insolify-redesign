import { Building2, Cog, ShieldCheck, ArrowRight, Clock, Download, Users } from 'lucide-react'
import PolicyPage from '../../components/policy/PolicyPage'
import type { PolicySectionDef } from '../../components/policy/PolicyPage/PolicyPage'
import {
  Panel,
  Lead,
  SubHeading,
  ItemGrid,
  NumberedList,
  Notice,
  DetailCards,
  MiniFeatures,
  StepList,
  ContactCard,
} from '../../components/policy/PolicyBlocks'
import * as L from '../../data/legacy'

const SECTIONS: PolicySectionDef[] = [
  {
    id: 'introduction',
    label: 'Introduction',
    title: 'Introduction',
    icon: Building2,
    content: (
      <Panel tone="tinted">
        <Lead>{L.INTRO}</Lead>
      </Panel>
    ),
  },
  {
    id: 'what',
    label: 'What Are Legacy Systems?',
    title: 'What Are Legacy Systems?',
    icon: Cog,
    content: (
      <Panel>
        <Lead>{L.WHAT.lead}</Lead>
        <ItemGrid items={L.WHAT.items} tiles />
      </Panel>
    ),
  },
  {
    id: 'support',
    label: 'Support Commitment',
    title: 'Our Support Commitment',
    icon: ShieldCheck,
    content: (
      <>
        <SubHeading>What We Maintain</SubHeading>
        <DetailCards items={L.MAINTAIN} />
        <Notice tone="warn" title="Support Limitations" bullets={L.LIMITATIONS} />
      </>
    ),
  },
  {
    id: 'migration',
    label: 'Migration Support',
    title: 'Migration Support',
    icon: ArrowRight,
    content: (
      <>
        <Panel tone="info">
          <SubHeading>Why Migrate?</SubHeading>
          <MiniFeatures items={L.WHY_MIGRATE} />
        </Panel>
        <Panel>
          <SubHeading>Migration Services We Offer</SubHeading>
          <NumberedList items={L.MIGRATION_SERVICES} variant="tiles" />
        </Panel>
      </>
    ),
  },
  {
    id: 'eol',
    label: 'End-of-Life Policy',
    title: 'End-of-Life Policy',
    icon: Clock,
    content: (
      <Panel>
        <Lead>{L.EOL.lead}</Lead>
        <StepList items={L.EOL.steps} />
      </Panel>
    ),
  },
  {
    id: 'export',
    label: 'Data Export',
    title: 'Data Retention and Export',
    icon: Download,
    content: (
      <Panel>
        <Lead>{L.EXPORT.lead}</Lead>
        <ItemGrid items={L.EXPORT.items} icon={Download} tiles />
      </Panel>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Contact and Support',
    icon: Users,
    content: <ContactCard {...L.CONTACT} />,
  },
]

export default function Legacy() {
  return (
    <PolicyPage
      hero={{
        icon: L.HERO_ICON,
        title: 'Legacy Systems & Support',
        lead: L.LEAD,
        updated: L.UPDATED,
        stats: L.STATS,
      }}
      sections={SECTIONS}
    />
  )
}