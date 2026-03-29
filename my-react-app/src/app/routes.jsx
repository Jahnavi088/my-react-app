import { Navigate, Route, Routes } from 'react-router-dom'
import { Landing } from '../pages/Landing.jsx'
import { Login } from '../pages/Login.jsx'
import { Profile } from '../pages/Profile.jsx'
import { Signup } from '../pages/Signup.jsx'
import { ProtectedRoute } from './ProtectedRoute.jsx'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

