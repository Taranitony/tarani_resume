import { useTheme } from '../lib/ThemeContext'
import { personal } from '../data/resume'

export default function ThemeSelector() {
  const { setTheme, setHasChosen } = useTheme()

  const choose = (t: 'dark' | 'light') => {
    setTheme(t)
    setHasChosen(true)
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#030712', padding: '24px',
    }}>
      {/* Glow */}
      <div style={{
        position: 'fixed', top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ textAlign: 'center', marginBottom: 56, position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)',
          borderRadius: 999, padding: '6px 18px', marginBottom: 28,
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', display: 'inline-block' }} />
          <span style={{ color: '#22d3ee', fontSize: 13, fontWeight: 600, letterSpacing: 1 }}>PORTFOLIO</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 800,
          background: 'linear-gradient(135deg, #f1f5f9, #94a3b8)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          margin: '0 0 12px', letterSpacing: '-1px',
        }}>
          {personal.name}
        </h1>
        <p style={{ color: '#64748b', fontSize: 16, margin: 0 }}>
          {personal.title}
        </p>
      </div>

      <p style={{ color: '#475569', fontSize: 15, marginBottom: 40, position: 'relative', zIndex: 1 }}>
        Choose your preferred theme
      </p>

      <div style={{
        display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center',
        position: 'relative', zIndex: 1,
      }}>
        {/* Dark theme card */}
        <button
          onClick={() => choose('dark')}
          style={{
            background: 'rgba(15,23,42,0.9)', border: '1px solid rgba(34,211,238,0.3)',
            borderRadius: 20, padding: '32px 40px', cursor: 'pointer',
            width: 220, transition: 'all 0.2s', textAlign: 'center',
            boxShadow: '0 0 40px rgba(34,211,238,0.1)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(34,211,238,0.8)'
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 0 50px rgba(34,211,238,0.25)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(34,211,238,0.3)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 40px rgba(34,211,238,0.1)'
          }}
        >
          <div style={{ fontSize: 42, marginBottom: 16 }}>🌙</div>
          <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Dark</div>
          <div style={{ color: '#64748b', fontSize: 13, lineHeight: 1.5 }}>Easy on the eyes · Security aesthetic</div>
          <div style={{
            marginTop: 20, background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
            color: '#000', padding: '8px 20px', borderRadius: 8,
            fontSize: 13, fontWeight: 700,
          }}>
            Choose Dark
          </div>
        </button>

        {/* Light theme card */}
        <button
          onClick={() => choose('light')}
          style={{
            background: '#ffffff', border: '1px solid #e2e8f0',
            borderRadius: 20, padding: '32px 40px', cursor: 'pointer',
            width: 220, transition: 'all 0.2s', textAlign: 'center',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#0ea5e9'
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 8px 40px rgba(14,165,233,0.2)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = '#e2e8f0'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)'
          }}
        >
          <div style={{ fontSize: 42, marginBottom: 16 }}>☀️</div>
          <div style={{ color: '#0f172a', fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Light</div>
          <div style={{ color: '#64748b', fontSize: 13, lineHeight: 1.5 }}>Clean & professional · Print-ready</div>
          <div style={{
            marginTop: 20, background: 'linear-gradient(90deg, #0369a1, #1d4ed8)',
            color: '#fff', padding: '8px 20px', borderRadius: 8,
            fontSize: 13, fontWeight: 700,
          }}>
            Choose Light
          </div>
        </button>
      </div>

      <p style={{ color: '#1e293b', fontSize: 12, marginTop: 40, position: 'relative', zIndex: 1 }}>
        You can switch anytime using the toggle in the menu
      </p>
    </div>
  )
}
