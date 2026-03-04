import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <div style={{ minHeight: '100vh', padding: '20px', paddingBottom: '100px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>⚙️ 系統設定</h2>

      {/* Profile */}
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e3a5f, #136dec)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="32" height="32" fill="white" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </div>
        <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>能源管理員</p>
          <p style={{ fontSize: '14px', color: '#64748b' }}>進階帳戶</p>
          <span style={{ display: 'inline-block', marginTop: '4px', padding: '4px 8px', borderRadius: '6px', background: 'rgba(19,109,236,0.1)', color: '#136dec', fontSize: '11px' }}>ID: ESS-882910</span>
        </div>
      </div>

      {/* Settings List */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>一般設定</h3>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', borderBottom: '1px solid #1e293b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" fill="#64748b" viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>
              </div>
              <span>語言選擇</span>
            </div>
            <span style={{ color: '#64748b' }}>繁體中文 →</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" fill="#64748b" viewBox="0 0 24 24"><path d="M9 21c4.55 0 8-3.13 8-7s-3.45-7-8-7c-.93 0-1.82.12-2.66.35C6.6 7.69 6 8.77 6 10c0 .88.25 1.7.67 2.4.07.12.15.24.24.35-.08.07-.16.14-.24.21-.41.35-.67.83-.67 1.36 0 .53.26 1.01.67 1.36.08.07.16.14.24.21.42.35.98.46 1.42.46.93 0 1.82-.12 2.66-.35.16.07.33.12.5.18-.42.64-.99 1.18-1.65 1.58C10.4 20.68 9.74 21 9 21zm-3-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/></svg>
              </div>
              <span>顯示模式</span>
            </div>
            <span style={{ background: 'rgba(19,109,236,0.1)', color: '#136dec', padding: '4px 10px', borderRadius: '12px', fontSize: '12px' }}>深色模式</span>
          </div>
        </div>
      </div>

      {/* About */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>關於</h3>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" fill="#64748b" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              </div>
              <span>軟體版本</span>
            </div>
            <span style={{ color: '#64748b', fontFamily: 'monospace' }}>V2.4.0</span>
          </div>
        </div>
      </div>

      {/* Logout */}
      <button style={{ 
        width: '100%', 
        padding: '16px', 
        borderRadius: '12px', 
        border: '1px solid rgba(244,63,94,0.3)', 
        background: 'transparent', 
        color: '#f43f5e',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}>
        登出帳號
      </button>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <Link to="/dashboard" className="nav-item">
          <div className="nav-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2V9a1 1 0 00-1-1m-4 4l-2 2m0 0l7 7-7 7m-4-4v6"/></svg></div>
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
        <Link to="/settings" className="nav-item active">
          <div className="nav-icon"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/></svg></div>
          設定
        </Link>
      </nav>
    </div>
  )
}
