import { ArrowLeftRight, Check, Cloud, Landmark, Sparkles } from 'lucide-react'
import styles from './Status.module.css'

type ServiceSnapshot = {
  name: string
  icon: typeof Landmark
  uptime: string
  latency: string
  degradedDays: number[]
  outageDays?: number[]
  response: number[]
}

type IncidentUpdate = { status: string; text: string; time: string }
type Incident = {
  id: string
  title: string
  service: string
  impact: 'Degraded' | 'Outage'
  date: string
  duration: string
  updates: IncidentUpdate[]
  cause: string
  resolution: string
}

const SERVICES: ServiceSnapshot[] = [
  { name: 'FinCore', icon: Landmark, uptime: '99.98%', latency: '142 ms', degradedDays: [67], response: [52, 65, 21, 10, 24, 57, 15, 28, 62, 30, 47, 61, 23, 8, 35, 31, 40, 17, 55, 9, 70, 24, 33, 20, 13, 45, 53, 25, 64, 8, 11, 58, 23, 66, 20, 57, 41, 61, 34, 47, 18, 61, 51] },
  { name: 'Safi', icon: Sparkles, uptime: '99.96%', latency: '410 ms', degradedDays: [], outageDays: [53], response: [18, 60, 53, 45, 39, 40, 47, 30, 12, 57, 54, 8, 49, 50, 15, 52, 56, 25, 60, 63, 33, 34, 39, 54, 38, 7, 51, 30, 29, 49, 45, 12, 47, 38, 46, 63, 20, 5, 12, 17, 59, 45, 62, 51, 43] },
  { name: 'Skynet', icon: Cloud, uptime: '99.99%', latency: '38 ms', degradedDays: [42], response: [44, 50, 62, 46, 54, 48, 47, 38, 51, 39, 53, 50, 41, 47, 44, 36, 43, 39, 21, 42, 43, 41, 30, 44, 51, 55, 50, 25, 22, 46, 28, 43, 30, 35, 41, 22, 42, 30, 45, 34, 46, 30, 55, 38, 46] },
  { name: 'Settle', icon: ArrowLeftRight, uptime: '99.97%', latency: '215 ms', degradedDays: [22], response: [25, 13, 53, 20, 66, 33, 43, 42, 48, 15, 27, 12, 56, 28, 15, 50, 49, 31, 46, 37, 39, 62, 22, 14, 30, 43, 65, 44, 54, 37, 59, 28, 48, 19, 56, 22, 43, 20, 39, 57, 23, 51, 65, 38, 55] },
]

const INCIDENTS: Incident[] = [
  {
    id: 'INC-0042', title: 'Elevated latency on transaction posting', service: 'FinCore', impact: 'Degraded',
    date: 'Sep 22, 2026, 09:43 PM', duration: '47 min',
    updates: [
      { status: 'Investigating', text: 'We are investigating slower than normal transaction posting.', time: 'Sep 22, 2026, 09:43 PM' },
      { status: 'Identified', text: 'The cause was identified as a maintenance job running at peak.', time: 'Sep 22, 2026, 10:01 PM' },
      { status: 'Resolved', text: 'Latency is back to normal. Maintenance is rescheduled off-peak.', time: 'Sep 22, 2026, 10:30 PM' },
    ],
    cause: 'A database index rebuild ran during peak hours and slowed ledger writes.',
    resolution: 'The rebuild was stopped and rescheduled to the overnight maintenance window. Posting latency returned to baseline.',
  },
  {
    id: 'INC-0039', title: 'Safi voice transcription unavailable', service: 'Safi', impact: 'Outage',
    date: 'Aug 29, 2026, 09:43 PM', duration: '23 min',
    updates: [
      { status: 'Investigating', text: 'Voice requests are failing. Text chat is unaffected.', time: 'Aug 29, 2026, 09:43 PM' },
      { status: 'Identified', text: 'A faulty model release was identified.', time: 'Aug 29, 2026, 09:52 PM' },
      { status: 'Resolved', text: 'Rolled back. Voice transcription is fully restored.', time: 'Aug 29, 2026, 10:06 PM' },
    ],
    cause: 'A speech model deployment failed health checks and was routed live.',
    resolution: 'Traffic was rolled back to the previous model version. Deployment gates now require a passing canary before routing.',
  },
  {
    id: 'INC-0037', title: 'Delayed cross-border settlement confirmations', service: 'Settle', impact: 'Degraded',
    date: 'Aug 15, 2026, 09:43 PM', duration: '95 min',
    updates: [
      { status: 'Investigating', text: 'Some settlement confirmations are delayed.', time: 'Aug 15, 2026, 09:43 PM' },
      { status: 'Monitoring', text: 'The provider has recovered. We are reconciling pending items.', time: 'Aug 15, 2026, 10:43 PM' },
      { status: 'Resolved', text: 'All pending transfers are reconciled.', time: 'Aug 15, 2026, 11:18 PM' },
    ],
    cause: 'A partner payment provider experienced a delay in sending confirmations.',
    resolution: 'Pending transfers were reconciled automatically once the provider recovered. No transfers were lost.',
  },
  {
    id: 'INC-0033', title: 'Intermittent packet loss in one region', service: 'Skynet', impact: 'Degraded',
    date: 'Sep 12, 2026, 09:43 PM', duration: '31 min',
    updates: [
      { status: 'Investigating', text: 'Some customers see packet loss in one region.', time: 'Sep 12, 2026, 09:43 PM' },
      { status: 'Resolved', text: 'Traffic rerouted. Network performance is normal.', time: 'Sep 12, 2026, 10:14 PM' },
    ],
    cause: 'A faulty upstream network link caused packet loss on a subset of routes.',
    resolution: 'Traffic was rerouted to an alternate carrier and the link was replaced by the provider.',
  },
]

const LOGS = [
  { time: 'Oct 20, 2026, 07:43 PM', level: 'INFO', service: 'Skynet', message: 'Scheduled kernel patching completed on 12 nodes with no downtime.' },
  { time: 'Oct 20, 2026, 12:43 PM', level: 'INFO', service: 'FinCore', message: 'Nightly ledger reconciliation finished. 0 discrepancies.' },
  { time: 'Oct 19, 2026, 07:43 PM', level: 'WARN', service: 'Safi', message: 'Transcription queue depth above threshold for 4 minutes. Auto-scaled.' },
  { time: 'Oct 17, 2026, 09:43 PM', level: 'INFO', service: 'Settle', message: 'Corridor routing table refreshed.' },
  { time: 'Sep 22, 2026, 09:43 PM', level: 'RESOLVED', service: 'FinCore', message: 'INC-0042 resolved. Posting latency back to baseline.' },
  { time: 'Sep 22, 2026, 08:56 PM', level: 'ERROR', service: 'FinCore', message: 'INC-0042 opened. p95 posting latency exceeded SLO.' },
  { time: 'Sep 12, 2026, 09:43 PM', level: 'RESOLVED', service: 'Skynet', message: 'INC-0033 resolved. Traffic rerouted to alternate carrier.' },
  { time: 'Aug 29, 2026, 09:43 PM', level: 'RESOLVED', service: 'Safi', message: 'INC-0039 resolved. Model rolled back.' },
  { time: 'Aug 15, 2026, 09:43 PM', level: 'RESOLVED', service: 'Settle', message: 'INC-0037 resolved. Pending transfers reconciled.' },
]

function makeLine(values: number[]) {
  return values.map((value, index) => `${(index / (values.length - 1)) * 300},${70 - value}`).join(' ')
}

function ServiceCard({ service }: { service: ServiceSnapshot }) {
  const Icon = service.icon
  return (
    <article className={styles.serviceCard}>
      <div className={styles.serviceTop}>
        <h3><Icon size={20} strokeWidth={1.8} aria-hidden="true" />{service.name}</h3>
        <span className={styles.operational}><span aria-hidden="true" />Operational</span>
      </div>
      <div className={styles.uptimeBlock}>
        <div className={styles.uptimeBars} role="img" aria-label={`${service.name}: 90 day availability history; ${90 - service.degradedDays.length - (service.outageDays?.length ?? 0)} operational days, ${service.degradedDays.length} degraded days and ${service.outageDays?.length ?? 0} outage days`}>
          {Array.from({ length: 90 }, (_, index) => <span key={index} className={service.outageDays?.includes(index) ? styles.outageBar : service.degradedDays.includes(index) ? styles.degradedBar : styles.goodBar} />)}
        </div>
        <div className={styles.rangeLabels}><span>90 days ago</span><span>Today</span></div>
      </div>
      <div className={styles.metrics}>
        <div><strong>{service.uptime}</strong><span>90-day uptime</span></div>
        <div><strong>{service.latency}</strong><span>p50 latency</span></div>
      </div>
      <figure className={styles.chart}>
        <svg viewBox="0 0 300 70" preserveAspectRatio="none" role="img" aria-label={`${service.name} response time trend over the last 24 hours`}>
          <polygon points={`0,70 ${makeLine(service.response)} 300,70`} className={styles.chartArea} />
          <polyline points={makeLine(service.response)} className={styles.chartLine} />
        </svg>
        <figcaption>Response time, last 24h</figcaption>
      </figure>
    </article>
  )
}

function IncidentCard({ incident }: { incident: Incident }) {
  return (
    <article className={styles.incidentCard}>
      <div className={styles.incidentHead}>
        <div><p className={styles.incidentId}>{incident.id}</p><h3>{incident.title}</h3></div>
        <span className={`${styles.impact} ${incident.impact === 'Outage' ? styles.outage : styles.degraded}`}>{incident.impact} · Resolved</span>
      </div>
      <div className={styles.incidentMeta}><span>{incident.service}</span><span>{incident.date}</span><span>Duration {incident.duration}</span></div>
      <ol className={styles.timeline}>
        {incident.updates.map((update) => (
          <li key={`${incident.id}-${update.status}`}>
            <span className={styles.timelineDot} aria-hidden="true" />
            <div><p><strong>{update.status}</strong> {update.text}</p><time>{update.time}</time></div>
          </li>
        ))}
      </ol>
      <div className={styles.incidentNotes}>
        <p><strong>Root cause:</strong> {incident.cause}</p>
        <p className={styles.resolution}><strong>Resolution:</strong> {incident.resolution}</p>
      </div>
    </article>
  )
}

export default function Status() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="status-title">
        <p className={styles.eyebrow}>System status</p>
        <h1 id="status-title">Platform health and uptime.</h1>
        <p>Availability, latency, incidents and logs for FinCore, Safi, Skynet and Settle.</p>
      </section>

      <div className={styles.content}>
        <section className={styles.overall} aria-label="Overall system status">
          <span className={styles.checkIcon}><Check size={18} strokeWidth={2.6} aria-hidden="true" /></span>
          <div><h2>All systems operational</h2><p>4 services monitored</p></div>
          <time>Updated Oct 20, 2026, 09:43 PM</time>
        </section>

        <section className={styles.section} aria-labelledby="services-title">
          <div className={styles.sectionTitle}><div><p className={styles.eyebrow}>Live overview</p><h2 id="services-title">Services</h2></div><p>Last 90 days · response time over the last 24 hours</p></div>
          <div className={styles.serviceGrid}>{SERVICES.map((service) => <ServiceCard key={service.name} service={service} />)}</div>
          <div className={styles.legend} aria-label="Availability chart legend"><span><i className={styles.goodKey} />Operational</span><span><i className={styles.degradedKey} />Degraded</span><span><i className={styles.outageKey} />Outage</span></div>
        </section>

        <section className={styles.section} aria-labelledby="incidents-title">
          <div className={styles.sectionTitle}><div><p className={styles.eyebrow}>What happened</p><h2 id="incidents-title">Past incidents</h2></div><p>Last 90 days · 4 incidents, all resolved</p></div>
          <div className={styles.incidentList}>{INCIDENTS.map((incident) => <IncidentCard key={incident.id} incident={incident} />)}</div>
        </section>

        <section className={styles.section} aria-labelledby="logs-title">
          <div className={styles.sectionTitle}><div><p className={styles.eyebrow}>Recent activity</p><h2 id="logs-title">System logs</h2></div><p>Most recent first</p></div>
          <div className={styles.logTableWrap}>
            <table className={styles.logTable}>
              <thead><tr><th scope="col">Time</th><th scope="col">Level</th><th scope="col">Service</th><th scope="col">Event</th></tr></thead>
              <tbody>{LOGS.map((log) => <tr key={`${log.time}-${log.service}`}>
                <td data-label="Time">{log.time}</td>
                <td data-label="Level"><span className={`${styles.logLevel} ${styles[`level${log.level}`]}`}>{log.level}</span></td>
                <td data-label="Service">{log.service}</td>
                <td data-label="Event">{log.message}</td>
              </tr>)}</tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
