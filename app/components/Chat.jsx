import React from 'react';
import { connect } from 'react-redux';

import ChatHeader from 'ChatHeader';
import ChatHistory from 'ChatHistory';
import ChatMessage from 'ChatMessage';

class Chat extends React.Component {
  render() {
    const { users } = this.props;

    const userSelected = users.find((user) => {
      return user.hasOwnProperty('active');
    });

    return (
      <div className="chat">
        <ChatHeader { ...userSelected } />
        <ChatHistory />
        <ChatMessage { ...userSelected } />
      </div>
    );
  }
}

export default connect(state => state)(Chat);