"use client"
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Customer Segmentation & Retention Analysis',
    description:
      'Production-grade pipeline for RFM segmentation, churn prediction (LightGBM/XGBoost + SHAP), customer lifetime value (BG/NBD + Gamma-Gamma), survival analysis, and cohort retention — with a Streamlit dashboard, MLflow tracking, and automated early-warning risk scoring.',
    link: 'https://github.com/rohit280101/Customer-Segmentation---Retention-Analysis',
    tech: ['Python', 'LightGBM', 'XGBoost', 'MLflow', 'Streamlit', 'DVC'],
  },
  {
    title: 'Experimentation & Uplift Modeling Toolkit',
    description:
      'End-to-end A/B experimentation and causal inference framework — covering power analysis, statistical testing (frequentist, Bayesian, SPRT), uplift modeling (S/T/X/R-Learners, CausalForest), propensity score matching, and automated experiment summary reports.',
    link: 'https://github.com/rohit280101/uplift-experimentation-toolkit',
    tech: ['Python', 'Causal Inference', 'A/B Testing', 'MLflow', 'Uplift Modeling'],
  },
  {
    title: 'NLP Insights from Unstructured Data',
    description:
      'Production-ready NLP framework for extracting insights from unstructured text — covering sentiment analysis, topic modeling (LDA/BERTopic), NER, summarization (BART/T5), RAG-based QA, and LLM-generated narratives, with a Streamlit dashboard and MLflow tracking.',
    link: 'https://github.com/rohit280101/nlp-insights-unstructured-data',
    tech: ['Python', 'BERT', 'BERTopic', 'spaCy', 'FAISS', 'LLMs'],
  },
  {
    title: 'End-to-End ML System',
    description:
      'Production-ready MLOps system covering the full lifecycle: data ingestion, feature engineering, training, evaluation, model registry, serving (FastAPI/gRPC), monitoring (Evidently, Prometheus), and auto-retraining — orchestrated with MLflow, DVC, Docker, and Kubernetes.',
    link: 'https://github.com/rohit280101/end-to-end-ml-system',
    tech: ['MLflow', 'FastAPI', 'gRPC', 'Docker', 'Kubernetes', 'DVC'],
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
