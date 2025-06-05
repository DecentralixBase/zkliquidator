import React from 'react';
import Header from '../components/Header';
import ChainSwitcher from '../components/ChainSwitcher';
import ProtocolFilter from '../components/ProtocolFilter';
import LiquidationFeed from '../components/LiquidationFeed';
import WalletProfiler from '../components/WalletProfiler';
import Heatmap from '../components/Heatmap';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen w-full">
      <Header />
      <section className="w-full max-w-7xl flex flex-col md:flex-row gap-8 mt-8 px-4">
        <div className="flex-1 flex flex-col gap-8">
          <ChainSwitcher />
          <ProtocolFilter />
          <Heatmap />
        </div>
        <div className="flex-[2] flex flex-col gap-8">
          <LiquidationFeed />
        </div>
      </section>
      <WalletProfiler />
      <footer className="w-full text-center py-8 mt-12 text-xs neon-cyan opacity-70 font-orbitron">
        zkLiquidator &copy; {new Date().getFullYear()} – Scan. Predict. Profit.
      </footer>
    </main>
  );
} 