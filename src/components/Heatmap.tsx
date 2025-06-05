import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RayScanner from './RayScanner';

type Liquidation = {
  chain: string;
  collateralUsd: number;
};

export default function Heatmap() {
  const [data, setData] = useState<Liquidation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch('https://api.llama.fi/liquidations');
      const json = await res.json();
      setData(json?.liquidations || []);
      setLoading(false);
    }
    fetchData();
  }, []);

  // Aggregate by chain
  const chainMap: Record<string, number> = {};
  data.forEach((liq) => {
    chainMap[liq.chain] = (chainMap[liq.chain] || 0) + liq.collateralUsd;
  });

  const chains = Object.entries(chainMap).sort((a, b) => b[1] - a[1]);

  return (
    <motion.div
      className="relative glass neon-border p-6 rounded-2xl shadow-lg mt-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <div className="absolute left-4 bottom-4 opacity-40 pointer-events-none">
        <RayScanner size={50} />
      </div>
      <h2 className="text-2xl font-orbitron font-bold neon-yellow mb-4">Chain Heatmap</h2>
      <div className="flex flex-col gap-2">
        {loading ? (
          <div className="text-white/60">Loading...</div>
        ) : chains.length === 0 ? (
          <div className="text-white/60">No data.</div>
        ) : (
          chains.map(([chain, amount]) => (
            <div key={chain} className="flex items-center gap-3">
              <span className="w-24 font-bold font-orbitron">{chain}</span>
              <div className="flex-1 h-4 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple relative overflow-hidden">
                <div
                  className="h-4 rounded-full bg-neon-cyan/80"
                  style={{ width: `${Math.min(100, amount / chains[0][1] * 100)}%` }}
                />
              </div>
              <span className="w-24 text-right font-mono text-white/80">${Math.round(amount).toLocaleString()}</span>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
} 