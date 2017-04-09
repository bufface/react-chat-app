import React from 'react';

import ChatMessageBubble from 'ChatMessageBubble';

export default class ChatHistory extends React.Component {
  render() {
    const renderMessages = () => {
      const { messages, auth } = this.props;

      if (messages.length > 0) {
        return messages.map((message) => {
          let messageOwner = (message.user === auth.uid) ? 'message-data message-user' : 'message-data message-guest';
          return (
           <div key={message.id} className={messageOwner}>
             <ChatMessageBubble message={message.message} />
           </div>
          )
        });
      }
      return;
    };
    return (
      <div className="chat-history">
        { renderMessages() }
      </div>
    );
  }
}