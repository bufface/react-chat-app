import React from 'react';

import ChatMessageBubble from 'ChatMessageBubble';

export default class ChatHistory extends React.Component {
  render() {
    const renderMessages = () => {
      const { messages } = this.props;
      if (messages.length > 0) {
        return messages.map((message) => {
          return <ChatMessageBubble key={message.id} />
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