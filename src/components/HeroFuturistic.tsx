"use client"
import React from 'react'
import { motion } from 'framer-motion'
import NeonButton from './ui/NeonButton'

export default function HeroFuturistic() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#071029] to-[#061226]" />

      {/* subtle animated gradient overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 blur-3xl mix-blend-screen"
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-purple-300">
          Rohit Kumar Gupta
        </h1>
        <motion.p
          className="mt-4 text-xl text-slate-200 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Master's Student in AI • Software Developer • Berlin, Germany
        </motion.p>
        <motion.p
          className="mt-3 text-lg text-slate-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Building intelligent software solutions with Python, C++, Django & modern web technologies
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <NeonButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </NeonButton>
          <NeonButton as={"a" as any} href="/resume.pdf" target="_blank">
            Download Resume
          </NeonButton>
        </div>
        <div className="mt-8 flex justify-center gap-6 text-slate-400 text-sm">
          <a href="mailto:rohitkumargupta2801work@gmail.com" className="hover:text-cyan-400 transition">
            Email
          </a>
          <span>•</span>
          <a href="https://github.com/rohit280101" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            GitHub
          </a>
          <span>•</span>
          <a href="https://linkedin.com/in/rohit-gupta554836256" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* glass card hologram */}
      <motion.div
        initial={{ scale: 0.95, rotate: -6, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute right-10 top-24 w-64 h-80 bg-white/5 border border-white/6 backdrop-blur-md rounded-2xl p-4 shadow-2xl hidden lg:block"
      >
        <div className="w-full h-full flex items-center justify-center text-slate-100">Hologram</div>
      </motion.div>
    </section>
  )
}
