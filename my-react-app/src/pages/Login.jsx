import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { TextField } from '../components/ui/TextField.jsx'
import { useAuth } from '../app/useAuth.js'
import shared from './pageStyles.module.css'

export function Login() {
  const nav = useNavigate()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const canSubmit = useMemo(
    () => email.trim().length > 0 && password.trim().length > 0,
    [email, password],
  )

  function onSubmit(e) {
    e.preventDefault()
    setError('')
    const res = login({ email: email.trim(), password })
    if (!res.ok) {
      setError(res.message)
      return
    }
    nav('/profile', { replace: true })
  }

  return (
    <div className={shared.page}>
      <h1 className={shared.title}>Signin to your PopX account</h1>
      <p className={shared.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className={shared.stack} onSubmit={onSubmit}>
        <TextField
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          autoComplete="email"
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          autoComplete="current-password"
        />

        <div>
          <Button fullWidth variant="muted" disabled={!canSubmit} type="submit">
            Login
          </Button>
        </div>
      </form>

      {error ? <div className={shared.error}>{error}</div> : null}
    </div>
  )
}

