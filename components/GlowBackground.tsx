import RayScanner from './RayScanner';
export default function GlowBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 blur-3xl opacity-40" style={{width:600,height:600,background:'radial-gradient(circle,#00fff7 0%,#a259ff 60%,transparent 100%)'}} />
      <div className="absolute bottom-0 right-0 blur-2xl opacity-30" style={{width:400,height:400,background:'radial-gradient(circle,#ff00e0 0%,#00c3ff 60%,transparent 100%)'}} />
      <div className="absolute left-0 top-0 blur-2xl opacity-20" style={{width:300,height:300,background:'radial-gradient(circle,#ffe600 0%,#00fff7 60%,transparent 100%)'}} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <RayScanner size={420} />
      </div>
    </div>
  );
} 