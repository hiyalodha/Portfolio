'use client'
import { experience } from '@/app/data'
import { Briefcase, ExternalLink } from 'lucide-react'

export default function Experience() {
  return (
    <section className="py-20 px-6 md:px-[8vw]" style={{ background: '#DFE8D9' }}>
      <div className="section-header reveal">
        <h2>Experience</h2>
      </div>
      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <div key={idx} className="card p-6 md:p-8 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 border flex-shrink-0"
                style={{ borderColor: 'rgba(36,75,58,.25)', background: 'rgba(36,75,58,.07)', borderRadius: '4px' }}>
                <Briefcase size={20} style={{ color: '#244B3A' }} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 style={{ color: '#101D18', fontFamily: '"Space Grotesk",sans-serif', fontWeight: 700, fontSize: '1.1rem' }}>{exp.role}</h3>
                  <span className="font-mono text-xs" style={{ color: '#244B3A', fontWeight: 600 }}>{exp.period}</span>
                </div>
                <p className="font-mono text-sm" style={{ color: '#5F8C6D' }}>{exp.company} · {exp.location}</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: '#5F8C6D' }}>{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => <span key={i} className="tag">{skill}</span>)}
            </div>
            
            {/* Certificate Button */}
            {exp.certificateUrl && (
              <div className="mt-5 pt-5 border-t" style={{ borderColor: 'rgba(36,75,58,.15)' }}>
                <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors"
                  style={{ color: '#244B3A', fontWeight: 700 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#5F8C6D' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#244B3A' }}
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
