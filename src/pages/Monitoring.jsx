import { Link } from 'react-router-dom'

const mockModules = [
  { id: 1, name: '電池模組 #01', sn: 'ESS-M1-2024', voltage: '48.1V', current: '2.1A', temp: '28°C', soh: 98, status: '正常運行' },
  { id: 2, name: '電池模組 #02', sn: 'ESS-M2-2024', voltage: '48.0V', current: '2.0A', temp: '27°C', soh: 97, status: '正常運行' },
  { id: 3, name: '電池模組 #03', sn: 'ESS-M3-2024', voltage: '47.9V', current: '1.9A', temp: '42°C', soh: 95, status: '溫度警告' }
]

export default function Monitoring() {
  return (
    <div style={{ minHeight: '100vh', padding: '20px', paddingBottom: '100px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>🔋 電池監控</h2>

      {/* Battery Circle */}
      <div className="card" style={{ textAlign: 'center', padding: '32px', marginBottom: '20px' }}>
        <p style={{ color: '#64748b', marginBottom: '16px' }}>當前電量</p>
        <div style={{ width: '160px', height: '160px', borderRadius: '50%', border: '12px solid #136dec', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '48px', fontWeight: 'bold' }}>88%</span>
            <p style={{ fontSize: '12px', color: '#10b981' }}>充電中</p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px' }}>
            <p style={{ fontSize: '12px', color: '#64748b' }}>剩餘電量</p>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>12.4 kWh</p>
          </div>
          <div style={{ background: 'rgba(15,23,42,0.6)', padding: '12px', borderRadius: '8px' }}>
            <p style={{ fontSize: '12px', color: '#64748b' }}>可用時長</p>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>~18 小時</p>
          </div>
        </div>
      </div>

      {/* Modules */}
      <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px' }}>電池模組狀態</h3>
      {mockModules.map((module) => (
        <div key={module.id} className="card" style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div>
              <p style={{ fontWeight: 'bold' }}>{module.name}</p>
              <p style={{ fontSize: '12px', color: '#64748b' }}>SN: {module.sn}</p>
            </div>
            <span style={{ 
              padding: '4px 8px', borderRadius: '12px', fontSize: '12px',
              background: module.status === '正常運行' ? 'rgba(16,185,129,0.1)' : 'rgba(244,63,94,0.1)',
              color: module.status === '正常運行' ? '#10b981' : '#f43f5e'
            }}>
              {module.status}
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginBottom: '12px' }}>
            <div><p style={{ fontSize: '12px', color: '#64748b' }}>電壓</p><p style={{ fontWeight: 'bold' }}>{module.voltage}</p></div>
            <div><p style={{ fontSize: '12px', color: '#64748b' }}>電流</p><p style={{ fontWeight: 'bold' }}>{module.current}</p></div>
            <div><p style={{ fontSize: '12px', color: '#64748b' }}>溫度</p><p style={{ fontWeight: 'bold' }}>{module.temp}</p></div>
          </div>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '12px', color: '#64748b' }}>健康度 (SOH)</span>
              <span style={{ fontSize: '12px', color: '#136dec', fontWeight: 'bold' }}>{module.soh}%</span>
            </div>
            <div style={{ width: '100%', height: '6px', background: '#1e293b', borderRadius: '3px' }}>
              <div style={{ width: `${module.soh}%`, height: '100%', background: '#136dec', borderRadius: '3px' }}></div>
            </div>
          </div>
        </div>
      ))}

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <Link to="/dashboard" className="nav-item">
          <div className="nav-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2V9a1 1 0 00-1-1m-4 4l-2 2m0 0l7 7-7 7m-4-4v6"/></svg></div>
          儀表板
        </Link>
        <Link to="/monitoring" className="nav-item active">
          <div className="nav-icon"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v6"/></svg></div>
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
