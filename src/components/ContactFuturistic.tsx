"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactFuturistic() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-center neon-text"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-slate-300 max-w-xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let's collaborate on interesting projects. Reach out via email or connect on LinkedIn/GitHub.
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center gap-6 text-slate-300 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a href="mailto:rohitkumargupta2801work@gmail.com" className="hover:text-cyan-400 transition flex items-center gap-2">
            <span>📧</span> rohitkumargupta2801work@gmail.com
          </a>
          <a href="tel:+491763150969" className="hover:text-cyan-400 transition flex items-center gap-2">
            <span>📱</span> +49 176 31509698
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass rounded-2xl p-8 md:p-12 backdrop-blur-md border border-white/10 max-w-2xl mx-auto"
        >
          <p className="text-slate-300 text-center mb-8">Based in Berlin, Germany 🇩🇪</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 transition"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 transition"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400/50 transition resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition disabled:opacity-50"
            >
              {status === 'success' ? '✓ Message Sent! I\'ll get back to you soon.' : status === 'error' ? '✗ Error. Please try again.' : status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
