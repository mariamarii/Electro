import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import for redux-thunk
import rootReducer from './rootReducer'; // The combined rootReducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
