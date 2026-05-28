import React from 'react'

interface Props {
  size?: number
  showText?: boolean
}

const LogoSophisticated: React.FC<Props> = ({ size = 44, showText = true }) => {
  const s = size
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg
        width={s}
        height={s}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Nexalist AI logo"
      >
        <defs>
          <linearGradient id="nsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#7c4dff" />
            <stop offset="100%" stopColor="#ff7ab6" />
          </linearGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring */}
        <circle cx="50" cy="50" r="44" fill="#071027" />

        {/* Neural network motif: nodes and connecting arcs */}
        <g filter="url(#soft)">
          <path d="M30 64 C40 52, 60 52, 70 40" stroke="url(#nsGrad)" strokeWidth="3.8" strokeLinecap="round" fill="none" />
          <path d="M30 36 C42 44, 58 44, 70 56" stroke="#2b3350" strokeWidth="1.2" strokeLinecap="round" fill="none" />

          <circle cx="28" cy="64" r="4.1" fill="#00d4ff" />
          <circle cx="44" cy="52" r="4.1" fill="#7c4dff" />
          <circle cx="56" cy="52" r="4.1" fill="#ff7ab6" />
          <circle cx="72" cy="40" r="4.1" fill="#00d4ff" />
          <circle cx="72" cy="56" r="4.1" fill="#7c4dff" />

          {/* small AI glyph in center */}
          <rect x="40" y="34" width="20" height="32" rx="6" fill="url(#nsGrad)" opacity="0.12" />
          <text x="50" y="58" textAnchor="middle" fontWeight={700} fontSize={12} fill="#dff6ff">AI</text>
        </g>
      </svg>

      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#ffffff' }}>Nexalist</span>
          <span style={{ fontSize: 12, fontWeight: 800, color: '#00d4ff', marginTop: -2 }}>AI</span>
        </div>
      )}
    </div>
  )
}

export default LogoSophisticated
