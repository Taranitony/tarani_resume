import { useState } from 'react'
import { skills } from '../data/resume'

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  'Security Operations':   { bg: 'rgba(239,68,68,0.1)',   border: 'rgba(239,68,68,0.3)',   text: '#fca5a5' },
  'Firewall & Network':    { bg: 'rgba(249,115,22,0.1)',  border: 'rgba(249,115,22,0.3)',  text: '#fdba74' },
  'Identity & Access':     { bg: 'rgba(234,179,8,0.1)',   border: 'rgba(234,179,8,0.3)',   text: '#fde047' },
  'Endpoint Security & EDR': { bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)',  text: '#86efac' },
  'Cloud & SaaS Security': { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.3)',  text: '#93c5fd' },
  'Security Engineering':  { bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.3)', text: '#d8b4fe' },
}

export default function Skills() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section id="skills" style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <SectionTitle label="Technical Skills" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
        {skills.map(group => {
          const color = categoryColors[group.category] || { bg: 'rgba(34,211,238,0.1)', border: 'rgba(34,211,238,0.3)', text: '#67e8f9' }
          const isActive = active === group.category
          return (
            <div
              key={group.category}
              onClick={() => setActive(isActive ? null : group.category)}
              style={{
                background: isActive ? color.bg : 'rgba(15,23,42,0.8)',
                border: `1px solid ${isActive ? color.border : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 16,
                padding: 24,
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: isActive ? `0 0 24px ${color.bg}` : 'none',
              }}
            >
              <h3 style={{ color: isActive ? color.text : '#e2e8f0', fontWeight: 700, fontSize: 15, marginBottom: 16, margin: '0 0 16px' }}>
                {group.category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {group.items.map(item => (
                  <span
                    key={item}
                    style={{
                      background: isActive ? color.bg : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${isActive ? color.border : 'rgba(255,255,255,0.1)'}`,
                      color: isActive ? color.text : '#94a3b8',
                      padding: '4px 12px',
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
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

export function SectionTitle({ label }: { label: string }) {
  return (
    <div style={{ marginBottom: 48, textAlign: 'center' }}>
      <h2 style={{
        fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, margin: '0 0 12px',
        background: 'linear-gradient(90deg, #f1f5f9, #94a3b8)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>
        {label}
      </h2>
      <div style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #22d3ee, #3b82f6)', margin: '0 auto', borderRadius: 999 }} />
    </div>
  )
}
