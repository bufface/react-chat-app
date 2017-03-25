import React from 'react';
import ReactDOM from 'react-dom';

import ChatApp from 'ChatApp';

// Styles
import 'style-loader!css-loader!sass-loader!applicationStyles';

ReactDOM.render(
  <ChatApp />,
  document.getElementById('app')
);