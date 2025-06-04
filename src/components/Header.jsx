import React from 'react';

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center py-6">
      <h1 className="text-4xl md:text-5xl font-orbitron font-bold neon-cyan drop-shadow-glow">zkLiquidator</h1>
      <p className="mt-2 text-lg md:text-xl font-audiowide neon-pink">Scan. Predict. Profit.</p>
    </header>
  );
} 