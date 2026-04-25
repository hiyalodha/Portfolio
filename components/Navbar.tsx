'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const NAV_LINKS = [
  { label: 'About',   href: '#about'    },
  { label: 'Skills',  href: '#skills'   },
  { label: 'Projects',    href: '#projects' },
  { label: 'Contact', href: '#contact'  },
]

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false)
  const [activeSection,  setActiveSection]  = useState('')
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const ids = NAV_LINKS.map(l => l.href.replace('#', ''))
      const scrollY = window.scrollY + 130

      // If user is at the bottom of the page, force Contact active
      const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
      if (atBottom) { setActiveSection('contact'); return }

      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // run once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const idx = NAV_LINKS.findIndex(l => l.href === `#${activeSection}`)
    const el  = linkRefs.current[idx]
    if (el) setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth })
  }, [activeSection])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav id="top-bar" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 clamp(1.5rem, 8vw, 5rem)',
        height: scrolled ? '58px' : '74px',
        background: scrolled ? 'rgba(247,244,234,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #DFE8D9' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(36,75,58,.08)' : 'none',
        transition: 'height .35s ease, background .35s ease, box-shadow .35s ease',
      }}>
        {/* LOGO */}
        <Link href="/" id="nav-logo" style={{
          fontFamily: '"Syne", sans-serif', fontWeight: 800, fontSize: '1.3rem',
          color: '#101D18', display: 'inline-flex', alignItems: 'center',
          gap: '0.45rem', textDecoration: 'none',
        }}>
          <span style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #244B3A, #5F8C6D)',
            display: 'inline-block', flexShrink: 0,
          }} />
          HL
        </Link>

        {/* DESKTOP LINKS */}
        <div id="nav-desktop-links" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', position: 'relative' }}>
          {activeSection && (
            <span aria-hidden style={{
              position: 'absolute', bottom: '-6px',
              left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px`,
              height: '2px',
              background: 'linear-gradient(90deg, #244B3A, #5F8C6D)',
              borderRadius: '2px',
              transition: 'left .35s cubic-bezier(.4,0,.2,1), width .35s cubic-bezier(.4,0,.2,1)',
            }} />
          )}

          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a key={link.href} href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                ref={el => { linkRefs.current[i] = el }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: '"Space Mono", monospace', fontSize: '0.68rem',
                  letterSpacing: '0.13em', textTransform: 'uppercase',
                  color: isActive ? '#244B3A' : '#101D18',
                  fontWeight: isActive ? 700 : 400,
                  opacity: isActive ? 1 : 0.65,
                  textDecoration: 'none', padding: '4px 0',
                  transition: 'color .25s, opacity .25s', display: 'none',
                }}
                className="nav-link-desktop"
              >{link.label}</a>
            )
          })}

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" id="nav-resume-btn"
            style={{
              fontFamily: '"Space Mono", monospace', fontSize: '0.65rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '0.45rem 1.2rem',
              border: '1.5px solid #244B3A',
              color: '#244B3A', background: 'transparent',
              cursor: 'pointer', textDecoration: 'none', display: 'none',
              transition: 'background .22s, color .22s, box-shadow .22s, transform .22s',
            }}
            className="nav-resume-btn"
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = '#244B3A'
              el.style.color      = '#F7F4EA'
              el.style.boxShadow  = '4px 4px 0 rgba(36,75,58,.3)'
              el.style.transform  = 'translate(-2px,-2px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement
              el.style.background = 'transparent'
              el.style.color      = '#244B3A'
              el.style.boxShadow  = 'none'
              el.style.transform  = 'none'
            }}
          >Resume</a>
        </div>

        {/* HAMBURGER */}
        <button id="nav-hamburger" aria-label="Toggle navigation menu" aria-expanded={menuOpen}
          onClick={() => setMenuOpen(p => !p)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          className="hamburger-btn">
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', height: '2px', borderRadius: '2px',
              background: '#101D18',
              transition: 'transform .3s ease, opacity .3s ease, width .3s ease',
              width: i === 1 ? (menuOpen ? '18px' : '24px') : '24px',
              transformOrigin: 'center',
              transform: i === 0 && menuOpen ? 'translateY(7px) rotate(45deg)' :
                         i === 2 && menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <div id="nav-mobile-drawer" aria-hidden={!menuOpen} style={{
        position: 'fixed', inset: 0, zIndex: 190,
        background: '#F7F4EA',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', gap: '2.5rem',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'all' : 'none',
        transition: 'opacity .35s ease',
      }}>
        {NAV_LINKS.map((link, i) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: '"Syne", sans-serif',
            fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 800,
            color: activeSection === link.href.replace('#', '') ? '#244B3A' : '#101D18',
            textDecoration: 'none', letterSpacing: '0.02em',
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: menuOpen ? 1 : 0,
            transition: `transform .4s ease ${i * .07}s, opacity .4s ease ${i * .07}s`,
            display: 'block',
          }}>{link.label}</a>
        ))}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: '1rem', fontFamily: '"Space Mono", monospace',
            fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '0.65rem 2rem', border: '1.5px solid #244B3A',
            color: '#244B3A', textDecoration: 'none',
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: menuOpen ? 1 : 0,
            transition: `transform .4s ease ${NAV_LINKS.length * .07 + .05}s, opacity .4s ease ${NAV_LINKS.length * .07 + .05}s`,
          }}>Resume ↗</a>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .nav-link-desktop  { display: inline-block !important; }
          .nav-resume-btn    { display: inline-block !important; }
          .hamburger-btn     { display: none !important; }
          #nav-mobile-drawer { display: none !important; }
        }
        .nav-link-desktop:hover { color: #244B3A !important; opacity: 1 !important; }
      `}</style>
    </>
  )
}