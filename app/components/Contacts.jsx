import React from 'react';
import { connect } from 'react-redux';

import ContactsSearch from 'ContactsSearch';
import Contact from 'Contact';

class Contacts extends React.Component {
  renderContact() {
    const { users, auth } = this.props;

    // Number 1 It's me
    if (users.length < 2) {
      return (
        <div className="text-no-contacts">
          <p>No people connected</p>
        </div>
      );
    }

    return users.map((user) => {
      if (auth.uid !== user.uid) {
        return <Contact key={ user.uid } { ...user } />
      }
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

export default connect( state => state )(Contacts);