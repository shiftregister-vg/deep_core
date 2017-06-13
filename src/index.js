import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import injectTouchTapEvent from 'react-tap-event-plugin'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

injectTouchTapEvent()
const browserHistory = createBrowserHistory()

ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
