import { useState } from 'react'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && password) {
      onLogin()
    }
  }

  return (
    <div style={{ minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
        <svg className="primary" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        <span style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '10px' }}>台灣微網科技</span>
      </div>

      {/* Hero */}
      <div style={{ 
        background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)', 
        borderRadius: '16px', 
        padding: '40px 24px',
        marginBottom: '24px'
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>Welcome Back</h2>
        <p style={{ color: '#94a3b8' }}>Manage your energy storage efficiently</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '14px' }}>帳號</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="input"
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '14px' }}>密碼</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="input"
          />
        </div>
        <button type="submit" className="btn-primary" style={{ marginTop: '8px' }}>
          登入
        </button>
      </form>
    </div>
  )
}
