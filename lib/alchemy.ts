import { Alchemy, Network, AlchemySubscription } from 'alchemy-sdk';

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(config);

export function subscribeToLiquidations(onEvent: (event: any) => void) {
  // TODO: Use Alchemy WebSocket to listen to liquidation events
  // Example: alchemy.ws.on(...)
} 