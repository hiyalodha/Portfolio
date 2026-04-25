import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hiya Lodha — AI/ML Engineer',
  description: 'Portfolio of Hiya Lodha — CS undergrad, AI & ML engineer building intelligent systems.',
  keywords: 'AI, ML, Engineering, Portfolio, NLP, Python, Deep Learning',
  authors: [{ name: 'Hiya Lodha' }],
  creator: 'Hiya Lodha',
  themeColor: '#f4f0ff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        {/* Animations: scroll-reveal + progress bar + custom cursor */}
        <script dangerouslySetInnerHTML={{
          __html: `
          (function() {
            // ── Scroll reveal (runs after React hydration) ──
            function initReveal() {
              var io = new IntersectionObserver(function(entries) {
                entries.forEach(function(e) {
                  if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    io.unobserve(e.target);
                  }
                });
              }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

              document.querySelectorAll('.reveal').forEach(function(el) {
                io.observe(el);
              });
            }

            // Fire immediately and also after hydration
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initReveal);
            } else {
              initReveal();
            }
            // Re-run after a tick to catch React-rendered elements
            setTimeout(initReveal, 300);

            // ── Progress bar ──
            var bar = document.createElement('div');
            bar.className = 'progress-bar';
            document.body.appendChild(bar);
            window.addEventListener('scroll', function() {
              var pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
              bar.style.width = pct + '%';
            }, { passive: true });

            // ── Custom cursor ──
            var cursor = document.createElement('div');
            cursor.className = 'custom-cursor';
            var ring = document.createElement('div');
            ring.className = 'cursor-ring';
            document.body.appendChild(cursor);
            document.body.appendChild(ring);
            var mx = 0, my = 0, rx = 0, ry = 0;
            document.addEventListener('mousemove', function(e) {
              mx = e.clientX; my = e.clientY;
              cursor.style.left = mx + 'px';
              cursor.style.top  = my + 'px';
            });
            (function animRing() {
              rx += (mx - rx) * 0.1;
              ry += (my - ry) * 0.1;
              ring.style.left = rx + 'px';
              ring.style.top  = ry + 'px';
              requestAnimationFrame(animRing);
            })();

            // Cursor grow on hover over interactive elements
            document.addEventListener('mouseover', function(e) {
              if (e.target.closest('a,button,.card,.btn')) {
                cursor.style.width  = '14px';
                cursor.style.height = '14px';
                ring.style.width    = '44px';
                ring.style.height   = '44px';
              }
            });
            document.addEventListener('mouseout', function(e) {
              if (e.target.closest('a,button,.card,.btn')) {
                cursor.style.width  = '9px';
                cursor.style.height = '9px';
                ring.style.width    = '32px';
                ring.style.height   = '32px';
              }
            });
          })();
        `}} />
      </body>
    </html>
  )
}