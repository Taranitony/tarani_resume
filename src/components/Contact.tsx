import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { personal } from '../data/resume'
import { SectionTitle } from './Skills'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')

    const { error } = await supabase.from('contact_messages').insert([form])
    if (error) {
      setStatus('error')
    } else {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(15,23,42,0.8)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: '12px 16px',
    color: '#f1f5f9',
    fontSize: 15,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ padding: '80px 24px', background: 'rgba(15,23,42,0.5)' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <SectionTitle label="Get In Touch" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="contact-grid">
          {/* Info */}
          <div>
            <p style={{ color: '#94a3b8', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
              I'm actively looking for SOC Analyst, Security Engineer, and Security Operations roles.
              If you have an opportunity or just want to connect, reach out!
            </p>

            {[
              { icon: '📧', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
              { icon: '📱', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
              { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/tarani-antony', href: personal.linkedin },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16,
                  background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 12, padding: 16, textDecoration: 'none',
                  transition: 'border-color 0.2s',
                }}
              >
                <span style={{ fontSize: 24 }}>{item.icon}</span>
                <div>
                  <p style={{ color: '#64748b', fontSize: 11, margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: 1 }}>{item.label}</p>
                  <p style={{ color: '#22d3ee', fontSize: 14, margin: 0, fontWeight: 500 }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ color: '#64748b', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>
                Name
              </label>
              <input
                style={inputStyle}
                placeholder="Your name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <label style={{ color: '#64748b', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>
                Email
              </label>
              <input
                type="email"
                style={inputStyle}
                placeholder="your@email.com"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                required
              />
            </div>
            <div>
              <label style={{ color: '#64748b', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 6 }}>
                Message
              </label>
              <textarea
                style={{ ...inputStyle, minHeight: 120, resize: 'vertical' }}
                placeholder="Your message..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                background: status === 'loading' ? 'rgba(34,211,238,0.3)' : 'linear-gradient(90deg, #22d3ee, #3b82f6)',
                color: '#000', padding: '14px', borderRadius: 10,
                fontWeight: 700, fontSize: 15, border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 10, padding: 14, color: '#86efac', fontSize: 14, textAlign: 'center' }}>
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: 14, color: '#fca5a5', fontSize: 14, textAlign: 'center' }}>
                ❌ Something went wrong. Please email me directly.
              </div>
            )}
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
