import React from 'react';
const CHAINS = [
  { name: 'Ethereum', color: 'neon-cyan' },
  { name: 'BSC', color: 'neon-yellow' },
  { name: 'Arbitrum', color: 'neon-blue' },
  { name: 'Optimism', color: 'neon-pink' },
  { name: 'Polygon', color: 'neon-purple' },
];

export default function ChainSwitcher({ selected, onSelect }) {
  return (
    <div className="flex gap-2 justify-center mb-4">
      {CHAINS.map(chain => (
        <button
          key={chain.name}
          className={`px-4 py-2 font-orbitron rounded-xl border-2 border-current ${chain.color} neon-btn transition-all duration-300 hover:scale-105`}
          style={{ textShadow: '0 0 8px #00fff7, 0 0 16px #00fff7' }}
          onClick={() => onSelect && onSelect(chain.name)}
        >
          {chain.name}
        </button>
      ))}
    </div>
  );
} 