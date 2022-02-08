import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import stockReducer from './stocks/index';

const reducer = combineReducers({
  stocks: stockReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
