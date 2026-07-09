"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutFuturistic() {
  const workExperience = [
    {
      title: 'Software Engineer',
      company: 'Ocean Cognizance Pvt. Ltd.',
      location: 'Mumbai, India',
      period: 'Jan 2024 – May 2025',
      highlights: [
        'Built and deployed production RESTful APIs (FastAPI, Flask) with JWT authentication for real-time ML model inference, reducing response latency.',
        'Developed end-to-end ML pipelines (preprocessing, feature engineering, training, evaluation, deployment), including NLP document processing and predictive analytics.',
        'Designed and optimized relational database schemas (PostgreSQL, MySQL) with normalization and indexing, improving query performance by 30%.',
        'Built microservices with Docker and CI/CD (GitHub Actions) with automated testing (PyTest), reducing post-release defects by 25%.',
        'Architected scalable ETL/ELT data pipelines (Python, Pandas, NumPy, SQLAlchemy) and automated data ingestion for batch and real-time processing, reducing manual data handling by 60%.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Sulzer Pumps India',
      location: 'Mumbai, India',
      period: 'Sep 2022 – Dec 2023',
      highlights: [
        'Developed a real-time calibration application in C++ (MFC) with event-driven architecture and multithreading across 15+ modules.',
        'Implemented serial communication protocols (RS232/Modbus) with robust error handling for reliable hardware integration.',
        'Led the full SDLC for a 7-month project deployed across 3 manufacturing sites in Ireland, with an automated build pipeline reducing deployment errors by 30%.',
        'Built real-time data acquisition and logging for high-frequency industrial sensor data (C++).',
        'Designed the data storage architecture and efficient serialization for time-series sensor data, reducing data anomalies by 40%.',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Qikkle Solutions Pvt. Ltd.',
      location: 'Mumbai, India',
      period: 'Jun 2021 – Oct 2021',
      highlights: [
        'Full-stack development focused on backend API integration and database connectivity (MySQL).',
        'Implemented automated testing procedures, resolving 15+ defects and improving stability.',
        'Optimized SQL queries and maintained code quality through reviews and Git workflows, improving feature delivery by 20%.',
      ],
    },
  ]

  const education = [
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'IU International University of Applied Sciences',
      location: 'Berlin, Germany',
      period: 'Oct 2025 – Present',
      description: 'Selected Coursework: Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision, Advanced Neural Networks, AI System Design – emphasizing applied AI and system design.',
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'University of Mumbai',
      location: 'Mumbai, India',
      period: 'Jun 2018 – Aug 2022',
      description: 'Selected Coursework: Algorithms & Data Structures, Object-Oriented Programming, Statistics, Probability Theory, Database Management, Software Engineering, Operating Systems – emphasizing software engineering and analytical foundations.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center py-20 px-6 bg-gradient-to-b from-transparent via-cyan-900/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              About Me
            </h2>
          </motion.div>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 text-center">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Currently pursuing an MSc in AI at IU Berlin and available 15–20 hours per week as a Werkstudent. With 3+ years of backend development experience, I am eager to contribute to a Berlin-based team while continuing my studies.
            </p>
          </div>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-cyan-300 mb-8">Professional Experience</h3>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <div className="rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-cyan-400/30 p-6 md:p-8 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{job.title}</h4>
                        <p className="text-cyan-300 font-semibold">
                          {job.company} • {job.location}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0 inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <ul className="text-gray-300 space-y-2 text-sm md:text-base">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-cyan-400 mr-3 mt-1 flex-shrink-0">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-cyan-300 mb-8">Education</h3>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <div className="rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-purple-400/30 p-6 md:p-8 hover:border-purple-400/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{edu.degree}</h4>
                        <p className="text-purple-300 font-semibold">
                          {edu.institution} • {edu.location}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0 inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="inline-block px-8 py-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/50">
              <p className="text-gray-300 text-lg md:text-xl">
                <span className="text-cyan-300 font-bold">3+ years</span> of hands-on software development experience with proven expertise in building scalable applications, optimizing processes, and delivering client-focused solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
