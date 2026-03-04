import { Link } from 'react-router-dom'
import { Battery, ArrowLeft, RefreshCw, AlertTriangle, CheckCircle, BarChart3, Settings } from 'lucide-react'

const mockModules = [
  { id: 1, name: '電池模組 #01', sn: 'ESS-M1-2024', voltage: '48.1V', current: '2.1A', temp: '28°C', soh: 98, status: '正常運行' },
  { id: 2, name: '電池模組 #02', sn: 'ESS-M2-2024', voltage: '48.0V', current: '2.0A', temp: '27°C', soh: 97, status: '正常運行' },
  { id: 3, name: '電池模組 #03', sn: 'ESS-M3-2024', voltage: '47.9V', current: '1.9A', temp: '42°C', soh: 95, status: '溫度警告' }
]

const mockLogs = [
  { id: 1, type: 'warning', title: '溫度警告', time: '10:45 AM', message: '模組 #03 的感測器檢測到瞬時高溫 (42°C)，建議進行檢查。' },
  { id: 2, type: 'info', title: '系統自檢完成', time: '09:00 AM', message: '所有模組自檢狀態通過，通訊模組連接穩定。' }
]

export default function Monitoring() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#101822] text-slate-100 flex flex-col">
      <header className="sticky top-0 z-50 bg-gray-50/80 dark:bg-[#101822]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div class-center p-4Name="flex items justify-between max-w-md mx-auto w-full">
          <div className="flex items-center justify-start">
            <Link to="/dashboard">
              <ArrowLeft className="text-slate-600 dark:text-slate-400 cursor-pointer w-6 h-6" />
            </Link>
          </div>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            台灣微網科技
          </h1>
          <div className="flex items-center justify-end">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800">
              <RefreshCw className="text-[#136dec] w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto max-w-md mx-auto w-full pb-24">
        <section className="mt-4 mx-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Battery className="w-20 h-20" />
          </div>
          <p className="text-slate-400 font-medium mb-1 text-sm">當前電量 (Battery Level)</p>
          
          <div className="relative flex items-center justify-center py-6">
            <svg className="w-44 h-44 transform -rotate-90">
              <circle className="text-slate-800" cx="88" cy="88" fill="transparent" r="80" stroke="currentColor" strokeWidth="12" />
              <circle className="text-[#136dec]" cx="88" cy="88" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502.65" strokeDashoffset="60.3" strokeLinecap="round" strokeWidth="12" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold tracking-tighter">88%</span>
              <span className="text-[11px] font-semibold text-emerald-500 flex items-center gap-1 mt-1">
                <Battery className="w-3 h-3" /> 充電中
              </span>
            </div>
          </div>

          <div className="w-full mt-4 grid grid-cols-2 gap-4">
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/50">
              <p className="text-[11px] text-slate-500 mb-1">剩餘電量</p>
              <p className="text-base font-bold text-white">12.4 kWh</p>
            </div>
            <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800/50">
              <p className="text-[11px] text-slate-500 mb-1">可用時長</p>
              <p className="text-base font-bold text-white">~18 小時</p>
            </div>
          </div>
        </section>

        <div className="px-4 py-2">
          <h2 className="text-base font-bold tracking-tight mb-4">電池模組狀態</h2>
          <div className="space-y-4">
            {mockModules.map((module) => (
              <div key={module.id} className="flex flex-col rounded-xl overflow-hidden bg-slate-900/60 border border-slate-800 shadow-lg">
                <div className="flex p-4 gap-5">
                  <div className="w-20 h-20 rounded-xl bg-[#136dec]/5 flex items-center justify-center relative overflow-hidden shrink-0 border border-[#136dec]/10">
                    <Battery className="text-[#136dec] w-10 h-10" />
                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#136dec]/10">
                      <div className="bg-[#136dec] h-full w-[98%]" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-sm text-slate-100">{module.name}</h3>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">SN: {module.sn}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        module.status === '正常運行' 
                          ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' 
                          : 'bg-rose-500/10 text-rose-500 border-rose-500/20'
                      }`}>
                        {module.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex flex-col">
                        <p className="text-[10px] text-slate-500">電壓</p>
                        <p className="text-sm font-semibold text-slate-200">{module.voltage}</p>
                      </div>
                      <div className="flex flex-col border-l border-slate-800 pl-3">
                        <p className="text-[10px] text-slate-500">電流</p>
                        <p className="text-sm font-semibold text-slate-200">{module.current}</p>
                      </div>
                      <div className="flex flex-col border-l border-slate-800 pl-3">
                        <p className="text-[10px] text-slate-500">溫度</p>
                        <p className="text-sm font-semibold text-slate-200">{module.temp}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-tighter">健康度 (SOH)</span>
                    <span className="text-[11px] font-bold text-[#136dec]">{module.soh}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#136dec] h-full rounded-full" style={{ width: `${module.soh}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-4 py-6">
          <h2 className="text-base font-bold tracking-tight mb-4">系統事件日誌</h2>
          <div className="space-y-3">
            {mockLogs.map((log) => (
              <div key={log.id} className="flex gap-4 items-start p-4 bg-slate-900/40 rounded-xl border border-slate-800">
                <div className={`p-2.5 rounded-xl shrink-0 border ${
                  log.type === 'warning' 
                    ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' 
                    : 'bg-[#136dec]/10 text-[#136dec] border-[#136dec]/20'
                }`}>
                  {log.type === 'warning' ? (
                    <AlertTriangle className="w-5 h-5" />
                  ) : (
                    <CheckCircle className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-bold text-slate-200">{log.title}</p>
                    <p className="text-[11px] text-slate-500">{log.time}</p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{log.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950 px-2 pb-6 pt-3 flex justify-around max-w-md mx-auto w-full">
        <Link to="/dashboard" className="flex flex-col items-center gap-1 text-slate-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2V9a1 1 0 00-1-1m-4 4l-2 2m0 0l7 7-7 7m-4-4v6" />
          </svg>
          <span className="text-[10px] font-medium">儀表板</span>
        </Link>
        <Link to="/monitoring" className="flex flex-col items-center gap-1 text-[#136dec]">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v6" />
          </svg>
          <span className="text-[10px] font-bold">監控</span>
        </Link>
        <Link to="/analysis" className="flex flex-col items-center gap-1 text-slate-400">
          <BarChart3 className="w-7 h-7" />
          <span className="text-[10px] font-medium">分析</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center gap-1 text-slate-400">
          <Settings className="w-7 h-7" />
          <span className="text-[10px] font-medium">設定</span>
        </Link>
      </nav>
    </div>
  )
}
