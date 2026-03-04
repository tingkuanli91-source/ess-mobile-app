import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, TrendingUp, DollarSign, BarChart3, Battery, Settings } from 'lucide-react'

export default function Analysis() {
  const [tariffType, setTariffType] = useState('three-phase')

  const mockData = {
    totalSavings: '$128,450',
    increase: 12.5,
    monthlyBenefit: '+$4,200',
    monthlyIncrease: 5.2,
    paybackPeriod: '4.2',
    paybackDecrease: 0.2
  }

  return (
    <div className="min-h-screen bg-[#101822] text-slate-100 font-sans">
      <header className="sticky top-0 z-10 flex items-center bg-[#101822]/80 backdrop-blur-md p-4 justify-between border-b border-slate-800">
        <div className="text-slate-100 flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-800 cursor-pointer">
          <ArrowLeft className="w-6 h-6" />
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          台灣微網科技
        </h2>
      </header>

      <main className="flex-1 overflow-y-auto pb-24 max-w-md mx-auto w-full">
        <div className="flex flex-col gap-4 px-4 py-6">
          <label className="flex flex-col w-full">
            <p className="text-slate-400 text-sm font-medium leading-normal pb-2 ml-1">台電計費方案選擇</p>
            <div className="relative">
              <select 
                value={tariffType}
                onChange={(e) => setTariffType(e.target.value)}
                className="appearance-none w-full rounded-xl text-slate-100 focus:outline-0 focus:ring-2 focus:ring-[#136dec] border border-slate-700 bg-slate-800/50 h-14 pl-4 pr-10 text-base font-medium"
              >
                <option value="three-phase">時間電價 - 三段式 (尖/半/離)</option>
                <option value="two-phase">時間電價 - 二段式</option>
                <option value="progressive">累進電價 (一般住宅用)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3 px-4">
          <div className="col-span-2 flex flex-col gap-2 rounded-xl p-5 bg-[#136dec]/10 border border-[#136dec]/20">
            <div className="flex justify-between items-start">
              <p className="text-[#136dec] text-sm font-semibold uppercase tracking-wider">累計節省金額</p>
              <DollarSign className="text-[#136dec] w-5 h-5" />
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold">{mockData.totalSavings}</p>
              <p className="text-emerald-500 text-sm font-bold flex items-center">
                <TrendingUp className="w-4 h-4" /> {mockData.increase}%
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 rounded-2xl p-5 bg-slate-800/40 border border-slate-700/50 shadow-lg">
            <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">本月預估效益</p>
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-white">{mockData.monthlyBenefit}</p>
              <p className="text-emerald-500 text-[11px] font-bold flex items-center mt-1">
                <TrendingUp className="w-3 h-3" /> {mockData.monthlyIncrease}%
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 rounded-2xl p-5 bg-slate-800/40 border border-slate-700/50 shadow-lg">
            <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">預計回本時間</p>
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-white">
                {mockData.paybackPeriod} <span className="text-sm font-medium text-slate-400">年</span>
              </p>
              <p className="text-orange-500 text-[11px] font-bold flex items-center mt-1">
                <TrendingUp className="w-3 h-3 rotate-180" /> {mockData.paybackDecrease} yr
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 px-4">
          <div className="flex justify-between items-end pb-6">
            <h3 className="text-lg font-bold">每月節省金額趨勢</h3>
            <span className="text-xs text-slate-500 font-medium">單位：TWD</span>
          </div>
          
          <div className="relative h-48 w-full flex items-end justify-between gap-2 px-2 border-b border-slate-800">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none py-1">
              <div className="w-full border-t border-slate-700/30"></div>
              <div className="w-full border-t border-slate-700/30"></div>
              <div className="w-full border-t border-slate-700/30"></div>
            </div>

            {[24, 20, 28, 32, 24, 20].map((height, i) => (
              <div key={i} className="relative group flex-1 flex flex-col items-center">
                <div className="w-full bg-slate-700/50 rounded-t-sm h-24"></div>
                <div 
                  className={`w-full rounded-t-sm -mt-24 transition-all ${
                    i === 3 ? 'bg-[#136dec] shadow-[0_0_15px_rgba(19,109,236,0.3)]' : 'bg-[#136dec]/70'
                  }`}
                  style={{ height: `${height}%` }}
                ></div>
                <span className={`text-[10px] mt-3 ${i === 3 ? 'text-[#136dec] font-bold' : 'text-slate-500'} font-medium`}>
                  {i + 1}月
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-4 justify-center">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50">
              <div className="w-2 rounded-full bg-[#136dec] shadow-[0_0_8px_rgba(19,109,236,0.5)]"></div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">有ESS節省</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50">
              <div className="w-2 rounded-full bg-slate-700"></div>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">預期無ESS</span>
            </div>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 border-t border-slate-800 bg-[#101822]/95 backdrop-blur-md px-2 pb-6 pt-3 flex justify-around z-50 max-w-md mx-auto w-full">
        <Link to="/dashboard" className="flex flex-col items-center gap-1 text-slate-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2V9a1 1 0 00-1-1m-4 4l-2 2m0 0l7 7-7 7m-4-4v6" />
          </svg>
          <span className="text-[10px] font-medium">儀表板</span>
        </Link>
        <Link to="/monitoring" className="flex flex-col items-center gap-1 text-slate-400">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v6" />
          </svg>
          <span className="text-[10px] font-medium">監控</span>
        </Link>
        <Link to="/analysis" className="flex flex-col items-center gap-1 text-[#136dec]">
          <BarChart3 className="w-7 h-7" />
          <span className="text-[10px] font-bold">分析</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center gap-1 text-slate-400">
          <Settings className="w-7 h-7" />
          <span className="text-[10px] font-medium">設定</span>
        </Link>
      </nav>
    </div>
  )
}
