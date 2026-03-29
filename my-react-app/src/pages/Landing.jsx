import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import styles from './Landing.module.css'

export function Landing() {
  return (
    <div className={styles.page}>
      <div className={styles.hero} aria-hidden="true">
        <div className={styles.dots}>
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className={styles.dot} />
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>PopX</span>
        </h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className={styles.actions}>
          <Link to="/signup">
            <Button fullWidth>Create Account</Button>
          </Link>
          <Link to="/login">
            <Button fullWidth variant="secondary">
              Already Registered? Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

