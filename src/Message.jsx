import React, { Component } from 'react';


class Message extends Component {

    
    render() {
   
        return (
            // <main className="messages">
                <div className="message" >
                    <span className="message-username">{this.props.userName}</span>
                    <span className="message-content">{this.props.message}</span>
                
                </div>
            // </main>
        )
    }
}


export default Message;