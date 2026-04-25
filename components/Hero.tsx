'use client'

import { personal, socials } from '@/app/data'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import Link from 'next/link'
import TypewriterText from './TypewriterText'

const iconMap = { GitHub: Github, LinkedIn: Linkedin, Email: Mail }

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-[8vw] py-20 overflow-hidden">

      {/* Forest glow orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(36,75,58,.10) 0%, transparent 70%)', animation: 'breathe 8s ease-in-out infinite' }}
      />
      <div className="absolute bottom-[0%] left-[-8%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(95,140,109,.09) 0%, transparent 70%)', animation: 'breathe 11s ease-in-out infinite reverse' }}
      />

      <div className="relative max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-16 lg:gap-32 mx-auto">
      
        {/* Left Side - Text Content */}
        <div className="max-w-xl">
          {/* Name */}
          <h1 className="mb-8 fade-in-up stagger-1" style={{ lineHeight: 0.92 }}>
            <span className="block" style={{ color: '#101D18' }}>Hiya</span>
            <span className="block gradient-text">Lodha</span>
          </h1>

          {/* Typewriter skill line */}
          <div className="fade-in-up stagger-2 mb-6">
            <TypewriterText />
          </div>

          {/* Bio */}
          <p className="text-base max-w-md mb-10 fade-in-up stagger-3" style={{ color: '#5F8C6D', lineHeight: 1.9, fontSize: '0.95rem' }}>
            {personal.bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 fade-in-up stagger-3">
            <a href="#projects" className="btn btn-primary">Explore Work ↓</a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub →</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6 fade-in-up stagger-4">
            <p className="font-mono text-xs uppercase tracking-widest" style={{ color: '#5F8C6D' }}>Links</p>
            <div className="flex gap-3">
              {socials.map((social, idx) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap]
                return (
                  <Link key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="p-3 border transition-all"
                    style={{ borderColor: '#DFE8D9', background: '#F7F4EA', color: '#101D18' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#244B3A'
                      e.currentTarget.style.color        = '#244B3A'
                      e.currentTarget.style.boxShadow    = '0 4px 16px rgba(36,75,58,.15)'
                      e.currentTarget.style.transform     = 'translateY(-2px)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#DFE8D9'
                      e.currentTarget.style.color        = '#101D18'
                      e.currentTarget.style.boxShadow    = 'none'
                      e.currentTarget.style.transform     = 'none'
                    }}
                  >
                    {Icon && <Icon size={16} />}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Space - Profile Image */}
        <div className="fade-in-up flex-shrink-0 md:mt-4">
          <img 
            src="/hiya_profile_picure.jpeg" 
            alt="Hiya Lodha" 
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover"
            style={{ 
              border: '4px solid #DFE8D9', 
              boxShadow: '0 12px 40px rgba(36,75,58,0.15)' 
            }}
          />
        </div>

      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 float flex flex-col items-center gap-2">
        <p className="font-mono text-xs" style={{ color: '#5F8C6D' }}>scroll</p>
        <ArrowDown size={16} style={{ color: '#244B3A' }} />
      </div>
    </section>
  )
}