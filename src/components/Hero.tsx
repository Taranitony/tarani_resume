import { personal } from '../data/resume'

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)',
          borderRadius: 999, padding: '6px 16px', marginBottom: 32,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          <span style={{ color: '#22d3ee', fontSize: 13, fontWeight: 600 }}>Open to Security Roles</span>
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 72px)',
          fontWeight: 800,
          lineHeight: 1.1,
          margin: '0 0 16px',
          background: 'linear-gradient(135deg, #f1f5f9 0%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '-1px',
        }}>
          {personal.name}
        </h1>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(18px, 3vw, 28px)',
          fontWeight: 600,
          margin: '0 0 24px',
          background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {personal.title}
        </h2>

        {/* Tagline */}
        <p style={{ color: '#64748b', fontSize: 16, marginBottom: 32 }}>
          📍 {personal.location}
        </p>

        {/* Summary */}
        <p style={{
          color: '#94a3b8', fontSize: 16, lineHeight: 1.8, maxWidth: 720,
          margin: '0 auto 40px', textAlign: 'center',
        }}>
          {personal.summary}
        </p>

        {/* Target roles */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 48 }}>
          {personal.targetRoles.map(role => (
            <span key={role} style={{
              background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.4)',
              color: '#93c5fd', padding: '6px 16px', borderRadius: 999, fontSize: 14, fontWeight: 500,
            }}>
              {role}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
              color: '#000', padding: '14px 32px', borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: 'none',
              boxShadow: '0 0 30px rgba(34,211,238,0.3)',
            }}
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            style={{
              background: 'transparent', color: '#f1f5f9',
              padding: '14px 32px', borderRadius: 10,
              fontWeight: 700, fontSize: 15, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            View Projects
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent', color: '#94a3b8',
              padding: '14px 32px', borderRadius: 10,
              fontWeight: 600, fontSize: 15, textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            LinkedIn →
          </a>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
