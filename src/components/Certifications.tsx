import { certifications, education } from '../data/resume'
import { SectionTitle } from './Skills'

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '80px 24px', background: 'rgba(15,23,42,0.5)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionTitle label="Certifications & Education" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 16, marginBottom: 48 }}>
          {certifications.map((cert, i) => (
            <div
              key={i}
              style={{
                background: cert.highlight ? 'rgba(34,211,238,0.07)' : 'rgba(15,23,42,0.8)',
                border: `1px solid ${cert.highlight ? 'rgba(34,211,238,0.4)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 14,
                padding: 20,
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>
                {cert.highlight ? '🏆' : '📜'}
              </span>
              <div>
                <h3 style={{
                  color: cert.highlight ? '#22d3ee' : '#e2e8f0',
                  fontWeight: 700, fontSize: 15, margin: '0 0 4px',
                }}>
                  {cert.name}
                  {cert.highlight && (
                    <span style={{
                      marginLeft: 8,
                      background: 'rgba(34,211,238,0.2)', color: '#67e8f9',
                      fontSize: 10, fontWeight: 700, padding: '2px 8px',
                      borderRadius: 999, textTransform: 'uppercase', letterSpacing: 1,
                    }}>
                      Featured
                    </span>
                  )}
                </h3>
                <p style={{ color: '#64748b', fontSize: 13, margin: '0 0 6px' }}>{cert.issuer}</p>
                <p style={{ color: '#94a3b8', fontSize: 12, margin: 0, fontStyle: 'italic' }}>{cert.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{
          background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 16, padding: 28, display: 'flex', gap: 20, alignItems: 'center',
        }}>
          <span style={{ fontSize: 40 }}>🎓</span>
          <div>
            <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: 17, margin: '0 0 4px' }}>
              {education.degree}
            </h3>
            <p style={{ color: '#22d3ee', fontSize: 15, margin: '0 0 4px', fontWeight: 600 }}>
              {education.college}
            </p>
            <p style={{ color: '#64748b', fontSize: 14, margin: 0 }}>
              {education.location} · Class of {education.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
