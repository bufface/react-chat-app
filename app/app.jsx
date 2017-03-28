import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'

import router from 'app/router/';
import firebase from 'app/firebase/';
import * as actions from 'actions';

const store = require('configureStore').configure();

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user));
    store.dispatch(actions.startAddUsers());
    hashHistory.push('/room');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

// Fired when user close the currenty window
window.onbeforeunload = () => store.dispatch(actions.startSetUserOffline());

// Styles
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
  <Provider store={ store }>
    {router}
  </Provider>,
  document.getElementById('app')
);