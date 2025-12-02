"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutFuturistic() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center neon-text"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 md:p-12 backdrop-blur-md border border-white/10"
        >
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Professional Background</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Master's student in Artificial Intelligence at IU Berlin with 2+ years of hands-on software development experience. 
              I specialize in building RESTful APIs, data pipelines, and intelligent applications using Python, C++, and modern frameworks.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Work Experience</h3>
            <ul className="text-slate-300 space-y-2 text-lg">
              <li>• <strong>Ocean Cognizance (2024):</strong> Developed Django/Flask solutions with 30% performance improvements</li>
              <li>• <strong>Sulzer Pumps (2022-2023):</strong> Built calibrator application with MFC C++ framework</li>
              <li>• <strong>Qikkle Solutions (2021):</strong> Frontend development and QA testing</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Technical Expertise</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Python • C++ • Java • SQL • Django • Flask • RESTful APIs • Data Pipelines • Machine Learning
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Education</h3>
            <ul className="text-slate-300 space-y-2 text-lg">
              <li>• <strong>M.Sc. in Artificial Intelligence</strong> - IU Berlin, Germany (2025-Present)</li>
              <li>• <strong>B.E. in Computer Science</strong> - University of Mumbai, India (2018-2022)</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {['API Design', 'Data Pipelines', 'Problem Solving', 'Team Collaboration', 'Machine Learning', 'DevOps'].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-lg text-center text-sm text-cyan-300 hover:border-cyan-400/60 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
