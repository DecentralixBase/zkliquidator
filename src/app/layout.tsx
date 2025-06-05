import React from 'react';
import '../styles/globals.css';
import '../styles/ray.css';

export const metadata = {
  title: 'zkLiquidator – Real-Time DeFi Risk Scanner',
  description: 'Scan. Predict. Profit. Real-time DeFi liquidation radar dashboard.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Audiowide&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-white min-h-screen font-orbitron">{children}</body>
    </html>
  );
} 