import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import GlobalStyles from './Styles/GlobalStyle';

import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
