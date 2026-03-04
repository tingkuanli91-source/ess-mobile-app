import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Monitoring from './pages/Monitoring'
import Analysis from './pages/Analysis'
import Settings from './pages/Settings'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/monitoring" element={isLoggedIn ? <Monitoring /> : <Navigate to="/login" />} />
        <Route path="/analysis" element={isLoggedIn ? <Analysis /> : <Navigate to="/login" />} />
        <Route path="/settings" element={isLoggedIn ? <Settings onLogout={() => setIsLoggedIn(false)} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
