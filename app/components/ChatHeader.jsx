import React from 'react';
import { connect } from 'react-redux';

class ChatHeader extends React.Component {
  render() {
    const renderContact = () => {
      const { name, avatar } = this.props;
      if (name && avatar) {
        return (
          <div className="contact-active">
            <img className="avatar" src={ avatar } />
            <div className="contact-info">
              <span>{ name }</span>
              <span className="status">
              <i className="fa fa-star"></i>
            </span>
            </div>
          </div>
        );
      }
    }
    return (
      <div className="chat-header">
        { renderContact() }
      </div>
    );
  }
}

export default connect()(ChatHeader);