"use client"
import React from 'react'
import { motion } from 'framer-motion'

const technicalSkills = {
  'Programming': ['Python', 'C++', 'Java', 'SQL'],
  'Data & Analytics': ['Pandas', 'NumPy', 'ETL/ELT', 'Data Pipelines', 'Visualization', 'Data Processing'],
  'Machine Learning': ['scikit-learn', 'TensorFlow', 'PyTorch', 'HuggingFace', 'NLP', 'TF-IDF', 'BERT', 'Model Evaluation'],
  'Frameworks & Tools': ['Django', 'Flask', 'FastAPI', 'Git', 'Linux', 'Docker', 'CI/CD'],
  'Databases': ['MySQL', 'PostgreSQL', 'SQLite', 'SQLAlchemy'],
  'Concepts': ['Software Lifecycle', 'System Architecture', 'Process Optimization', 'Automation', 'Microservices', 'Agile', 'TDD'],
}

const certifications = [
  'AWS Certified Solutions Architect – Associate (2025)',
  'AWS Certified Machine Learning – Specialty (In Progress)',
  'Natural Language Processing Specialization – DeepLearning.AI',
  'Data Analysis with R Programming – Coursera',
]

export default function SkillsFuturistic() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const skillTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  const colors = {
    'Programming': 'from-blue-500 to-cyan-500',
    'Data & Analytics': 'from-purple-500 to-pink-500',
    'Machine Learning': 'from-green-500 to-emerald-500',
    'Frameworks & Tools': 'from-orange-500 to-red-500',
    'Databases': 'from-indigo-500 to-blue-500',
    'Concepts': 'from-yellow-500 to-orange-500',
  }

  return (
    <section id="skills" className="min-h-screen w-full flex items-center justify-center py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Technical Skills</h2>
            <p className="text-gray-400 text-lg">Comprehensive expertise across multiple domains</p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(technicalSkills).map(([category, skills], categoryIndex) => (
                <motion.div key={category} variants={itemVariants}>
                  <div className="relative group h-full">
                    {/* Card Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${colors[category as keyof typeof colors]} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                    />

                    {/* Card Border */}
                    <div className="relative bg-slate-900/60 backdrop-blur-md border border-white/10 group-hover:border-white/30 rounded-xl p-6 h-full transition-all duration-300">
                      {/* Category Header */}
                      <div className="mb-6">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                          <h3
                            className={`text-xl font-bold bg-gradient-to-r ${colors[category as keyof typeof colors]} bg-clip-text text-transparent`}
                          >
                            {category}
                          </h3>
                        </motion.div>
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
                          <div key={skill}>
                            <motion.div
                              variants={skillTagVariants}
                              transition={{ delay: 0.3 + skillIndex * 0.05 }}
                            >
                              <div
                                className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${colors[category as keyof typeof colors]} bg-opacity-10 border border-white/20 text-sm text-gray-200 hover:border-white/40 hover:bg-opacity-20 transition-all duration-200 cursor-default`}
                              >
                                • {skill}
                              </div>
                            </motion.div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Certifications Box */}
              <motion.div variants={itemVariants}>
                <div className="relative group h-full">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300" />

                  {/* Card Border */}
                  <div className="relative bg-slate-900/60 backdrop-blur-md border border-white/10 group-hover:border-white/30 rounded-xl p-6 h-full transition-all duration-300">
                    {/* Category Header */}
                    <div className="mb-6">
                      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                          Certifications
                        </h3>
                      </motion.div>
                    </div>

                    {/* Certifications List */}
                    <div className="space-y-3">
                      {certifications.map((cert, certIndex) => (
                        <div key={cert}>
                          <motion.div
                            variants={skillTagVariants}
                            transition={{ delay: 0.3 + certIndex * 0.05 }}
                          >
                            <div className="px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 bg-opacity-10 border border-white/20 text-sm text-gray-200 hover:border-white/40 hover:bg-opacity-20 transition-all duration-200">
                              • {cert}
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Summary Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-8 py-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
              <p className="text-gray-300">
                <span className="font-bold text-cyan-400">30+ Technical Skills</span> across{' '}
                <span className="font-bold text-cyan-400">5 major categories</span> with 3+ years of hands-on experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
