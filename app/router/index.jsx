import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import ChatApp from 'ChatApp';

export default (
  <Router history={ hashHistory }>
    <Route path="/">
      <IndexRoute component={ ChatApp } />
    </Route>
  </Router>
);