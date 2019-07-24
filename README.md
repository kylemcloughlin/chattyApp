Chatty App
=====================
A client-side SPA (single-page app) built with ReactJS, Webpack, Babel, Node.js and Web Sockets. The client-side app communicates with a server via WebSockets for multi-user real-time updates. No persistent database is involved; the focus is on the client-side experience

Final Product
=====================
![`Screenshot of name change`](https://github.com/kylemcloughlin/chattyApp/blob/5a85807ec0209da9fbab68ef18aba89a5542b81e/docs/changeName.png?raw=true?raw=true)
![`Screenshot of conversation`](https://github.com/kylemcloughlin/chattyApp/blob/5a85807ec0209da9fbab68ef18aba89a5542b81e/docs/convo.png?raw=true?raw=true)

Get Started
=====================
Install the dependencies and start the web server.

```
npm install
npm start
```

Start the websocket server by navigating within the 
`chatty-server` folder and running the server using the `node webSocketServer.js` command.

Open http://localhost:3000 


Dependencies
=====================

* [React](https://reactjs.org/)
* [Webpack](https://www.npmjs.com/package/webpack)
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
