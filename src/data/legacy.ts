import {
  Building2,
  ShieldCheck,
  CircleCheck,
  Globe,
  Cog,
  Zap,
} from 'lucide-react'

export const UPDATED = 'October 6, 2026' // set to the real date whenever the policy is actually changed

export const LEAD =
  'Supporting your technology transitions with comprehensive migration services and continued legacy system maintenance.'

/* UNVERIFIED (copied from the live page): these read as commitments to customers */
export const STATS = [
  { value: '12+', label: 'Months Notice' },
  { value: '24+', label: 'Months Support' },
  { value: '100%', label: 'Data Export' },
  { value: '24/7', label: 'Migration Help' },
]

export const HERO_ICON = Building2

export const INTRO =
  'Insolify is committed to supporting our customers through technology transitions and system migrations. This Legacy Policy outlines our approach to maintaining legacy systems, providing migration support, and ensuring continuity of service for existing customers.'

export const WHAT = {
  lead: 'Legacy systems refer to older versions of our software, platforms, or services that are no longer actively developed but remain in use:',
  items: [
    'Previous versions of core products',
    'Deprecated APIs and endpoints',
    'Older authentication protocols',
    'Legacy data formats',
    'Outdated user interfaces',
    'Historical system architectures',
  ],
}

export const MAINTAIN = [
  { icon: ShieldCheck, title: 'Security Patches', text: 'Critical security updates and vulnerability fixes' },
  { icon: CircleCheck, title: 'Bug Fixes', text: 'Essential fixes that impact system stability' },
  { icon: Globe, title: 'Compliance Updates', text: 'Regulatory compliance and legal updates' },
  { icon: Cog, title: 'Infrastructure', text: 'Ongoing maintenance and monitoring' },
]

export const LIMITATIONS = [
  'No new features or enhancements will be developed',
  'Limited documentation updates and training materials',
  'Reduced support response times compared to current products',
  'Third-party integrations may become incompatible over time',
]

export const WHY_MIGRATE = [
  { icon: Zap, title: 'Latest Features', text: 'Access to cutting-edge capabilities' },
  { icon: Globe, title: 'Better Performance', text: 'Improved speed and scalability' },
  { icon: ShieldCheck, title: 'Enhanced Security', text: 'Modern security and compliance' },
  { icon: CircleCheck, title: 'Priority Support', text: 'Faster response times and dedicated help' },
]

export const MIGRATION_SERVICES = [
  'Comprehensive migration planning and assessment',
  'Data migration tools and scripts',
  'API compatibility guides and conversion utilities',
  'Dedicated migration support team',
  'Training and documentation for new systems',
  'Phased migration strategies to minimize disruption',
].map((text) => ({ text }))

export const EOL = {
  lead: 'When a legacy system reaches its end-of-life (EOL), we follow a structured process:',
  steps: [
    { title: 'Announcement', tag: '12+ months', text: 'We provide at least 12 months advance notice of EOL' },
    {
      title: 'Support Period',
      tag: '24+ months',
      text: 'Critical security support continues for 24 months after EOL announcement',
    },
    { title: 'Migration Window', tag: 'Extended', text: 'Extended support available during migration period' },
    { title: 'Final Sunset', tag: 'After support', text: 'Complete service termination after support period ends' },
  ],
}

export const EXPORT = {
  lead: 'Prior to any system retirement, we ensure customers can export their data:',
  items: [
    'Self-service data export tools and APIs',
    'Assisted data export services upon request',
    'Data format conversion utilities',
    'Extended data retention period after EOL',
    'Documentation on data structure and formats',
    'Support for multiple export formats',
  ],
}

export const CONTACT = {
  lead: 'For questions about legacy systems, migration support, or this policy:',
  heading: 'Legacy Support Team',
  rows: [
    { label: 'Email', value: 'legacy@insolify.com' },
    { label: 'Migration Support', value: 'migration@insolify.com' },
    // The live page shows "[Your Business Address]" and "[removed]" here. Fill in real values; empty rows are hidden.
    { label: 'Address', value: '' },
    { label: 'Phone', value: '' },
  ],
}