import { createStore, combineReducers, applyMiddleware } from 'redux';
import { usersReducer } from './usersReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas';

const rootReducer = combineReducers({ users: usersReducer });

const saga = createSagaMiddleware();

const Store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);

export default Store;
