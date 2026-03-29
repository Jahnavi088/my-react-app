import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { RadioRow } from '../components/ui/RadioRow.jsx'
import { TextField } from '../components/ui/TextField.jsx'
import { setAuthed, setUser } from '../utils/auth.js'
import shared from './pageStyles.module.css'
import styles from './Signup.module.css'

export function Signup() {
  const nav = useNavigate()
  const [fullName, setFullName] = useState('Marry Doe')
  const [phone, setPhone] = useState('Marry Doe')
  const [email, setEmail] = useState('Marry Doe')
  const [password, setPassword] = useState('Marry Doe')
  const [company, setCompany] = useState('Marry Doe')
  const [isAgency, setIsAgency] = useState(true)

  function onSubmit(e) {
    e.preventDefault()
    setUser({
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim(),
      password,
      company: company.trim(),
      isAgency,
    })
    setAuthed(true)
    nav('/profile', { replace: true })
  }

  return (
    <div className={`${shared.page} ${styles.page}`}>
      <h1 className={shared.title}>Create your PopX account</h1>

      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.fields}>
          <TextField
            label="Full Name"
            placeholder="Marry Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <TextField
            label="Phone number"
            placeholder="Marry Doe"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <TextField
            label="Email address"
            placeholder="Marry Doe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
          />
          <TextField
            label="Password"
            placeholder="Marry Doe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
          />
          <TextField
            label="Company name"
            placeholder="Marry Doe"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <RadioRow
            label="Are you an Agency?"
            value={isAgency}
            onChange={setIsAgency}
            name="agency"
          />
        </div>

        <div className={styles.bottom}>
          <Button fullWidth type="submit">
            Create Account
          </Button>
        </div>
      </form>
    </div>
  )
}

