import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import ChatHeader from 'ChatHeader';
import ChatHistory from 'ChatHistory';
import ChatMessage from 'ChatMessage';

class Chat extends React.Component {
  render() {
    const { users, messages, auth, dispatch } = this.props;

    const userSelected = users.find((user) => {
      return user.hasOwnProperty('active');
    });

    // Getting previous messages (once)
    if (userSelected && messages.length === 0) {
      dispatch(actions.startAddMessages(userSelected.roomKey));
    }

    return (
      <div className="chat">
        <ChatHeader { ...userSelected } />
        <ChatHistory messages={messages} auth={auth} />
        <ChatMessage { ...userSelected } />
      </div>
    );
  }
}

export default connect(state => state)(Chat);