import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cards = [
  { id: 'gorditas', label: 'Tías (Gorditas)', image: '/assets/chilaquiles rojos gordita.png' },
  { id: 'flautas', label: 'Mamichulas (flautas en vaso)', image: '/assets/mamichulas vaso.jpeg' },
  { id: 'quesadillas', label: 'Quesadillas', image: '/assets/quesadilla.jpeg' },
  { id: 'especialidades', label: 'Especialidades', image: '/assets/mami birrias.jpeg' },
  { id: 'lonches', label: 'Lonches', image: '/assets/lonches.jpeg' },
]

export default function QuickSelection() {
  const scrollRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftPos = useRef(0)
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
    }, 4500) // Cambiado a 4.5s para que se puedan leer las tarjetas
    return () => clearInterval(interval)
  }, [isHovered])

  return (
    <section 
      style={{ backgroundColor: '#094E5A' }} 
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex justify-between items-center mb-10">
          <h2 
            className="text-white text-3xl md:text-4xl font-bold"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Selección Rápida
          </h2>
        </div>

        <div 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUpOrLeave}
          onMouseUp={handleMouseUpOrLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar -mx-6 md:-mx-12"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            paddingLeft: 'max(24px, calc(50% - 640px))',
            paddingRight: 'max(24px, calc(50% - 640px))',
          }}
        >
          {cards.map((card, i) => (
            <div 
              key={card.id} 
              onClick={(e) => handleCardClick(e, '/menu')}
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl transition-transform duration-500 hover:-translate-y-2 shrink-0 snap-center"
              style={{ 
                animation: `slideUp 0.6s ease-out ${i * 0.15}s both`,
                width: 'min(85vw, 300px)',
                aspectRatio: '4/3',
              }}
            >
              <img 
                src={card.image} 
                alt={card.label} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
              
              <h3 
                className="absolute bottom-6 left-0 right-0 text-center text-white font-bold text-2xl tracking-wide drop-shadow-xl"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {card.label}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Helper text for mobile */}
        <div 
          className="text-center mt-2 text-white/50 text-sm font-medium flex justify-center items-center gap-2 lg:hidden"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          <span>Desliza para explorar</span>
          <span style={{ fontSize: '1.2rem', animation: 'bounceX 1.5s infinite' }}>→</span>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceX {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
      `}</style>
    </section>
  )
}
