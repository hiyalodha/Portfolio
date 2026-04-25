'use client'
import { organizations } from '@/app/data'
import { Users } from 'lucide-react'

export default function Organizations() {
  return (
    <section className="py-20 px-6 md:px-[8vw]">
      <div className="section-header reveal">
        <h2>Technical Involvement</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {organizations.map((org, idx) => (
          <div key={idx} className="card p-6 md:p-8 reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="mb-6">
              <div className="inline-flex p-3 border"
                style={{ borderColor: 'rgba(36,75,58,.25)', background: 'rgba(36,75,58,.07)', borderRadius: '6px' }}>
                <Users size={20} style={{ color: '#244B3A' }} />
              </div>
            </div>

            <p className="font-mono text-xs uppercase tracking-widest mb-2" style={{ color: '#244B3A', fontWeight: 700 }}>
              {org.role}
            </p>

            <h3 className="font-bold text-xl mb-3" style={{ color: '#101D18', fontFamily: '"Space Grotesk",sans-serif' }}>
              {org.organization}
            </h3>

            <p className="text-sm leading-relaxed" style={{ color: '#5F8C6D' }}>
              {org.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
