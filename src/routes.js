import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Contact from "./component/contact";
import { Login } from "./component/login";
import {LOGIN_SUCCESS} from "./env_variable";
import { store } from "./index"

const requireAuth = (nextState, replace) => {
  if (store.getState().authenticateReducer.loginState !== LOGIN_SUCCESS) {
    replace({ pathname: '/Login' })
  }
};

export default (
  <Route path="/" component={App}>
    <Route path="/Login" component={Login} />
    <Route path="/Contact" component={Contact} onEnter={requireAuth} />
  </Route>
)

