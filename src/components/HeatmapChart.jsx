import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RayScanner from './RayScanner';

const CHAINS = [
  { key: 'ethereum', label: 'Ethereum', color: '#00fff7' },
  { key: 'bsc', label: 'BSC', color: '#ffe600' },
  { key: 'arbitrum', label: 'Arbitrum', color: '#00c3ff' },
  { key: 'optimism', label: 'Optimism', color: '#ff00e0' },
  { key: 'polygon', label: 'Polygon', color: '#a259ff' },
];

export default function HeatmapChart() {
  const [risk, setRisk] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.llama.fi/liquidations');
        const json = await res.json();
        // Aggregate max risk per chain
        const agg = {};
        for (const c of CHAINS) agg[c.key] = 0;
        for (const item of json) {
          if (agg[item.chain] === undefined) agg[item.chain] = 0;
          agg[item.chain] = Math.max(agg[item.chain], item.risk || 0);
        }
        setRisk(agg);
      } catch {
        setRisk({});
      }
      setLoading(false);
    };
    fetchData();
    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-4 rounded-2xl relative mb-4">
      <div className="absolute top-2 right-2">
        <RayScanner size={40} color="#a259ff" />
      </div>
      <h2 className="text-xl font-orbitron mb-2 neon-purple">Chain Risk Heatmap</h2>
      {loading ? <div className="text-gray-400">Loading heatmap...</div> : (
        <div className="flex flex-col gap-2 mt-2">
          {CHAINS.map(chain => (
            <div key={chain.key} className="flex items-center gap-2">
              <span className="w-20 font-orbitron" style={{color: chain.color}}>{chain.label}</span>
              <motion.div initial={{ width: 0 }} animate={{ width: `${risk[chain.key] || 2}%` }} transition={{ duration: 1 }}
                className="h-4 rounded-full bg-gradient-to-r from-[#101624] to-transparent relative shadow-lg"
                style={{
                  background: `linear-gradient(90deg, ${chain.color} 0%, #0b0f1a 100%)`,
                  boxShadow: `0 0 12px 2px ${chain.color}`,
                  width: `${risk[chain.key] || 2}%`,
                  minWidth: 8,
                  maxWidth: '100%'
                }}
              >
                <span className="absolute right-0 -top-6 text-xs font-bold" style={{color: chain.color}}>{risk[chain.key]?.toFixed(1) ?? '--'}%</span>
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
} 