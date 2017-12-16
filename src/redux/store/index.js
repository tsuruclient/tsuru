// @flow

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';

import reducer from '../reducer';
import rootSagas from '../saga';

const logger = createLogger({
    //options
});

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(sagaMiddleware, logger)
    );
    sagaMiddleware.run(rootSagas);
    
    return store;
}
