'use client'
import { certifications } from '@/app/data'
import { Award } from 'lucide-react'

export default function Certifications() {
  return (
    <section className="py-20 px-6 md:px-[8vw]">
      <div className="section-header reveal">
        <h2>Certifications</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, idx) => (
          <div key={cert.id} className="card p-6 reveal" style={{ transitionDelay: `${idx * 0.08}s` }}>
            <div className="flex items-start gap-4">
              <div className="p-3 border flex-shrink-0"
                style={{ borderColor: 'rgba(95,140,109,.35)', background: 'rgba(95,140,109,.10)', borderRadius: '4px' }}>
                <Award size={20} style={{ color: '#5F8C6D' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1" style={{ color: '#101D18', fontFamily: '"Space Grotesk",sans-serif' }}>{cert.title}</h3>
                <p className="text-sm mb-3" style={{ color: '#5F8C6D' }}>{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs px-2 py-1 border"
                    style={{ borderColor: 'rgba(36,75,58,.25)', color: '#244B3A', fontSize: '0.65rem', background: 'rgba(36,75,58,.05)' }}>
                    {cert.date}
                  </span>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                      className="text-xs font-mono" style={{ color: '#244B3A' }}>VIEW CERTIFICATE →</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
