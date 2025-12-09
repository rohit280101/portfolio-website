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
        'Developed tailored software solutions for small and mid-sized clients using Python frameworks (Django, Flask)',
        'Designed RESTful APIs to integrate systems, improving data exchange and reducing processing time by 30%',
        'Implemented optimized data pipelines using Pandas and NumPy, enhancing efficiency and decision-making',
        'Introduced coding standards and documentation practices, reducing post-deployment defects by 25%',
        'Collaborated with clients to define project scopes and deliver customized solutions under tight deadlines',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Sulzer Pumps India',
      location: 'Mumbai, India',
      period: 'Sept 2022 – Dec 2023',
      highlights: [
        'Designed and implemented a calibrator application for control and monitoring modules',
        'Built the complete UI using the MFC framework in C++',
        'Led the project for 7 months and demonstrated the system in Ireland',
        'Deployed applications using Microsoft Visual Studio Installer Projects',
      ],
    },
    {
      title: 'Software Developer Intern',
      company: 'Qikkle Solutions Pvt. Ltd.',
      location: 'Mumbai, India',
      period: 'June 2021 – Oct 2021',
      highlights: [
        'Assisted in front-end development and improved UI accessibility',
        'Tested and troubleshot new software features',
        'Supported developers in resolving technical issues and optimizing code',
      ],
    },
  ]

  const education = [
    {
      degree: 'Master of Science in Artificial Intelligence',
      institution: 'IU International University of Applied Sciences',
      location: 'Berlin, Germany',
      period: 'Oct 2025 – Present',
      description: 'Advanced studies in AI and machine learning with focus on data-driven strategies and intelligent systems',
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'University of Mumbai',
      location: 'India',
      period: 'June 2018 – August 2022',
      description: 'Comprehensive foundation in computer science, data structures, algorithms, and software engineering',
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
