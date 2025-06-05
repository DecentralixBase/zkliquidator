import Header from '../components/Header';
import WalletConnect from '../components/WalletConnect';
import LiveFeed from '../components/LiveFeed';
import TokenChart from '../components/TokenChart';
import Filters from '../components/Filters';
import GlowBackground from '../components/GlowBackground';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center w-full overflow-x-hidden">
      <GlowBackground />
      <Header />
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 mt-8 px-4 z-10">
        <div className="flex-1 flex flex-col gap-8">
          <WalletConnect />
          <Filters />
          <TokenChart />
        </div>
        <div className="flex-[2] flex flex-col gap-8">
          <LiveFeed />
        </div>
      </div>
      <footer className="w-full text-center py-8 mt-12 text-xs neon-cyan opacity-70 font-orbitron z-10">
        zkLiquidator © {new Date().getFullYear()} – Built for DeFi risk visionaries.
      </footer>
    </main>
  );
} 