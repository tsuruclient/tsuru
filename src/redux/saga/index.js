// @flow

import { takeEvery } from 'redux-saga/effects';
import * as types from '../constant';

import setDevData from './dev';

function* rootSaga(): any {
    yield takeEvery(types.SET_DEV_DATA, setDevData);
}

export default rootSaga;
