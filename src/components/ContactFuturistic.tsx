"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function ContactFuturistic() {
  const contactCards = [
    {
      icon: '📧',
      title: 'Email',
      value: 'rohitkumargupta2801work@gmail.com',
      link: 'mailto:rohitkumargupta2801work@gmail.com',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'rohit280101',
      link: 'https://github.com/rohit280101',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'rohit-gupta',
      link: 'https://www.linkedin.com/in/rohit-gupta-554836256',
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="min-h-screen w-full flex items-center justify-center py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Interested in working together? Let's connect and discuss how we can collaborate.
            </p>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full block"
                >
                  <div className={`bg-gradient-to-br ${card.color} p-[1px] rounded-2xl h-full`}>
                    <div className="bg-slate-900/80 rounded-2xl p-8 h-full backdrop-blur-sm flex flex-col items-center justify-center hover:bg-slate-800/80 transition-colors">
                      {/* Icon */}
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        {card.icon}
                      </div>
                      {/* Title */}
                      <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                        {card.title}
                      </h3>
                      {/* Value */}
                      <p className="text-gray-300 text-center text-sm break-all hover:text-gray-200 transition-colors">
                        {card.value}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
