import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowRight, ArrowUp, Bot, X } from 'lucide-react'
import { EXTERNAL_LINKS } from '../../../config/links'
import styles from './SafiChatPreview.module.css'

type Message = { id: number; role: 'assistant' | 'user'; text: string }

function previewReply(prompt: string) {
  const normalized = prompt.toLowerCase()

  if (normalized.includes('fraud') || normalized.includes('risk')) {
    return 'Safi can help teams surface unusual patterns for review, alongside the checks and rules your institution already uses.'
  }

  if (normalized.includes('payment') || normalized.includes('transfer')) {
    return 'Safi can help make payment workflows easier to understand. Insolify also builds Fincore for banking operations and Settle for money transfers.'
  }

  return 'Safi helps teams work through financial questions, customer conversations and fraud signals. Tell me which workflow you want to explore.'
}

export default function SafiChatPreview() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: 'assistant', text: 'Hello, I am Safi. Ask me about financial workflows, payments or fraud signals.' },
  ])
  const [draft, setDraft] = useState('')
  const [freeTurns, setFreeTurns] = useState(0)
  const [signupOpen, setSignupOpen] = useState(false)
  const transcriptRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const transcript = transcriptRef.current
    if (transcript) transcript.scrollTop = transcript.scrollHeight
  }, [messages])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (signupOpen && !dialog.open) dialog.showModal()
    if (!signupOpen && dialog.open) dialog.close()
  }, [signupOpen])

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return

    const nextId = messages.length
    setDraft('')

    if (freeTurns >= 2) {
      setMessages((current) => [...current, { id: nextId, role: 'user', text }])
      setSignupOpen(true)
      return
    }

    setMessages((current) => [
      ...current,
      { id: nextId, role: 'user', text },
      { id: nextId + 1, role: 'assistant', text: previewReply(text) },
    ])
    setFreeTurns((turns) => turns + 1)
  }

  function useSuggestion() {
    setDraft('How can Safi help identify unusual activity?')
  }

  function closeSignup() {
    setSignupOpen(false)
  }

  return (
    <section className={styles.section} aria-labelledby="safi-preview-title">
      <div className={styles.shell}>
        <div className={styles.chat}>
          <div className={styles.chatHead}>
            <span className={styles.eyebrow}><Bot size={15} aria-hidden="true" /> FINANCIAL AI, MEET CONVERSATION</span>
            <h2 id="safi-preview-title">Try Safi</h2>
            <p>Explore a short guided preview. No account needed.</p>
            <span className={styles.turns}>{Math.max(0, 2 - freeTurns)} free {2 - freeTurns === 1 ? 'reply' : 'replies'}</span>
          </div>

          <div className={styles.transcript} ref={transcriptRef} aria-live="polite" aria-label="Safi preview conversation">
            {messages.map((message) => (
              <div className={`${styles.message} ${message.role === 'user' ? styles.userMessage : styles.safiMessage}`} key={message.id}>
                {message.role === 'assistant' && <span className={styles.messageAvatar}><Bot size={15} aria-hidden="true" /></span>}
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          {freeTurns === 0 && (
            <button className={styles.suggestion} type="button" onClick={useSuggestion}>
              Try asking <span>How can Safi help identify unusual activity?</span><ArrowRight size={15} aria-hidden="true" />
            </button>
          )}

          <form className={styles.composer} onSubmit={sendMessage}>
            <label className={styles.srOnly} htmlFor="safi-preview-input">Message Safi</label>
            <input
              id="safi-preview-input"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask Safi a question…"
              maxLength={500}
              autoComplete="off"
            />
            <button className={styles.send} type="submit" aria-label="Send message" disabled={!draft.trim()}>
              <ArrowUp size={19} aria-hidden="true" />
            </button>
          </form>
          <p className={styles.disclaimer}>Guided preview with sample replies. Safi is not connected to a live chat service yet.</p>
        </div>
      </div>

      <dialog className={styles.dialog} ref={dialogRef} onCancel={closeSignup} onClose={closeSignup} aria-labelledby="safi-signup-title">
        <button className={styles.close} type="button" onClick={closeSignup} aria-label="Close signup prompt"><X size={19} aria-hidden="true" /></button>
        <span className={styles.dialogMark}><Bot size={22} aria-hidden="true" /></span>
        <p className={styles.dialogEyebrow}>KEEP THE CONVERSATION GOING</p>
        <h2 id="safi-signup-title">There’s more to ask Safi.</h2>
        <p className={styles.dialogText}>Your preview is complete. Create a Safi account to continue exploring financial intelligence, customer support and fraud workflows.</p>
        <a className={styles.signup} href={EXTERNAL_LINKS.registerSafi}>
          Sign up for Safi <ArrowRight size={17} aria-hidden="true" />
        </a>
        <button className={styles.continue} type="button" onClick={closeSignup}>Back to the preview</button>
      </dialog>
    </section>
  )
}
