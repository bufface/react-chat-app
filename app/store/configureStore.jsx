import * as redux from 'redux';

import { authReducer } from 'reducers';

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    auth: authReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};