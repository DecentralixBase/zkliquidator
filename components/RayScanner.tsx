import React from 'react';

export default function RayScanner({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ray-rotate"
      style={{ filter: 'drop-shadow(0 0 16px #00fff7) drop-shadow(0 0 32px #a259ff)' }}
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#00fff7"
        strokeWidth="4"
        opacity="0.25"
      />
      <circle
        cx="50"
        cy="50"
        r="32"
        stroke="#a259ff"
        strokeWidth="2"
        opacity="0.18"
      />
      <path
        d="M50 10 A40 40 0 0 1 90 50"
        stroke="#00fff7"
        strokeWidth="6"
        strokeLinecap="round"
        className="neon-cyan"
        style={{ filter: 'drop-shadow(0 0 8px #00fff7)' }}
      />
      <path
        d="M50 90 A40 40 0 0 1 10 50"
        stroke="#a259ff"
        strokeWidth="6"
        strokeLinecap="round"
        className="neon-purple"
        style={{ filter: 'drop-shadow(0 0 8px #a259ff)' }}
      />
    </svg>
  );
} 