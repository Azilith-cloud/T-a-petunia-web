import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { slides } from '../data/promociones'

export default function Promociones() {
  const sectionRef = useRef(null)
  const scrollRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftPos = useRef(0)
  const [visible, setVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate()

  const handleMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - scrollRef.current.offsetLeft
    scrollLeftPos.current = scrollRef.current.scrollLeft
    scrollRef.current.style.scrollSnapType = 'none'
    scrollRef.current.style.cursor = 'grabbing'
  }

  const handleMouseUpOrLeave = () => {
    isDragging.current = false
    setIsHovered(false)
    if (scrollRef.current) {
      scrollRef.current.style.scrollSnapType = 'x mandatory'
      scrollRef.current.style.cursor = ''
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    setIsHovered(true)
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk
  }

  const handleCardClick = (e, path) => {
    if (Math.abs(scrollRef.current.scrollLeft - scrollLeftPos.current) > 10) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    navigate(path)
  }

  // Auto-play carousel
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      if (scrollRef.current && scrollRef.current.children.length > 0) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        const cardWidth = scrollRef.current.children[0].offsetWidth + 24 // + gap
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
        }
      }
    }, 4000)
    return () => clearInterval(interval)
  }, [isHovered])

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

      {/* Carousel Container */}
      <div
        style={{
          width: '100%',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s',
          paddingBottom: '20px',
        }}
      >
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseUp={handleMouseUpOrLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '24px',
            padding: '20px max(20px, calc(50% - 410px))',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          className="no-scrollbar"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              onClick={(e) => handleCardClick(e, '/promociones')}
              style={{
                flex: '0 0 auto',
                width: 'min(90vw, 820px)',
                scrollSnapAlign: 'center',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '16/9',
                cursor: 'pointer',
                boxShadow: '0 24px 64px -12px rgba(233,30,140,0.18), 0 8px 24px rgba(0,0,0,0.08)',
                transform: 'scale(1)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 32px 72px -12px rgba(233,30,140,0.25), 0 12px 32px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 24px 64px -12px rgba(233,30,140,0.18), 0 8px 24px rgba(0,0,0,0.08)'
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(26,26,46,0.85) 0%, rgba(26,26,46,0.2) 60%, transparent 100%)',
                pointerEvents: 'none',
              }} />

              {/* Text overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 'min(36px, 8vw)',
                zIndex: 2,
                pointerEvents: 'none',
              }}>
                <span style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
                  color: '#fff',
                  fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  marginBottom: '12px',
                  fontFamily: 'var(--font-body)',
                  boxShadow: '0 4px 12px rgba(233,30,140,0.3)',
                }}>
                  {slide.tag}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  color: '#fff',
                  fontSize: 'clamp(1.5rem, 5vw, 2.4rem)',
                  margin: '0 0 8px',
                  lineHeight: 1.1,
                  textShadow: '0 2px 14px rgba(0,0,0,0.5)',
                }}>
                  {slide.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
                  margin: '0 0 16px',
                  textShadow: '0 1px 8px rgba(0,0,0,0.4)',
                }}>
                  {slide.subtitle}
                </p>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  color: '#fff',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                  padding: '8px 20px',
                  borderRadius: '100px',
                  letterSpacing: '0.05em',
                  transition: 'background 0.3s',
                }}>
                  Ver promoción completa →
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Helper text for mobile */}
        <div style={{
          textAlign: 'center',
          marginTop: '24px',
          fontFamily: 'var(--font-body)',
          color: '#888',
          fontSize: '0.9rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span>Desliza para ver más</span>
          <span style={{ fontSize: '1.2rem', animation: 'bounceX 1.5s infinite' }}>→</span>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  )
}
