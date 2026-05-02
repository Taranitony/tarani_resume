import { personal } from '../data/resume'
import { useTheme } from '../lib/ThemeContext'

export default function Hero() {
  const { tokens, theme } = useTheme()

  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '120px 24px 80px' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: `radial-gradient(circle, ${tokens.glowBg} 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: tokens.accentBg, border: `1px solid ${tokens.accentBorder}`, borderRadius: 999, padding: '6px 16px', marginBottom: 32 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: tokens.accent, display: 'inline-block', animation: 'pulse 2s infinite' }} />
          <span style={{ color: tokens.accent, fontSize: 13, fontWeight: 600 }}>Open to Security Roles</span>
        </div>

        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 16px', background: tokens.gradientText, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1px' }}>
          {personal.name}
        </h1>

        <h2 style={{ fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 600, margin: '0 0 16px', background: tokens.gradientAccent, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {personal.title}
        </h2>

        <p style={{ color: tokens.textMuted, fontSize: 15, marginBottom: 28 }}>📍 {personal.location}</p>

        <p style={{ color: tokens.textSecondary, fontSize: 16, lineHeight: 1.8, maxWidth: 680, margin: '0 auto 36px', textAlign: 'center' }}>
          {personal.summary}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 44 }}>
          {personal.targetRoles.map(role => (
            <span key={role} style={{ background: tokens.badgeBg, border: `1px solid ${tokens.badgeBorder}`, color: tokens.badgeText, padding: '6px 16px', borderRadius: 999, fontSize: 14, fontWeight: 500 }}>
              {role}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{ background: tokens.gradientAccent, color: theme === 'dark' ? '#000' : '#fff', padding: '13px 30px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: `0 0 30px ${tokens.accentBg}` }}>
            Get In Touch
          </a>
          <a href="#projects" style={{ background: 'transparent', color: tokens.text, padding: '13px 30px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none', border: `1px solid ${tokens.border}` }}>
            View Projects
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ background: 'transparent', color: tokens.textSecondary, padding: '13px 30px', borderRadius: 10, fontWeight: 600, fontSize: 15, textDecoration: 'none', border: `1px solid ${tokens.border}` }}>
            LinkedIn →
          </a>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`}</style>
    </section>
  )
}
