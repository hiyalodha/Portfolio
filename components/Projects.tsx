'use client'
import { projects } from '@/app/data'
import Link from 'next/link'
import { ExternalLink, GitBranch } from 'lucide-react'

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-[8vw]" style={{ background: '#DFE8D9' }}>
      <div className="section-header reveal">
        <h2>Projects Built</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="card p-6 md:p-8 reveal" style={{ transitionDelay: `${index * 0.12}s` }}>
            {/* Project Image */}
            {project.image ? (
              <div className="mb-8 rounded-lg relative overflow-hidden group bg-[#101D18]" style={{ 
                border: '1px solid rgba(36,75,58,.15)', 
                boxShadow: '0 12px 40px rgba(36,75,58,0.08)' 
              }}>
                {/* Mac Mockup Bar */}
                <div className="h-6 w-full bg-[#1A2E25] flex items-center px-3 gap-1.5 border-b border-[rgba(255,255,255,0.05)]">
                  <div className="w-2 h-2 rounded-full bg-[#FF5F56] opacity-80"></div>
                  <div className="w-2 h-2 rounded-full bg-[#FFBD2E] opacity-80"></div>
                  <div className="w-2 h-2 rounded-full bg-[#27C93F] opacity-80"></div>
                </div>
                
                <div className="relative overflow-hidden bg-[#101D18]">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-opacity z-10 pointer-events-none" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            ) : (
              <div className="mb-6 h-44 rounded relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #DFE8D9 0%, #F7F4EA 100%)', border: '1px solid #DFE8D9' }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: 'linear-gradient(rgba(36,75,58,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(36,75,58,.05) 1px,transparent 1px)',
                  backgroundSize: '22px 22px',
                }} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: '70px', height: '70px', borderRadius: '50%',
                  background: index % 2 === 0
                    ? 'radial-gradient(circle, rgba(36,75,58,.18) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(95,140,109,.18) 0%, transparent 70%)',
                }} />
                <p style={{
                  position: 'absolute', bottom: 10, right: 14,
                  fontFamily: '"Space Mono",monospace', fontSize: '0.6rem',
                  color: index % 2 === 0 ? 'rgba(36,75,58,.5)' : 'rgba(95,140,109,.5)',
                  letterSpacing: '0.1em',
                }}>
                  {String(index + 1).padStart(2, '0')} / PROJECT
                </p>
              </div>
            )}

            <h3 className="font-bold text-2xl mb-3" style={{ color: '#101D18', fontFamily: '"Space Grotesk",sans-serif' }}>
              {project.title}
            </h3>
            <p className="mb-6 text-sm leading-relaxed" style={{ color: '#5F8C6D' }}>{project.description}</p>

            {project.hackathon && (
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-mono"
                  style={{ background: 'rgba(36,75,58,.08)', color: '#244B3A', border: '1px solid rgba(36,75,58,.25)', borderRadius: '3px' }}>
                  🏆 {project.hackathon}
                </span>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>

            <div className="flex gap-3">
              {project.demo && (
                <Link href={project.demo} target="_blank" className="btn btn-primary text-sm">
                  <ExternalLink size={14} /> Live
                </Link>
              )}
              <Link href={project.github} target="_blank" className="btn btn-secondary text-sm">
                <GitBranch size={14} /> Code
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}