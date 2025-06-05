import '../styles/globals.css';
import '../styles/ray.css';
import { ReactNode } from 'react';
import { Web3Provider } from '../lib/wallet';

export const metadata = {
  title: 'zkLiquidator – Real-Time DeFi Risk Scanner',
  description: 'Scan. Predict. Profit. Real-time DeFi liquidation radar dashboard.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Audiowide&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-white min-h-screen font-orbitron">
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
} 