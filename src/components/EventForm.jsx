import { useState } from 'react'
import { User, Phone, Users, MapPin, Calendar, Send, PartyPopper, CheckCircle } from 'lucide-react'

export default function EventForm() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    personas: '',
    ubicacion: '',
    fecha: '',
  })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `🎉 *Solicitud de Evento - Tía Petunia*\n\n` +
      `👤 Nombre: ${form.nombre}\n` +
      `📞 Teléfono: ${form.telefono}\n` +
      `👥 Personas: ${form.personas}\n` +
      `📍 Ubicación: ${form.ubicacion}\n` +
      `📅 Fecha: ${form.fecha}\n\n` +
      `¡Hola! Me gustaría contratar sus servicios para un evento.`
    )
    window.open(`https://wa.me/523314436726?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 6000)
    setForm({ nombre: '', telefono: '', personas: '', ubicacion: '', fecha: '' })
  }

  const fields = [
    { name: 'nombre',    label: 'Nombre completo',          Icon: User,        type: 'text',   placeholder: 'Tu nombre...' },
    { name: 'telefono',  label: 'Teléfono de contacto',     Icon: Phone,       type: 'tel',    placeholder: '33 0000 0000' },
    { name: 'personas',  label: 'Cantidad de asistentes',   Icon: Users,       type: 'number', placeholder: 'Ej: 50' },
    { name: 'ubicacion', label: 'Ubicación del evento',     Icon: MapPin,      type: 'text',   placeholder: 'Domicilio o colonia...' },
    { name: 'fecha',     label: 'Fecha del evento',         Icon: Calendar,    type: 'date',   placeholder: '' },
  ]

  return (
    <section id="eventos" style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 24px 100px',
      background: 'linear-gradient(160deg, #0a3d47 0%, #094E5A 40%, #0b2e36 100%)',
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(233,30,140,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(233,30,140,0.15)',
            border: '1px solid rgba(233,30,140,0.3)',
            color: '#ff80c4',
            fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: '100px', marginBottom: '20px',
          }}>
            <PartyPopper size={13} /> Eventos & Catering
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#fff', margin: '0 0 16px', lineHeight: 1.15,
          }}>
            ¿Tienes un evento especial?
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1.05rem', maxWidth: '520px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Llevamos el sabor de Tía Petunia a tu fiesta, reunión o celebración.
            Cuéntanos los detalles y te contactamos a la brevedad. 🎊
          </p>
        </div>

        {/* Form Card */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '28px',
          padding: 'clamp(28px, 5vw, 48px)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
        }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <CheckCircle size={56} color="#4ade80" style={{ marginBottom: '16px' }} />
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem', color: '#fff', marginBottom: '10px',
              }}>
                ¡Solicitud enviada!
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                color: 'rgba(255,255,255,0.65)', fontSize: '1rem',
              }}>
                Te redirigimos a WhatsApp. ¡Pronto te contactamos!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '20px',
                marginBottom: '28px',
              }}>
                {fields.map(({ name, label, Icon, type, placeholder }) => (
                  <div key={name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{
                      fontFamily: 'var(--font-body)', fontWeight: 600,
                      fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)',
                      display: 'flex', alignItems: 'center', gap: '6px',
                    }}>
                      <Icon size={13} color="rgba(255,255,255,0.5)" />
                      {label}
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={type}
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(name)}
                        onBlur={() => setFocused('')}
                        placeholder={placeholder}
                        required
                        min={type === 'number' ? 1 : undefined}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: '14px',
                          border: focused === name
                            ? '1.5px solid rgba(233,30,140,0.7)'
                            : '1.5px solid rgba(255,255,255,0.12)',
                          background: focused === name
                            ? 'rgba(233,30,140,0.07)'
                            : 'rgba(255,255,255,0.06)',
                          color: '#fff',
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.93rem',
                          outline: 'none',
                          transition: 'all 0.25s',
                          boxSizing: 'border-box',
                          boxShadow: focused === name ? '0 0 0 4px rgba(233,30,140,0.12)' : 'none',
                          colorScheme: 'dark',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  borderRadius: '100px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 8px 28px rgba(233,30,140,0.4)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 14px 36px rgba(233,30,140,0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(233,30,140,0.4)'
                }}
              >
                <Send size={18} />
                Enviar por WhatsApp
              </button>

              <p style={{
                textAlign: 'center',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.35)',
                marginTop: '16px',
              }}>
                Al enviar, abriremos WhatsApp con tu solicitud lista para enviar.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
