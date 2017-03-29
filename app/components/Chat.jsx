import React from 'react';
import { connect } from 'react-redux';

import ChatHeader from 'ChatHeader';
import ChatHistory from 'ChatHistory';
import ChatMessage from 'ChatMessage';

class Chat extends React.Component {
  renderChatHeader() {
    const { users } = this.props;
    const contact = users.find((user) => {
      return user.hasOwnProperty('active');
    });

    return <ChatHeader { ...contact } />
  }
  render() {
    return (
      <div className="chat">
        { this.renderChatHeader() }
        <ChatHistory />
        <ChatMessage />
      </div>
    );
  }
}

export default connect(state => state)(Chat);