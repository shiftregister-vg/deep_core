import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import App from './App';

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
