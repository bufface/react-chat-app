import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import router from 'app/router/';
import * as store from 'configureStore';

// Styles
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
  <Provider store={ store.configure() }>
    {router}
  </Provider>,
  document.getElementById('app')
);