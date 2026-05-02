import { useState, useEffect } from 'react'
import { personal } from '../data/resume'
import { useTheme } from '../lib/ThemeContext'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { tokens, theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all 0.3s',
      background: scrolled ? tokens.navBg : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? `1px solid ${tokens.border}` : 'none',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <span style={{ fontWeight: 700, fontSize: 18, background: tokens.gradientAccent, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {personal.name.split(' ')[0]}
          </span>
          <span style={{ color: tokens.textMuted, fontSize: 18, fontWeight: 400 }}> · Security</span>
        </a>

        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              style={{ color: tokens.textSecondary, textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = tokens.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = tokens.textSecondary)}
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle theme"
            style={{
              background: tokens.bgCard, border: `1px solid ${tokens.border}`,
              borderRadius: 999, padding: '6px 14px', cursor: 'pointer',
              color: tokens.textSecondary, fontSize: 16, display: 'flex',
              alignItems: 'center', gap: 6, transition: 'all 0.2s',
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <a href="/Tarani_Antony_Resume.pdf" download
            style={{
              background: tokens.gradientAccent, color: theme === 'dark' ? '#000' : '#fff',
              padding: '8px 18px', borderRadius: 8, fontSize: 13, fontWeight: 700, textDecoration: 'none',
            }}
          >
            Download CV
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: tokens.textSecondary, cursor: 'pointer', fontSize: 24, display: 'none' }}
          className="mobile-menu-btn"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: tokens.navBg, borderTop: `1px solid ${tokens.border}`, padding: '16px 24px' }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', color: tokens.textSecondary, textDecoration: 'none', padding: '10px 0', fontSize: 15, borderBottom: `1px solid ${tokens.border}` }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              style={{ background: tokens.bgCard, border: `1px solid ${tokens.border}`, borderRadius: 8, padding: '8px 16px', cursor: 'pointer', color: tokens.text, fontSize: 14 }}>
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
