import { personal } from '../data/resume'
import { useTheme } from '../lib/ThemeContext'

export default function Hero() {
  const { tokens } = useTheme()

  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '120px 24px 80px' }}>

      {/* Section glow */}
      <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, borderRadius: '50%', background: `radial-gradient(ellipse, ${tokens.glowBg} 0%, transparent 65%)`, pointerEvents: 'none', filter: 'blur(10px)' }} />

      {/* Decorative corners */}
      <div style={{ position: 'absolute', top: 80, left: 40, width: 80, height: 80, borderTop: `1px solid ${tokens.borderAccent}`, borderLeft: `1px solid ${tokens.borderAccent}`, opacity: 0.3, pointerEvents: 'none', borderRadius: '4px 0 0 0' }} />
      <div style={{ position: 'absolute', top: 80, right: 40, width: 80, height: 80, borderTop: `1px solid ${tokens.borderAccent}`, borderRight: `1px solid ${tokens.borderAccent}`, opacity: 0.3, pointerEvents: 'none', borderRadius: '0 4px 0 0' }} />
      <div style={{ position: 'absolute', bottom: 40, left: 40, width: 80, height: 80, borderBottom: `1px solid ${tokens.borderAccent}`, borderLeft: `1px solid ${tokens.borderAccent}`, opacity: 0.3, pointerEvents: 'none', borderRadius: '0 0 0 4px' }} />
      <div style={{ position: 'absolute', bottom: 40, right: 40, width: 80, height: 80, borderBottom: `1px solid ${tokens.borderAccent}`, borderRight: `1px solid ${tokens.borderAccent}`, opacity: 0.3, pointerEvents: 'none', borderRadius: '0 0 4px 0' }} />

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: tokens.accentBg, border: `1px solid ${tokens.accentBorder}`, borderRadius: 999, padding: '6px 18px', marginBottom: 32 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: tokens.accent, display: 'inline-block', animation: 'pulse 2s infinite' }} />
          <span style={{ color: tokens.accent, fontSize: 13, fontWeight: 600, letterSpacing: 0.5 }}>Open to Security Roles</span>
        </div>

        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 14px', background: tokens.gradientText, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-1.5px' }}>
          {personal.name}
        </h1>

        <h2 style={{ fontSize: 'clamp(18px, 3vw, 28px)', fontWeight: 700, margin: '0 0 14px', background: tokens.gradientAccent, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {personal.title}
        </h2>

        <p style={{ color: tokens.textMuted, fontSize: 14, marginBottom: 24, letterSpacing: 0.5 }}>📍 {personal.location}</p>

        <p style={{ color: tokens.textSecondary, fontSize: 16, lineHeight: 1.85, maxWidth: 680, margin: '0 auto 36px', textAlign: 'center' }}>
          {personal.summary}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 44 }}>
          {personal.targetRoles.map(role => (
            <span key={role} style={{ background: tokens.badgeBg, border: `1px solid ${tokens.badgeBorder}`, color: tokens.badgeText, padding: '7px 18px', borderRadius: 999, fontSize: 14, fontWeight: 600 }}>
              {role}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contact" style={{
            background: tokens.gradientAccent,
            color: '#000',
            padding: '14px 32px', borderRadius: 10, fontWeight: 800, fontSize: 15,
            textDecoration: 'none',
            boxShadow: `0 4px 24px ${tokens.accentBg}`,
            letterSpacing: 0.3,
          }}>
            Get In Touch
          </a>
          <a href="#projects" style={{
            background: 'transparent', color: tokens.text,
            padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 15,
            textDecoration: 'none', border: `1px solid ${tokens.border}`,
          }}>
            View Projects
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
            style={{
              background: 'transparent', color: tokens.textSecondary,
              padding: '14px 32px', borderRadius: 10, fontWeight: 600, fontSize: 15,
              textDecoration: 'none', border: `1px solid ${tokens.border}`,
            }}>
            LinkedIn →
          </a>
        </div>

        {/* Subtle scroll hint */}
        <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: 0.4 }}>
          <div style={{ width: 1, height: 40, background: `linear-gradient(180deg, transparent, ${tokens.accent})` }} />
          <span style={{ color: tokens.accent, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase' }}>Scroll</span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 ${tokens.accentBg}; }
          50% { opacity: 0.5; box-shadow: 0 0 0 8px transparent; }
        }
      `}</style>
    </section>
  )
}
