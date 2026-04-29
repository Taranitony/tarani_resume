import { personal } from '../data/resume'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '40px 24px',
      textAlign: 'center',
    }}>
      <p style={{
        background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        fontWeight: 700, fontSize: 18, margin: '0 0 8px',
      }}>
        {personal.name}
      </p>
      <p style={{ color: '#475569', fontSize: 13, margin: '0 0 20px' }}>
        {personal.title} · {personal.location}
      </p>
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginBottom: 24 }}>
        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer"
          style={{ color: '#64748b', fontSize: 13, textDecoration: 'none' }}>
          LinkedIn
        </a>
        <a href={`mailto:${personal.email}`}
          style={{ color: '#64748b', fontSize: 13, textDecoration: 'none' }}>
          Email
        </a>
        <a href="#about"
          style={{ color: '#64748b', fontSize: 13, textDecoration: 'none' }}>
          Back to top ↑
        </a>
      </div>
      <p style={{ color: '#334155', fontSize: 12, margin: 0 }}>
        Built with React + Vite + Supabase · Powered by Security-as-Code
      </p>
    </footer>
  )
}
