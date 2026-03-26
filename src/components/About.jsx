import { useEffect, useRef } from 'react'
import { ChefHat, Heart } from 'lucide-react'

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="py-20 md:py-32 relative overflow-hidden bg-cream" ref={sectionRef}>
      {/* Decorative scroll ornament */}
      <img
        src="/assets/ornament-scroll.png"
        alt=""
        className="ornament absolute top-6 left-1/2 -translate-x-1/2 w-48 opacity-20"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Character */}
          <div className="reveal flex-1 flex justify-center">
            <div className="relative">
              {/* Circular glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-orange/20 rounded-full blur-3xl scale-110" />
              
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <img
                  src="/assets/abuela-body.jpg"
                  alt="Tía Petunia - La abuela cocinera"
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 right-0 bg-white rounded-2xl shadow-xl p-3 animate-float flex items-center justify-center">
                <ChefHat size={24} color="#E91E8C" />
              </div>
              <div className="absolute bottom-8 -left-4 bg-white rounded-2xl shadow-xl p-3 animate-float-reverse flex items-center justify-center">
                <Heart size={24} color="#E91E8C" fill="#E91E8C" />
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="flex-1 text-center lg:text-left">
            <div className="reveal">
              <span className="inline-block px-4 py-1.5 bg-pink/10 text-pink rounded-full text-sm font-semibold mb-4">
                Nuestra Historia
              </span>
            </div>

            <h2
              className="reveal text-4xl md:text-5xl font-bold gradient-text mb-6"
              style={{ fontFamily: 'var(--font-heading)', transitionDelay: '0.1s' }}
            >
              Conoce a Tía Petunia
            </h2>

            <div className="space-y-4">
              <p className="reveal text-lg text-teal-dark/70 leading-relaxed" style={{ transitionDelay: '0.2s' }}>
                Tía Petunia nació de la tradición familiar, donde cada receta se hereda con cariño de generación en generación. 
                Nuestra abuelita siempre decía: <em className="text-pink font-semibold">"la comida hecha con amor se saborea diferente"</em>.
              </p>

              <p className="reveal text-lg text-teal-dark/70 leading-relaxed" style={{ transitionDelay: '0.3s' }}>
                Con ingredientes frescos, masa hecha a mano cada mañana y salsas preparadas con recetas secretas, 
                cada gordita, flauta y quesadilla es un pedacito de hogar.
              </p>

              <p className="reveal text-lg text-teal-dark/70 leading-relaxed" style={{ transitionDelay: '0.4s' }}>
                Nuestro sueño siempre fue compartir el sabor casero con todos. Y ahora, 
                <span className="font-bold text-teal"> Tía Petunia te invita a su mesa</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-8 mt-10" style={{ transitionDelay: '0.5s' }}>
              {[
                { number: '15+', label: 'Años de tradición' },
                { number: '3K+', label: 'Clientes felices' },
                { number: '100%', label: 'Hecho a mano' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-sm text-teal-dark/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
