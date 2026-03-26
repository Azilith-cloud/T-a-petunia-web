import { UtensilsCrossed } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #05232A 0%, #0D3D47 60%, #0A2E20 100%)',
      }}
    >
      {/* Blobs de color — presentes pero no arcoíris */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-25 animate-float"
          style={{ background: 'radial-gradient(circle, #E91E8C 0%, transparent 65%)' }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-20 animate-float-reverse"
          style={{ background: 'radial-gradient(circle, #F5A623 0%, transparent 65%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #1A9AAE 0%, transparent 55%)' }}
        />

        {/* Ornamentos decorativos bien visibles */}
        <img
          src="/assets/ornament-corner.png"
          alt=""
          className="ornament absolute top-0 left-0 w-48 md:w-72 opacity-50 animate-float"
        />
        <img
          src="/assets/ornament-leaf.png"
          alt=""
          className="ornament absolute top-8 right-8 w-28 md:w-44 opacity-40 animate-float-reverse"
          style={{ transform: 'scaleX(-1)' }}
        />
        <img
          src="/assets/ornament-scroll.png"
          alt=""
          className="ornament absolute bottom-6 left-8 w-24 md:w-36 opacity-35 animate-float-delay"
        />
        <img
          src="/assets/ornament-floral.png"
          alt=""
          className="ornament absolute bottom-0 left-1/2 -translate-x-1/2 w-72 md:w-[480px] opacity-30"
        />
      </div>

      {/* Contenido principal — centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-3xl mx-auto">

        {/* Chip */}
        <span
          className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm font-semibold animate-slide-up"
          style={{
            color: '#FFB84D',
            borderColor: 'rgba(245,166,35,0.35)',
            border: '1px solid rgba(245,166,35,0.35)',
            background: 'rgba(245,166,35,0.10)',
            animationFillMode: 'backwards',
          }}
        >
          <UtensilsCrossed size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          Antojitos mexicanos auténticos
        </span>

        {/* Logo */}
        <div
          className="mb-6 animate-slide-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}
        >
          <img
            src="/assets/logo.png"
            alt="Tía Petunia"
            className="w-36 h-36 md:w-52 md:h-52 mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Título */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-white animate-slide-up"
          style={{
            fontFamily: 'var(--font-heading)',
            animationDelay: '0.2s',
            animationFillMode: 'backwards',
          }}
        >
          Sabor que{' '}
          <span style={{ color: '#FF6EB4' }}>abraza</span>{' '}
          el alma
        </h1>

        {/* Subtítulo */}
        <p
          className="text-base md:text-xl mb-10 max-w-xl mx-auto leading-relaxed animate-slide-up"
          style={{ color: 'rgba(255,255,255,0.72)', animationDelay: '0.35s', animationFillMode: 'backwards' }}
        >
          Gorditas, Flautas, Quesadillas y nuestra famosa{' '}
          <span className="font-bold" style={{ color: '#FFB84D' }}>Gordita de Chilaquiles</span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
        >
          <a
            href="#menu"
            className="px-8 py-4 rounded-full text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #E91E8C, #F5A623)' }}
          >
            Ver Menú
          </a>
          <a
            href="#especialidad"
            className="px-8 py-4 rounded-full font-semibold text-base border-2 text-white hover:scale-105 transition-all duration-300"
            style={{ borderColor: 'rgba(255,255,255,0.45)', background: 'rgba(255,255,255,0.08)' }}
          >
            Nuestra Especialidad
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce-subtle">
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Desliza para descubrir</span>
          <svg className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.35)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

