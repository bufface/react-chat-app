import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import firebase from 'app/firebase';

import ChatApp from 'ChatApp';
import Login from 'Login';

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

const redirectIsLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/room');
  }
  next();
};

export default (
  <Router history={ hashHistory }>
    <Route path="/">
      <Route path="room" component={ ChatApp } onEnter={requireLogin} />
      <IndexRoute component={Login} onEnter={redirectIsLoggedIn}/>
    </Route>
  </Router>
);