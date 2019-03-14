import React, { Component } from 'react';


class Message extends Component {

    
    render() {
        if(this.props.type === 'notification') {
        
            return (<div className="notification">
            <span className="notification-content"><b>{this.props.message}</b></span>
          </div>)
        }
        // if(this.props.type === 'message') {
        return (
            
                <div className="message" >
                    <span className="message-username">{this.props.userName}</span>
                    <span className="message-content">{this.props.message}</span>
                
                </div>
    
            )
        // }
   }
}


export default Message;