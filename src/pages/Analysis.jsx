import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Analysis() {
  const [tariffType, setTariffType] = useState('three-phase')

  return (
    <div style={{ minHeight: '100vh', padding: '20px', paddingBottom: '100px' }}>
      <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>📊 數據分析</h2>

      {/* Tariff Select */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '14px' }}>台電計費方案</label>
        <select 
          value={tariffType}
          onChange={(e) => setTariffType(e.target.value)}
          style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #334155', background: 'rgba(15,23,42,0.6)', color: 'white', fontSize: '14px' }}
        >
          <option value="three-phase">時間電價 - 三段式 (尖/半/離)</option>
          <option value="two-phase">時間電價 - 二段式</option>
          <option value="progressive">累進電價</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="card" style={{ marginBottom: '12px', background: 'rgba(19,109,236,0.1)', border: '1px solid rgba(19,109,236,0.2)' }}>
        <p style={{ fontSize: '12px', color: '#136dec', marginBottom: '4px' }}>累計節省金額</p>
        <p style={{ fontSize: '32px', fontWeight: 'bold' }}>$128,450</p>
        <p style={{ fontSize: '14px', color: '#10b981' }}>↑ 12.5%</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        <div className="card">
          <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>本月預估效益</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>+$4,200</p>
          <p style={{ fontSize: '12px', color: '#10b981' }}>↑ 5.2%</p>
        </div>
        <div className="card">
          <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>預計回本時間</p>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>4.2 年</p>
        </div>
      </div>

      {/* Chart */}
      <div className="card">
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '16px' }}>每月節省趨勢</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '120px', padding: '0 8px' }}>
          {[24, 20, 28, 32, 24, 20].map((h, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <div style={{ 
                width: '24px', 
                background: i === 3 ? '#136dec' : 'rgba(19,109,236,0.7)', 
                borderRadius: '4px 4px 0 0',
                height: `${h * 3}px`,
                boxShadow: i === 3 ? '0 0 10px rgba(19,109,236,0.3)' : 'none'
              }}></div>
              <span style={{ fontSize: '10px', color: i === 3 ? '#136dec' : '#64748b', marginTop: '8px' }}>{i+1}月</span>
            </div>
          ))}
        </div>
      </div>

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
        <Link to="/analysis" className="nav-item active">
          <div className="nav-icon"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></div>
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
