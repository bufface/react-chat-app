import React from 'react';
import * as Redux from 'react-redux';

import Chat from 'Chat';
import Contacts from 'Contacts';

class ChatApp extends React.Component {
  render() {
    return (
      <div className="chat-app-container">
        <Contacts />
        <Chat />
      </div>
    );
  }
}

export default Redux.connect()(ChatApp);