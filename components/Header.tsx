import RayScanner from './RayScanner';

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center pt-12 pb-6 relative">
      <div className="absolute left-1/2 -top-24 -translate-x-1/2 z-0">
        <RayScanner size={180} />
      </div>
      <div className="glass relative z-10 p-8 rounded-3xl flex flex-col items-center shadow-xl border-2 border-cyan-400/30">
        <h1 className="text-5xl md:text-6xl font-orbitron font-bold neon-cyan drop-shadow-glow tracking-tight text-center">
          zkLiquidator
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-audiowide neon-pink text-center">
          Scan. Predict. Profit.{' '}
          <span className="neon-purple">Real-time DeFi Risk Scanner</span>
        </p>
      </div>
    </header>
  );
} 