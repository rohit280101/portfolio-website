"use client"
import React, { useState } from 'react'

export default function ContactFuturistic() {
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    setStatus('Sending...')
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data })
      if (res.ok) setStatus('Message sent — thank you!')
      else setStatus('Error sending message')
    } catch (err) {
      setStatus('Network error')
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white/5 border border-white/6 backdrop-blur-md rounded-xl p-6">
          <div className="mb-4">
            <label className="block text-sm text-slate-200">Name</label>
            <input name="name" className="w-full mt-1 p-2 rounded-md bg-white/6 border border-white/8 text-white" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-slate-200">Email</label>
            <input name="email" type="email" className="w-full mt-1 p-2 rounded-md bg-white/6 border border-white/8 text-white" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-slate-200">Message</label>
            <textarea name="message" rows={5} className="w-full mt-1 p-2 rounded-md bg-white/6 border border-white/8 text-white" required />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="px-4 py-2 rounded-md bg-cyan-500 text-black font-semibold">Send</button>
            <div className="text-sm text-slate-300">{status}</div>
          </div>
        </form>
      </div>
    </section>
  )
}
