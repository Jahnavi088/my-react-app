import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { getUser, logout } from '../utils/auth.js'
import styles from './Profile.module.css'

function initials(name) {
  const parts = String(name || '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (!parts.length) return 'U'
  const a = parts[0]?.[0] ?? 'U'
  const b = parts[1]?.[0] ?? ''
  return (a + b).toUpperCase()
}

export function Profile() {
  const nav = useNavigate()
  const user = useMemo(() => getUser(), [])
  const name = user?.fullName || 'Marry Doe'
  const email = user?.email || 'Marry@Gmail.Com'

  function onLogout() {
    logout()
    nav('/login', { replace: true })
  }

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.topTitle}>Account Settings</div>
      </div>

      <div className={styles.body}>
        <div className={styles.card}>
          <div className={styles.profileRow}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar} aria-hidden="true">
                {initials(name)}
              </div>
              <div className={styles.badge} aria-hidden="true">
                P
              </div>
            </div>

            <div className={styles.meta}>
              <div className={styles.name}>{name}</div>
              <div className={styles.email}>{email}</div>
            </div>
          </div>

          <p className={styles.blurb}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
            Sed Diam
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.logoutArea}>
          <Button fullWidth variant="secondary" onClick={onLogout}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

