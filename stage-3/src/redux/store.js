import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import {createStore, applyMiddleware} from 'redux';
// import applyMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));