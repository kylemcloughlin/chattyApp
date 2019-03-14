import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    

    
    
    render() {
      
        
        
        return (
            
                <div>
    
                    {this.props.messages.map(message => {
                        if(message.type === 'notification') {
                            console.log('hit');
                        }
        return (<Message key={message.id} userName={message.username} message={message.content} type={message.type}/>)
       }) } 
                    </div>
        
        )
    }
}


  export default MessageList;