import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export default function NeonButton({ children, className = '', ...props }: Props) {
  return (
    <button
      {...props}
      className={`relative inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-600/20 text-white backdrop-blur-md border border-white/10 hover:scale-105 transition-transform ${className}`}
    >
      <span className="absolute -inset-px rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-500/30 blur-lg opacity-30" />
      <span className="relative z-10">{children}</span>
    </button>
  )
}
