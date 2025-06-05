export function startMockLiquidations(onEvent: (event: any) => void) {
  setInterval(() => {
    const protocols = ['Aave', 'Compound', 'Maker'];
    const tokens = ['ETH', 'DAI', 'WBTC'];
    const protocol = protocols[Math.floor(Math.random() * protocols.length)];
    const token = tokens[Math.floor(Math.random() * tokens.length)];
    const event = {
      protocol,
      borrower: '0x' + Math.random().toString(16).slice(2, 8) + '...' + Math.random().toString(16).slice(2, 6),
      token,
      amount: (Math.random() * 10).toFixed(2),
      price: `$${(Math.random() * 3000 + 1000).toFixed(0)}`,
      timestamp: new Date().toUTCString(),
    };
    onEvent(event);
  }, 5000);
} 