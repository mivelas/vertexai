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
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="nexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#7c4dff" />
          </linearGradient>
        </defs>
        {/* Stylized N mark */}
        <path d="M18 80 L18 20 L42 20 L80 70 L80 80 L56 80 L56 50 L32 80 Z" fill="url(#nexGradient)" />
        <circle cx="84" cy="16" r="6" fill="#00d4ff" />
      </svg>

      {showText && (
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span style={{ color: '#ffffff' }}>Nexalist</span>
          <span style={{
            color: '#00d4ff',
            fontWeight: 900,
            marginLeft: '2px'
          }}>AI</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
