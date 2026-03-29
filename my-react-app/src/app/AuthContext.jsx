import { useCallback, useMemo, useState } from 'react'
import {
  getUser,
  isAuthed,
  login as loginRaw,
  logout as logoutRaw,
  setAuthed,
  setUser,
} from '../utils/auth.js'
import { AuthContext } from './authContext.js'

export function AuthProvider({ children }) {
  const [authed, setAuthedState] = useState(() => isAuthed())
  const [user, setUserState] = useState(() => getUser())

  const login = useCallback(({ email, password }) => {
    const res = loginRaw({ email, password })
    if (res.ok) {
      setAuthedState(true)
      setUserState(getUser())
    }
    return res
  }, [])

  const signup = useCallback((nextUser) => {
    setUser(nextUser)
    setAuthed(true)
    setUserState(nextUser)
    setAuthedState(true)
    return { ok: true }
  }, [])

  const logout = useCallback(() => {
    logoutRaw()
    setAuthedState(false)
    setUserState(null)
  }, [])

  const value = useMemo(
    () => ({ authed, user, login, signup, logout }),
    [authed, user, login, signup, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

