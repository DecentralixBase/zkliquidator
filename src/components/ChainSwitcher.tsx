import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RayScanner from './RayScanner';

const CHAINS = [
  { name: 'Ethereum', color: 'neon-cyan' },
  { name: 'BSC', color: 'neon-yellow' },
  { name: 'Polygon', color: 'neon-purple' },
  { name: 'Arbitrum', color: 'neon-blue' },
  { name: 'Optimism', color: 'neon-pink' },
  { name: 'Avalanche', color: 'neon-blue' }
];

export default function ChainSwitcher() {
  const [selected, setSelected] = useState('Ethereum');

  return (
    <div className="relative glass neon-border p-6 rounded-2xl flex flex-col items-center shadow-lg">
      <div className="absolute right-4 top-4 opacity-40 pointer-events-none">
        <RayScanner size={60} />
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        {CHAINS.map((chain) => (
          <motion.button
            key={chain.name}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className={`px-4 py-2 rounded-full font-bold font-orbitron border-2 transition-all duration-200
              ${selected === chain.name
                ? `${chain.color} border-${chain.color} bg-white/10 shadow-neon`
                : 'border-white/20 text-white/70 bg-white/5 hover:border-cyan-400/60'}`}
            style={{
              boxShadow: selected === chain.name ? '0 0 12px #00fff7, 0 0 24px #a259ff' : undefined
            }}
            onClick={() => setSelected(chain.name)}
          >
            {chain.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
} 