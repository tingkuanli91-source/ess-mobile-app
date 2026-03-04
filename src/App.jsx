import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Monitoring from './pages/Monitoring'
import Analysis from './pages/Analysis'
import Settings from './pages/Settings'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Default to logged in for testing

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/settings" element={<Settings onLogout={() => setIsLoggedIn(false)} />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  )
}

export default App
