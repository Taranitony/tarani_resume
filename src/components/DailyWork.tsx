import { useTheme } from '../lib/ThemeContext'
import { SectionTitle } from './Skills'

const dailyTasks = [
  {
    icon: '🖥️',
    title: 'MDM & Device Management',
    description: 'Managing and monitoring all endpoints via MDM — enforcing policies, pushing configurations, and keeping devices secure and compliant across macOS and Windows fleets.',
  },
  {
    icon: '🔑',
    title: 'Onboarding & Offboarding',
    description: 'Provisioning new joiners with the right access across SaaS apps and revoking all access on exits — ensuring zero orphaned accounts and clean identity hygiene.',
  },
  {
    icon: '🛡️',
    title: 'Security Checks',
    description: 'Reviewing device compliance, enforcing endpoint security policies, auditing software inventory, and flagging any unauthorised apps or risky configurations.',
  },
  {
    icon: '🔥',
    title: 'Firewall Reviews',
    description: 'Conducting weekly firewall policy reviews on FortiGate and pfSense — updating rules, reviewing traffic logs, and ensuring access controls align with business needs.',
  },
  {
    icon: '🔍',
    title: 'Vulnerability Assessment',
    description: 'Identifying and prioritising CVEs across the fleet, coordinating patches, and tracking remediation to close exposure windows before they become incidents.',
  },
]

export default function DailyWork() {
  const { tokens, theme } = useTheme()

  return (
    <section id="daily-work" style={{ padding: '80px 24px', background: tokens.bgSection, position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionTitle label="My Regular Works" />

        <p style={{ textAlign: 'center', color: tokens.textMuted, fontSize: 15, marginTop: -28, marginBottom: 48, maxWidth: 600, margin: '-28px auto 48px' }}>
          Day-to-day responsibilities that keep systems secure and running
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {dailyTasks.map((task, i) => (
            <div
              key={i}
              style={{
                background: tokens.bgCard,
                border: `1px solid ${tokens.border}`,
                borderRadius: 16,
                padding: '28px 26px',
                transition: 'all 0.25s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = tokens.borderAccent
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 8px 32px ${tokens.glowBg}`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = tokens.border
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Accent top line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: tokens.gradientAccent,
                opacity: 0.6,
                borderRadius: '16px 16px 0 0',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                {/* Icon */}
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: tokens.accentBg,
                  border: `1px solid ${tokens.accentBorder}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24,
                }}>
                  {task.icon}
                </div>

                <div>
                  <h3 style={{
                    color: tokens.text, fontWeight: 700, fontSize: 15,
                    margin: '0 0 8px', letterSpacing: '-0.2px',
                  }}>
                    {task.title}
                  </h3>
                  <p style={{
                    color: tokens.textSecondary, fontSize: 13.5, lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {task.description}
                  </p>
                </div>
              </div>

              {/* Subtle number */}
              <div style={{
                position: 'absolute', bottom: 14, right: 18,
                fontSize: 32, fontWeight: 900, lineHeight: 1,
                color: theme === 'dark' ? 'rgba(245,158,11,0.06)' : 'rgba(180,83,9,0.06)',
                userSelect: 'none',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
