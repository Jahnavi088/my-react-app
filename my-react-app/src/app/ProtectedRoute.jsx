import { Navigate } from 'react-router-dom'
import { useAuth } from './useAuth.js'

export function ProtectedRoute({ children }) {
  const { authed } = useAuth()
  if (!authed) return <Navigate to="/login" replace />
  return children
}

