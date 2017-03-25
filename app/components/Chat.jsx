import React from 'react';

import ChatHeader from 'ChatHeader';
import ChatHistory from 'ChatHistory';
import ChatMessage from 'ChatMessage';

export default class Chat extends React.Component {
  render() {
    return (
      <div className="chat">
        <ChatHeader />
        <ChatHistory />
        <ChatMessage />
      </div>
    );
  }
}