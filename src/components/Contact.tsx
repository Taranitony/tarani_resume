import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { personal } from '../data/resume'
import { SectionTitle } from './Skills'
import { useTheme } from '../lib/ThemeContext'

export default function Contact() {
  const { tokens, theme } = useTheme()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    const { error } = await supabase.from('contact_messages').insert([form])
    if (error) { setStatus('error') }
    else { setStatus('success'); setForm({ name: '', email: '', message: '' }) }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: tokens.inputBg, border: `1px solid ${tokens.inputBorder}`,
    borderRadius: 10, padding: '11px 14px', color: tokens.text, fontSize: 14,
    outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" style={{ padding: '80px 24px', background: tokens.bgSection }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <SectionTitle label="Get In Touch" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="contact-grid">
          <div>
            <p style={{ color: tokens.textSecondary, fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
              Actively looking for SOC Analyst, Security Engineer, and Security Operations roles. Feel free to reach out!
            </p>
            {[
              { icon: '📧', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
              { icon: '📱', label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
              { icon: '💼', label: 'LinkedIn', value: 'tarani-antony-8a2013205', href: personal.linkedin },
            ].map(item => (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, background: tokens.bgCard, border: `1px solid ${tokens.border}`, borderRadius: 12, padding: 14, textDecoration: 'none', transition: 'border-color 0.2s' }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div>
                  <p style={{ color: tokens.textMuted, fontSize: 10, margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: 1 }}>{item.label}</p>
                  <p style={{ color: tokens.accent, fontSize: 13, margin: 0, fontWeight: 500 }}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[{ label: 'Name', type: 'text', key: 'name', placeholder: 'Your name' }, { label: 'Email', type: 'email', key: 'email', placeholder: 'your@email.com' }].map(f => (
              <div key={f.key}>
                <label style={{ color: tokens.textMuted, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>{f.label}</label>
                <input type={f.type} style={inputStyle} placeholder={f.placeholder} value={(form as any)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} required />
              </div>
            ))}
            <div>
              <label style={{ color: tokens.textMuted, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Message</label>
              <textarea style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }} placeholder="Your message..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} required />
            </div>
            <button type="submit" disabled={status === 'loading'}
              style={{ background: tokens.gradientAccent, color: theme === 'dark' ? '#000' : '#fff', padding: '13px', borderRadius: 10, fontWeight: 700, fontSize: 15, border: 'none', cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: 10, padding: 12, color: '#4ade80', fontSize: 13, textAlign: 'center' }}>✅ Message sent!</div>}
            {status === 'error' && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: 12, color: '#f87171', fontSize: 13, textAlign: 'center' }}>❌ Something went wrong. Email me directly.</div>}
          </form>
        </div>
      </div>
      <style>{`@media (max-width: 640px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}
