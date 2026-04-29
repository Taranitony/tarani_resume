import { useState } from 'react'
import { projects } from '../data/resume'
import { SectionTitle } from './Skills'

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionTitle label="Security Engineering Projects" />
      <p style={{ color: '#64748b', textAlign: 'center', marginBottom: 48, fontSize: 14 }}>
        All tools independently designed and built using GenAI · Codebase in private GitHub repository
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 20 }}>
        {projects.map((project, i) => {
          const isOpen = expanded === i
          return (
            <div
              key={i}
              style={{
                background: 'rgba(15,23,42,0.8)',
                border: `1px solid ${isOpen ? 'rgba(34,211,238,0.4)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 16,
                padding: 24,
                transition: 'all 0.3s',
                cursor: 'pointer',
                boxShadow: isOpen ? '0 0 30px rgba(34,211,238,0.1)' : 'none',
              }}
              onClick={() => setExpanded(isOpen ? null : i)}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
                <span style={{ fontSize: 32 }}>{project.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: 17, margin: '0 0 4px' }}>
                    {project.name}
                  </h3>
                  <p style={{ color: '#22d3ee', fontSize: 13, margin: 0 }}>{project.subtitle}</p>
                </div>
                <span style={{ color: '#475569', fontSize: 20, flexShrink: 0 }}>
                  {isOpen ? '↑' : '↓'}
                </span>
              </div>

              <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6, margin: '0 0 16px' }}>
                {project.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: isOpen ? 20 : 0 }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.3)',
                    color: '#93c5fd', padding: '3px 10px', borderRadius: 999, fontSize: 11, fontWeight: 500,
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Expanded highlights */}
              {isOpen && (
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 16 }}>
                  <p style={{ color: '#94a3b8', fontSize: 12, fontWeight: 600, marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>
                    Key Highlights
                  </p>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {project.highlights.map((h, j) => (
                      <li key={j} style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.6 }}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
