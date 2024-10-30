import net from 'net';
import { PORT, HOST } from './constants/env.js';

const server = net.createServer();

server.listen(PORT, HOST, () => {
  console.log(`Server running and listening at ${HOST}:${PORT}`);
});
