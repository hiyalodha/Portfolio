'use client'

import { useEffect, useState } from 'react'

// Skill phrases pulled from the real skills data
const TYPING_PHRASES = [
  'NLP Enthusiast',
  'ML Engineer',
  'LLM Developer',
  'TensorFlow User',
  'PyTorch Builder',
  'Data Scientist',
  'React Developer',
  'Full Stack Dev',
  'Blockchain Builder',
  'Python Programmer',
]

const TYPE_SPEED   = 75   // ms per character typed
const DELETE_SPEED = 40   // ms per character deleted
const PAUSE_AFTER  = 1800 // ms to hold the full word
const PAUSE_BEFORE = 400  // ms before starting to delete

export default function TypewriterText() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 530)
    return () => clearInterval(id)
  }, [])

  // Typewriter logic
  useEffect(() => {
    const current = TYPING_PHRASES[phraseIdx]

    if (!isDeleting && displayed === current) {
      // Full word shown — pause then start deleting
      const id = setTimeout(() => setIsDeleting(true), PAUSE_AFTER)
      return () => clearTimeout(id)
    }

    if (isDeleting && displayed === '') {
      // Fully deleted — pause then move to next phrase
      const id = setTimeout(() => {
        setIsDeleting(false)
        setPhraseIdx(i => (i + 1) % TYPING_PHRASES.length)
      }, PAUSE_BEFORE)
      return () => clearTimeout(id)
    }

    const speed = isDeleting ? DELETE_SPEED : TYPE_SPEED
    const id = setTimeout(() => {
      setDisplayed(isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      )
    }, speed)
    return () => clearTimeout(id)
  }, [displayed, isDeleting, phraseIdx])

  return (
    <div style={{
      display:        'inline-flex',
      alignItems:     'center',
      gap:            '2px',
      fontFamily:     '"Space Mono", monospace',
      fontSize:       'clamp(1rem, 2.2vw, 1.35rem)',
      fontWeight:     700,
      color:          '#244B3A',
      letterSpacing:  '0.01em',
      minHeight:      '2rem',
      padding:        '0.35rem 0',
    }}>
      <span>{displayed}</span>
      {/* Blinking cursor bar */}
      <span style={{
        display:         'inline-block',
        width:           '2px',
        height:          '1.2em',
        background:      '#5F8C6D',
        marginLeft:      '2px',
        borderRadius:    '1px',
        opacity:         blink ? 1 : 0,
        transition:      'opacity 0.1s',
        verticalAlign:   'middle',
      }} />
    </div>
  )
}
