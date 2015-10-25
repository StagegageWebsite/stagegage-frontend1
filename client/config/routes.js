import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../components/Main/Main';
import Home from '../components/Home/Home'
import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Router>
    <Route path="/" component={Main}>
      <Route path='home' component={Home} />
    </Route>
  </Router>);
