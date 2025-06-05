import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { io } from 'socket.io-client';

const dummy = [
  { id: 1, protocol: 'Aave', borrower: '0xAb...Cd', token: 'ETH', amount: '2.3', price: '$3,450', timestamp: new Date().toUTCString() },
  { id: 2, protocol: 'Compound', borrower: '0xEf...Gh', token: 'DAI', amount: '1200', price: '$1', timestamp: new Date().toUTCString() },
  { id: 3, protocol: 'Maker', borrower: '0xIj...Kl', token: 'WBTC', amount: '0.5', price: '$67,000', timestamp: new Date().toUTCString() },
];

export default function LiveFeed() {
  const [liqs, setLiqs] = useState<any[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:4001');
    socket.on('liquidation', (event) => {
      setLiqs((prev) => [event, ...prev].slice(0, 20));
    });
    return () => { socket.disconnect(); };
  }, []);

  const display = liqs.length ? liqs : dummy;

  return (
    <div className="glass neon-border p-6 rounded-2xl shadow-lg w-full">
      <h2 className="text-2xl font-orbitron font-bold neon-cyan mb-4">Live Liquidations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {display.map((liq, i) => (
            <motion.div
              key={liq.id || i}
              className="bg-black/30 rounded-xl p-4 border border-neon-cyan shadow-neon cursor-pointer hover:scale-105 transition"
              initial={{ rotateY: 0, opacity: 0, y: 30 }}
              animate={{ rotateY: 0, opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              whileHover={{ rotateY: 8 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold neon-yellow font-orbitron">{liq.protocol}</span>
                <span className="text-xs neon-blue font-mono">{liq.timestamp}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-neon-cyan font-mono">{liq.borrower}</span>
                <span className="text-neon-pink font-mono">{liq.amount} {liq.token}</span>
                <span className="text-neon-purple font-mono">at {liq.price}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 