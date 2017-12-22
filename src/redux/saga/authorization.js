// @flow

import { put, call, select } from 'redux-saga/effects';
import * as types from '../constant';
import {AddAccountDialogName} from '../constant/dialogs';
import type Account from '../../core/object/Account';
import * as storageApis from '../api/storage';
import * as authApis from '../api/auth';

export default function* pinAuthorization(action: Object): any {
    try{
        const target : Account = yield select((state: Object): Account => state.auth);
        target.client = yield call(authApis.getOAuthAccessToken, target.client, action.payload.pin);
        yield put({ type: types.ADD_ACCOUNT, payload: target });
        yield put({ type: types.CLOSE_DIALOG, payload: {dialogName: AddAccountDialogName}});
    } catch (e) {
        yield put({ type: types.CREATE_AC_RECEIVE_PIN_ERR });
    }
}