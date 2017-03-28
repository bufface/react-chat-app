import React from 'react';
import { connect } from 'react-redux';

class ChatHeader extends React.Component {
  render() {
    const { users } = this.props;
    const renderActiveUser = () => {
      return users.map((user) => {
        if (user.hasOwnProperty('active')) {
          return (
            <div key={user.uid} className="contact-active">
              <img className="avatar" src={ user.avatar } />
              <div className="contact-info">
                <span>{ user.name }</span>
                <span className="status">
                  <i className="fa fa-star"></i>
                </span>
              </div>
            </div>
          );
        }
      });
    }
    return (
      <div className="chat-header">
        { renderActiveUser() }
      </div>
    );
  }
}

export default connect(state => state)(ChatHeader);