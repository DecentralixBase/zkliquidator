import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RayScanner from './RayScanner';

const CHAIN_MAP = {
  ethereum: 'Ethereum',
  bsc: 'BSC',
  arbitrum: 'Arbitrum',
  optimism: 'Optimism',
  polygon: 'Polygon',
};
const PROTOCOLS = [
  'Aave v2', 'Aave v3', 'Compound', 'Venus', 'JustLend', 'Radiant', 'Silo'
];

function formatAgo(ts) {
  const diff = Math.floor((Date.now() / 1000 - ts));
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff/60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff/3600)}h ago`;
  return `${Math.floor(diff/86400)}d ago`;
}

export default function LiquidationFeed({ onSelectAddress, selectedChain, selectedProtocols }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNotif, setShowNotif] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://api.llama.fi/liquidations');
      const json = await res.json();
      setData(json);
      setLoading(false);
      // Check for high risk
      setShowNotif(json.some(item => item.risk > 90));
    } catch (e) {
      setError('Failed to fetch data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);

  let filtered = data.filter(item => {
    const chainMatch = !selectedChain || CHAIN_MAP[item.chain]?.toLowerCase() === selectedChain.toLowerCase();
    const protocolMatch = !selectedProtocols?.length || selectedProtocols.includes(item.protocol);
    return chainMatch && protocolMatch;
  });

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-4 rounded-2xl relative mb-4">
      <div className="absolute top-2 right-2">
        <RayScanner size={48} color="#00fff7" />
      </div>
      <h2 className="text-2xl font-orbitron mb-2 neon-cyan">Live Liquidation Feed</h2>
      {showNotif && (
        <div className="mb-2 p-2 rounded-lg bg-pink-900/80 neon-pink animate-pulse text-center">
          ⚠️ High risk detected! Some protocols have >90% risk.
        </div>
      )}
      {loading ? (
        <div className="text-gray-400">Loading liquidation data...</div>
      ) : error ? (
        <div className="text-red-400">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm mt-2">
            <thead>
              <tr className="text-left text-gray-400">
                <th>Address</th>
                <th>Protocol</th>
                <th>Chain</th>
                <th>Collateral %</th>
                <th>Last Update</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="text-center text-gray-500">No at-risk positions found.</td></tr>
              )}
              {filtered.map((item, i) => (
                <tr key={item.address + item.protocol + i} className="hover:bg-[#181e2a]/60 transition cursor-pointer" onClick={() => onSelectAddress(item.address)}>
                  <td className="font-mono underline text-cyan-300">{item.address.slice(0, 6)}...{item.address.slice(-4)}</td>
                  <td>{item.protocol}</td>
                  <td>{CHAIN_MAP[item.chain] || item.chain}</td>
                  <td className={item.risk > 90 ? 'text-pink-400 font-bold' : item.risk > 80 ? 'text-yellow-300' : ''}>{item.risk?.toFixed(1) ?? '--'}%</td>
                  <td>{formatAgo(item.timestamp)}</td>
                  <td><span className="neon-cyan">→</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
} 