import { ShieldCheck, Eye, CircleCheck, Globe, Lock } from 'lucide-react'
import PolicyPage from '../../components/policy/PolicyPage'
import type { PolicySectionDef } from '../../components/policy/PolicyPage/PolicyPage'
import {
  Panel,
  Columns,
  Lead,
  SubHeading,
  ItemGrid,
  NumberedList,
  Notice,
  Accordion,
  DetailCards,
  ContactCard,
} from '../../components/policy/PolicyBlocks'
import * as P from '../../data/privacy'

const SECTIONS: PolicySectionDef[] = [
  {
    id: 'introduction',
    label: 'Introduction',
    title: 'Introduction',
    icon: ShieldCheck,
    content: (
      <Panel tone="tinted">
        <Lead>{P.INTRO}</Lead>
      </Panel>
    ),
  },
  {
    id: 'collect',
    label: 'Information We Collect',
    title: 'Information We Collect',
    icon: Eye,
    content: (
      <Columns>
        {[P.COLLECT_PERSONAL, P.COLLECT_AUTO].map((c) => (
          <Panel key={c.title}>
            <SubHeading dot>{c.title}</SubHeading>
            <Lead>{c.lead}</Lead>
            <ItemGrid items={c.items} single />
          </Panel>
        ))}
      </Columns>
    ),
  },
  {
    id: 'use',
    label: 'How We Use Information',
    title: 'How We Use Your Information',
    icon: CircleCheck,
    content: (
      <Panel>
        <NumberedList items={P.USE_ITEMS} />
      </Panel>
    ),
  },
  {
    id: 'sharing',
    label: 'Information Sharing',
    title: 'Information Sharing and Disclosure',
    icon: Globe,
    content: (
      <>
        <Notice tone="danger" title={P.SHARING_BANNER.title} text={P.SHARING_BANNER.text} />
        <Accordion items={P.SHARING_ITEMS} />
      </>
    ),
  },
  {
    id: 'security',
    label: 'Data Security',
    title: 'Data Security',
    icon: Lock,
    content: (
      <Panel>
        <Lead>{P.SECURITY.lead}</Lead>
        <ItemGrid items={P.SECURITY.items} icon={Lock} />
        <div style={{ marginTop: '1.25rem' }}>
          <Notice tone="warn" label={P.SECURITY.note.label} text={P.SECURITY.note.text} />
        </div>
      </Panel>
    ),
  },
  {
    id: 'rights',
    label: 'Your Rights',
    title: 'Your Rights',
    icon: CircleCheck,
    content: <DetailCards items={P.RIGHTS} />,
  },
  {
    id: 'cookies',
    label: 'Cookies & Tracking',
    title: 'Cookies and Tracking Technologies',
    icon: Eye,
    content: (
      <Panel>
        <Lead>{P.COOKIES.lead}</Lead>
        <NumberedList items={P.COOKIES.items} variant="rows" />
      </Panel>
    ),
  },
  {
    id: 'retention',
    label: 'Data Retention',
    title: 'Data Retention',
    icon: Lock,
    content: (
      <Panel>
        <Lead>{P.RETENTION}</Lead>
      </Panel>
    ),
  },
  {
    id: 'contact',
    label: 'Contact Us',
    title: 'Contact Us',
    icon: ShieldCheck,
    content: <ContactCard {...P.CONTACT} />,
  },
]

export default function Privacy() {
  return (
    <PolicyPage
      hero={{
        icon: ShieldCheck,
        title: 'Privacy Policy',
        lead: P.LEAD,
        updated: P.UPDATED,
        cards: P.HERO_CARDS,
      }}
      sections={SECTIONS}
    />
  )
}