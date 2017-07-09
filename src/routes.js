import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import LoginReturn from './components/Auth/LoginReturn';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/login/return" component={LoginReturn}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
