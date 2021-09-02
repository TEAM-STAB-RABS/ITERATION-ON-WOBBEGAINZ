import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Import styles from SASS
import styles from './scss/application.scss';

// Import React Components
import App from './components/App.jsx';
// Import Bootstrap for WebPack
import 'bootstrap';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
