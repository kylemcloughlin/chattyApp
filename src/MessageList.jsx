import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    // constructor(props){
    //     super(props);
    //   console.log('hit', props)
        
    // }

    
    
    render() {
      
        
        
        return (
            
                <div>
    
                    {this.props.messages.map(message => {
         return (<Message key={message.id} userName={message.username} message={message.content} />)
       }) } 
                    </div>
        
        )
    }
}


  export default MessageList;