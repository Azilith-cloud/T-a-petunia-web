import { ChevronLeft, ChevronRight } from 'lucide-react'

const cards = [
  { id: 'gorditas', label: 'Gorditas', image: '/assets/gorditas 2.jpeg' },
  { id: 'flautas', label: 'Flautas', image: '/assets/aqui tenemos la comida lista.jpeg' },
  { id: 'quesadillas', label: 'Quesadillas', image: '/assets/quesadilla.jpeg' },
  { id: 'especialidades', label: 'Especialidades', image: '/assets/mami birrias.jpeg' },
]

export default function QuickSelection() {
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
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div 
              key={card.id} 
              className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square md:aspect-[4/3] group cursor-pointer shadow-2xl transition-transform duration-500 hover:-translate-y-2"
              style={{ animation: `slideUp 0.6s ease-out ${i * 0.15}s both` }}
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
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
