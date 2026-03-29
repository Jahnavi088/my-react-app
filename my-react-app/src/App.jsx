import { Navigate, Route, Routes } from 'react-router-dom'
import { MobileShell } from './components/MobileShell.jsx'
import { Landing } from './pages/Landing.jsx'
import { Login } from './pages/Login.jsx'
import { Profile } from './pages/Profile.jsx'
import { Signup } from './pages/Signup.jsx'
import { isAuthed } from './utils/auth.js'

function Protected({ children }) {
  if (!isAuthed()) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <MobileShell>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MobileShell>
  )
}
