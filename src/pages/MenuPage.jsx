import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  UtensilsCrossed, Sandwich, Salad, Beef, GlassWater,
  Star, Flame, Heart, Award, Trophy, Crown,
  Zap, Leaf, Wheat, Sparkles, Globe2, Droplets,
  Search, X, MapPin,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────
const categories = [
  { id: 'todos',        label: 'Todo el Menú',        Icon: UtensilsCrossed },
  { id: 'gorditas',    label: 'Tías (Gorditas)',             Icon: Sandwich },
  { id: 'flautas',    label: 'Flautas & Mamichulas', Icon: UtensilsCrossed },
  { id: 'quesadillas', label: 'Quesadillas',          Icon: Salad },
  { id: 'lonches',    label: 'Lonches',              Icon: Sandwich },
  { id: 'birrias',    label: 'Birrias',              Icon: Beef },
  { id: 'aguas',      label: 'Aguas Frescas',        Icon: GlassWater },
]

const menuItems = [
  // Gorditas
  {
    id: 'gordita-chilaquiles',
    category: 'gorditas',
    name: 'Tía Chilaquiles',
    description: 'Nuestra especialidad. Masa de maíz rellena de chilaquiles con crema y queso. ¡Imperdible!',
    image: '/assets/gordita chilaquiles.jpeg',
    price: 'Desde $35',
    badge: 'Especialidad',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gorditas-2',
    category: 'gorditas',
    name: 'Tía Surtida',
    description: 'Chicharrón, rajas, frijoles, picadillo y más rellenos. Crujientes y esponjosas.',
    image: '/assets/gorditas 2.jpeg',
    price: 'Desde $25',
    badge: 'Popular',
    BadgeIcon: Flame,
    badgeColor: '#F5A623',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gorditas-corazon',
    category: 'gorditas',
    name: 'Tía Corazón',
    description: 'Hechas con amor y los mejores ingredientes. Masa suave con relleno a tu elección.',
    image: '/assets/gorditas corazon.jpeg',
    price: 'Desde $25',
    badge: 'Especial',
    BadgeIcon: Heart,
    badgeColor: '#D42F2F',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gorditas-fresh',
    category: 'gorditas',
    name: 'Tía Fresca',
    description: 'Recién hechas en el momento, con masa de maíz artesanal y rellenos al gusto.',
    image: '/assets/gorditas jpeg.jpeg',
    price: 'Desde $25',
    badge: 'Artesanal',
    BadgeIcon: Leaf,
    badgeColor: '#0D6E7E',
    tag: 'Tías (Gorditas)',
  },
  // Flautas / Mamichulas
  {
    id: 'mamichulas-vaso',
    category: 'flautas',
    name: 'Mamichulas',
    description: 'Nuestro producto estrella. Flautas en vaso crujientes, con crema, queso, lechuga y salsa especial.',
    image: '/assets/mamichulas vaso.jpeg',
    price: 'Desde $55',
    badge: 'Estrella',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Flautas & Mamichulas',
  },
  {
    id: 'comida-lista',
    category: 'flautas',
    name: 'Flautas de la Casa',
    description: 'Doradas al instante, rellenas de pollo o papa, servidas con guarnición completa.',
    image: '/assets/aqui tenemos la comida lista.jpeg',
    price: 'Desde $30',
    badge: 'Favoritas',
    BadgeIcon: Trophy,
    badgeColor: '#F5A623',
    tag: 'Flautas & Mamichulas',
  },
  // Quesadillas
  {
    id: 'quesadilla',
    category: 'quesadillas',
    name: 'Quesadillas',
    description: 'Con queso Oaxaca derretido. De huitlacoche, flor de calabaza, champiñones y más.',
    image: '/assets/quesadilla.jpeg',
    price: 'Desde $20',
    badge: 'Clásicas',
    BadgeIcon: Award,
    badgeColor: '#0D6E7E',
    tag: 'Quesadillas',
  },
  // Lonches
  {
    id: 'lonches',
    category: 'lonches',
    name: 'Lonches',
    description: 'Pan artesanal relleno con proteína, crema, frijoles y los mejores complementos.',
    image: '/assets/lonches.jpeg',
    price: 'Desde $40',
    badge: 'Abundantes',
    BadgeIcon: Crown,
    badgeColor: '#D4A017',
    tag: 'Lonches',
  },
  // Birrias
  {
    id: 'mami-birrias',
    category: 'birrias',
    name: 'Birrias',
    description: 'Carne tierna bañada en consomé especiado. Servida con cilantro, cebolla y tortilla.',
    image: '/assets/mami birrias.jpeg',
    price: 'Desde $65',
    badge: 'Potente',
    BadgeIcon: Flame,
    badgeColor: '#D42F2F',
    tag: 'Birrias',
  },
  {
    id: 'sin-complicarte',
    category: 'lonches',
    name: 'Combo Sin Complicarte',
    description: 'La combinación perfecta para salir rápido y satisfecho. Sencillo, rico y accesible.',
    image: '/assets/sin complicarte.jpeg',
    price: 'Desde $45',
    badge: 'Rápido',
    BadgeIcon: Zap,
    badgeColor: '#0D6E7E',
    tag: 'Lonches',
  },
  // Aguas
  {
    id: 'aguas-frescas',
    category: 'aguas',
    name: 'Aguas Frescas',
    description: 'Surtido completo de aguas frescas de temporada. Preparadas al momento.',
    image: '/assets/aguas/aguas frescas.jpeg',
    price: 'Desde $20',
    badge: 'Frescas',
    BadgeIcon: Droplets,
    badgeColor: '#0D6E7E',
    tag: 'Aguas Frescas',
  },
  {
    id: 'agua-jamaica',
    category: 'aguas',
    name: 'Agua de Jamaica',
    description: 'Jamaica natural, ligeramente dulce y refrescante. Ideal para acompañar tu platillo.',
    image: '/assets/aguas/agua de jamaica.jpeg',
    price: 'Desde $20',
    badge: 'Clásica',
    BadgeIcon: Award,
    badgeColor: '#E91E8C',
    tag: 'Aguas Frescas',
  },
  {
    id: 'agua-horchata',
    category: 'aguas',
    name: 'Horchata',
    description: 'Cremosa y dulce, nuestra horchata de arroz es el acompañamiento perfecto.',
    image: '/assets/aguas/agua de horchata.jpeg',
    price: 'Desde $20',
    badge: 'Cremosa',
    BadgeIcon: Sparkles,
    badgeColor: '#F5A623',
    tag: 'Aguas Frescas',
  },
  {
    id: 'agua-tamarindo',
    category: 'aguas',
    name: 'Agua de Tamarindo',
    description: 'Agridulce y refrescante, sabor único que complementa cualquier platillo.',
    image: '/assets/aguas/agua de tamarindo.jpeg',
    price: 'Desde $20',
    badge: 'Especial',
    BadgeIcon: Leaf,
    badgeColor: '#D4A017',
    tag: 'Aguas Frescas',
  },
  {
    id: 'limonada-pepino',
    category: 'aguas',
    name: 'Limonada con Pepino',
    description: 'Fresca limonada con pepino y menta. Ideal para los días calurosos.',
    image: '/assets/aguas/limonada con pepino.jpeg',
    price: 'Desde $22',
    badge: 'Fresca',
    BadgeIcon: Droplets,
    badgeColor: '#1A9AAE',
    tag: 'Aguas Frescas',
  },
  {
    id: 'fresas-crema',
    category: 'aguas',
    name: 'Agua de Fresas con Crema',
    description: 'Frutada y cremosa. Fresas naturales con un toque de crema. ¡Un deleite!',
    image: '/assets/aguas/agua fresas con crema.jpeg',
    price: 'Desde $25',
    badge: 'Especial',
    BadgeIcon: Heart,
    badgeColor: '#E91E8C',
    tag: 'Aguas Frescas',
  },
  {
    id: 'te-helado',
    category: 'aguas',
    name: 'Té Helado con Frutos Rojos',
    description: 'Té helado artesanal con frutos rojos frescos. Antioxidante y delicioso.',
    image: '/assets/aguas/Te helado con frutos rojos.jpeg',
    price: 'Desde $25',
    badge: 'Premium',
    BadgeIcon: Crown,
    badgeColor: '#7C3AED',
    tag: 'Aguas Frescas',
  },
  {
    id: 'horchata-frutos',
    category: 'aguas',
    name: 'Horchata con Frutos Rojos',
    description: 'La combinación perfecta de horchata cremosa con frutos rojos de temporada.',
    image: '/assets/aguas/agua de horchata con frutos rojos.jpeg',
    price: 'Desde $25',
    badge: 'Fusion',
    BadgeIcon: Sparkles,
    badgeColor: '#E91E8C',
    tag: 'Aguas Frescas',
  },
  {
    id: 'pina-menta',
    category: 'aguas',
    name: 'Agua de Piña con Menta',
    description: 'Piña tropical con menta fresca. Refrescante y tropical.',
    image: '/assets/aguas/agua de pina con menta.jpeg',
    price: 'Desde $22',
    badge: 'Tropical',
    BadgeIcon: Globe2,
    badgeColor: '#F5A623',
    tag: 'Aguas Frescas',
  },
  {
    id: 'cebada',
    category: 'aguas',
    name: 'Agua de Cebada',
    description: 'Bebida tradicional mexicana, suave y reconfortante. Hecha con cebada natural.',
    image: '/assets/aguas/cebada.jpeg',
    price: 'Desde $20',
    badge: 'Tradicional',
    BadgeIcon: Wheat,
    badgeColor: '#D4A017',
    tag: 'Aguas Frescas',
  },
  {
    id: 'alfalfa-pina-limon',
    category: 'aguas',
    name: 'Alfalfa, Piña y Limón',
    description: 'Verde, nutritivo y delicioso. La combinación saludable que te llenará de energía.',
    image: '/assets/aguas/alafalfa-[ina-limon.jpeg',
    price: 'Desde $22',
    badge: 'Saludable',
    BadgeIcon: Leaf,
    badgeColor: '#16A34A',
    tag: 'Aguas Frescas',
  },
  {
    id: 'fresas-menta',
    category: 'aguas',
    name: 'Agua de Fresas con Menta',
    description: 'Fresas naturales con menta fresca. Refrescante y muy aromático.',
    image: '/assets/aguas/agua fresas con menta.jpeg',
    price: 'Desde $22',
    badge: 'Refrescante',
    BadgeIcon: Droplets,
    badgeColor: '#0D6E7E',
    tag: 'Aguas Frescas',
  },
  {
    id: 'barra-aguas',
    category: 'aguas',
    name: 'Barra de Aguas de Sabores',
    description: 'Escoge tu favorita de nuestra barra completa con más de 10 sabores del día.',
    image: '/assets/aguas/Barra de agua de sabores.jpeg',
    price: 'Desde $20',
    badge: 'Elige tu sabor',
    BadgeIcon: Sparkles,
    badgeColor: '#6D28D9',
    tag: 'Aguas Frescas',
  },
]

// ─── Modal ───────────────────────────────────────────────────────────────────
function ItemModal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!item) return null
  const { BadgeIcon } = item

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(10,15,30,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        animation: 'modalFadeIn 0.22s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '28px',
          overflow: 'hidden',
          maxWidth: '840px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 32px 80px -12px rgba(0,0,0,0.35)',
          animation: 'modalSlideUp 0.28s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Image area */}
        <div style={{ position: 'relative', flexShrink: 0, background: '#111' }}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: '100%',
              maxHeight: '60vh',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              background: '#111',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
            pointerEvents: 'none',
          }} />
          {/* Badge */}
          <span style={{
            position: 'absolute', top: '18px', left: '20px',
            background: item.badgeColor, color: '#fff',
            fontFamily: 'var(--font-body)', fontWeight: 700,
            fontSize: '0.75rem', letterSpacing: '0.06em',
            padding: '5px 12px 5px 10px', borderRadius: '100px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
            display: 'inline-flex', alignItems: 'center', gap: '5px',
          }}>
            {BadgeIcon && <BadgeIcon size={12} />} {item.badge}
          </span>
          {/* Price */}
          <span style={{
            position: 'absolute', bottom: '18px', left: '22px',
            fontFamily: 'var(--font-heading)', fontWeight: 800,
            fontSize: '1.6rem', color: '#fff',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}>
            {item.price}
          </span>
          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '38px', height: '38px', borderRadius: '50%',
              border: 'none', background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
              color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(233,30,140,0.7)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{
          padding: '28px 32px 32px',
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column', gap: '12px',
        }}>
          <div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              background: `${item.badgeColor}18`,
              border: `1px solid ${item.badgeColor}30`,
              color: item.badgeColor,
              fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '3px 12px', borderRadius: '100px', marginBottom: '8px',
            }}>
              {BadgeIcon && <BadgeIcon size={11} />} {item.tag}
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#1a1a2e', margin: 0, lineHeight: 1.15,
            }}>
              {item.name}
            </h2>
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem', color: '#555', lineHeight: 1.7, margin: 0,
          }}>
            {item.description}
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a
              href="/#contacto"
              style={{
                flex: 1, minWidth: '140px',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
                color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700,
                fontSize: '0.95rem', padding: '13px 24px', borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(233,30,140,0.28)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Quiero ordenar
            </a>
            <button
              onClick={onClose}
              style={{
                flex: 1, minWidth: '120px',
                padding: '13px 24px', borderRadius: '100px',
                border: '1.5px solid rgba(0,0,0,0.1)',
                background: 'transparent', color: '#888',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ccc'; e.currentTarget.style.color = '#555' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = '#888' }}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96) }
          to   { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>
    </div>
  )
}

// ─── Card Component ───────────────────────────────────────────────────────────
function MenuCard({ item, index, onOpen }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const { BadgeIcon } = item

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onClick={() => onOpen(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${(index % 4) * 0.1}s, transform 0.6s ease ${(index % 4) * 0.1}s`,
        cursor: 'pointer',
      }}
    >
      <div style={{
        background: '#fff',
        borderRadius: '22px',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 20px 48px -8px rgba(233,30,140,0.18), 0 4px 16px rgba(0,0,0,0.06)'
          : '0 4px 20px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Image */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.55s ease',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          {/* Badge */}
          <span style={{
            position: 'absolute', top: '12px', left: '12px',
            background: item.badgeColor, color: '#fff',
            fontFamily: 'var(--font-body)', fontWeight: 700,
            fontSize: '0.7rem', letterSpacing: '0.06em',
            padding: '4px 10px 4px 8px', borderRadius: '100px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            whiteSpace: 'nowrap',
            display: 'inline-flex', alignItems: 'center', gap: '5px',
          }}>
            {BadgeIcon && <BadgeIcon size={11} />} {item.badge}
          </span>
          {/* Category tag */}
          <span style={{
            position: 'absolute', bottom: '10px', right: '10px',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
            color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '3px 10px', borderRadius: '100px',
          }}>
            {item.tag}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
            color: '#1a1a2e', margin: '0 0 8px', lineHeight: 1.25,
          }}>
            {item.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.85rem',
            color: '#666', margin: '0 0 18px', lineHeight: 1.6, flex: 1,
          }}>
            {item.description}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {item.price}
            </span>
            <a
              href="/#contacto"
              onClick={e => e.stopPropagation()}
              style={{
                background: item.badgeColor, color: '#fff',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.78rem',
                padding: '7px 16px', borderRadius: '100px',
                textDecoration: 'none', transition: 'opacity 0.2s', display: 'inline-block',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Ordenar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [search, setSearch] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const handleOpen  = useCallback((item) => setSelectedItem(item), [])
  const handleClose = useCallback(() => setSelectedItem(null), [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const filtered = menuItems.filter(item => {
    const matchCat = activeCategory === 'todos' || item.category === activeCategory
    const matchSearch = search === '' ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-cream)' }}>

      {/* ── Hero banner ── */}
      <div style={{
        position: 'relative',
        minHeight: '420px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        padding: '120px 20px 100px',
      }}>
        {/* Background image */}
        <img
          src="/assets/menu-hero-bg.png"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(9,78,90,0.55) 0%, rgba(0,0,0,0.65) 100%)',
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.9)',
            fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: '100px', marginBottom: '20px',
          }}>
            <UtensilsCrossed size={13} />
            Antojitos mexicanos auténticos
          </span>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
            color: '#fff', margin: '0 0 16px', lineHeight: 1.1,
            fontStyle: 'italic',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>
            Nuestro Menú
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)',
            fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.6,
          }}>
            Cada platillo preparado con recetas de familia y los ingredientes más frescos del mercado
          </p>

          <Link
            to="/#especialidad"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg, #094E5A, #0D6E7E)',
              color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: '0.95rem', padding: '14px 32px', borderRadius: '100px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              transition: 'transform 0.25s, box-shadow 0.25s',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)' }}
          >
            Explora Nuestras Especialidades
          </Link>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, zIndex: 3 }}>
          <svg viewBox="0 0 1440 60" fill="none" style={{ width: '100%', display: 'block' }}>
            <path d="M0,30 C360,70 1080,-10 1440,30 L1440,60 L0,60 Z" fill="var(--color-cream)" />
          </svg>
        </div>
      </div>

      {/* ── Category Tabs ── */}
      <div style={{
        position: 'sticky', top: '64px', zIndex: 40,
        background: 'rgba(255,248,240,0.95)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        padding: '0 16px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'flex', gap: '4px', overflowX: 'auto',
          padding: '12px 0',
          scrollbarWidth: 'none', msOverflowStyle: 'none',
        }}>
          {categories.map(cat => {
            const CatIcon = cat.Icon
            const active = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  whiteSpace: 'nowrap',
                  padding: '8px 18px',
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  transition: 'all 0.25s',
                  background: active ? 'linear-gradient(135deg, #0D6E7E, #1A9AAE)' : 'rgba(13,110,126,0.08)',
                  color: active ? '#fff' : '#094E5A',
                  boxShadow: active ? '0 4px 14px rgba(13,110,126,0.3)' : 'none',
                  transform: active ? 'scale(1.03)' : 'scale(1)',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                }}
              >
                <CatIcon size={14} /> {cat.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Grid ── */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 20px 100px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: '32px', flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', color: '#888', fontSize: '0.9rem' }}>
            Mostrando <strong style={{ color: '#0D6E7E' }}>{filtered.length}</strong> platillos
          </p>
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{
                background: 'none', border: '1.5px solid rgba(233,30,140,0.3)',
                color: '#C4157A', fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.82rem', padding: '5px 14px', borderRadius: '100px', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
              }}
            >
              <X size={13} /> Borrar búsqueda
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'rgba(13,110,126,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <UtensilsCrossed size={32} color="#0D6E7E" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#1a1a2e', marginBottom: '8px' }}>
              No encontramos ese platillo
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', color: '#888' }}>
              Intenta con otra búsqueda o explora todas las categorías
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: '24px',
          }}>
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} onOpen={handleOpen} />
            ))}
          </div>
        )}
      </div>

      {/* ── Bottom CTA ── */}
      <div style={{
        background: 'linear-gradient(135deg, #094E5A, #0D6E7E)',
        padding: '60px 24px', textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.65)',
          fontSize: '0.9rem', marginBottom: '10px',
        }}>
          ¿Listo para pedir?
        </p>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          color: '#fff', margin: '0 0 24px',
        }}>
          ¡Ordena ahora y recibe lo mejor de Tía Petunia!
        </h3>
        <a
          href="/#contacto"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
            color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700,
            fontSize: '0.95rem', padding: '14px 36px', borderRadius: '100px',
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(233,30,140,0.35)',
            transition: 'transform 0.25s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
        >
          Pedir Ahora
        </a>
      </div>

      {selectedItem && <ItemModal item={selectedItem} onClose={handleClose} />}
    </div>
  )
}
