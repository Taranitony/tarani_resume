import { awards } from '../data/resume'
import { SectionTitle } from './Skills'
import { useTheme } from '../lib/ThemeContext'

export default function Awards() {
  const { tokens } = useTheme()

  return (
    <section id="awards" style={{ padding: '80px 24px', maxWidth: 1000, margin: '0 auto' }}>
      <SectionTitle label="Honors & Awards" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 18 }}>
        {awards.map((award, i) => (
          <div key={i} style={{ background: tokens.bgCard, border: `1px solid ${tokens.border}`, borderRadius: 16, padding: 26, textAlign: 'center', transition: 'all 0.2s' }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>{award.icon}</div>
            <h3 style={{ color: tokens.text, fontWeight: 700, fontSize: 16, margin: '0 0 4px' }}>{award.title}</h3>
            <p style={{ color: tokens.accent, fontWeight: 600, fontSize: 13, margin: '0 0 2px' }}>{award.company}</p>
            <p style={{ color: tokens.textMuted, fontSize: 12, margin: '0 0 12px' }}>{award.date}</p>
            <p style={{ color: tokens.textSecondary, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{award.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
