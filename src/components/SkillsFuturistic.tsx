"use client"
import React from 'react'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

const data = [
  { subject: 'Python', A: 95 },
  { subject: 'C++', A: 85 },
  { subject: 'Django', A: 88 },
  { subject: 'Flask', A: 85 },
  { subject: 'SQL', A: 90 },
]

export default function SkillsFuturistic() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
        <div className="w-full h-80 bg-white/3 rounded-xl p-4 backdrop-blur-md border border-white/6">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
              <Radar name="Rohit" dataKey="A" stroke="#00f6ff" fill="#7c3aed" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
