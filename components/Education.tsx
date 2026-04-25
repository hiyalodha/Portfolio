'use client'
import { education, personal } from '@/app/data'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="about" className="py-20 px-6 md:px-[8vw]">
      <div className="mb-20 reveal">
        <div className="section-header">
          <h2>About</h2>
        </div>
        <p className="text-lg max-w-3xl" style={{ color: '#5F8C6D', lineHeight: 1.9, fontSize: '0.95rem' }}>
          {personal.about}
        </p>
      </div>
      <div className="reveal" style={{ transitionDelay: '0.1s' }}>
        <div className="section-header">
          <h2>Education</h2>
        </div>
        <div className="grid gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="card p-6 md:p-8 flex items-start gap-6 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="p-3 border flex-shrink-0"
                style={{ borderColor: 'rgba(36,75,58,.25)', background: 'rgba(36,75,58,.07)', borderRadius: '4px' }}>
                <GraduationCap size={24} style={{ color: '#244B3A' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-1" style={{ color: '#101D18' }}>{edu.degree}</h3>
                <p className="mb-2" style={{ color: '#5F8C6D' }}>{edu.institution} · {edu.location}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
                  <p style={{ color: '#5F8C6D' }}>{edu.year}</p>
                  <p className="font-mono font-bold shimmer-text">{edu.score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
