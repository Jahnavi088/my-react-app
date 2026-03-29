import styles from './MobileShell.module.css'

export function MobileShell({ children }) {
  return (
    <div className={styles.stage} aria-label="Centered mobile app stage">
      <div className={styles.shell}>{children}</div>
    </div>
  )
}

