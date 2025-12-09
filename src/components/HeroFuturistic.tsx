"use client"
import React from 'react'
import { motion } from 'framer-motion'
import NeonButton from './ui/NeonButton'

export default function HeroFuturistic() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#071029] to-[#061226]" />

      {/* subtle animated gradient overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgb(6, 182, 212), rgb(147, 51, 234))',
          filter: 'blur(96px)',
          mixBlendMode: 'screen',
        }}
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Rohit Kumar Gupta
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-2 mb-8">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-slate-400">Berlin, Germany</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 mb-8">
              Full Stack Developer | AI/ML Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
              Master's student in Artificial Intelligence at IU Berlin with 3+ years of software development
experience across enterprise IT systems, data solutions, and client-facing projects. Proven expertise in
developing scalable applications, optimizing IT processes, and implementing data-driven strategies
that improved operational efficiency by 30% and reduced technical debt by 25%. Experienced in full-
cycle project management, from requirements analysis to deployment and stakeholder presentations.
Seeking to leverage technical expertise and strategic mindset in consulting roles focused on AI, data
strategy, and IT transformation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors border border-slate-600/50"
              >
                Get in Touch
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors border border-slate-600/50"
              >
                View Projects
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* glass card hologram */}
    </section>
  )
}
