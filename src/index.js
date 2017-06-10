import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const browserHistory = createBrowserHistory()

ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
