import React from 'react';
import { motion } from 'framer-motion';
const PROTOCOLS = [
  'Aave v2', 'Aave v3', 'Compound', 'Venus', 'JustLend', 'Radiant', 'Silo'
];

export default function ProtocolFilter({ selected = [], onToggle }) {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-2 justify-center mb-4">
      {PROTOCOLS.map(protocol => (
        <button
          key={protocol}
          className={`px-3 py-1 font-audiowide rounded-lg border-2 border-current neon-purple neon-btn transition-all duration-300 ${selected.includes(protocol) ? 'bg-opacity-30 bg-purple-500' : 'bg-transparent'}`}
          onClick={() => onToggle && onToggle(protocol)}
        >
          {protocol}
        </button>
      ))}
    </motion.div>
  );
} 