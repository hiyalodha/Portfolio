'use client'
import { personal, socials } from '@/app/data'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

const iconMap = { GitHub: Github, LinkedIn: Linkedin, Email: Mail }

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-[8vw]" style={{ background: '#F7F4EA' }}>
      <div className="max-w-3xl">
        <div className="reveal" style={{ borderBottom: '2px solid #DFE8D9', paddingBottom: '2rem', marginBottom: '3rem' }}>
          <h2 className="font-bold mt-2 gradient-text" style={{
            fontFamily: '"Syne",sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          }}>
            Let's work<br />together.
          </h2>
        </div>

        <div className="reveal" style={{ transitionDelay: '0.15s' }}>
          <p className="font-mono text-sm mb-2" style={{ color: '#5F8C6D' }}>Reach out directly</p>
          <Link
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 font-mono text-lg mb-12"
            style={{ color: '#101D18', transition: 'color .25s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#244B3A' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#101D18' }}
          >
            <Mail size={18} style={{ color: '#244B3A' }} />
            {personal.email}
            <span style={{ color: '#244B3A' }}>→</span>
          </Link>

          <div className="flex flex-wrap gap-3 mb-16">
            {socials.map(social => {
              const Icon = iconMap[social.icon as keyof typeof iconMap]
              return (
                <Link key={social.href} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 font-mono text-sm border transition-all"
                  style={{ borderColor: '#DFE8D9', color: '#5F8C6D', background: '#F7F4EA' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#244B3A'
                    e.currentTarget.style.color        = '#244B3A'
                    e.currentTarget.style.boxShadow    = '0 4px 16px rgba(36,75,58,.12)'
                    e.currentTarget.style.transform     = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#DFE8D9'
                    e.currentTarget.style.color        = '#5F8C6D'
                    e.currentTarget.style.boxShadow    = 'none'
                    e.currentTarget.style.transform     = 'none'
                  }}
                >
                  <Icon size={16} />
                  {social.label}
                </Link>
              )
            })}
          </div>

          <p className="font-mono text-xs" style={{ color: '#5F8C6D', opacity: 0.65 }}>
            © {new Date().getFullYear()} Hiya Lodha. Built with Next.js &amp; Tailwind.
          </p>
        </div>
      </div>
    </section>
  )
}
