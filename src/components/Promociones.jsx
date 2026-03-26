import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { slides } from '../data/promociones'

export default function Promociones() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')
  const timeoutRef = useRef(null)
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  const goTo = (index, dir = 'next') => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 420)
  }

  const next = () => goTo((current + 1) % slides.length, 'next')
  const prev = () => goTo((current - 1 + slides.length) % slides.length, 'prev')

  // Auto-play
  useEffect(() => {
    timeoutRef.current = setTimeout(next, 4500)
    return () => clearTimeout(timeoutRef.current)
  }, [current])

  // Reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="promociones"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #FFF0F6 0%, #FFF8F0 50%, #F0FAFA 100%)',
        padding: '80px 0 90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-80px', left: '-80px',
        width: '260px', height: '260px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(233,30,140,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', right: '-60px',
        width: '220px', height: '220px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13,110,126,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Section header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '48px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.75s ease, transform 0.75s ease',
        }}
      >
        <span style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #E91E8C22, #F5A62322)',
          color: '#C4157A',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: '0.8rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '6px 20px',
          borderRadius: '100px',
          marginBottom: '16px',
          border: '1px solid rgba(233,30,140,0.18)',
        }}>
          Ofertas de temporada
        </span>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          color: '#1a1a2e',
          margin: '0 0 12px',
          lineHeight: 1.15,
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
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: '#666',
          fontSize: '1.05rem',
          maxWidth: '480px',
          margin: '0 auto',
        }}>
          Sabor auténtico con las mejores ofertas para ti y tu familia
        </p>
      </div>

      {/* Carousel */}
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '0 20px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s',
        }}
      >
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 24px 64px -12px rgba(233,30,140,0.18), 0 8px 24px rgba(0,0,0,0.08)',
        }}>
          {/* Clickable image area */}
          <div
            onClick={() => navigate('/promociones')}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16/9',
              background: '#F5EDE3',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.src}
                alt={slide.alt}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: i === current ? (animating ? 0 : 1) : 0,
                  transform: i === current
                    ? (animating
                      ? (direction === 'next' ? 'translateX(30px)' : 'translateX(-30px)')
                      : 'translateX(0)')
                    : 'translateX(0)',
                  transition: 'opacity 0.42s cubic-bezier(0.4,0,0.2,1), transform 0.42s cubic-bezier(0.4,0,0.2,1)',
                  pointerEvents: 'none',
                }}
              />
            ))}

            {/* Gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(26,26,46,0.78) 0%, rgba(26,26,46,0.15) 50%, transparent 100%)',
              pointerEvents: 'none',
            }} />

            {/* "Ver más" hover hint */}
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(233,30,140,0)',
              transition: 'background 0.3s',
              pointerEvents: 'none',
            }}
              className="carousel-hover-hint"
            />

            {/* Text overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '32px 36px',
              zIndex: 2,
              pointerEvents: 'none',
            }}>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
                color: '#fff',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                padding: '4px 14px',
                borderRadius: '100px',
                marginBottom: '10px',
                fontFamily: 'var(--font-body)',
              }}>
                {slides[current].tag}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                color: '#fff',
                fontSize: 'clamp(1.3rem, 4vw, 2rem)',
                margin: '0 0 6px',
                lineHeight: 1.2,
                textShadow: '0 2px 12px rgba(0,0,0,0.4)',
              }}>
                {slides[current].title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                color: 'rgba(255,255,255,0.88)',
                fontSize: '0.97rem',
                margin: '0 0 12px',
                textShadow: '0 1px 6px rgba(0,0,0,0.3)',
              }}>
                {slides[current].subtitle}
              </p>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255,255,255,0.18)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.8rem',
                padding: '7px 18px',
                borderRadius: '100px',
                letterSpacing: '0.04em',
              }}>
                Ver promoción completa →
              </span>
            </div>

            {/* Arrow buttons — stop propagation so they don't navigate */}
            {[
              { action: (e) => { e.stopPropagation(); prev() }, side: 'left', icon: '‹' },
              { action: (e) => { e.stopPropagation(); next() }, side: 'right', icon: '›' },
            ].map(({ action, side, icon }) => (
              <button
                key={side}
                onClick={action}
                style={{
                  position: 'absolute',
                  top: '50%',
                  [side]: '16px',
                  transform: 'translateY(-50%)',
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(255,255,255,0.18)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  color: '#fff',
                  fontSize: '1.8rem',
                  lineHeight: 1,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.25s, transform 0.25s',
                  zIndex: 3,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(233,30,140,0.7)'
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
                }}
              >
                {icon}
              </button>
            ))}
          </div>

          {/* Dots + "ver todas" */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
            padding: '18px 24px 22px',
            background: '#fff',
          }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                  style={{
                    width: i === current ? '32px' : '10px',
                    height: '10px',
                    borderRadius: '100px',
                    border: 'none',
                    background: i === current
                      ? 'linear-gradient(135deg, #E91E8C, #F5A623)'
                      : 'rgba(233,30,140,0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
                    padding: 0,
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => navigate('/promociones')}
              style={{
                background: 'none',
                border: '1.5px solid rgba(233,30,140,0.3)',
                color: '#C4157A',
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.8rem',
                padding: '6px 16px',
                borderRadius: '100px',
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #E91E8C, #F5A623)'
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.border = '1.5px solid transparent'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'none'
                e.currentTarget.style.color = '#C4157A'
                e.currentTarget.style.border = '1.5px solid rgba(233,30,140,0.3)'
              }}
            >
              Ver todas →
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{
          marginTop: '18px',
          height: '3px',
          borderRadius: '100px',
          background: 'rgba(233,30,140,0.12)',
          overflow: 'hidden',
        }}>
          <div
            key={current}
            style={{
              height: '100%',
              borderRadius: '100px',
              background: 'linear-gradient(90deg, #E91E8C, #F5A623)',
              animation: 'carouselProgress 4.5s linear forwards',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes carouselProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  )
}
