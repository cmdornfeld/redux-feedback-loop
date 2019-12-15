import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';

// State from Feeling.js sent here as payload, via dispatch with an action type of 'FEELING'
const feelingReducer = (state=[], action) => {
    if (action.type === 'FEELING'){
        return action.payload
        // State of feelingReducer is now equal to the former State of Feeling.js
    }
    return state;
}

// State from Understanding.js sent here as payload, via dispatch with an action type of 'UNDERSTANDING'
const understandingReducer = (state=[], action) => {
    if (action.type === 'UNDERSTANDING'){
        return action.payload
        // State of understandingReducer is now equal to the former State of Understanding.js
    }
    return state;
}

// State from Support.js sent here as payload, via dispatch with an action type of 'Support'
const supportReducer = (state=[], action) => {
    if (action.type === 'SUPPORT'){
        return action.payload
        // State of supportReducer is now equal to the former State of Support.js
    }
    return state;
}

// State from Comments.js sent here as payload, via dispatch with an action type of 'COMMENTS'
const commentsReducer = (state=[], action) => {
    if (action.type === 'COMMENTS'){
        return action.payload
        // State of commentsReducer is now equal to the former State of Comments.js
    }
    return state;
}

// Redux state (storeInstance) is able to store the State of each reducer and can be accessed by other components
// via the connect method (connect())
// Logger added for debugging; shows previous and new state in the console when an action is dispatched
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
