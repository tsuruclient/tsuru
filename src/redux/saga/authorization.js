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

        const userData = yield call(authApis.confirm, target.client, target.service);
        const addedAccountIndex = yield select((state: Object): number => state.account.length - 1);
        yield put({ type: types.UPDATE_USERDATA, payload: {
            data: userData,
            accountIndex: addedAccountIndex,
        }});

        yield call(storageApis.saveAccounts, yield select((state: Object): Array<Account> =>
            state.account.map((item: Object): Account =>
                item.account
        )));
    } catch (e) {
        yield put({ type: types.CREATE_AC_RECEIVE_PIN_ERR });
    }
}
