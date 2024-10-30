import net from 'net';
import { PORT, HOST } from './constants/env.js';
import { onConnection } from './events/onConnection.js';

const server = net.createServer(onConnection);

server.listen(PORT, HOST, () => {
  console.log(`Server running and listening at ${HOST}:${PORT}`);
});
