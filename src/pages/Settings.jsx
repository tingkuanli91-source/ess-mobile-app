import { Link } from 'react-router-dom'
import { ArrowLeft, Globe, Moon, Info, LogOut, BarChart3, Battery, Settings as SettingsIcon } from 'lucide-react'

export default function SettingsPage({ onLogout }) {
  const handleLogout = () => {
    if (onLogout) {
      onLogout()
    }
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen bg-[#0b0f15] text-slate-200 font-sans">
      <div className="relative flex-screen w-full flex h-auto min-h-col overflow-x-hidden max-w-md mx-auto border-x border-slate-800 bg-[#0b0f15]">
        <header className="sticky top-0 z-10 flex items-center bg-[#0b0f15]/80 backdrop-blur-md p-4 justify-between border-b border-slate-800/50">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg hover:bg-slate-800 cursor-pointer">
            <ArrowLeft className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">
            台灣微網科技
          </h2>
        </header>

        <main className="flex-1 pb-24">
          <section className="p-6">
            <div className="flex items-center gap-5 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/50">
              <div className="relative">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-20 w-20 border-2 border-[#136dec] shadow-lg shadow-[#136dec]/20"
                  style={{ backgroundColor: '#1a2744' }}
                ></div>
                <button className="absolute bottom-0 right-0 bg-[#136dec] h-7 w-7 rounded-full flex items-center justify-center border-2 border-[#0b0f15] shadow-lg">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.879-2.879a1.5 1.5 0 10-2.121 0L12 7.343l-1.414 1.414m2.828 2.828L12 12.657" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold text-white">能源管理員</p>
                <p className="text-slate-400 text-sm">進階帳戶</p>
                <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-lg bg-[#136dec]/10 text-[#136dec] text-[11px] font-bold tracking-wider">
                  ID: ESS-882910
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500 px-1">一般設定</h3>
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-4 hover:bg-slate-800/30 transition-colors cursor-pointer border-b border-slate-800/30">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400">
                      <Globe className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium">語言選擇</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">繁體中文</span>
                    <svg className="text-slate-500 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-4">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400">
                      <Moon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium">顯示模式</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#136dec] bg-[#136dec]/10 px-3 py-1.5 rounded-full">
                    <span className="text-xs font-bold">深色模式</span>
                    <svg className="w-4 h-4 text-[#136dec]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 018 9z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500 px-1">安全性與關於</h3>
              <div className="bg-slate-900/40 border border-slate-800/50 rounded-2xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-4 border-b border-slate-800/30">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400">
                      <Info className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium">軟體版本</p>
                  </div>
                  <span className="text-sm font-mono text-slate-500">V2.4.0</span>
                </div>
              </div>
            </div>

            <div className="pt-8 pb-12">
              <button 
                onClick={handleLogout}
                className="w-full py-4 rounded-2xl border border-red-500/30 text-red-500 font-bold hover:bg-red-500/5 transition-all flex items-center justify-center gap-3"
              >
                <LogOut className="w-5 h-5" />
                登出帳號
              </button>
            </div>
          </section>
        </main>

        <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#0b0f15]/90 backdrop-blur-lg border-t border-slate-800/50 px-6 pb-8 pt-3 flex justify-between items-center z-20">
          <Link to="/dashboard" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2V9a1 1 0 00-1-1m-4 4l-2 2m0 0l7 7-7 7m-4-4v6" />
            </svg>
            <span className="text-[10px] font-medium">儀表板</span>
          </Link>
          <Link to="/monitoring" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400">
            <Battery className="w-7 h-7" />
            <span className="text-[10px] font-medium">監控</span>
          </Link>
          <Link to="/analysis" className="flex flex-1 flex-col items-center justify-end gap-1 text-slate-400">
            <BarChart3 className="w-7 h-7" />
            <span className="text-[10px] font-medium">分析</span>
          </Link>
          <Link to="/settings" className="flex flex-1 flex-col items-center justify-end gap-1 text-[#136dec]">
            <SettingsIcon className="w-7 h-7" fill="currentColor" />
            <span className="text-[10px] font-bold">設定</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
