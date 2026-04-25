'use client'
import { skills } from '@/app/data'

export default function Skills() {
  // Split skills into two columns matching the screenshot layout
  const leftColumn = skills.slice(0, 3)  // Languages, Frameworks, Blockchain
  const rightColumn = skills.slice(3, 6) // AI/ML, Cloud/Infra, Tools

  return (
    <section id="skills" className="py-24 px-6 md:px-[8vw]" style={{ background: '#DFE8D9' }}>
      <div className="section-header reveal mb-16">
        <h2>Skills &amp; Technologies</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Left Column */}
        <div className="flex flex-col gap-12">
          {leftColumn.map((skillGroup, idx) => (
            <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: '#244B3A', fontWeight: 700 }}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="font-mono text-xs transition-all duration-200" style={{
                    padding: '0.4rem 0.85rem',
                    border: '1px solid rgba(36,75,58,0.25)',
                    borderRadius: '4px',
                    color: '#101D18',
                    background: 'rgba(247,244,234,0.4)', // Slightly transparent cream
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#244B3A'
                    e.currentTarget.style.background = '#F7F4EA'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(36,75,58,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(36,75,58,0.25)'
                    e.currentTarget.style.background = 'rgba(247,244,234,0.4)'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-12">
          {rightColumn.map((skillGroup, idx) => (
            <div key={idx} className="reveal" style={{ transitionDelay: `${(idx + 3) * 0.1}s` }}>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] mb-4" style={{ color: '#244B3A', fontWeight: 700 }}>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span key={i} className="font-mono text-xs transition-all duration-200" style={{
                    padding: '0.4rem 0.85rem',
                    border: '1px solid rgba(36,75,58,0.25)',
                    borderRadius: '4px',
                    color: '#101D18',
                    background: 'rgba(247,244,234,0.4)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#244B3A'
                    e.currentTarget.style.background = '#F7F4EA'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(36,75,58,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(36,75,58,0.25)'
                    e.currentTarget.style.background = 'rgba(247,244,234,0.4)'
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
