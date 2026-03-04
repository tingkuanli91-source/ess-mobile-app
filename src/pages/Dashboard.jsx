import { useState } from 'react'
import { Link } from 'react-router-dom'

const mockData = {
  batteryLevel: 88,
  solarPower: '2.4 kW',
  homePower: '1.2 kW',
  gridPower: '0.0 kW',
  dailyGeneration: '18.5 kWh',
  systemStatus: '運行良好',
  uptime: '124天'
}

export default function Dashboard() {
  return (
    <div style={{ minHeight: '100vh', padding: '20px', paddingBottom: '100px' }}>
      {/* Header */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg className="primary" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>台灣微網科技</span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" fill="#64748b" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
          </div>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="18" height="18" fill="#64748b" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
        </div>
      </header>

      {/* Power Flow Card */}
      <div className="card" style={{ marginBottom: '16px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>⚡ 能量流向圖</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0' }}>
          {/* Solar */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
              <svg width="24" height="24" fill="#fbbf24" viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/></svg>
            </div>
            <p style={{ fontSize: '12px', color: '#64748b' }}>太陽能</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#fbbf24' }}>{mockData.solarPower}</p>
          </div>

          <div style={{ flex: 1, height: '2px', background: '#334155', margin: '0 8px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: '#0f172a', padding: '0 4px' }}>→</div>
          </div>

          {/* Home */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(59,130,246,0.1)', border: '2px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', boxShadow: '0 0 15px rgba(59,130,246,0.3)' }}>
              <svg width="28" height="28" fill="#3b82f6" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </div>
            <p style={{ fontSize: '12px', color: '#64748b' }}>負載</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#3b82f6' }}>{mockData.homePower}</p>
          </div>

          <div style={{ flex: 1, height: '2px', background: '#334155', margin: '0 8px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: '#0f172a', padding: '0 4px' }}>←</div>
          </div>

          {/* Grid */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(100,116,139,0.1)', border: '1px solid #475569', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
              <svg width="24" height="24" fill="#64748b" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
            </div>
            <p style={{ fontSize: '12px', color: '#64748b' }}>電網</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#64748b' }}>{mockData.gridPower}</p>
          </div>
        </div>

        {/* Battery */}
        <div style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid #334155' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px' }}>
            <svg width="24" height="24" fill="#10b981" viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/></svg>
          </div>
          <p style={{ fontSize: '12px', color: '#64748b' }}>儲能電池</p>
          <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#10b981' }}>1.2 kW (充電)</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
        <div className="card">
          <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>當日發電量</p>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{mockData.dailyGeneration}</p>
          <p style={{ fontSize: '12px', color: '#10b981', marginTop: '4px' }}>↑ 12% 同期</p>
        </div>
        <div className="card">
          <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>系統狀態</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></div>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{mockData.systemStatus}</p>
          </div>
          <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>運作 {mockData.uptime}</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link to="/dashboard" className="nav-item active">
          <div className="nav-icon"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0-8h8v10H3V5z"/></svg></div>
          儀表板
        </Link>
        <Link to="/monitoring" className="nav-item">
          <div className="nav-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v6"/></svg></div>
          監控
        </Link>
        <Link to="/analysis" className="nav-item">
          <div className="nav-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></div>
          分析
        </Link>
        <Link to="/settings" className="nav-item">
          <div className="nav-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg></div>
          設定
        </Link>
      </nav>
    </div>
  )
}
