'use client'
import { hackathons } from '@/app/data'
import { Trophy, Zap } from 'lucide-react'

export default function Hackathons() {
  return (
    <section className="py-20 px-6 md:px-[8vw]" style={{ background: '#DFE8D9' }}>
      <div className="section-header reveal">
        <h2>Hackathons</h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-12 reveal" style={{ transitionDelay: '0.1s' }}>
        <div className="card p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap size={20} style={{ color: '#244B3A' }} />
            <span className="font-bold text-5xl gradient-text" style={{ fontFamily: '"Syne",sans-serif' }}>
              {hackathons.total}+
            </span>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#5F8C6D' }}>Hackathons</p>
        </div>
        <div className="card p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap size={20} style={{ color: '#5F8C6D' }} />
            <span className="font-bold text-5xl shimmer-text" style={{ fontFamily: '"Syne",sans-serif' }}>
              {hackathons.ideathons}+
            </span>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#5F8C6D' }}>Ideathons</p>
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hackathons.highlights.map((h, idx) => (
          <div key={idx} className="card p-6 reveal" style={{ transitionDelay: `${(idx + 2) * 0.1}s` }}>
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={18} style={{ color: '#244B3A' }} />
              <span className="font-mono text-xs px-2 py-1 font-bold"
                style={{ background: '#244B3A', color: '#F7F4EA', borderRadius: '3px' }}>
                {h.rank}
              </span>
              <span className="font-mono text-xs px-2 py-1 border"
                style={{ borderColor: '#DFE8D9', color: '#5F8C6D' }}>{h.type}</span>
            </div>
            <h3 className="font-bold text-lg mb-1" style={{ color: '#101D18', fontFamily: '"Space Grotesk",sans-serif' }}>{h.event}</h3>
            <p className="font-mono text-xs mb-4" style={{ color: '#5F8C6D' }}>{h.organizer}</p>
            <div className="border-t pt-4" style={{ borderColor: '#DFE8D9' }}>
              <p className="font-mono text-xs uppercase tracking-widest mb-1" style={{ color: '#244B3A' }}>Project</p>
              <p className="font-bold mb-2" style={{ color: '#101D18', fontFamily: '"Space Grotesk",sans-serif' }}>{h.project}</p>
              <p className="text-sm" style={{ color: '#5F8C6D' }}>{h.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
