import { personal } from '../data/resume'
import { useTheme } from '../lib/ThemeContext'

export default function Footer() {
  const { tokens, theme } = useTheme()

  return (
    <footer style={{ borderTop: `1px solid ${tokens.footerBorder}`, padding: '36px 24px', textAlign: 'center', background: tokens.bg }}>
      <p style={{ background: tokens.gradientAccent, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: 17, margin: '0 0 6px' }}>
        {personal.name}
      </p>
      <p style={{ color: tokens.textMuted, fontSize: 13, margin: '0 0 18px' }}>{personal.title} · {personal.location}</p>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginBottom: 20 }}>
        {[
          { label: 'LinkedIn', href: personal.linkedin },
          { label: 'Email', href: `mailto:${personal.email}` },
          { label: 'Back to top ↑', href: '#about' },
        ].map(l => (
          <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
            style={{ color: tokens.textMuted, fontSize: 13, textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = tokens.accent)}
            onMouseLeave={e => (e.currentTarget.style.color = tokens.textMuted)}
          >
            {l.label}
          </a>
        ))}
      </div>
      <p style={{ color: theme === 'dark' ? '#1e293b' : '#cbd5e1', fontSize: 11, margin: 0 }}>
        Built with React · Vite · Supabase · Security-as-Code
      </p>
    </footer>
  )
}
