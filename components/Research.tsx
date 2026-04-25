'use client'
import { research } from '@/app/data'
import { BookOpen } from 'lucide-react'

export default function Research() {
  return (
    <section className="py-20 px-6 md:px-[8vw]">
      <div className="section-header reveal">
        <h2>Research</h2>
      </div>
      <div className="grid gap-6">
        {research.map((item, idx) => (
          <div key={idx} className="card p-6 md:p-8 reveal" style={{ transitionDelay: `${idx * 0.12}s` }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 border flex-shrink-0"
                style={{ borderColor: 'rgba(95,140,109,.35)', background: 'rgba(95,140,109,.10)', borderRadius: '4px' }}>
                <BookOpen size={22} style={{ color: '#5F8C6D' }} />
              </div>
              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: '#5F8C6D' }}>
                  {item.program} · {item.institution}
                </p>
                <h3 className="font-bold text-2xl mb-2" style={{ color: '#101D18' }}>{item.topic}</h3>
              </div>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: '#5F8C6D' }}>{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
