import { useEffect, useRef } from 'react'
import { Star, Sparkles, Wheat, Flame, Salad, ChefHat } from 'lucide-react'

export default function Especialidad() {
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
    <section
      id="especialidad"
      className="py-20 md:py-32 relative overflow-hidden"
      ref={sectionRef}
      style={{
        background: 'linear-gradient(135deg, #094E5A 0%, #0D6E7E 50%, #1A9AAE 100%)',
      }}
    >
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(/assets/ornament-corner.png)',
            backgroundSize: '300px',
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image side */}
          <div className="reveal flex-1 w-full lg:w-auto">
            <div className="relative max-w-lg mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink/30 to-orange/30 rounded-3xl blur-3xl" />
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/gordita chilaquiles.jpeg"
                  alt="Tía Chilaquiles"
                  className="w-full h-80 md:h-[28rem] object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/40 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange to-pink px-4 py-2 rounded-full shadow-lg">
                  <span className="text-white font-bold text-sm flex items-center gap-1.5">
                    <Star size={13} fill="currentColor" /> #1 Más Vendida
                  </span>
                </div>
              </div>

              {/* Floating ornament */}
              <img
                src="/assets/ornament-leaf.png"
                alt=""
                className="ornament absolute -bottom-6 -left-6 w-20 opacity-60 animate-float"
              />
            </div>
          </div>

          {/* Text side */}
          <div className="flex-1 text-center lg:text-left">
            <div className="reveal">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-orange-light rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                  <Sparkles size={14} /> Nuestra Especialidad
                </span>
            </div>

            <h2
              className="reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-heading)', transitionDelay: '0.1s' }}
            >
              Tía{' '}
              <span className="text-orange-light">Chilaquiles</span>
            </h2>

            <p className="reveal text-lg text-white/70 mb-8 leading-relaxed max-w-xl" style={{ transitionDelay: '0.2s' }}>
              La combinación perfecta: masa de maíz recién hecha, rellena de chilaquiles bañados en salsa roja casera, 
              coronada con crema, queso fresco y cilantro. Un platillo que solo encontrarás aquí.
            </p>

            {/* Features */}
            <div className="reveal grid grid-cols-2 gap-4 mb-8" style={{ transitionDelay: '0.3s' }}>
              {[
                { Icon: Wheat,    label: 'Masa artesanal' },
                { Icon: Flame,    label: 'Salsa casera' },
                { Icon: Salad,    label: 'Queso fresco' },
                { Icon: ChefHat,  label: 'Receta familiar' },
              ].map((feat) => (
                <div
                  key={feat.label}
                  className="flex items-center gap-3 bg-white/5 rounded-xl p-3 backdrop-blur-sm border border-white/10"
                >
                  <feat.Icon size={20} className="text-orange-light shrink-0" />
                  <span className="text-white/90 text-sm font-medium">{feat.label}</span>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ transitionDelay: '0.4s' }}>
              <a
                href="#contacto"
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange to-pink rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                ¡La quiero probar!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
