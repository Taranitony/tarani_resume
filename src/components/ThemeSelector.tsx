import { useTheme } from '../lib/ThemeContext'
import { personal } from '../data/resume'

export default function ThemeSelector() {
  const { setTheme, setHasChosen } = useTheme()

  const choose = (t: 'dark' | 'light') => {
    setTheme(t)
    setHasChosen(true)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0a0906', padding: '24px', position: 'relative', overflow: 'hidden' }}>

      {/* Atmospheric background orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, top: '-150px', left: '-100px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.16) 0%, transparent 65%)', filter: 'blur(40px)', animation: 'orbFloat 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, bottom: '-100px', right: '-80px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,6,0.14) 0%, transparent 65%)', filter: 'blur(40px)', animation: 'orbFloat 18s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, top: '40%', left: '60%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)', filter: 'blur(60px)', animation: 'orbFloat 22s ease-in-out infinite' }} />
      </div>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 52, position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)',
          borderRadius: 999, padding: '6px 20px', marginBottom: 30,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#f59e0b', display: 'inline-block', boxShadow: '0 0 8px rgba(245,158,11,0.8)', animation: 'pulse 2s infinite' }} />
          <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>Security Portfolio</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 800,
          background: 'linear-gradient(135deg, #faf5eb 0%, #d6c9a8 60%, #f59e0b 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          margin: '0 0 10px', letterSpacing: '-1.5px', lineHeight: 1.1,
        }}>
          {personal.name}
        </h1>
        <p style={{ color: '#9a7c50', fontSize: 16, margin: '0 0 6px', fontWeight: 400 }}>
          {personal.title}
        </p>
        <p style={{ color: '#5c3d1e', fontSize: 14, margin: 0 }}>
          {personal.location}
        </p>
      </div>

      <p style={{ color: '#7c5c3a', fontSize: 14, marginBottom: 36, position: 'relative', zIndex: 1, letterSpacing: 1, textTransform: 'uppercase', fontWeight: 600 }}>
        Choose Your Experience
      </p>

      {/* Theme cards */}
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 1 }}>

        {/* Dark card */}
        <button
          onClick={() => choose('dark')}
          style={{
            background: 'rgba(25,18,8,0.95)',
            border: '1px solid rgba(245,158,11,0.3)',
            borderRadius: 20, padding: '36px 44px', cursor: 'pointer',
            width: 230, transition: 'all 0.25s', textAlign: 'center',
            boxShadow: '0 0 50px rgba(245,158,11,0.08), 0 8px 32px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(12px)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(245,158,11,0.8)'
            e.currentTarget.style.transform = 'translateY(-6px)'
            e.currentTarget.style.boxShadow = '0 0 60px rgba(245,158,11,0.22), 0 16px 40px rgba(0,0,0,0.5)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 50px rgba(245,158,11,0.08), 0 8px 32px rgba(0,0,0,0.5)'
          }}
        >
          <div style={{ fontSize: 44, marginBottom: 16 }}>🌑</div>
          <div style={{ color: '#faf5eb', fontWeight: 800, fontSize: 20, marginBottom: 8, letterSpacing: '-0.5px' }}>Dark</div>
          <div style={{ color: '#9a7c50', fontSize: 13, lineHeight: 1.6, marginBottom: 22 }}>
            Atmospheric · Gold accents<br />Easy on the eyes
          </div>
          <div style={{
            background: 'linear-gradient(90deg, #f59e0b, #d97706)',
            color: '#000', padding: '10px 24px', borderRadius: 10,
            fontSize: 13, fontWeight: 800, letterSpacing: 0.5,
          }}>
            Choose Dark →
          </div>
        </button>

        {/* Light card */}
        <button
          onClick={() => choose('light')}
          style={{
            background: 'rgba(255,253,248,0.97)',
            border: '1px solid rgba(180,83,9,0.2)',
            borderRadius: 20, padding: '36px 44px', cursor: 'pointer',
            width: 230, transition: 'all 0.25s', textAlign: 'center',
            boxShadow: '0 0 50px rgba(180,83,9,0.06), 0 8px 32px rgba(180,83,9,0.12)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(180,83,9,0.7)'
            e.currentTarget.style.transform = 'translateY(-6px)'
            e.currentTarget.style.boxShadow = '0 0 60px rgba(180,83,9,0.15), 0 16px 40px rgba(180,83,9,0.18)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(180,83,9,0.2)'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 0 50px rgba(180,83,9,0.06), 0 8px 32px rgba(180,83,9,0.12)'
          }}
        >
          <div style={{ fontSize: 44, marginBottom: 16 }}>☀️</div>
          <div style={{ color: '#1c0f00', fontWeight: 800, fontSize: 20, marginBottom: 8, letterSpacing: '-0.5px' }}>Light</div>
          <div style={{ color: '#7c5c3a', fontSize: 13, lineHeight: 1.6, marginBottom: 22 }}>
            Warm cream · Amber tones<br />Clean & professional
          </div>
          <div style={{
            background: 'linear-gradient(90deg, #b45309, #92400e)',
            color: '#fff', padding: '10px 24px', borderRadius: 10,
            fontSize: 13, fontWeight: 800, letterSpacing: 0.5,
          }}>
            Choose Light →
          </div>
        </button>
      </div>

      <p style={{ color: '#3d2810', fontSize: 12, marginTop: 44, position: 'relative', zIndex: 1, letterSpacing: 0.5 }}>
        You can switch anytime using the toggle in the menu
      </p>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(245,158,11,0.5); }
          50% { opacity: 0.6; box-shadow: 0 0 0 8px rgba(245,158,11,0); }
        }
        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(25px, -35px) scale(1.04); }
          66% { transform: translate(-18px, 22px) scale(0.97); }
        }
      `}</style>
    </div>
  )
}
