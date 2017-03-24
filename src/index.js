import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_style.css';

import { render } from 'react-dom';

// Import css
//import './styles/_style.scss';

// Import Components
import App from './components/App';
import Main from './components/Main';
import CoreLayout from './components/Layout/CoreLayout/CoreLayout';
import Project from './components/Project/Project';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CoreLayout}></IndexRoute>
        <Route path="/project/:projectId" component={Project}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))
