import React from 'react';

interface LogoProps {
  size?: number;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 32, showText = true }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.5))' }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        {/* Geometric Vertex Shape */}
        <path 
          d="M50 10L90 80H10L50 10Z" 
          stroke="url(#logoGradient)" 
          strokeWidth="6" 
          strokeLinejoin="round" 
        />
        <path 
          d="M50 30L75 75H25L50 30Z" 
          fill="url(#logoGradient)" 
          fillOpacity="0.3" 
        />
        <circle cx="50" cy="10" r="5" fill="#22d3ee" />
        <circle cx="10" cy="80" r="5" fill="#8b5cf6" />
        <circle cx="90" cy="80" r="5" fill="#8b5cf6" />
      </svg>
      {showText && (
        <span style={{ 
          fontSize: '1.5rem', 
          fontWeight: 800, 
          letterSpacing: '-0.02em',
          background: 'linear-gradient(135deg, #f8fafc 0%, #94a3b8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Vertex <span style={{ color: '#22d3ee', WebkitTextFillColor: 'initial' }}>AI</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
