import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import injectTouchTapEvent from 'react-tap-event-plugin'
import App from './App';

injectTouchTapEvent()

it('renders without crashing', () => {
  const div = document.createElement('div');
  const browserHistory = createBrowserHistory()
  ReactDOM.render(
    <Router history={browserHistory}>
      <App />
    </Router>,
    div
  );
});
