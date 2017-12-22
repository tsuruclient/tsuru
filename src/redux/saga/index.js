// @flow

import { takeEvery } from 'redux-saga/effects';
import * as types from '../constant';

import reqAuth from './authorization';

function* rootSaga(): any {
    yield takeEvery(types.REQUEST_AUTHORIZATION, reqAuth);
}

export default rootSaga;
