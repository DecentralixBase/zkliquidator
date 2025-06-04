import React from 'react';
import './RayScanner.css';

export default function RayScanner({ size = 120, color = '#00fff7', speed = 2 }) {
  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="ray-rotate">
        <circle cx={size/2} cy={size/2} r={size/2-4} fill="#101624" stroke={color} strokeWidth="2" opacity="0.3" />
        <g>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.7" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
          <path d={`M${size/2},${size/2} L${size/2},8 A${size/2-8},${size/2-8} 0 0,1 ${size-8},${size/2} Z`} fill="url(#glow)" opacity="0.7" />
        </g>
      </svg>
      <div className="absolute inset-0 pointer-events-none ray-glow" />
    </div>
  );
} 