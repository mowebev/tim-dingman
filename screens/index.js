import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { Route } from 'react-router';
// import { IndexRedirect } from 'react-router';
import { hashHistory } from 'react-router';

import App from 'screens/App';


export default render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
  ), document.getElementById('root'));
