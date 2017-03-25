import React from 'react';

import ContactsSearch from 'ContactsSearch';

export default class Contacts extends React.Component {
  render() {
    return (
      <div className="contacts">
        <ContactsSearch />
      </div>
    );
  }
}