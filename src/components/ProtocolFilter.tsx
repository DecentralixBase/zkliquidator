import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RayScanner from './RayScanner';

const PROTOCOLS = [
  { name: 'Aave', color: 'neon-cyan' },
  { name: 'Compound', color: 'neon-blue' },
  { name: 'Venus', color: 'neon-yellow' },
  { name: 'JustLend', color: 'neon-pink' },
  { name: 'Radiant', color: 'neon-purple' }
];

export default function ProtocolFilter() {
  const [active, setActive] = useState<string[]>(PROTOCOLS.map(p => p.name));

  const toggle = (name: string) => {
    setActive((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="relative glass neon-border p-6 rounded-2xl flex flex-col items-center shadow-lg mt-4">
      <div className="absolute left-4 top-4 opacity-40 pointer-events-none">
        <RayScanner size={50} />
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        {PROTOCOLS.map((protocol) => (
          <motion.button
            key={protocol.name}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className={`px-4 py-2 rounded-full font-bold font-orbitron border-2 transition-all duration-200
              ${active.includes(protocol.name)
                ? `${protocol.color} border-${protocol.color} bg-white/10 shadow-neon`
                : 'border-white/20 text-white/70 bg-white/5 hover:border-cyan-400/60'}`}
            style={{
              boxShadow: active.includes(protocol.name)
                ? '0 0 12px #00fff7, 0 0 24px #a259ff'
                : undefined
            }}
            onClick={() => toggle(protocol.name)}
          >
            {protocol.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
} 