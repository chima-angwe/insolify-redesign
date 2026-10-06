import { useCallback, useEffect, useRef, useState } from 'react'
import { Activity, CircleCheck, CircleX, RefreshCw } from 'lucide-react'
import { STATUS_SERVICES, REFRESH_MS, TIMEOUT_MS } from '../../data/status'
import styles from './Status.module.css'

type Phase = 'checking' | 'ok' | 'error' | 'unconfigured'
type State = { phase: Phase; detail?: string }

const initial = (): Record<string, State> =>
  Object.fromEntries(
    STATUS_SERVICES.map((s) => [
      s.id,
      { phase: s.endpoint ? 'checking' : 'unconfigured' } as State,
    ]),
  )

async function check(endpoint: string): Promise<State> {
  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(endpoint, { signal: controller.signal, cache: 'no-store' })
    if (!res.ok) return { phase: 'error', detail: `HTTP ${res.status}` }
    return { phase: 'ok' }
  } catch (e) {
    const timedOut = e instanceof DOMException && e.name === 'AbortError'
    return { phase: 'error', detail: timedOut ? 'Request timed out' : 'Network error' }
  } finally {
    window.clearTimeout(timer)
  }
}

export default function Status() {
  const [states, setStates] = useState<Record<string, State>>(initial)
  const [updated, setUpdated] = useState<Date | null>(null)
  const [busy, setBusy] = useState(false)
  const run = useRef(0)

  const refresh = useCallback(async () => {
    const id = ++run.current
    setBusy(true)
    const results = await Promise.all(
      STATUS_SERVICES.map(async (s) => {
        const state: State = s.endpoint ? await check(s.endpoint) : { phase: 'unconfigured' }
        return [s.id, state] as const
      }),
    )
    if (id !== run.current) return // a newer check or an unmount took over
    setStates(Object.fromEntries(results))
    setUpdated(new Date())
    setBusy(false)
  }, [])

  useEffect(() => {
    refresh()
    const timer = window.setInterval(refresh, REFRESH_MS)
    return () => {
      window.clearInterval(timer)
      run.current++
    }
  }, [refresh])

  const list = STATUS_SERVICES.map((s) => states[s.id])
  const configured = list.filter((s) => s.phase !== 'unconfigured')
  const failed = configured.filter((s) => s.phase === 'error').length

  let overall: { tone: 'wait' | 'ok' | 'bad' | 'off'; title: string }
  if (updated === null && configured.length > 0) {
    overall = { tone: 'wait', title: 'Checking status...' }
  } else if (configured.length === 0) {
    overall = { tone: 'off', title: 'Status unavailable' }
  } else if (failed === 0) {
    overall = { tone: 'ok', title: 'All systems operational' }
  } else if (failed === configured.length) {
    overall = { tone: 'bad', title: 'System not operational' }
  } else {
    overall = { tone: 'bad', title: 'Some systems are not operational' }
  }

  const time = updated
    ? updated.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit' })
    : null

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <h1>System status</h1>
        <p className={styles.lead}>Real-time status of all Insolify services</p>

        <div className={styles.overall} aria-live="polite">
          <span className={`${styles.dot} ${styles[overall.tone]}`} aria-hidden="true" />
          <div>
            <p className={styles.title}>{overall.title}</p>
            <p className={styles.sub}>
              {configured.length === 0
                ? 'Status checks are not connected yet.'
                : time
                  ? `Last updated: ${time}`
                  : 'Contacting services...'}
            </p>
          </div>
          <button type="button" className={styles.refresh} onClick={refresh} disabled={busy}>
            <RefreshCw size={16} aria-hidden="true" className={busy ? styles.spin : undefined} />
            {busy ? 'Refreshing' : 'Refresh'}
          </button>
        </div>

        <ul className={styles.list}>
          {STATUS_SERVICES.map((s) => {
            const st = states[s.id]
            return (
              <li key={s.id} className={styles.service}>
                <div className={styles.row}>
                  {st.phase === 'ok' && <CircleCheck size={22} className={styles.okIcon} aria-hidden="true" />}
                  {st.phase === 'error' && <CircleX size={22} className={styles.badIcon} aria-hidden="true" />}
                  {(st.phase === 'checking' || st.phase === 'unconfigured') && (
                    <Activity size={22} className={styles.mutedIcon} aria-hidden="true" />
                  )}
                  <h2>{s.name}</h2>
                  <span className={`${styles.state} ${styles[`s_${st.phase}`]}`}>
                    {st.phase === 'ok' && 'Operational'}
                    {st.phase === 'error' && 'Error'}
                    {st.phase === 'checking' && 'Checking...'}
                    {st.phase === 'unconfigured' && 'Not connected'}
                  </span>
                </div>

                {st.phase === 'error' && (
                  <div className={styles.alert} role="alert">
                    <CircleX size={20} aria-hidden="true" />
                    <div>
                      <p>Unable to fetch status</p>
                      <small>{st.detail}</small>
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}