// @flow

import { takeEvery } from 'redux-saga/effects';
import * as types from '../constant';

import * as app from './application';
import reqAuth from './authorization';

function* rootSaga(): any {
    yield takeEvery(types.INIT_APP, app.loadApplicationData);
    yield takeEvery(types.REQUEST_AUTHORIZATION, reqAuth);
}

export default rootSaga;
