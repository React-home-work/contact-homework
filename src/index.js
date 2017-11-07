import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routes from "./routes"
import contactApp from './reducers'
import registerServiceWorker from './registerServiceWorker';

export const store = createStore(contactApp);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
