import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full text-center py-4 mt-8 text-xs neon-cyan opacity-70">
      zkLiquidator &copy; {new Date().getFullYear()} – Built for DeFi risk visionaries.
    </footer>
  );
} 