import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

let currentUsers = { name: "Anonymous" };
let messages = [];

function loadingTimer() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => messages, currentUsers);
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      messages: messages,
      currentUsers: currentUsers
    };

  }




  componentDidMount() {


    loadingTimer().then(messages => {
      this.setState({
        loading: false,
      });

    });
    this.socket = new WebSocket('ws://localhost:3001');

    // Connection opened
    this.socket.addEventListener('open', (event) => {
      console.log('socket/comDidMount');
      this.socket.addEventListener('message', (evt) => {
        let parsedEVT = JSON.parse(evt.data);
        if (parsedEVT.type === 'count') {

          this.setState({ count: parsedEVT.count });
          console.log("state", this.state);
        } else {


          this.setState({ messages: parsedEVT });
        }
      });

    });


  }

  sendMessageWS = (input) => {
    this.socket.send(JSON.stringify(input))
  }

  addUser = (input) => {
    const notification = {
      type: "notification",
      content: `${this.state.currentUsers.name} has changed there name to ${input.name}`
    };
    this.socket.send(JSON.stringify(notification));
    this.setState({ currentUsers: input });


    return this.state.currentUsers;


  };

  sendMessageWS = (input) => {
    this.socket.send(JSON.stringify(input));
  };

  addMessage = (input) => {
    const newMess = {
      type: "message",
      username: this.state.currentUsers.name,
      content: input,
    };

    this.sendMessageWS(newMess);



  };


  render() {

    if (this.state.loading) {
      console.log('load');
      return (
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
          <h1>loading.......</h1>
          <ChatBar />

        </div>
      );
    }
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <a className="counter">{this.state.count} User online!</a>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUsers.name} addMessage={this.addMessage} addUser={this.addUser} />

      </div>
    );
  }
}
export default App;





