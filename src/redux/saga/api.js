// @flow

import { put, call, select } from 'redux-saga/effects';
import * as types from '../constant';

export function* apiRequest(action: Object): any {
    try{
        const { accountIndex, timelineIndex, apidata, payload } = action.payload;
        const client = yield select((state: Object) => state.account[accountIndex].account.client);
        console.log(action.payload);
        const data = yield call((): Promise<any> => client.get(apidata.url, payload));
        console.log(data);
    } catch (e) {
        console.log(e);
    }
}