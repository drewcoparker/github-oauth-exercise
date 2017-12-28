import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/masterReducer.js';

import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory()

const authSuccess = () => ({
    type: 'AUTH_SUCCESS'
})

const authFail = () => ({
    type: 'AUTH_FAIL'
})

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    hasErrored: false
}

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
        reduxPromise,
        routerMiddleware(history)
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
