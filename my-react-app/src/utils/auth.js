const USER_KEY = 'popx_user'
const AUTH_KEY = 'popx_authed'

export function getUser() {
  try {
    const raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function setAuthed(v) {
  localStorage.setItem(AUTH_KEY, v ? '1' : '0')
}

export function isAuthed() {
  return localStorage.getItem(AUTH_KEY) === '1'
}

export function login({ email, password }) {
  const user = getUser()
  if (!user) return { ok: false, message: 'No account found. Please sign up.' }
  if (user.email !== email || user.password !== password) {
    return { ok: false, message: 'Invalid credentials.' }
  }
  setAuthed(true)
  return { ok: true }
}

export function logout() {
  setAuthed(false)
}

