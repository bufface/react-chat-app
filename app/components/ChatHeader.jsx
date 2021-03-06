import React from 'react';

export default class ChatHeader extends React.Component {
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
              <i className="fa fa-star" />
            </span>
            </div>
          </div>
        );
      }
    };
    return (
      <div className="chat-header">
        { renderContact() }
      </div>
    );
  }
}