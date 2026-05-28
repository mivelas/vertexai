import React from 'react'

interface LogoAltProps {
  size?: number
  showText?: boolean
}

const LogoAlt: React.FC<LogoAltProps> = ({ size = 40, showText = true }) => {
  const w = size
  const h = size

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} aria-hidden>
      <svg
        width={w}
        height={h}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Nexalist AI logo"
      >
        <defs>
          <linearGradient id="la" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#7c4dff" />
            <stop offset="100%" stopColor="#ff6bcb" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background rounded square */}
        <rect x="6" y="6" width="88" height="88" rx="20" fill="#071027" />

        {/* Stylized N formed from connected nodes (neural motif) */}
        <g filter="url(#glow)">
          <path
            d="M26 74 L26 30 L44 46 L62 22 L62 74"
            stroke="url(#la)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* nodes */}
          <circle cx="26" cy="30" r="4.2" fill="#00d4ff" />
          <circle cx="44" cy="46" r="4.2" fill="#7c4dff" />
          <circle cx="62" cy="22" r="4.2" fill="#ff6bcb" />
          <circle cx="62" cy="74" r="4.2" fill="#00d4ff" />
          <circle cx="26" cy="74" r="4.2" fill="#7c4dff" />

          {/* subtle circuit traces */}
          <path d="M46 48 L76 48" stroke="#2b3550" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M36 60 L76 60" stroke="#132033" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#ffffff' }}>Nexalist</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#00d4ff', marginTop: -2 }}>AI</span>
        </div>
      )}
    </div>
  )
}

export default LogoAlt
