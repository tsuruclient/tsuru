// @flow

import { takeEvery } from 'redux-saga/effects';
import * as types from '../constant';

import * as app from './application';
import * as apis from './api';
import reqAuth from './authorization';
import logout from './logout';

function* rootSaga(): any {
    yield takeEvery(types.INIT_APP, app.loadApplicationData);
    yield takeEvery(types.REQUEST_CALL_API, apis.apiRequest)
    yield takeEvery(types.REQUEST_AUTHORIZATION, reqAuth);
    yield takeEvery(types.REQUEST_LOGOUT, logout);
}

export default rootSaga;
