import http from 'http';
import app from './app.js'; 

const PORT = 9090

const server = http.createServer(app);
server.listen(PORT, () => {
  return console.log(`App Listening on port ${PORT}`);
})
