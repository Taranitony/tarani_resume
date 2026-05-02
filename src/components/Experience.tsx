import { experience } from '../data/resume'
import { SectionTitle } from './Skills'
import { useTheme } from '../lib/ThemeContext'

export default function Experience() {
  const { tokens } = useTheme()

  return (
    <section id="experience" style={{ padding: '80px 24px', background: tokens.bgSection }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionTitle label="Experience" />
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 20, top: 0, bottom: 0, width: 2, background: tokens.timelineLine }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
            {experience.map((job, i) => (
              <div key={i} style={{ display: 'flex', gap: 36, position: 'relative' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0, background: tokens.timelineDot, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 18px ${tokens.accentBg}`, zIndex: 1 }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>{i + 1}</span>
                </div>
                <div style={{ flex: 1, background: tokens.bgCard, border: `1px solid ${tokens.border}`, borderRadius: 16, padding: 26, marginTop: 4 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                    <div>
                      <h3 style={{ color: tokens.text, fontWeight: 700, fontSize: 17, margin: '0 0 3px' }}>{job.title}</h3>
                      <p style={{ color: tokens.accent, fontWeight: 600, fontSize: 14, margin: 0 }}>{job.company} · {job.location}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ background: tokens.accentBg, border: `1px solid ${tokens.accentBorder}`, color: tokens.accentText, padding: '3px 12px', borderRadius: 999, fontSize: 12 }}>
                        {job.period}
                      </span>
                      {job.award && (
                        <div style={{ marginTop: 6 }}>
                          <span style={{ background: 'rgba(234,179,8,0.12)', border: '1px solid rgba(234,179,8,0.35)', color: '#f59e0b', padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>
                            ⭐ {job.award}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <ul style={{ margin: '14px 0 0', padding: '0 0 0 18px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {job.highlights.map((h, j) => {
                      const colonIdx = h.indexOf(':')
                      const hasTitle = colonIdx > 0 && colonIdx < 55
                      return (
                        <li key={j} style={{ color: tokens.textSecondary, fontSize: 14, lineHeight: 1.75 }}>
                          {hasTitle ? (
                            <>
                              <span style={{ color: tokens.accent, fontWeight: 700 }}>{h.slice(0, colonIdx)}</span>
                              <span style={{ color: tokens.textSecondary }}>{h.slice(colonIdx)}</span>
                            </>
                          ) : h}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
