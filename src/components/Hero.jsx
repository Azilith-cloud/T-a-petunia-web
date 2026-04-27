export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex overflow-hidden bg-[#094E5A] w-full min-h-[100dvh] md:min-h-[85vh]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/fondohome.png')" }}
      />

      {/* Dark Green Gradient Overlay on the left */}
      <div
        className="absolute inset-x-0 inset-y-0 z-1"
        style={{ background: 'linear-gradient(to right, #094E5A 0%, #094E5A 50%, transparent 85%)' }}
      >
        {/* On mobile, we add a darker overlay everywhere so text is readable over the food */}
        <div className="md:hidden absolute inset-0 bg-[#094E5A]/70" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-start pt-24 md:justify-center md:pt-32 pb-0 md:pb-24 min-h-[100dvh] md:min-h-[85vh]">

        {/* Left text content */}
        <div className="w-full md:w-[60%] lg:w-[50%] text-left animate-slide-up relative z-20">

          {/* Sparks/Leaves Decoration above "Sabor" */}
          <div className="mb-2 ml-4">
            <svg width="35" height="35" viewBox="0 0 60 40" fill="none" className="md:w-[40px] md:h-[40px]">
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

          <ul className="text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl mt-4 md:mt-6 font-medium tracking-wide list-none p-0 m-0 space-y-0.5 sm:space-y-1">
            {[
              'Tías (gorditas)',
              'Mamichulas (flautas)',
              'Kekabronas (quesadillas)',
              'Pozole',
              'Cabroncito',
              'Tomasitos',
              'MamiBirrias',
              'Tacos de barbacoa bañados',
              'Nachiquiles',
              'Aguas frescas',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#F5A623] text-xs sm:text-sm">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mascot — Absolutely positioned bottom-right */}
        <div
          className="absolute bottom-0 right-0 md:right-[-40px] lg:right-[-60px] xl:right-[-80px] z-10 animate-slide-up pointer-events-none flex justify-end"
          style={{ animationDelay: '0.2s', width: 'auto' }}
        >
          <div className="relative flex justify-center items-end">

            {/* Soft pink glow behind mascot */}
            <div className="absolute inset-x-0 bottom-[10%] top-[20%] bg-gradient-to-t from-[#E91E8C]/20 to-transparent rounded-full blur-[60px] -z-10" />

            <img
              src="/assets/cerdita sin fondo hd.png?v=9"
              alt="Cerdita Tía Petunia"
              className="w-[85vw] sm:w-[75vw] md:w-[600px] lg:w-[750px] xl:w-[850px] h-auto drop-shadow-[0_45px_65px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-700 pointer-events-auto"
              style={{
                transformOrigin: 'bottom center',
                display: 'block'
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
