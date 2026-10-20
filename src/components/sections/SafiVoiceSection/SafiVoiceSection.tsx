import { ArrowLeftRight, Mic, Volume2 } from 'lucide-react'
import styles from './SafiVoiceSection.module.css'

const languages = ['English', 'Kiswahili', 'Hausa', 'العربية', 'Yorùbá', 'Igbo']

const capabilities = [
  {
    icon: Mic,
    title: 'Live listening',
    text: 'Transcribes and understands speech as it happens, without a recording upload step.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Switch mid-conversation',
    text: 'Handles customers who mix languages, such as English with Yorùbá or Hausa.',
  },
  {
    icon: Volume2,
    title: 'Replies by voice or text',
    text: "Answers in the customer's language across app, USSD-assisted and call channels.",
  },
]

export default function SafiVoiceSection() {
  return (
    <section className={styles.section} aria-labelledby="safi-voice-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Real-time voice</p>
          <h2 id="safi-voice-title">Safi listens in your customers' language.</h2>
          <p className={styles.intro}>
            Real-time speech understanding in six languages, so customers can speak naturally to bank,
            pay and ask questions. Language quality and dialect coverage depend on deployment.
          </p>
        </header>

        <div className={styles.voicePanel}>
          <div className={styles.waveform} aria-hidden="true">
            {[18, 30, 42, 56, 38, 26, 48, 68, 44, 32, 54, 40, 28, 36, 22].map((height, index) => (
              <span
                key={index}
                className={styles.waveBar}
                style={{ '--bar-height': `${height}px`, '--bar-delay': `${index * -90}ms` } as React.CSSProperties}
              />
            ))}
          </div>
          <ul className={styles.languages} aria-label="Supported languages">
            {languages.map((language) => (
              <li key={language} lang={language === 'العربية' ? 'ar' : undefined}>{language}</li>
            ))}
          </ul>
        </div>

        <div className={styles.capabilities}>
          {capabilities.map(({ icon: Icon, title, text }) => (
            <article className={styles.card} key={title}>
              <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
