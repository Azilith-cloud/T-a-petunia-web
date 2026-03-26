import { useEffect, useRef } from 'react'
import { Flame, Star, Award } from 'lucide-react'

const menuItems = [
  {
    id: 'gorditas',
    name: 'Gorditas',
    description: 'Rellenas de chicharrón, rajas, frijol, picadillo y más. Hechas con masa de maíz fresca.',
    image: '/assets/gorditas-menu.png',
    price: 'Desde $25',
    badge: 'Popular',
    BadgeIcon: Flame,
    color: 'from-orange to-orange-light',
  },
  {
    id: 'flautas',
    name: 'Flautas',
    description: 'Doradas y crujientes, rellenas de pollo o papa. Servidas con crema, lechuga y salsa.',
    image: '/assets/flautas-menu.png',
    price: 'Desde $30',
    badge: 'Favoritas',
    BadgeIcon: Star,
    color: 'from-pink to-pink-light',
  },
  {
    id: 'quesadillas',
    name: 'Quesadillas',
    description: 'Con queso Oaxaca derretido. De huitlacoche, flor de calabaza, champiñones y más.',
    image: '/assets/quesadillas-menu.png',
    price: 'Desde $20',
    badge: 'Clásicas',
    BadgeIcon: Award,
    color: 'from-teal to-teal-light',
  },
]

export default function Menu() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="menu" className="py-20 md:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-white to-cream" />
      
      {/* Decorative */}
      <img
        src="/assets/ornament-floral.png"
        alt=""
        className="ornament absolute top-0 left-1/2 -translate-x-1/2 w-56 opacity-15"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 bg-teal/10 text-teal rounded-full text-sm font-semibold mb-4">
            Nuestro Menú
          </span>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Antojitos con tradición
          </h2>
          <p className="text-lg text-teal-dark/60 max-w-xl mx-auto">
            Cada platillo preparado con recetas de familia y los ingredientes más frescos
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="reveal menu-card"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${item.color} rounded-full text-white text-xs font-bold shadow-lg`}>
                  {(() => { const Bi = item.BadgeIcon; return Bi ? <Bi size={11} style={{display:'inline',verticalAlign:'middle',marginRight:'4px'}} /> : null })()} {item.badge}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 -mt-6 relative">
                  <h3 className="text-2xl font-bold text-teal-dark mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {item.name}
                  </h3>
                  <p className="text-sm text-teal-dark/60 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold gradient-text">{item.price}</span>
                    <button className={`px-5 py-2 bg-gradient-to-r ${item.color} rounded-full text-white text-sm font-semibold hover:scale-105 shadow-md transition-all duration-300`}>
                      Ordenar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
