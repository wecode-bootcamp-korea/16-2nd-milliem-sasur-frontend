import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import '@fortawesome/fontawesome-free/js/all.js';
import GlobalStyles from './Styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
