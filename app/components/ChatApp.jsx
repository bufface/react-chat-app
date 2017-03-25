import React from 'react';

import Chat from 'Chat';
import Contacts from 'Contacts';

export default class ChatApp extends React.Component {
  render() {
    return (
      <div className="chat-app-container">
        <Contacts />
        <Chat />
      </div>
    );
  }
}