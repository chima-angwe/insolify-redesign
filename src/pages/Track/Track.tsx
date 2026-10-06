import { useState } from 'react'
import type { FormEvent } from 'react'
import { TRACKING } from '../../config/links'
import styles from './Track.module.css'

type Mode = 'id' | 'receipt'
type Status = 'idle' | 'loading' | 'done' | 'notfound' | 'error' | 'unconfigured'
type Result = Record<string, unknown>

const LABELS: Record<string, string> = {
  status: 'Status',
  reference: 'Reference',
  amount: 'Amount',
  date: 'Date',
  message: 'Details',
}

const MAX_BYTES = 5 * 1024 * 1024

export default function Track() {
  const [mode, setMode] = useState<Mode>('id')
  const [reference, setReference] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [result, setResult] = useState<Result | null>(null)

  const ready = mode === 'id' ? reference.trim().length > 0 : file !== null

  function switchMode(next: Mode) {
    setMode(next)
    setStatus('idle')
    setResult(null)
  }

  function pickFile(f: File | null) {
    setFileError('')
    if (f && f.size > MAX_BYTES) {
      setFile(null)
      setFileError('That file is larger than 5 MB. Please choose a smaller one.')
      return
    }
    setFile(f)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!ready) return
    setResult(null)

    const endpoint = mode === 'id' ? TRACKING.lookupEndpoint : TRACKING.receiptEndpoint
    if (!endpoint) {
      setStatus('unconfigured')
      return
    }

    setStatus('loading')
    try {
      const res =
        mode === 'id'
          ? await fetch(endpoint + encodeURIComponent(reference.trim()))
          : await fetch(endpoint, { method: 'POST', body: toForm(file) })

      if (res.status === 404) {
        setStatus('notfound')
        return
      }
      if (!res.ok) {
        setStatus('error')
        return
      }
      setResult((await res.json()) as Result)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const rows = result
    ? Object.keys(LABELS)
        .filter((k) => ['string', 'number'].includes(typeof result[k]))
        .map((k) => ({ label: LABELS[k], value: String(result[k]) }))
    : []

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1>Track any transfer</h1>
        <p className={styles.lead}>
          Look up settlement status using a transaction reference, or upload the receipt and we will
          match it for you.
        </p>

        <div className={styles.tabs} role="tablist" aria-label="How to look up a transfer">
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'id'}
            className={mode === 'id' ? styles.on : undefined}
            onClick={() => switchMode('id')}
          >
            Transaction ID
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'receipt'}
            className={mode === 'receipt' ? styles.on : undefined}
            onClick={() => switchMode('receipt')}
          >
            Upload receipt
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {mode === 'id' ? (
            <label className={styles.field}>
              <span className={styles.srOnly}>Transaction reference</span>
              <input
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder="e.g. REF-12345"
                autoComplete="off"
              />
            </label>
          ) : (
            <label className={styles.field}>
              <span className={styles.srOnly}>Receipt file</span>
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => pickFile(e.target.files?.[0] ?? null)}
              />
            </label>
          )}
          <button type="submit" className={styles.submit} disabled={!ready || status === 'loading'}>
            {status === 'loading' ? 'Checking...' : 'Track'}
          </button>
        </form>

        {mode === 'receipt' && (
          <p className={styles.hint}>Accepted: images or PDF, up to 5 MB.</p>
        )}
        {fileError && <p className={styles.err}>{fileError}</p>}

        <div role="status" aria-live="polite" className={styles.results}>
          {status === 'unconfigured' && (
            <p className={styles.err}>
              Tracking is not connected yet. Set TRACKING in config/links.ts.
            </p>
          )}
          {status === 'notfound' && (
            <p className={styles.err}>We could not find that transfer. Check the details and try again.</p>
          )}
          {status === 'error' && (
            <p className={styles.err}>Something went wrong. Please try again in a moment.</p>
          )}
          {status === 'done' && (
            <dl className={styles.card}>
              {rows.length > 0 ? (
                rows.map((r) => (
                  <div key={r.label}>
                    <dt>{r.label}</dt>
                    <dd>{r.value}</dd>
                  </div>
                ))
              ) : (
                <div>
                  <dt>Status</dt>
                  <dd>Found</dd>
                </div>
              )}
            </dl>
          )}
        </div>
      </div>
    </section>
  )
}

function toForm(file: File | null) {
  const data = new FormData()
  if (file) data.append('file', file)
  return data
}