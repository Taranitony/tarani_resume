import { experience } from '../data/resume'
import { SectionTitle } from './Skills'

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '80px 24px', background: 'rgba(15,23,42,0.5)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionTitle label="Experience" />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0, width: 2,
            background: 'linear-gradient(180deg, #22d3ee, #3b82f6, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {experience.map((job, i) => (
              <div key={i} style={{ display: 'flex', gap: 40, position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #22d3ee, #3b82f6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(34,211,238,0.4)',
                  zIndex: 1,
                }}>
                  <span style={{ color: '#000', fontWeight: 800, fontSize: 14 }}>{i + 1}</span>
                </div>

                {/* Content */}
                <div style={{
                  flex: 1, background: 'rgba(15,23,42,0.8)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 16, padding: 28, marginTop: 4,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: 18, margin: '0 0 4px' }}>
                        {job.title}
                      </h3>
                      <p style={{ color: '#22d3ee', fontWeight: 600, fontSize: 15, margin: 0 }}>
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)',
                        color: '#67e8f9', padding: '4px 12px', borderRadius: 999, fontSize: 13,
                      }}>
                        {job.period}
                      </span>
                      {job.award && (
                        <div style={{ marginTop: 8 }}>
                          <span style={{
                            background: 'rgba(234,179,8,0.15)', border: '1px solid rgba(234,179,8,0.4)',
                            color: '#fde047', padding: '4px 12px', borderRadius: 999, fontSize: 12, fontWeight: 600,
                          }}>
                            ⭐ {job.award}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <ul style={{ margin: '16px 0 0', padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {job.highlights.map((h, j) => {
                      const colonIdx = h.indexOf(':')
                      const hasTitle = colonIdx > 0 && colonIdx < 50
                      return (
                      <li key={j} style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.7 }}>
                        {hasTitle ? (
                          <>
                            <span style={{ color: '#22d3ee', fontWeight: 700 }}>{h.slice(0, colonIdx)}</span>
                            <span>{h.slice(colonIdx)}</span>
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
