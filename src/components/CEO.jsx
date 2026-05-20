import { useEffect, useRef } from 'react'
import { Heart, Star, Sparkles } from 'lucide-react'

const paragraphs = [
  'Soy Ana Gaby González, mamá, emprendedora y el corazón detrás de Tía Petunia.',
  'Desde los 13 años he vivido con una condición llamada Displasia Fibrosa, una enfermedad que transformó mi vida para siempre y me llevó a pasar por múltiples cirugías de cráneo, procesos dolorosos, incertidumbre y momentos donde literalmente tuve que aprender a sobrevivir una y otra vez.',
  'He vivido el miedo desde muy cerca. He sentido lo que es despertar sin fuerzas, perder partes de ti y aun así tener que levantarte para sacar adelante a tus hijos, tu casa, tu equipo y tus sueños. Pero también descubrí algo: el amor, la fe y el humor curan más de lo que imaginamos.',
  'Entre hospitales, cicatrices, lágrimas y resiliencia nació Tía Petunia, un proyecto hecho con nostalgia, tradición y muchísimo corazón. Cocinar se convirtió en mi manera de sanar, de abrazar personas y de demostrar que incluso en medio del caos se puede crear algo hermoso.',
  'Hoy no solo vendo comida. Sirvo recuerdos, apapachos y esperanza. Porque aunque la vida me ha puesto pruebas muy fuertes, jamás me he rajado. Y si algo quiero dejar claro, es que siempre se puede volver a empezar… con buena onda, con amor y con muchísimo sazón.',
]

export default function CEO() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="ana-gaby"
      ref={sectionRef}
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0D6E7E 0%, #094E5A 60%, #073A44 100%)' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E91E8C 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 70%)' }}
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 px-5 py-2 rounded-full mb-5"
            style={{ background: 'rgba(233,30,140,0.15)', border: '1px solid rgba(233,30,140,0.35)' }}>
            <Heart size={14} fill="#E91E8C" color="#E91E8C" />
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#FF6EB4' }}>
              Nuestra CEO
            </span>
            <Heart size={14} fill="#E91E8C" color="#E91E8C" />
          </div>
          <h2
            className="reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: 'var(--font-heading)', transitionDelay: '0.1s' }}
          >
            Ana Gaby{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              González
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Photo side */}
          <div className="reveal flex-shrink-0 flex justify-center" style={{ transitionDelay: '0.15s' }}>
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl scale-105 opacity-50"
                style={{ background: 'linear-gradient(135deg, #E91E8C40, #F5A62340)' }}
              />

              {/* Photo frame */}
              <div
                className="relative w-72 md:w-80 lg:w-96 rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  border: '3px solid rgba(233,30,140,0.4)',
                  boxShadow: '0 30px 80px -20px rgba(233,30,140,0.4), 0 0 0 1px rgba(255,255,255,0.1)',
                }}
              >
                <img
                  src="/assets/ana-gaby-ceo.png"
                  alt="Ana Gaby González — CEO de Tía Petunia"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '3/4', objectPosition: 'center top' }}
                />

                {/* Overlay gradient at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-28"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(7,58,68,0.9) 0%, transparent 100%)',
                  }}
                />

                {/* Name tag on photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-heading)' }}>
                    Ana Gaby González
                  </p>
                  <p style={{ color: '#FF6EB4', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em' }}>
                    Fundadora & CEO · Tía Petunia
                  </p>
                </div>
              </div>

              {/* Floating badge — top right */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex flex-col items-center justify-center shadow-lg animate-float"
                style={{ background: 'linear-gradient(135deg, #E91E8C, #C4157A)' }}
              >
                <Star size={20} color="#fff" fill="#fff" />
                <span className="text-white text-xs font-bold mt-0.5">CEO</span>
              </div>

              {/* Floating badge — bottom left */}
              <div
                className="absolute -bottom-4 -left-4 px-3 py-2 rounded-2xl flex items-center gap-2 shadow-lg animate-float-reverse"
                style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                <Sparkles size={16} color="#F5A623" />
                <span className="text-white text-xs font-semibold">Con mucho sazón</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1 space-y-5">
            {/* Decorative quote mark */}
            <div
              className="reveal text-8xl leading-none font-bold opacity-20 -mb-6 -ml-1"
              style={{ color: '#E91E8C', fontFamily: 'Georgia, serif', transitionDelay: '0.05s' }}
            >
              "
            </div>

            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="reveal text-base md:text-lg leading-relaxed"
                style={{
                  color: i === 0 ? '#fff' : 'rgba(255,255,255,0.78)',
                  fontWeight: i === 0 ? 600 : 400,
                  fontSize: i === 0 ? '1.15rem' : undefined,
                  transitionDelay: `${0.2 + i * 0.1}s`,
                }}
              >
                {text}
              </p>
            ))}

            {/* Closing signature */}
            <div
              className="reveal pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center gap-4"
              style={{ borderColor: 'rgba(255,255,255,0.12)', transitionDelay: '0.75s' }}
            >
              {/* Pink accent line */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5" style={{ background: 'linear-gradient(90deg, #E91E8C, #F5A623)' }} />
                <p
                  className="text-white font-bold text-lg italic"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Ana Gaby González
                </p>
              </div>

              {/* Values pills */}
              <div className="flex flex-wrap gap-2 sm:ml-auto">
                {['Mamá', 'Emprendedora', 'Resiliente'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(233,30,140,0.15)',
                      border: '1px solid rgba(233,30,140,0.3)',
                      color: '#FF6EB4',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
