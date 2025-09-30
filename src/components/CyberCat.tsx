import React from 'react';

const CyberCat: React.FC = () => {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-72 h-72 md:w-[22rem] md:h-[22rem] drop-shadow-[0_0_35px_rgba(139,92,246,0.3)]"
      role="img"
      aria-labelledby="cyber-cat-title"
    >
      <title id="cyber-cat-title">Meow Labs virtual assistant</title>
      <defs>
        <linearGradient id="catBody" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#111b3f" />
          <stop offset="100%" stopColor="#05021a" />
        </linearGradient>
        <linearGradient id="screenGlow" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="12" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Neon outline */}
      <circle cx="160" cy="160" r="150" fill="none" stroke="rgba(139, 92, 246, 0.16)" strokeWidth="2" />
      <circle cx="160" cy="160" r="140" fill="none" stroke="rgba(56, 189, 248, 0.12)" strokeWidth="1.5" />

      {/* Cat body */}
      <g filter="url(#softGlow)">
        <path
          d="M80 130 Q60 95 90 60 L125 95 Q140 70 160 70 Q180 70 195 95 L230 60 Q260 95 240 130 Q270 150 270 195 C270 245 220 275 160 275 C100 275 50 245 50 195 C50 150 80 130 80 130Z"
          fill="url(#catBody)"
          stroke="#8b5cf6"
          strokeWidth="3"
        />
      </g>

      {/* Eyes */}
      <ellipse cx="125" cy="160" rx="18" ry="22" fill="#05021a" stroke="#8b5cf6" strokeWidth="3" />
      <ellipse cx="195" cy="160" rx="18" ry="22" fill="#05021a" stroke="#8b5cf6" strokeWidth="3" />
      <circle cx="120" cy="155" r="6" fill="#38bdf8" />
      <circle cx="190" cy="155" r="6" fill="#38bdf8" />

      {/* Whiskers */}
      <path d="M95 185 L55 180" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
      <path d="M95 195 L52 200" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M225 185 L265 180" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
      <path d="M225 195 L268 200" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" />

      {/* Screen */}
      <rect
        x="105"
        y="200"
        width="110"
        height="70"
        rx="14"
        fill="#05021a"
        stroke="#38bdf8"
        strokeWidth="3"
      />
      <rect x="112" y="208" width="96" height="54" rx="10" fill="url(#screenGlow)" opacity="0.25" />
      <rect x="118" y="216" width="84" height="40" rx="8" fill="#05021a" />
      <path d="M132 230 L148 246 L172 226 L196 246" stroke="#38bdf8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="143" cy="236" r="4" fill="#8b5cf6" />
      <circle cx="184" cy="236" r="4" fill="#8b5cf6" />

      {/* Chat bubble */}
      <rect x="188" y="95" width="70" height="32" rx="16" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
      <text x="223" y="116" textAnchor="middle" fontSize="12" fontFamily="'Poppins', sans-serif" fill="#8b5cf6" fontWeight="600">
        0_0
      </text>
    </svg>
  );
};

export default CyberCat;
