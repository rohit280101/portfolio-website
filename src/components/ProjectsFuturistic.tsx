"use client"
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Intelligent Document Classifier',
    description:
      'A system that reads PDFs and images (invoices, receipts, reports) and classifies them using OCR and machine learning with TF-IDF/BERT embeddings and SVM models.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'OCR', 'BERT', 'SVM', 'Pipeline'],
  },
  {
    title: 'Smart Resume Screener',
    description:
      'A model that reads resumes and matches them to job descriptions using embeddings and similarity search, with candidate ranking and score explanations.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'FAISS', 'Embeddings', 'LLM'],
  },
  {
    title: 'Email Spam Filter',
    description:
      'A spam classifier trained from scratch using Naive Bayes, SVM, and BERT with hyperparameter tuning and phishing detection capabilities.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'NLP', 'Naive Bayes', 'BERT'],
  },
  {
    title: 'DataCore',
    description:
      'Full-stack enterprise data management and analytics platform enabling organizations to connect, transform, analyze, and visualize data from multiple sources with a unified interface for collaboration.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'Flask', 'React', 'TypeScript'],
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <a href={project.link} target="_blank" rel="noreferrer">
      <motion.div
        whileHover={{ scale: 1.03 }}
      >
        <div className="block p-6 rounded-xl backdrop-blur-md bg-white/5 border border-white/6 shadow-lg hover:bg-white/10 transition-colors">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-slate-300 mt-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs px-2 py-1 bg-white/6 rounded-full text-white">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </a>
  )
}

export default function ProjectsFuturistic() {
  return (
    <section id="projects" className="min-h-screen w-full flex items-center justify-center py-20 px-6">
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
