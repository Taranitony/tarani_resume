import { useState } from 'react'
import { skills } from '../data/resume'
import { useTheme } from '../lib/ThemeContext'

const categoryColors = [
  { bg: 'rgba(239,68,68,0.1)',   border: 'rgba(239,68,68,0.35)',   text: '#f87171' },
  { bg: 'rgba(249,115,22,0.1)',  border: 'rgba(249,115,22,0.35)',  text: '#fb923c' },
  { bg: 'rgba(234,179,8,0.1)',   border: 'rgba(234,179,8,0.35)',   text: '#facc15' },
  { bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.35)',   text: '#4ade80' },
  { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.35)',  text: '#60a5fa' },
  { bg: 'rgba(168,85,247,0.1)',  border: 'rgba(168,85,247,0.35)', text: '#c084fc' },
  { bg: 'rgba(236,72,153,0.1)',  border: 'rgba(236,72,153,0.35)', text: '#f472b6' },
]

export function SectionTitle({ label }: { label: string }) {
  const { tokens } = useTheme()
  return (
    <div style={{ marginBottom: 48, textAlign: 'center' }}>
      <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, margin: '0 0 12px', background: tokens.gradientText, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        {label}
      </h2>
      <div style={{ width: 56, height: 3, background: tokens.gradientAccent, margin: '0 auto', borderRadius: 999 }} />
    </div>
  )
}

export default function Skills() {
  const { tokens } = useTheme()
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="skills" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionTitle label="Technical Skills" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
        {skills.map((group, i) => {
          const color = categoryColors[i % categoryColors.length]
          const isActive = active === i
          return (
            <div key={group.category} onClick={() => setActive(isActive ? null : i)}
              style={{
                background: isActive ? color.bg : tokens.bgCard,
                border: `1px solid ${isActive ? color.border : tokens.border}`,
                borderRadius: 14, padding: 22, cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: isActive ? `0 0 20px ${color.bg}` : 'none',
              }}
            >
              <h3 style={{ color: isActive ? color.text : tokens.text, fontWeight: 700, fontSize: 14, margin: '0 0 14px', letterSpacing: 0.3 }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {group.items.map(item => (
                  <span key={item} style={{
                    background: isActive ? color.bg : tokens.bgSection,
                    border: `1px solid ${isActive ? color.border : tokens.border}`,
                    color: isActive ? color.text : tokens.textSecondary,
                    padding: '3px 10px', borderRadius: 999, fontSize: 11.5, fontWeight: 500,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
