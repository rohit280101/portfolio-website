import React from 'react'

export default function AboutFuturistic() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <div className="bg-white/5 border border-white/6 backdrop-blur-md rounded-xl p-6 text-slate-200">
          <p>
            I'm Rohit Kumar Gupta — a full-stack developer building modern, responsive web applications with a
            focus on React and Next.js. I love crafting delightful user experiences and contributing to open
            source.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Open-source contributor</li>
            <li>Performance & accessibility focused</li>
            <li>Continuous learner and mentor</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
