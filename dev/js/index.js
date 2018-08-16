import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './App';
import 'babel-polyfill';
import '../../src/css/bootstrap.css';
import '../../src/css/selectize.default.css'
import '../../src/js/bootstrap.min.js';
import '../../src/js/selectize.min.js';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);
