import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { slides } from '../data/promociones'

function PromoCard({ slide, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: '0',
        borderRadius: '28px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px -12px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(48px)',
        transition: `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`,
        background: '#fff',
      }}
    >
      {/* Image */}
      <div style={{
        order: isEven ? 0 : 1,
        position: 'relative',
        overflow: 'hidden',
        minHeight: '340px',
      }}>
        <img
          src={slide.src}
          alt={slide.alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.6s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
        />
        {/* Badge */}
        <span style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: slide.badgeColor,
          color: '#fff',
          fontFamily: 'var(--font-body)',
          fontWeight: 700,
          fontSize: '0.72rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '5px 14px',
          borderRadius: '100px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}>
          {slide.badge}
        </span>
      </div>

      {/* Content */}
      <div style={{
        order: isEven ? 1 : 0,
        padding: '52px 48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#fff',
      }}>
        <span style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, rgba(233,30,140,0.08), rgba(245,166,35,0.08))',
          color: '#C4157A',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '0.78rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '5px 16px',
          borderRadius: '100px',
          marginBottom: '20px',
          border: '1px solid rgba(233,30,140,0.15)',
          alignSelf: 'flex-start',
        }}>
          {slide.tag}
        </span>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          color: '#1a1a2e',
          margin: '0 0 14px',
          lineHeight: 1.2,
        }}>
          {slide.title}
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          color: '#C4157A',
          fontWeight: 600,
          fontSize: '1rem',
          margin: '0 0 16px',
        }}>
          {slide.subtitle}
        </p>

        <p style={{
          fontFamily: 'var(--font-body)',
          color: '#555',
          fontSize: '0.97rem',
          lineHeight: 1.7,
          margin: '0 0 32px',
        }}>
          {slide.description}
        </p>

        <a
          href="#contacto"
          onClick={() => window.location.href = '/#contacto'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '0.92rem',
            padding: '13px 28px',
            borderRadius: '100px',
            textDecoration: 'none',
            alignSelf: 'flex-start',
            boxShadow: '0 8px 24px rgba(233,30,140,0.25)',
            transition: 'transform 0.25s, box-shadow 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(233,30,140,0.35)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(233,30,140,0.25)'
          }}
        >
          ¡Quiero esta promo! →
        </a>
      </div>
    </div>
  )
}

export default function PromocionesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-cream)' }}>
      {/* Hero Banner */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #0D6E7E 50%, #094E5A 100%)',
        padding: '120px 20px 80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: '-60px', right: '-60px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,30,140,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-40px', left: '-40px',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Back link */}
        <Link
          to="/"
          style={{
            position: 'absolute',
            top: '90px',
            left: '28px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'rgba(255,255,255,0.7)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.88rem',
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.2s',
            zIndex: 10,
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#fff'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
        >
          ← Volver al inicio
        </Link>

        <span style={{
          display: 'inline-block',
          background: 'rgba(233,30,140,0.2)',
          border: '1px solid rgba(233,30,140,0.35)',
          color: '#FF6EB4',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '0.78rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          padding: '6px 20px',
          borderRadius: '100px',
          marginBottom: '20px',
        }}>
          Ofertas de temporada
        </span>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2.4rem, 6vw, 4rem)',
          color: '#fff',
          margin: '0 0 16px',
          lineHeight: 1.1,
        }}>
          Nuestras{' '}
          <span style={{
            background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Promociones
          </span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          color: 'rgba(255,255,255,0.72)',
          fontSize: '1.1rem',
          maxWidth: '500px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Sabor auténtico con las mejores ofertas para ti y tu familia. ¡No te quedes sin aprovecharlas!
        </p>

        {/* Wave divider */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', display: 'block' }}>
            <path d="M0,30 C360,70 1080,-10 1440,30 L1440,60 L0,60 Z" fill="var(--color-cream)" />
          </svg>
        </div>
      </div>

      {/* Promo Cards */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '70px 24px 100px',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px',
      }}>
        {slides.map((slide, i) => (
          <PromoCard key={slide.id} slide={slide} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #FFF0F6 0%, #FFF8F0 100%)',
        padding: '60px 24px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: '#888',
          fontSize: '0.9rem',
          marginBottom: '12px',
        }}>
          ¿Tienes preguntas sobre nuestras promociones?
        </p>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          color: '#1a1a2e',
          margin: '0 0 24px',
        }}>
          ¡Contáctanos ahora mismo!
        </h3>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #0D6E7E, #1A9AAE)',
            color: '#fff',
            fontFamily: 'var(--font-body)',
            fontWeight: 700,
            fontSize: '0.92rem',
            padding: '13px 32px',
            borderRadius: '100px',
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(13,110,126,0.25)',
            transition: 'transform 0.25s, box-shadow 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
          }}
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  )
}
