import React from 'react';
import { connect } from 'react-redux';

class Contact extends React.Component {
  render() {
    const { avatar, name, status } = this.props;

    return (
      <div className="contact">
        <img className="avatar" src={ avatar } />
        <div className="contact-info">
          <span>{ name }</span>
          <span className="status">
            <i className={ `fa fa-circle ${status}` }></i>
            { status }
          </span>
        </div>
      </div>
    );
  }
}

export default connect()(Contact);