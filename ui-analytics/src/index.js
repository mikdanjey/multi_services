import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();
history.listen((location, action) => {
  // console.log("history", location.pathname);
  // ReactGA.pageview(location.pathname);
});

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} basename={'/'}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
