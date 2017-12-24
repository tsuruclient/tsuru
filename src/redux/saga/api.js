// @flow

import { put, call, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as dataTypes from '../../core/constant/dataType';
import alloc from '../../core/value/allocation';

export function* apiRequest(action: Object): any {
    try{
        const { accountIndex, timelineIndex, apidata, payload } = action.payload;
        if (typeof(timelineIndex) === 'number') yield put({type: types.SET_IN_PROGRESS_STATUS, payload: {timelineIndex, status: true}});
        const client = yield select((state: Object) => state.account[accountIndex].account.client);
        const data = yield call((): Promise<any> => client.get(apidata.url, payload));

        switch(apidata.datatype) {
        case dataTypes.home:
            yield put({
                type: types.UPDATE_CONTENT,
                payload: {
                    accountIndex,
                    datatype: apidata.datatype,
                    data: alloc(apidata.service, apidata.datatype, data),
                }});
                yield put({type: types.SET_IN_PROGRESS_STATUS, payload: {timelineIndex, status: false}});
        case dataTypes.activity:
            break;
        default:
            throw 'このdatatypesには対応していません: ' + apidata.datatype;
        }
    } catch (e) {
        console.log(e);
    }
}