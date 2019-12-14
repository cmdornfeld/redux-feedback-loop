import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

const feelingReducer = (state=[], action) => {
    if (action.type === 'FEELING'){
        return action.payload
    }
    return state;
}

const understandingReducer = (state=[], action) => {
    if (action.type === 'UNDERSTANDING'){
        return action.payload
    }
    return state;
}

const supportReducer = (state=[], action) => {
    if (action.type === 'SUPPORT'){
        return action.payload
    }
    return state;
}

const commentsReducer = (state=[], action) => {
    if (action.type === 'COMMENTS'){
        return action.payload
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}> <App /></Provider>, document.getElementById('root'));
