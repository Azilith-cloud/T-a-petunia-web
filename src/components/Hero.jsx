export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] md:min-h-[85vh] flex overflow-hidden bg-[#094E5A]"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/mexican_food_hero.png?v=2')" }}
      />
      
      {/* Dark Green Gradient Overlay on the left */}
      <div 
        className="absolute inset-0 z-1"
        style={{ background: 'linear-gradient(to right, #094E5A 0%, #094E5A 60%, transparent 100%)' }}
      >
        {/* On mobile, we add a darker overlay everywhere so text is readable over the food */}
        <div className="md:hidden absolute inset-0 bg-[#094E5A]/80" />
      </div>

      {/* Content Container (Grid) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 pt-32 pb-16 md:pb-24 flex flex-col min-h-[100vh] md:min-h-[85vh]">
        
        {/* Grid guarantees separation on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center w-full flex-grow">
          
          {/* Left Text */}
          <div className="text-left animate-slide-up relative z-20 w-full flex flex-col justify-center pb-12 md:pb-0">
            {/* Sparks/Leaves Decoration above "Sabor" */}
            <div className="mb-2 ml-4">
              <svg width="40" height="40" viewBox="0 0 60 40" fill="none">
                <path d="M20 25 L15 10 M35 22 L36 5 M50 28 L58 15" stroke="#F5A623" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-4 md:mb-6 leading-[1.1] text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Sabor que{' '}
              <br className="hidden lg:block" />
              <span style={{ color: '#FF6EB4' }}>abraza</span>{' '}
              el alma
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed mt-2 md:mt-4">
              Gorditas, Flautas, Quesadillas y nuestra famosa{' '}
              <span className="font-bold text-[#FFB84D]">Gordita de Chilaquiles</span>
            </p>
          </div>

          {/* Right Mascot Container */}
          <div className="relative w-full h-full flex items-end justify-center md:justify-end animate-slide-up z-10 pointer-events-none mt-auto md:mt-0" style={{ animationDelay: '0.2s' }}>
            {/* On Desktop, this drops cleanly out of the visual flow using absolute. On mobile, it stays anchored at the bottom of its grid cell safely */}
            <div className="relative md:absolute md:bottom-[-20px] md:right-[-20px] lg:right-[-40px] xl:right-[-80px] flex justify-center w-[90%] sm:w-[80%] md:w-auto mt-8 md:mt-0">
              
              {/* Soft pink glow behind mascot */}
              <div className="absolute inset-x-0 bottom-10 top-20 bg-gradient-to-t from-[#E91E8C]/20 to-transparent rounded-full blur-[60px] -z-10" />
              
              <img
                src="/assets/cerdita sin fondo hd.png?v=8"
                alt="Cerdita Tía Petunia"
                className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-none md:w-[600px] lg:w-[750px] xl:w-[850px] h-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-700 pointer-events-auto"
                style={{ 
                  transformOrigin: 'bottom center',
                  display: 'block'
                }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
