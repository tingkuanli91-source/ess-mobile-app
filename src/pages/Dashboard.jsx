import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Battery, TrendingUp, Activity, Sun, Home, Zap, ChevronRight, BarChart3 } from 'lucide-react'

const mockData = {
  batteryLevel: 88,
  chargingStatus: '充電中',
  remaining: '12.4 kWh',
  duration: '~18 小時',
  solarPower: '2.4 kW',
  homePower: '1.2 kW',
  gridPower: '0.0 kW',
  batteryPower: '1.2 kW (充電)',
  dailyGeneration: '18.5 kWh',
  dailyIncrease: 12,
  systemStatus: '運行良好',
  uptime: '124天'
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 flex flex-col">
      <header className="flex items-center justify-between px-4 pt-6 pb-2 sticky top-0 bg-gray-50 dark:bg-slate-950 z-10">
        <div className="flex items-center gap-2">
          <Bolt className="text-[#136dec] w-8 h-8" />
          <h1 className="text-xl font-bold tracking-tight">台灣微網科技</h1>
        </div>
        <div className="flex gap-3">
          <button className="p-2 rounded-full bg-slate-200 dark:bg-slate-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405a2.352 2.352 0 00-3.182-3.182l-4.95-4.95a2.352 2.352 0 00-3.182-3.182L12 6" />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-slate-200 dark:bg-slate-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 8z" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-24">
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#136dec]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
            </svg>
            能量流向圖
          </h2>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center border border-amber-400/30">
                  <Sun className="text-amber-400 w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-slate-400">太陽能</span>
                <span className="text-sm font-bold text-amber-400">{mockData.solarPower}</span>
              </div>

              <div className="flex-1 h-px bg-slate-700 mx-2 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronRight className="text-slate-500 text-sm" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Home className="text-blue-500 w-7 h-7" />
                </div>
                <span className="text-xs font-medium text-slate-400">負載 (家庭)</span>
                <span className="text-sm font-bold text-blue-500">{mockData.homePower}</span>
              </div>

              <div className="flex-1 h-px bg-slate-700 mx-2 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronRight className="text-slate-500 text-sm rotate-180" />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center border border-slate-600">
                  <Zap className="text-slate-400 w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-slate-400">電網</span>
                <span className="text-sm font-bold text-slate-400">{mockData.gridPower}</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-slate-700 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronRight className="text-slate-500 text-sm rotate-90" />
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                  <Battery className="text-emerald-500 w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-slate-400">儲能電池</span>
                <span className="text-sm font-bold text-emerald-500">{mockData.batteryPower}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m0 0h4m-4 0a4 4 0 018 4v4m0-4h4m4 0v4m0-4H8" />
              </svg>
              <span className="text-xs font-medium">當日發電量</span>
            </div>
            <p className="text-lg font-bold">{mockData.dailyGeneration}</p>
            <p className="text-xs text-emerald-500 mt-1">↑ {mockData.dailyIncrease}% 同期</p>
          </div>

          <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
              <Activity className="w-4 h-4" />
              <span className="text-xs font-medium">系統狀態</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <p className="text-lg font-bold">{mockData.systemStatus}</p>
            </div>
            <p className="text-xs text-slate-400 mt-1">運作 {mockData.uptime}</p>
          </div>
        </section>

        <section className="mt-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">功率趨勢</h2>
            <button className="text-[#136dec] text-xs font-semibold">查看更多</button>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-end gap-1 h-40">
            <div className="flex-1 flex flex-col items-center h-full justify-end"><div className="w-full bg-amber-400/30 rounded-t" style={{ height: '60%' }}></div></div>
            <div className="flex-1 flex flex-col items-center h-full justify-end"><div className="w-full bg-amber-400/30 rounded-t" style={{ height: '45%' }}></div></div>
            <div className="flex-1 flex flex-col items-center h-full justify-end"><div className="w-full bg-amber-400/30 rounded-t" style={{ height: '70%' }}></div></div>
            <div className="flex-1 flex flex-col items-center h-full justify-end"><div className="w-full bg-amber-400/30 rounded-t" style={{ height: '55%' }}></div></div>
            <div className="flex-1 flex flex-col items-center h-full justify-end"><div className="w-full bg-emerald-500/30 rounded-t" style={{ height: '80%' }}></div></div>
            <div className="flex-1 flex flex-col items-center h-full justify-end"><div className="w-full bg-blue-500/30 rounded-t" style={{ height: '65%' }}></div></div>
          </div>
        </section>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-950 px-2 pb-6 pt-3 flex justify-around">
        <Link to="/dashboard" className="flex flex-col items-center gap-1 text-[#136dec]">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h8V3H3v10zm0-8h8v10H3V5z" />
          </svg>
          <span className="text-[10px] font-bold">儀表板</span>
        </Link>
        <Link to="/monitoring" className="flex flex-col items-center gap-1 text-slate-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v6" />
          </svg>
          <span className="text-[10px] font-medium">監控</span>
        </Link>
        <Link to="/analysis" className="flex flex-col items-center gap-1 text-slate-400">
          <BarChart3 className="w-7 h-7" />
          <span className="text-[10px] font-medium">分析</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center gap-1 text-slate-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.828 2.828v3.042c0 1.756-.166 2.904-1.356 3.42l-.804 1.088c-.428.124-.864.192-1.308.192H9.173c-.444 0-.88-.068-1.308-.192l-.804-1.088c-1.19-.516-1.356-1.664-1.356-3.42V6.156c0-1.756.166-2.904 1.356-3.42l.804-1.088c.428-.124.864-.192 1.308-.192h2.176c.444 0 .88.068 1.308.192l.804 1.088c1.19.516 1.356 1.664 1.356 3.42v3.042z" />
          </svg>
          <span className="text-[10px] font-medium">設定</span>
        </Link>
      </nav>
    </div>
  )
}
