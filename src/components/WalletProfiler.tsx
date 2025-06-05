import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RayScanner from './RayScanner';

export default function WalletProfiler() {
  // For demo, this panel is hidden until a wallet is selected.
  // You can connect this to state from LiquidationFeed for real selection.
  const [open, setOpen] = useState(false);

  if (!open) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/60 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setOpen(false)}
    >
      <motion.div
        className="relative glass neon-border p-8 rounded-3xl shadow-2xl max-w-lg w-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute right-4 top-4 opacity-40 pointer-events-none">
          <RayScanner size={60} />
        </div>
        <h3 className="text-2xl font-orbitron neon-cyan mb-4">Wallet Profiler</h3>
        <div className="text-white/80 mb-2">Address: <span className="font-mono">0x1234...abcd</span></div>
        <div className="text-white/80 mb-2">Total Liquidations: <span className="neon-pink">3</span></div>
        <div className="text-white/80 mb-2">Protocols: <span className="neon-yellow">Aave, Compound</span></div>
        <div className="text-white/80 mb-2">Risk Score: <span className="neon-blue">High</span></div>
        <button
          className="mt-6 px-6 py-2 rounded-full neon-border neon-cyan font-bold font-orbitron bg-white/10 hover:bg-white/20 transition"
          onClick={() => setOpen(false)}
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
} 