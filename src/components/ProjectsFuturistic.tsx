"use client"
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive developer portfolio built with Next.js, React, TypeScript, and Tailwind CSS.',
    link: 'https://github.com/rohit280101/portfolio-website',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Task Manager',
    description:
      'Full-stack task management app with authentication and real-time updates.',
    link: 'https://github.com/rohit280101/task-manager',
    tech: ['Node.js', 'Express', 'MongoDB'],
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
