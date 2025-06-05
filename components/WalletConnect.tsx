"use client";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function WalletConnect() {
  return (
    <div className="glass neon-border p-4 rounded-2xl flex justify-center items-center">
      <ConnectButton showBalance={false} chainStatus="icon" />
    </div>
  );
} 