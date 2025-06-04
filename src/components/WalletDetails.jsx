import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RayScanner from './RayScanner';

export default function WalletDetails({ address, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!address) return;
    setLoading(true);
    setError(null);
    setDetails(null);
    fetch('https://api.llama.fi/liquidations')
      .then(res => res.json())
      .then(data => {
        const found = data.filter(item => item.address === address);
        setDetails(found);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch wallet details');
        setLoading(false);
      });
  }, [address]);

  if (!address) return null;
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-panel p-4 rounded-2xl relative mt-4">
      <div className="absolute top-2 right-2">
        <RayScanner size={36} color="#ff00e0" />
      </div>
      <button className="absolute top-2 left-2 text-sm neon-pink underline" onClick={onClose}>Close</button>
      <h2 className="text-lg font-orbitron mb-2 neon-pink">Wallet Profiler</h2>
      {loading ? <div className="text-gray-400">Loading...</div> : error ? <div className="text-red-400">{error}</div> : (
        <div>
          <div className="font-mono text-cyan-300 mb-2">{address}</div>
          {details && details.length > 0 ? (
            <table className="w-full text-sm mb-2">
              <thead>
                <tr className="text-left text-gray-400">
                  <th>Protocol</th>
                  <th>Chain</th>
                  <th>Collateral %</th>
                  <th>Last Update</th>
                </tr>
              </thead>
              <tbody>
                {details.map((item, i) => (
                  <tr key={item.protocol + i}>
                    <td>{item.protocol}</td>
                    <td>{item.chain}</td>
                    <td className={item.risk > 90 ? 'text-pink-400 font-bold' : item.risk > 80 ? 'text-yellow-300' : ''}>{item.risk?.toFixed(1) ?? '--'}%</td>
                    <td>{new Date(item.timestamp * 1000).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <div className="text-gray-400">No open positions found for this address.</div>}
        </div>
      )}
    </motion.div>
  );
} 