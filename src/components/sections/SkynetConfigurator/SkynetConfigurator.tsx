import { useState } from 'react'
import { ArrowRight, Check, HardDrive, LockKeyhole, Sparkles, Upload, Zap } from 'lucide-react'
import styles from './SkynetConfigurator.module.css'

type Platform = 'Cloud VPS' | 'GPU VPS' | 'Dedicated cloud'
type Storage = 'NVMe' | 'SSD' | 'HDD'
type Os = 'Ubuntu' | 'Debian' | 'Red Hat' | 'AlmaLinux' | 'Rocky Linux' | 'Fedora' | 'Windows Server' | 'Custom image'

const examples = ['WordPress blog for my business', 'Train and serve an AI model', 'SaaS API with PostgreSQL, 10,000 users', 'Windows server for our accounting software', 'Bank-grade dedicated database with 1 TB NVMe']
const sizes = [{ name: 'Nano', cpu: 1, ram: 2, disk: 40 }, { name: 'Standard', cpu: 2, ram: 4, disk: 80 }, { name: 'Performance', cpu: 4, ram: 16, disk: 200 }, { name: 'Scale', cpu: 8, ram: 32, disk: 400 }]
const oses: { name: Os; label: string; price: number; mark: string }[] = [
  { name: 'Ubuntu', label: 'Included', price: 0, mark: 'U' }, { name: 'Debian', label: 'Included', price: 0, mark: 'D' },
  { name: 'Red Hat', label: '+$12/mo', price: 12, mark: 'R' }, { name: 'AlmaLinux', label: 'Included', price: 0, mark: 'A' },
  { name: 'Rocky Linux', label: 'Included', price: 0, mark: 'R' }, { name: 'Fedora', label: 'Included', price: 0, mark: 'F' },
  { name: 'Windows Server', label: '+$15/mo', price: 15, mark: 'W' }, { name: 'Custom image', label: 'Bring your own', price: 0, mark: '↑' },
]
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, Number.isFinite(value) ? value : min))

export default function SkynetConfigurator({ showAssistant = true }: { showAssistant?: boolean }) {
  const [prompt, setPrompt] = useState('Windows server for our accounting software')
  const [suggestion, setSuggestion] = useState('')
  const [platform, setPlatform] = useState<Platform>('Cloud VPS')
  const [cpu, setCpu] = useState(2)
  const [ram, setRam] = useState(4)
  const [storage, setStorage] = useState(80)
  const [storageType, setStorageType] = useState<Storage>('SSD')
  const [os, setOs] = useState<Os>('Windows Server')
  const [ipv4, setIpv4] = useState(1)
  const [region, setRegion] = useState('Lagos')

  const osPrice = oses.find((option) => option.name === os)?.price ?? 0
  const storageRate = storageType === 'NVMe' ? 0.14 : storageType === 'HDD' ? 0.05 : 0.1
  const platformBase = platform === 'GPU VPS' ? 45 : 0
  const platformMultiplier = platform === 'Dedicated cloud' ? 2.5 : 1
  const vcpuCost = cpu * 4 * platformMultiplier
  const ramCost = ram * 2 * platformMultiplier
  const storageCost = storage * storageRate * platformMultiplier
  const computeStorage = vcpuCost + ramCost + storageCost
  const total = Math.round((computeStorage + platformBase + osPrice * platformMultiplier + ipv4 * 2 * platformMultiplier) * 100) / 100

  function applySetup(query: string) {
    const normalized = query.toLowerCase()
    setPlatform('Cloud VPS'); setCpu(2); setRam(4); setStorage(80); setStorageType('SSD'); setOs('Ubuntu')
    if (/gpu|train|model|ai|inference/.test(normalized)) {
      setSuggestion('GPU VPS, 8 vCPU, 32 GB RAM, 400 GB NVMe, Ubuntu')
      setPlatform('GPU VPS'); setCpu(8); setRam(32); setStorage(400); setStorageType('NVMe')
    } else if (/dedicated|bank-grade|database|1 tb|postgres/.test(normalized)) {
      setSuggestion('Dedicated cloud, 8 vCPU, 32 GB RAM, 1 TB NVMe, Ubuntu')
      setPlatform('Dedicated cloud'); setCpu(8); setRam(32); setStorage(1024); setStorageType('NVMe')
    } else if (/windows|accounting/.test(normalized)) {
      setSuggestion('Cloud VPS, 2 vCPU, 4 GB RAM, 80 GB SSD, Windows Server 2022')
      setOs('Windows Server')
    } else if (/wordpress|blog/.test(normalized)) {
      setSuggestion('Cloud VPS, 1 vCPU, 2 GB RAM, 40 GB SSD, Ubuntu')
      setCpu(1); setRam(2); setStorage(40)
    } else if (/api|saas|users/.test(normalized)) {
      setSuggestion('Cloud VPS, 4 vCPU, 16 GB RAM, 200 GB NVMe, Ubuntu')
      setCpu(4); setRam(16); setStorage(200); setStorageType('NVMe')
    } else {
      setSuggestion('Cloud VPS, 2 vCPU, 4 GB RAM, 80 GB SSD, Ubuntu')
    }
  }

  const enquiry = encodeURIComponent(`Please advise on this illustrative server configuration:\nPlatform: ${platform}\nvCPU: ${cpu}\nRAM: ${ram} GB\nStorage: ${storage} GB ${storageType}\nOperating system: ${os}\nIPv4 addresses: ${ipv4}\nRegion: ${region}\nEstimated monthly price: $${total.toFixed(2)}`)

  return <>
    {showAssistant && <section className={styles.assistantSection} aria-labelledby="skynet-assist-title">
      <div className={styles.inner}>
        <header className={styles.sectionHead}><p className={styles.eyebrow}>Configure and deploy</p><h2 id="skynet-assist-title">Build your server, see the price live.</h2><p>Choose a platform, size it with sliders, pick storage and an operating system, and watch the monthly estimate update. Not sure? Describe your workload and we’ll suggest a starting setup.</p></header>
        <div className={styles.assistant}>
          <div className={styles.assistantHead}><strong>Not sure what you need? Describe it.</strong><span>Assisted setup</span></div>
          <label className={styles.srOnly} htmlFor="skynet-workload">Describe your workload</label>
          <textarea id="skynet-workload" value={prompt} onChange={(event) => setPrompt(event.target.value)} placeholder="e.g. Windows server for our accounting software" rows={3} />
          <div className={styles.examples} aria-label="Example workloads">{examples.map((example) => <button key={example} type="button" onClick={() => setPrompt(example)}>{example}</button>)}</div>
          <button className={styles.suggestButton} type="button" onClick={() => applySetup(prompt)} disabled={!prompt.trim()}><Sparkles size={17} /> Suggest a setup</button>
          {suggestion && <div className={styles.suggestion} role="status"><strong>Suggested: {suggestion}</strong><span><Check size={14} /> Applied below. Adjust anything you like.</span></div>}
        </div>
      </div>
    </section>}

    <section className={styles.configSection} aria-labelledby="skynet-config-title">
      <div className={styles.inner}>
        <header className={styles.configHeader}><div><p className={styles.eyebrow}>Your server</p><h2 id="skynet-config-title">Make it yours.</h2></div><p>Illustrative estimate. Final pricing and availability are confirmed for each deployment.</p></header>
        <div className={styles.configLayout}>
          <div className={styles.controls}>
            <fieldset className={styles.fieldset}><legend>Platform</legend><div className={styles.choiceRow}>{(['Cloud VPS', 'GPU VPS', 'Dedicated cloud'] as const).map((item) => <button type="button" key={item} aria-pressed={platform === item} className={platform === item ? styles.selectedChoice : ''} onClick={() => setPlatform(item)}>{item}</button>)}</div></fieldset>
            <div className={styles.presets} aria-label="Quick configurations">{sizes.map((size) => <button type="button" key={size.name} onClick={() => { setCpu(size.cpu); setRam(size.ram); setStorage(size.disk) }}>{size.name}: {size.cpu} vCPU, {size.ram} GB, {size.disk} GB</button>)}</div>
            <RangeField id="skynet-cpu" label="vCPUs" note="1 to 64 cores" min={1} max={64} value={cpu} unit="vCPU count" onChange={setCpu} />
            <RangeField id="skynet-ram" label="RAM (GB)" note="1 to 250 GB" min={1} max={250} value={ram} unit="RAM in GB" onChange={setRam} />
            <RangeField id="skynet-storage" label="Storage size (GB)" note="10 GB to 8 TB" min={10} max={8192} value={storage} unit="Storage size in GB" onChange={setStorage} />
            <fieldset className={styles.fieldset}><legend>Storage type <span>Speed vs cost</span></legend><div className={styles.optionGrid}>{([{ name: 'NVMe', note: 'Fastest, lowest latency', icon: Zap }, { name: 'SSD', note: 'Fast, balanced', icon: HardDrive }, { name: 'HDD', note: 'Cheapest, bulk data', icon: HardDrive }] as const).map(({ name, note, icon: Icon }) => <button type="button" key={name} aria-pressed={storageType === name} className={storageType === name ? styles.selectedOption : ''} onClick={() => setStorageType(name)}><Icon size={18} /><strong>{name}</strong><small>{note}</small></button>)}</div></fieldset>
            <fieldset className={styles.fieldset}><legend>Operating system <span>Choose an image</span></legend><div className={styles.osGrid}>{oses.map((item) => <button type="button" key={item.name} data-os={item.name.toLowerCase().replaceAll(' ', '-')} aria-pressed={os === item.name} className={`${styles.osOption} ${os === item.name ? styles.selectedOption : ''}`} onClick={() => setOs(item.name)}><b aria-hidden="true">{item.mark}</b><strong>{item.name}</strong><small>{item.label}</small></button>)}</div></fieldset>
            <label className={styles.selectField}>Windows Server version<select disabled={os !== 'Windows Server'}><option>2022</option><option>2019</option><option>2025</option></select></label>
            <RangeField id="skynet-ipv4" label="Public IPv4 addresses" note="$2 per month each" min={0} max={16} value={ipv4} unit="IPv4 address count" onChange={setIpv4} />
            <label className={styles.selectField}>Region<select value={region} onChange={(event) => setRegion(event.target.value)}><option>Lagos</option><option>Abuja</option><option>Accra</option><option>Nairobi</option></select></label>
            <button className={styles.uploadButton} type="button" onClick={() => setOs('Custom image')}><Upload size={16} /> Bring a custom image <span>Ask us to confirm support</span></button>
          </div>

          <aside className={styles.summary} aria-live="polite" aria-label="Live configuration estimate">
            <h3>Your configuration</h3>
            <dl><div><dt>Platform</dt><dd>{platform}</dd></div><div><dt>vCPUs</dt><dd>{cpu}</dd></div><div><dt>RAM</dt><dd>{ram} GB</dd></div><div><dt>Storage</dt><dd>{storage >= 1024 ? `${(storage / 1024).toFixed(storage % 1024 ? 1 : 0)} TB` : `${storage} GB`} {storageType}</dd></div><div><dt>OS</dt><dd>{os === 'Windows Server' ? 'Windows Server 2022' : os}</dd></div><div><dt>IPv4 addresses</dt><dd>{ipv4}</dd></div><div><dt>Region</dt><dd>{region}</dd></div></dl>
            <div className={styles.costBreakdown}><div><span>vCPUs cost</span><strong>${vcpuCost.toFixed(2)}</strong></div><div><span>RAM cost</span><strong>${ramCost.toFixed(2)}</strong></div><div><span>Storage cost</span><strong>${storageCost.toFixed(2)}</strong></div>{platformBase > 0 && <div><span>GPU compute</span><strong>${platformBase.toFixed(2)}</strong></div>}{osPrice > 0 && <div><span>OS licence cost</span><strong>${(osPrice * platformMultiplier).toFixed(2)}</strong></div>}{ipv4 > 0 && <div><span>{ipv4} IPv4 address{ipv4 > 1 ? 'es' : ''} cost</span><strong>${(ipv4 * 2 * platformMultiplier).toFixed(2)}</strong></div>}</div>
            <div className={styles.estimate}><span>Estimated monthly</span><strong>${total.toFixed(2)}</strong></div><p className={styles.hourly}>About ${(total / 730).toFixed(3)} per hour</p>
            <a className={styles.deployButton} href={`mailto:sales@insolify.com?subject=${encodeURIComponent('Skynet server configuration enquiry')}&body=${enquiry}`}>Ask about this configuration <ArrowRight size={16} /></a>
            <p className={styles.disclaimer}><LockKeyhole size={13} />Estimate only. Final pricing and availability are confirmed when you enquire.</p>
          </aside>
        </div>
      </div>
    </section>
  </>
}

function RangeField({ id, label, note, min, max, value, unit, onChange }: { id: string; label: string; note: string; min: number; max: number; value: number; unit: string; onChange: (value: number) => void }) {
  return <div className={styles.rangeField}><label htmlFor={id}><strong>{label}</strong><span>{note}</span></label><input id={id} type="range" min={min} max={max} value={value} onChange={(event) => onChange(Number(event.target.value))} /><input aria-label={unit} type="number" min={min} max={max} value={value} onChange={(event) => onChange(clamp(Number(event.target.value), min, max))} /></div>
}
