import Button from '../../components/ui/Button'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <Button to="/">Back to home</Button>
    </section>
  )
}