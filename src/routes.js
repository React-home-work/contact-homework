import React from 'react';
import { Route } from 'react-router';
import App from './App';
import { Login } from "./component/login";
import { Contact } from "./component/contact";
import { loginAuthenticate } from "./component/login"

export default (
  <Route path="/" component={App}>
    <Route path="/Login" component={Login} />
    <Route path="/Contact" component={Contact}
           onEnter={(nextState, replace) => {
             if(!loginAuthenticate()){
               replace({ pathname: '/Login'})
             }
           }} />
  </Route>
)

