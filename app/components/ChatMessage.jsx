import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import firebase from 'app/firebase';

class ChatMessage extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const { uid, dispatch } = this.props;
    let message = this.refs.message.value.trim();

    if (message) {
      const objMessaje = {
        kind: 'message',
        user: uid,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        message
      };
      dispatch(actions.startAddMessage(objMessaje));
      this.refs.message.value = '';
    }
  }
  render() {
    const { uid } = this.props;
    const isActive = uid ? 'chat-message' : 'chat-message not-active';

    if (uid) { this.refs.message.focus(); }

    return (
      <div className={isActive}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea
            ref="message"
            placeholder="Type your message"
            rows="3"
          />
          <div className="actions">
            <i className="fa fa-file-o" />
            <i className="fa fa-file-image-o" />
            <button type="submit" className="button send-button">Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(ChatMessage);