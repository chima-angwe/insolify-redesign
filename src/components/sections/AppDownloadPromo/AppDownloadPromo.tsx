import { Apple, ArrowDownLeft, ArrowRight, Check, Play, Radio, Smartphone } from 'lucide-react'
import { STORE_LINKS } from '../../../config/links'
import styles from './AppDownloadPromo.module.css'

type Product = 'settle' | 'skynet'

const content: Record<Product, { name: string; eyebrow: string; title: string; text: string }> = {
  settle: {
    name: 'Settle',
    eyebrow: 'Settle mobile app',
    title: 'Your transfers, in your pocket.',
    text: 'Download the Settle app to send money and follow each transfer wherever you are.',
  },
  skynet: {
    name: 'Skynet',
    eyebrow: 'Skynet mobile app',
    title: 'Your infrastructure, in your pocket.',
    text: 'Download the Skynet app to keep up with service health and important updates on the go.',
  },
}

export default function AppDownloadPromo({ product }: { product: Product }) {
  const copy = content[product]
  const storeUrls = product === 'settle'
    ? { android: STORE_LINKS.settleAndroid, ios: STORE_LINKS.settleIos }
    : { android: STORE_LINKS.skynetAndroid, ios: STORE_LINKS.skynetIos }

  return (
    <section className={styles.section} aria-labelledby={`${product}-app-title`}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id={`${product}-app-title`}>{copy.title}</h2>
          <p className={styles.intro}>{copy.text}</p>
          <div className={styles.storeActions} aria-label={`${copy.name} app download options`}>
            <StoreLink href={storeUrls.android} icon="android" label="Google Play" />
            <StoreLink href={storeUrls.ios} icon="ios" label="App Store" />
          </div>
          <p className={styles.availability}>{storeUrls.android || storeUrls.ios ? 'Choose your platform to get the app.' : 'App downloads will be available here when store links are ready.'}</p>
        </div>

        <div className={styles.visual} role="img" aria-label={`${copy.name} app preview showing a simple live update`}>
          <div className={styles.glow} />
          <div className={styles.phone}>
            <div className={styles.phoneTop}><span className={styles.camera} /><strong>{copy.name}</strong><span className={styles.avatar}>A</span></div>
            {product === 'settle' ? (
              <div className={styles.screenCard}>
                <span className={styles.screenLabel}>TRANSFER UPDATE</span>
                <strong className={styles.route}>Nairobi <ArrowRight size={16} /> Abuja</strong>
                <span className={styles.status}><i /> On its way</span>
                <div className={styles.routeLine}><span /><i /><span /></div>
                <small>Updated just now</small>
              </div>
            ) : (
              <div className={styles.screenCard}>
                <span className={styles.screenLabel}>SERVICE STATUS</span>
                <strong className={styles.operational}><i /> All systems operational</strong>
                <div className={styles.serviceLines}><span><i /> Compute</span><span><i /> Network</span><span><i /> Storage</span></div>
                <small>Updated just now</small>
              </div>
            )}
            <div className={styles.phoneBottom}><span /><span /><span /></div>
          </div>
          <div className={styles.notification}>{product === 'settle' ? <ArrowDownLeft size={15} /> : <Radio size={15} />}<span>{product === 'settle' ? 'Transfer update' : 'Status update'}</span><Check size={14} /></div>
          <span className={styles.orbit} />
        </div>
      </div>
    </section>
  )
}

function StoreLink({ href, icon, label }: { href: string; icon: 'android' | 'ios'; label: string }) {
  const Icon = icon === 'ios' ? Apple : Play
  const content = <><Icon size={18} aria-hidden="true" /><span><strong>{label}</strong><small>{href ? 'Download app' : 'Coming soon'}</small></span><Smartphone className={styles.storeDevice} size={14} aria-hidden="true" /></>

  return href
    ? <a className={styles.storeLink} href={href} target="_blank" rel="noreferrer">{content}</a>
    : <span className={`${styles.storeLink} ${styles.storeUnavailable}`} aria-disabled="true">{content}</span>
}
