import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RayScanner from './RayScanner';

type Liquidation = {
  id: string;
  address: string;
  chain: string;
  protocol: string;
  collateralUsd: number;
  debtUsd: number;
  collateralPercent: number;
  timestamp: number;
};

export default function LiquidationFeed() {
  const [data, setData] = useState<Liquidation[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    const res = await fetch('https://api.llama.fi/liquidations');
    const json = await res.json();
    setData(json?.liquidations?.slice(0, 30) || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative glass neon-border p-6 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      <div className="absolute right-4 top-4 opacity-40 pointer-events-none">
        <RayScanner size={60} />
      </div>
      <h2 className="text-2xl font-orbitron font-bold neon-cyan mb-4 flex items-center gap-2">
        Live Liquidations
        <span className="animate-pulse text-xs font-normal text-white/60">(auto-refresh 30s)</span>
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm font-mono">
          <thead>
            <tr className="text-neon-cyan/80">
              <th className="px-2 py-1 text-left">Address</th>
              <th className="px-2 py-1 text-left">Chain</th>
              <th className="px-2 py-1 text-left">Protocol</th>
              <th className="px-2 py-1 text-right">Amount (USD)</th>
              <th className="px-2 py-1 text-right">Collateral %</th>
              <th className="px-2 py-1 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-white/60">Loading...</td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-8 text-white/60">No liquidations found.</td>
              </tr>
            ) : (
              data.map((liq) => (
                <tr key={liq.id} className="hover:bg-white/5 transition cursor-pointer">
                  <td className="px-2 py-1">
                    <span className="underline text-neon-blue">{liq.address.slice(0, 6)}...{liq.address.slice(-4)}</span>
                  </td>
                  <td className="px-2 py-1">{liq.chain}</td>
                  <td className="px-2 py-1">{liq.protocol}</td>
                  <td className="px-2 py-1 text-right">${liq.collateralUsd.toLocaleString()}</td>
                  <td className="px-2 py-1 text-right">{liq.collateralPercent?.toFixed(2)}%</td>
                  <td className="px-2 py-1 text-right">{new Date(liq.timestamp * 1000).toLocaleTimeString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
} 