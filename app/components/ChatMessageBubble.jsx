import React from 'react';

export default class ChatMessageBubble extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div className="bubble">
        <p>{message}</p>
      </div>
    );
  }
}