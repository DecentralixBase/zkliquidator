import React, { useState } from 'react';
export default function Filters() {
  const [token, setToken] = useState('');
  const [address, setAddress] = useState('');
  return (
    <div className="glass neon-border p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center">
      <input
        className="bg-transparent border-b-2 border-neon-cyan px-3 py-2 text-neon-cyan font-mono focus:outline-none focus:border-neon-pink transition w-48"
        placeholder="Filter by Token (e.g. ETH)"
        value={token}
        onChange={e => setToken(e.target.value)}
      />
      <input
        className="bg-transparent border-b-2 border-neon-cyan px-3 py-2 text-neon-cyan font-mono focus:outline-none focus:border-neon-pink transition w-72"
        placeholder="Filter by Wallet Address"
        value={address}
        onChange={e => setAddress(e.target.value)}
      />
    </div>
  );
} 