import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
// const WebSocket = require('ws')
let currentUsers = { name: "Anonymous" };
let messages = [
  {
    username: "Bob",
    content: "Has anyone seen my marbles?",
    id: 434,
  },
  {
    username: "Anonymous",
    content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
    id: 33,
  }
];



function loadingTimer() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => messages, currentUsers)
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false,
                    messages: messages,
                    currentUsers: currentUsers              
    };
    
  }




  componentDidMount() {
    console.log(this.state);

    // loadingTimer().then(messages => {
    //   this.setState({
    //     loading: false,
    //     messages,
    //     currentUsers
    //   });

    // });
    this.socket = new WebSocket('ws://localhost:3001' );

    // Connection opened
    this.socket.addEventListener('open', (event) => {
      // this.setState({messages: event.data})
      console.log('socket/comDidMount')
      this.socket.addEventListener('message', (evt) => {
      let parsedEVT = JSON.parse(evt.data);  
        this.setState({messages: parsedEVT});
      })
   
    });

    // this.socket.addEventListener('message', (event) => {
    //   let message = JSON.parse(event.data)
    //   this.socket.send(message);
    //   console.log(message);
    // })
  }

  sendMessageWS = (input) => {
    this.socket.send(JSON.stringify(input))
  }

  addUser = (input) => {
    const notification =  {
      type: "notification",
      content: `${this.state.currentUsers.name} has changed there name to ${input.name}`
    }
    this.socket.send(JSON.stringify(notification));
    this.setState({currentUsers: input});
    console.log(notification);
  
    return this.state.currentUsers;
   
  
  }
  
  sendMessageWS = (input) => {
    this.socket.send(JSON.stringify(input))
  }

  addMessage = (input) => {
    const newMess = {
      type: "message",
      username: this.state.currentUsers.name,
      content: input,
    };
  
    this.sendMessageWS(newMess)
  
    
    // return this.setState({ ...messages });
  }


  render() {

    if (this.state.loading) {
      console.log('load')
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
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar user={this.state.currentUsers.name}  addMessage={this.addMessage} addUser={this.addUser}/>

      </div>
    );
  }
}
export default App;





