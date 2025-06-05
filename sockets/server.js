const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();
const { startMockLiquidations } = require('../lib/mock');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

let recentEvents = [];

function broadcast(event) {
  recentEvents.push(event);
  if (recentEvents.length > 50) recentEvents.shift();
  io.emit('liquidation', event);
}

// Try to use Alchemy, fallback to mock
typeof process.env.ALCHEMY_API_KEY === 'string' && process.env.ALCHEMY_API_KEY.length > 5
  ? require('../lib/alchemy').subscribeToLiquidations(broadcast)
  : startMockLiquidations(broadcast);

io.on('connection', (socket) => {
  recentEvents.forEach(e => socket.emit('liquidation', e));
});

app.get('/health', (req, res) => res.send('ok'));

const PORT = process.env.PORT || 4001;
server.listen(PORT, () => console.log('Socket.io server running on', PORT)); 