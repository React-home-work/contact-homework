import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { Login, Contact } from "./component"
import contactApp from './reducers'
import registerServiceWorker from './registerServiceWorker';
import {LOGIN_SUCCESS} from "./env_variable";
// import { authenticateUser } from "./actions";


export const store = createStore(contactApp); // TODO !记得去掉这行测试用的export
console.log(store.getState(), 'store.getState()');

const requireAuth = (nextState, replace) => {
    if (store.getState().authenticate.loginState !== LOGIN_SUCCESS) {
        replace({ pathname: '/Login' })
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {/* <IndexRoute component={Login}/> */}
            <Route path="/" component={App}>
                <Route path="/Login" component={Login}></Route>
                <Route path="/Contact" component={Contact} onEnter={requireAuth}></Route>
            </Route>
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
