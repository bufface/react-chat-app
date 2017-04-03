import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import ChatHeader from 'ChatHeader';
import ChatHistory from 'ChatHistory';
import ChatMessage from 'ChatMessage';

class Chat extends React.Component {
  render() {
    const { users, messages, dispatch } = this.props;

    const userSelected = users.find((user) => {
      return user.hasOwnProperty('active');
    });

    if (userSelected && messages.length === 0) {
      dispatch(actions.startAddMessages(userSelected.roomKey));
    }

    return (
      <div className="chat">
        <ChatHeader { ...userSelected } />
        <ChatHistory messages={messages} />
        <ChatMessage { ...userSelected } />
      </div>
    );
  }
}

export default connect(state => state)(Chat);