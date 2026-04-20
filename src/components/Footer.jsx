import { Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #094E5A, #0D6E7E)' }}>
      {/* Top ornament */}
      <div className="relative">
        <img
          src="/assets/ornament-floral.png"
          alt=""
          className="w-full max-w-xl mx-auto opacity-20 -mt-6"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img src="/assets/logo.png" alt="Tía Petunia" className="w-14 h-14" />
              <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Tía Petunia
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Tías (gorditas), mamichulas (flautas en vaso), quesadillas y nuestra famosa Tía Chilaquiles.
              Sabor casero hecho con amor desde hace más de 11 años.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/tiapetunia.mx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink/30 transition-all duration-300 hover:scale-110"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@gorditastiapetunia?lang=es-419"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink/30 transition-all duration-300 hover:scale-110"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48V13.4a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.81.07 4.84 4.84 0 01-2.88-.95v6.03a6.34 6.34 0 01-6.34 6.34" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/tiapetuniamx?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink/30 transition-all duration-300 hover:scale-110"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Horarios
            </h3>
            <div className="space-y-2 text-white/60 text-sm">
              <p>Miércoles a Lunes: <span className="text-orange-light font-medium">9:00 AM - 4:00 PM</span></p>
              <p>Martes: <span className="text-white/40 font-medium">Cerrado</span></p>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white/80 text-sm font-medium flex items-center justify-center gap-2">
                <Phone size={14} /> Pedidos al teléfono
              </p>
              <a 
                href="tel:3314436726" 
                className="text-orange-light text-xl font-bold mt-1 block hover:text-white transition-colors duration-300"
              >
                33 1443 6726
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Encuéntranos
            </h3>
            <p className="text-white/60 text-sm leading-relaxed flex items-start gap-2 justify-center md:justify-end text-left sm:text-center md:text-right">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>
                Ubicado en: <strong className="text-white/90">Plaza Velas María</strong><br />
                H. Colegio Militar #4-A<br />
                El Fortín, 45066<br />
                Zapopan, Jal.
              </span>
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-pink to-orange rounded-full text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MapPin size={14} />
              Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Tía Petunia. Todos los derechos reservados.
            </p>
            <p className="text-white/40 text-xs flex items-center gap-1">
              Hecho con <Heart size={11} fill="currentColor" className="text-pink-light" /> y mucho sazón
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
