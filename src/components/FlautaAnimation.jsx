import { useEffect, useRef, useState } from 'react'
import { UtensilsCrossed, Flame, Star } from 'lucide-react'

const TOTAL_FRAMES = 8
const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
  `/assets/flautas/frame-0${i + 1}.png`
)

export default function FlautaAnimation() {
  const containerRef = useRef(null)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Preload images
    framePaths.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const containerHeight = containerRef.current.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate progress (0 to 1) based on how far we've scrolled through the container
      const scrollableDistance = containerHeight - viewportHeight
      const scrolled = -rect.top
      const rawProgress = Math.max(0, Math.min(1, scrolled / scrollableDistance))

      setProgress(rawProgress)
      setCurrentFrame(Math.min(TOTAL_FRAMES - 1, Math.floor(rawProgress * TOTAL_FRAMES)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const textSections = [
    { threshold: 0.05, title: "Un vaso lleno de sabor", subtitle: "Nuestras flautas doradas, crujientes y llenas de tradición" },
    { threshold: 0.25, title: "Se van asomando...", subtitle: "Cada flauta hecha a mano con los mejores ingredientes" },
    { threshold: 0.5, title: "¡Separándose!", subtitle: "Rellenas de pollo, papa, o la combinación que prefieras" },
    { threshold: 0.75, title: "¡Listas para disfrutar!", subtitle: "Servidas con crema, lechuga, queso y salsa casera" },
  ]

  const activeText = [...textSections].reverse().find((s) => progress >= s.threshold) || textSections[0]

  return (
    <section className="scroll-animation-container bg-cream" ref={containerRef}>
      <div className="scroll-animation-sticky">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, #E91E8C 1px, transparent 1px), radial-gradient(circle at 75% 75%, #0D6E7E 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Decorative elements */}
        <img
          src="/assets/ornament-scroll.png"
          alt=""
          className="ornament absolute top-6 left-1/2 -translate-x-1/2 w-48 md:w-72 opacity-40"
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 max-w-7xl mx-auto w-full">
          {/* Text side */}
          <div className="text-center lg:text-left lg:max-w-md">
            <div key={activeText.title} className="animate-slide-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink/10 text-pink rounded-full text-sm font-semibold mb-4">
                <UtensilsCrossed size={13} /> Mamichulas Artesanales
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold gradient-text mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {activeText.title}
              </h2>
              <p className="text-lg text-teal-dark/70">
                {activeText.subtitle}
              </p>
            </div>

            {/* Progress bar */}
            <div className="mt-8 w-64 mx-auto lg:mx-0">
              <div className="h-1.5 bg-cream-dark rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink to-orange rounded-full transition-all duration-150"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <p className="text-xs text-teal-dark/40 mt-2">
                Desliza para ver la animación
              </p>
            </div>
          </div>

          {/* Image frame */}
          <div className="relative">
            <div
              className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #FFF8F0, #F5EDE3)',
              }}
            >
              {framePaths.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Flautas animación frame ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200"
                  style={{
                    opacity: i === currentFrame ? 1 : 0,
                  }}
                />
              ))}
            </div>

            {/* Glow ring */}
            <div
              className="absolute -inset-3 rounded-3xl border-2 border-pink/20 animate-pulse-glow pointer-events-none"
              style={{
                opacity: progress > 0.1 ? 1 : 0,
                transition: 'opacity 0.5s',
              }}
            />

            {/* Floating badges */}
            <div
              className="absolute -top-4 -right-4 bg-orange text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transition-all duration-500"
              style={{
                opacity: progress > 0.3 ? 1 : 0,
                transform: `scale(${progress > 0.3 ? 1 : 0.5})`,
              }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Flame size={13} /> Crujientes
              </span>
            </div>
            <div
              className="absolute -bottom-4 -left-4 bg-teal text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transition-all duration-500"
              style={{
                opacity: progress > 0.6 ? 1 : 0,
                transform: `scale(${progress > 0.6 ? 1 : 0.5})`,
              }}
            >
              <span className="inline-flex items-center gap-1.5">
                <Star size={13} fill="currentColor" /> Hechas a mano
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
