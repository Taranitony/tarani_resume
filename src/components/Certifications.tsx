import { certifications, education } from '../data/resume'
import { SectionTitle } from './Skills'
import { useTheme } from '../lib/ThemeContext'

export default function Certifications() {
  const { tokens } = useTheme()

  return (
    <section id="certifications" style={{ padding: '80px 24px', background: tokens.bgSection }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionTitle label="Certifications & Education" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 14, marginBottom: 40 }}>
          {certifications.map((cert, i) => (
            <div key={i} style={{ background: cert.highlight ? tokens.accentBg : tokens.bgCard, border: `1px solid ${cert.highlight ? tokens.borderAccent : tokens.border}`, borderRadius: 12, padding: 18, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 26, flexShrink: 0 }}>{cert.highlight ? '🏆' : '📜'}</span>
              <div>
                <h3 style={{ color: cert.highlight ? tokens.accent : tokens.text, fontWeight: 700, fontSize: 14, margin: '0 0 3px' }}>
                  {cert.name}
                  {cert.highlight && <span style={{ marginLeft: 8, background: tokens.accentBg, color: tokens.accentText, fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: 1 }}>Top Pick</span>}
                </h3>
                <p style={{ color: tokens.textMuted, fontSize: 12, margin: '0 0 4px' }}>{cert.issuer}</p>
                <p style={{ color: tokens.textSecondary, fontSize: 11.5, margin: 0, fontStyle: 'italic' }}>{cert.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: tokens.bgCard, border: `1px solid ${tokens.border}`, borderRadius: 14, padding: 24, display: 'flex', gap: 18, alignItems: 'center' }}>
          <span style={{ fontSize: 38 }}>🎓</span>
          <div>
            <h3 style={{ color: tokens.text, fontWeight: 700, fontSize: 16, margin: '0 0 3px' }}>{education.degree}</h3>
            <p style={{ color: tokens.accent, fontSize: 14, margin: '0 0 3px', fontWeight: 600 }}>{education.college}</p>
            <p style={{ color: tokens.textMuted, fontSize: 13, margin: 0 }}>{education.location} · Class of {education.year}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
