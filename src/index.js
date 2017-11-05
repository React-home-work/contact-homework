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
// import { authenticateUser } from "./actions";


export const store = createStore(contactApp); // TODO !记得去掉这行测试用的export
// console.log(store.getState(), 'store.getState()');
// console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )
// store.dispatch(authenticateUser("Admin", "123"));
// unsubscribe();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            {/* <IndexRoute component={Login}/> */}
            <Route path="/" component={App}>
                <Route path="/Login" component={Login}></Route>
                <Route path="/Contact" component={Contact}></Route>
            </Route>
        </Router>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
