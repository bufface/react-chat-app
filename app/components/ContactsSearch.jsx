import React from 'react';

export default class SearchContact extends React.Component {
  render() {
    return (
      <div className="search-contact">
        <input type="text" placeholder="Search" />
        <i className="fa fa-search" />
      </div>
    );
  }
}