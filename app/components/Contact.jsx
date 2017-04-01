import React from 'react';
import { connect } from 'react-redux';
import { firebaseRef } from 'app/firebase';
import * as actions from 'actions'

class Contact extends React.Component {
  componentDidMount() {
    const userRef = firebaseRef.child('users');
    const { dispatch } = this.props;

    // Fired when a user login or logout
    userRef.on('child_changed', (snapshot) => {
      const userChanged = snapshot.val();
      dispatch(actions.updateUser(userChanged.uid, userChanged));
    });
  }
  handleClick() {
    const { uid, auth, dispatch } = this.props;
    dispatch(actions.setUserAsActive(uid, auth.uid));
  }
  render() {
    const { avatar, name, status } = this.props;

    return (
      <div className="contact" onClick={this.handleClick.bind(this)}>
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

export default connect(state => state)(Contact);