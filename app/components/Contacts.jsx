import React from 'react';
import { connect } from 'react-redux';
import { firebaseRef } from 'app/firebase';
import * as actions from 'actions'

import ContactsSearch from 'ContactsSearch';
import Contact from 'Contact';

class Contacts extends React.Component {
  componentDidMount() {
    const userRef = firebaseRef.child('users');
    const { users, dispatch } = this.props;

    // Fired when new user is created
    userRef.on('child_added', (snapshot) => {
      const userAdded = snapshot.val();
      dispatch(actions.addUser(userAdded));
    });
  }
  renderContact() {
    const { users } = this.props;

    if (users.length < 1) {
      return (
        <div className="text-no-contacts">
          <p>No people connected</p>
        </div>
      );
    }

    return users.map((user) => {
      return <Contact key={ user.uid } { ...user } />
    });
  }
  render() {
    return (
      <div className="contacts">
        <ContactsSearch />
        { this.renderContact() }
      </div>
    );
  }
}

export default connect(
  state => state
)(Contacts);