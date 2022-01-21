import "core-js/stable";
import "regenerator-runtime/runtime";
import http from 'http';
import app from './app';

const server = http.createServer(app);

const PORT = process.env.PORT || 2000;

server.listen(PORT, () => console.log(`The Force is on port ${PORT}`));
