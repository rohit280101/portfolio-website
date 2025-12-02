"use client"
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Personality Prediction',
    description:
      'Machine learning model that predicts user personality based on social media activity and behavioral patterns using NLP.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'Flask', 'TFIDF', 'ML'],
  },
  {
    title: 'Stock Updater',
    description:
      'Automated service that sends daily stock market updates and trading alerts via SMS and email.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'API', 'SMTP', 'Automation'],
  },
  {
    title: 'Automated Birthday Wisher',
    description:
      'Application that automatically sends personalized birthday wishes from a database using scheduled jobs.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'Pandas', 'SMTPLIB', 'DB'],
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.03 }}
      className="block p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/6 shadow-lg"
    >
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="text-slate-300 mt-2">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-white/6 rounded-full text-white">{t}</span>
        ))}
      </div>
    </motion.a>
  )
}

export default function ProjectsFuturistic() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
