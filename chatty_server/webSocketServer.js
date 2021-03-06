// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv1 = require('uuid/v1');

// Set the port to 3001
const PORT = process.env.PORT || 3001

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({
  server
});

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
let messageLog = [
];
// 
wss.on('connection', (ws) => {
  console.log('clitent connected');
  wss.clients.forEach(function each(client) {
    let clientCount = {
      type: 'count',
      count: wss.clients.size
    };

    client.send(
      JSON.stringify(clientCount)
    );
  });
  ws.send(JSON.stringify(messageLog));



  ws.on("message", (message) => {
    console.log(4, "received: %s", message);
    let parsed = JSON.parse(message);
    parsed.id = uuidv1();

    messageLog = [parsed, ...messageLog];
    wss.clients.forEach(function each(client) {
      client.send(
        JSON.stringify(messageLog)
      );
    });
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    wss.clients.forEach(function each(client) {
      let clientCount = {
        type: 'count',
        count: wss.clients.size
      };

      client.send(
        JSON.stringify(clientCount)
      );
    });
    console.log('Client disconnected');
  });
});

exports.PORT = PORT;