import { awards } from '../data/resume'
import { SectionTitle } from './Skills'

export default function Awards() {
  return (
    <section id="awards" style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
      <SectionTitle label="Honors & Awards" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
        {awards.map((award, i) => (
          <div
            key={i}
            style={{
              background: 'linear-gradient(135deg, rgba(234,179,8,0.07), rgba(249,115,22,0.07))',
              border: '1px solid rgba(234,179,8,0.25)',
              borderRadius: 20,
              padding: 32,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 52, marginBottom: 16 }}>{award.icon}</div>
            <h3 style={{ color: '#fde047', fontWeight: 800, fontSize: 20, margin: '0 0 8px' }}>
              {award.title}
            </h3>
            <p style={{ color: '#f97316', fontWeight: 600, fontSize: 14, margin: '0 0 4px' }}>
              {award.company}
            </p>
            <p style={{ color: '#64748b', fontSize: 13, margin: '0 0 16px' }}>{award.date}</p>
            <p style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              {award.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
