// React libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Redux libraries
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/masterReducer.js';

// Router libraries
import { Route, Switch } from 'react-router'
import { Redirect } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Local files
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory()

const initialState = {
    isLoading: false
}

const store = createStore(
    reducers,
    initialState,
    applyMiddleware(
        thunk,
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
