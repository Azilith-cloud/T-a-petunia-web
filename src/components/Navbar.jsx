import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Tag } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isPromoPage = location.pathname === '/promociones'
  const isMenuPage = location.pathname === '/menu'

  const handleHashLink = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    // Parse the href: e.g. '/#eventos' -> pathname='/', hash='#eventos'
    const [path, hash] = href.split('#')
    const targetPath = path || '/'
    if (location.pathname === targetPath) {
      // Already on the right page, just scroll
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to the page with hash
      navigate({ pathname: targetPath, hash: '#' + hash })
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // On sub-pages the navbar is always "scrolled" style
  const isDark = scrolled || isPromoPage || isMenuPage

  const links = [
    { label: 'Inicio', href: '/', isRoute: true },
    { label: 'Menú', href: '/menu', isRoute: true },
    { label: 'Especialidad', href: '/#especialidad', isRoute: false },
    { label: 'Nosotros', href: '/#nosotros', isRoute: false },
    { label: 'Promociones', href: '/promociones', isRoute: true, highlight: true },
    { label: 'Contacto', href: '/#eventos', isRoute: false },
  ]

  const linkColor = isDark ? '#094E5A' : 'white'

  return (
    <nav
      id="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s ease',
        background: isDark ? 'rgba(255,248,240,0.90)' : 'transparent',
        backdropFilter: isDark ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isDark ? 'blur(12px)' : 'none',
        boxShadow: isDark ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        padding: isDark ? '8px 0' : '16px 0',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img
            src="/assets/logo.png"
            alt="Tía Petunia"
            style={{ height: '48px', width: 'auto', transition: 'transform 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '1.25rem',
            display: 'none',
            color: isDark ? '#094E5A' : 'white',
            transition: 'color 0.3s',
          }}
            className="sm-show"
          >
            Tía Petunia
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-nav">
          {links.map((link) => {
            if (link.highlight) {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: '7px 18px',
                    borderRadius: '100px',
                    background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(233,30,140,0.25)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.06)'
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(233,30,140,0.4)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(233,30,140,0.25)'
                  }}
                >
                  <Tag size={14} /> {link.label}
                </Link>
              )
            }
            if (link.isRoute) {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '100px',
                    color: linkColor,
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(233,30,140,0.1)'; e.currentTarget.style.color = '#E91E8C' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = linkColor }}
                >
                  {link.label}
                </Link>
              )
            }
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashLink(e, link.href)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '100px',
                  color: linkColor,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(233,30,140,0.1)'; e.currentTarget.style.color = '#E91E8C' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = linkColor }}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="/#contacto"
            onClick={(e) => handleHashLink(e, '/#contacto')}
            style={{
              marginLeft: '12px',
              padding: '10px 24px',
              background: 'linear-gradient(135deg, #0D6E7E, #1A9AAE)',
              borderRadius: '100px',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.875rem',
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(13,110,126,0.3)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(13,110,126,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(13,110,126,0.3)'
            }}
          >
            ¡Pedir Ahora!
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          className="mobile-burger"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: menuOpen ? '#E91E8C' : linkColor,
                borderRadius: '2px',
                transition: 'all 0.3s',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                  : i === 1 ? 'opacity: 0'
                  : 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{
        overflow: 'hidden',
        maxHeight: menuOpen ? '500px' : '0',
        opacity: menuOpen ? 1 : 0,
        transition: 'all 0.5s ease',
      }}>
        <div style={{
          background: 'rgba(255,248,240,0.97)',
          backdropFilter: 'blur(12px)',
          margin: '8px 16px',
          borderRadius: '20px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
          {links.map((link) => {
            if (link.highlight) {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #E91E8C15, #F5A62315)',
                    color: '#C4157A',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Tag size={15} /> {link.label}
                </Link>
              )
            }
            if (link.isRoute) {
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: '12px',
                    color: '#094E5A',
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                >
                  {link.label}
                </Link>
              )
            }
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashLink(e, link.href)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  color: '#094E5A',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </a>
            )
          })}
          <a
            href="/#contacto"
            onClick={(e) => handleHashLink(e, '/#contacto')}
            style={{
              marginTop: '8px',
              padding: '13px 16px',
              background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
              borderRadius: '14px',
              color: '#fff',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            ¡Pedir Ahora!
          </a>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-burger { display: none !important; }
          .sm-show { display: block !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
