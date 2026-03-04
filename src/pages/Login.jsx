import { useState } from 'react'
import { Bolt } from 'lucide-react'

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
    <div className="min-h-screen bg-gray-100 dark:bg-[#101822] flex flex-col">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="text-[#136dec] flex size-12 shrink-0 items-center justify-center">
          <Bolt className="w-10 h-10" />
        </div>
        <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">
          台灣微網科技
        </h2>
      </div>

      <div className="@container px-4 py-6">
        <div 
          className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-[240px] shadow-2xl relative"
          style={{ backgroundColor: '#1a2744' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#101822]/90 to-transparent"></div>
          <div className="relative p-6">
            <h2 className="text-white tracking-tight text-[28px] font-bold leading-tight">
              Welcome Back
            </h2>
            <p className="text-slate-300 text-base font-normal mt-1">
              Manage your energy storage efficiently
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-4 py-4 max-w-md mx-auto w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col w-full">
            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal pb-2 ml-1">帳號 (Username)</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#136dec]/50"
            />
          </label>

          <label className="flex flex-col w-full">
            <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-normal pb-2 ml-1">密碼 (Password)</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full h-14 px-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#136dec]/50"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-[#136dec] hover:bg-[#136dec]/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-[#136dec]/20 transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span className="text-lg">登入 (Login)</span>
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-widest font-semibold">
            Energy Management System v2.4
          </p>
        </div>
      </div>
    </div>
  )
}
