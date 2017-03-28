import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import Chat from 'Chat';
import Contacts from 'Contacts';

class ChatApp extends React.Component {
  onLogout(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(actions.startLogout());
  }
  render() {
    return (
      <div className="chat-app-container">
        <button className="button logout-button" onClick={this.onLogout.bind(this)}>Logout</button>
        <Contacts />
        <Chat />
      </div>
    );
  }
}

export default connect()(ChatApp);