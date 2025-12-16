"use client"
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Intelligent Document Classifier',
    description:
      'Built an end-to-end classifier for PDFs and scanned documents using Python, OCR (Tesseract/PaddleOCR), TF-IDF, and BERT embeddings; achieved 95% text extraction accuracy and improved F1-score by 18%, deployed via REST APIs for real-time inference.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'OCR', 'BERT', 'TF-IDF', 'REST API'],
  },
  {
    title: 'Smart Resume Screener',
    description:
      'Developed an NLP-based resume-job matching system using Sentence-BERT embeddings and FAISS indexing; implemented semantic similarity scoring, candidate ranking, and skill-gap analysis, reducing manual screening effort by 60%.',
    link: 'https://github.com/rohit280101',
    tech: ['NLP', 'Sentence-BERT', 'FAISS', 'Embeddings', 'Python'],
  },
  {
    title: 'Email Spam & Phishing Detector',
    description:
      'Designed ML pipelines using Naive Bayes, SVM, and fine-tuned BERT/HuggingFace models; combined heuristic rules with model predictions, improving detection accuracy and minimizing false negatives.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'NLP', 'Naive Bayes', 'SVM', 'BERT'],
  },
  {
    title: 'DataCore - Full-Stack Data Platform',
    description:
      'Constructed a Python/Flask/React platform for data ingestion, ETL pipelines, and real-time dashboards; streamlined reports and implemented collaborative workspaces, reducing manual reporting effort by 40%.',
    link: 'https://github.com/rohit280101',
    tech: ['Python', 'Flask', 'React', 'ETL', 'Analytics'],
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
