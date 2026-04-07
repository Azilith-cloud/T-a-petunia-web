import { useState } from 'react'
import { X } from 'lucide-react'

const PHONE = '523314436726'
const MESSAGE = encodeURIComponent('¡Hola Tía Petunia! Me gustaría hacer un pedido 🌮')

export default function WhatsAppButton() {
  const [tooltip, setTooltip] = useState(true)

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
          70%  { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        @keyframes waFloat {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
        .wa-btn {
          animation: waPulse 2.2s infinite, waFloat 3.5s ease-in-out infinite;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .wa-btn:hover {
          animation: none !important;
          transform: scale(1.12) !important;
          box-shadow: 0 16px 40px rgba(37,211,102,0.5) !important;
        }
      `}</style>

      {/* Tooltip burbuja */}
      {tooltip && (
        <div style={{
          position: 'fixed',
          bottom: '94px',
          right: '24px',
          zIndex: 9998,
          background: '#fff',
          borderRadius: '16px 16px 4px 16px',
          padding: '10px 14px 10px 16px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.14)',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: '#1a1a2e',
          maxWidth: '200px',
          animation: 'modalFadeIn 0.3s ease',
        }}>
          <span>¡Escríbenos para ordenar! 🌮</span>
          <button
            onClick={() => setTooltip(false)}
            aria-label="Cerrar"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#aaa', padding: '2px', display: 'flex', flexShrink: 0,
            }}
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Botón WhatsApp */}
      <a
        href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="wa-btn"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2C8.268 2 2 8.268 2 16c0 2.47.676 4.784 1.85 6.766L2 30l7.43-1.82A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
            fill="#fff"
            fillOpacity=".15"
          />
          <path
            d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.34.63 4.53 1.73 6.42L3.5 28.5l6.28-1.69A12.44 12.44 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5z"
            fill="#fff"
          />
          <path
            d="M21.9 18.94c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.62.71.22 1.35.19 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
            fill="#25D366"
          />
        </svg>
      </a>
    </>
  )
}
