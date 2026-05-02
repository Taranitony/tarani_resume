import { useState } from 'react'
import { projects } from '../data/resume'
import { SectionTitle } from './Skills'
import { useTheme } from '../lib/ThemeContext'

export default function Projects() {
  const { tokens } = useTheme()
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="projects" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionTitle label="Security Engineering Projects" />
      <p style={{ color: tokens.textMuted, textAlign: 'center', marginBottom: 44, fontSize: 13 }}>
        All tools independently designed and built using GenAI · Codebase in private GitHub repository
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 18 }}>
        {projects.map((project, i) => {
          const isOpen = expanded === i
          return (
            <div key={i} onClick={() => setExpanded(isOpen ? null : i)}
              style={{ background: tokens.bgCard, border: `1px solid ${isOpen ? tokens.borderAccent : tokens.border}`, borderRadius: 16, padding: 22, transition: 'all 0.25s', cursor: 'pointer', boxShadow: isOpen ? `0 0 24px ${tokens.accentBg}` : 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 10 }}>
                <span style={{ fontSize: 30 }}>{project.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ color: tokens.text, fontWeight: 700, fontSize: 16, margin: '0 0 3px' }}>{project.name}</h3>
                  <p style={{ color: tokens.accent, fontSize: 12, margin: 0 }}>{project.subtitle}</p>
                </div>
                <span style={{ color: tokens.textMuted, fontSize: 18 }}>{isOpen ? '↑' : '↓'}</span>
              </div>
              <p style={{ color: tokens.textMuted, fontSize: 13, lineHeight: 1.6, margin: '0 0 14px' }}>{project.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {project.tech.map(t => (
                  <span key={t} style={{ background: tokens.badgeBg, border: `1px solid ${tokens.badgeBorder}`, color: tokens.badgeText, padding: '2px 9px', borderRadius: 999, fontSize: 11 }}>{t}</span>
                ))}
              </div>
              {isOpen && (
                <div style={{ borderTop: `1px solid ${tokens.border}`, paddingTop: 14, marginTop: 14 }}>
                  <ul style={{ margin: 0, padding: '0 0 0 16px', display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {project.highlights.map((h, j) => (
                      <li key={j} style={{ color: tokens.textSecondary, fontSize: 13, lineHeight: 1.6 }}>{h}</li>
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
