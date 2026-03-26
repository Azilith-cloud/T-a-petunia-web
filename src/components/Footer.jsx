import { Globe, Share2, MessageCircle, Phone, MapPin, Heart } from 'lucide-react'

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
              Gorditas, flautas, quesadillas y nuestra famosa gordita de chilaquiles.
              Sabor casero hecho con amor desde hace más de 15 años.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6 justify-center md:justify-start">
              {[
                { Icon: Globe,          label: 'Facebook' },
                { Icon: Share2,         label: 'Instagram' },
                { Icon: MessageCircle,  label: 'WhatsApp' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink/30 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} color="white" />
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Horarios
            </h3>
            <div className="space-y-2 text-white/60 text-sm">
              <p>Lunes a Viernes: <span className="text-orange-light font-medium">8:00 AM - 8:00 PM</span></p>
              <p>Sábados: <span className="text-orange-light font-medium">8:00 AM - 9:00 PM</span></p>
              <p>Domingos: <span className="text-orange-light font-medium">9:00 AM - 6:00 PM</span></p>
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-white/80 text-sm font-medium flex items-center justify-center gap-2">
                <Phone size={14} /> Pedidos al teléfono
              </p>
              <p className="text-orange-light text-xl font-bold mt-1">(555) 123-4567</p>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Encuéntranos
            </h3>
            <p className="text-white/60 text-sm leading-relaxed flex items-start gap-2 justify-center md:justify-end">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>
                Calle Principal #123<br />
                Colonia Centro<br />
                Ciudad de México, CDMX
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
