import React, { Component } from 'react';

// const onChange = evt => {
//     evt.preventDefault();
//     console.log(evt.target.elements.);
//     //     const Input = evt.target.elements.user;
// // //     //   taskInput.value = "";
//   };
class ChatBar extends Component {
    constructor(props) {
        super(props)
             
    }
    
_handleKeyPressUser = (event) => {
    if(event.keyCode == 13) {
    let output = {name: event.target.value}
    
        this.props.addUser(output)
        console.log(output);
    
    event.target.value = "";
}



} 
_handleKeyPressMess = (event) => {
    if(event.keyCode == 13) {
        console.log(event.target.value)
        const messageInput = event.target.value;
        this.props.addMessage(messageInput);
        //    this.props.sendMessageWS(messageInput);
        event.target.value = "";
        }
        
        
      
    } 
    
   
    render() {
        
        return (
            <footer className="chatbar">
                <input   className="chatbarUsername" placeholder={this.props.user} name="User" onKeyDown={this._handleKeyPressUser}/>
                <input   className="chatbar-message" placeholder="Type a message and hit ENTER" name="message" onKeyDown={this._handleKeyPressMess} 
            />
            </footer>

        );
    }
}
export default ChatBar;