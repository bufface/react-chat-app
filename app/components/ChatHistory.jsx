import React from 'react';

import ChatMessageBubble from 'ChatMessageBubble';

export default class ChatHistory extends React.Component {
  render() {
    const renderMessages = () => {
      const { messages, auth, userActive } = this.props;

      if (messages.length > 0) {
        return messages.map((message) => {
          let msgOwnerName = 'You';
          let msgOwnerClass = 'message-user';

          if (message.user !== auth.uid) {
            msgOwnerClass = 'message-guest';
            msgOwnerName = userActive.name;
          }

          return (
          <div key={message.id} className="message-data">
            <div className={msgOwnerClass}>
              <ChatMessageBubble message={message.message} />
            </div>
          </div>
          )
        });
      }
    };
    return (
      <div className="chat-history">
        { renderMessages() }
      </div>
    );
  }
}