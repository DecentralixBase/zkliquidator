import React, { useState } from 'react';
import Header from './components/Header';
import ChainSwitcher from './components/ChainSwitcher';
import ProtocolFilter from './components/ProtocolFilter';
import LiquidationFeed from './components/LiquidationFeed';
import HeatmapChart from './components/HeatmapChart';
import WalletDetails from './components/WalletDetails';
import Footer from './components/Footer';
import './styles/global.css';
import './styles/neon.css';

export default function App() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedChain, setSelectedChain] = useState(null);
  const [selectedProtocols, setSelectedProtocols] = useState([]);

  const handleToggleProtocol = (protocol) => {
    setSelectedProtocols((prev) =>
      prev.includes(protocol)
        ? prev.filter((p) => p !== protocol)
        : [...prev, protocol]
    );
  };

  return (
    <div className="min-h-screen bg-[#0b0f1a] font-orbitron text-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="col-span-1">
            <ChainSwitcher selected={selectedChain} onSelect={setSelectedChain} />
            <ProtocolFilter selected={selectedProtocols} onToggle={handleToggleProtocol} />
            <HeatmapChart />
          </section>
          <section className="col-span-2">
            <LiquidationFeed 
              onSelectAddress={setSelectedAddress}
              selectedChain={selectedChain}
              selectedProtocols={selectedProtocols}
            />
            {selectedAddress && <WalletDetails address={selectedAddress} onClose={() => setSelectedAddress(null)} />}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 