"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutFuturistic() {
  const workExperience = [
    {
      title: 'Senior Software Developer',
      company: 'Ocean Cognizance Pvt. Ltd.',
      location: 'Mumbai, India',
      period: 'Jan 2024 – Dec 2024',
      highlights: [
        'Constructed custom software solutions for 10+ clients using Python (Django, Flask, FastAPI), ORM, middleware, and JWT authentication, ensuring secure and maintainable applications.',
        'Orchestrated RESTful API development with JSON/WebSocket, integrated PostgreSQL/MySQL databases, and enhanced performance, reducing processing time by 30%.',
        'Developed ETL/data pipelines using Pandas, NumPy, and SQLAlchemy, optimizing batch and real-time processing for large datasets.',
        'Applied unit testing (PyTest) and Test-Driven Development (TDD) practices, along with CI/CD pipelines (GitHub Actions), reducing post-deployment defects by 25%.',
        'Coordinated microservices architecture, Docker containers, and REST/GraphQL endpoints to deliver high-quality solutions under tight deadlines.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Sulzer Pumps India',
      location: 'Mumbai, India',
      period: 'Sep 2022 – Dec 2023',
      highlights: [
        'Designed a calibrator application for control and monitoring modules, improving calibration efficiency by 40% with real-time sensor data acquisition.',
        'Architected the UI using MFC (C++), incorporating multithreading, event-driven architecture, and custom controls for 15+ modules.',
        'Directed the project for 7 months, demonstrating the system in Ireland, enabling adoption across 3 manufacturing units.',
        'Packaged applications with Visual Studio Installer Projects, integrating dependency management and build scripts, reducing deployment errors by 30%.',
        'Integrated serial communication (RS232/Modbus), error handling, and data logging for reliable hardware interaction.',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Qikkle Solutions Pvt. Ltd.',
      location: 'Mumbai, India',
      period: 'Jun 2021 – Oct 2021',
      highlights: [
        'Supported front-end development (HTML, CSS, JS), improving UI accessibility and responsiveness.',
        'Tested and troubleshot software, resolving 15+ functional and UI issues, enhancing stability.',
        'Facilitated API integration, database connectivity (MySQL), and Git version control, accelerating feature delivery by 20%.',
        'Applied accessibility standards (WCAG) to create more inclusive interfaces.',
      ],
    },
  ]

  const education = [
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'IU International University of Applied Sciences',
      location: 'Berlin, Germany',
      period: 'Oct 2025 – Present',
      description: 'Selected Coursework: Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing (NLP), Computer Vision, Advanced Mathematics – emphasizing applied AI and statistical modeling.',
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'University of Mumbai',
      location: 'Mumbai, India',
      period: 'Jun 2018 – Aug 2022',
      description: 'Selected Coursework: Object-Oriented Programming, Algorithms & Data Structures, Web Application Development, Statistics, Linear Algebra, Project Management – emphasizing software engineering and analytical foundations.',
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
