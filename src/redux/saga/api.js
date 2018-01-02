// @flow

import { put, call, select } from 'redux-saga/effects';
import * as types from '../constant';
import * as dataTypes from '../../core/constant/dataType';
import alloc from '../../core/value/allocation';

export function* apiRequest(action: Object): any {
    const { accountIndex, timelineIndex, apidata, payload } = action.payload;
    try{
        if (typeof(timelineIndex) === 'number') yield put({type: types.SET_IN_PROGRESS_STATUS, payload: {timelineIndex, status: true}});
        const client = yield select((state: Object) => state.account[accountIndex].account.client);
        let data;
        switch(apidata.method){
        case 'GET':
            data = yield call((): Promise<any> => client.get(apidata.url, payload));

            switch(apidata.target) {
            case 'home_timeline':
            case 'mentions_timeline':
                yield put({
                    type: types.UPDATE_CONTENT,
                    payload: {
                        accountIndex,
                        datatype: apidata.datatype,
                        data: alloc(apidata.service, apidata.datatype, data),
                    }});
                yield put({type: types.SET_IN_PROGRESS_STATUS, payload: {timelineIndex, status: false}});
                break;
            case 'verify_credentials':
                yield put({
                    type: types.UPDATE_USERDATA,
                    payload: {
                        accountIndex,
                        data,
                    }
                });
                break;
            default:
                throw '不正なtargetです: ' + apidata.target;
            }
            break;
        case 'POST':
            data = yield call((): Promise<any> => client.post(apidata.url, payload));

            switch(apidata.target) {
                case 'update':
                    yield put({type: types.CLEAR_FORM, payload: {timelineIndex}})
                    yield put({type: types.SET_IN_PROGRESS_STATUS, payload: {timelineIndex, status: false}});
                    break;
                default:
                    throw '不正なtargetです: ' + apidata.target;
            }
            break;
        default:
            throw 'unknown http method error: '+apidata.method;
        }
    } catch (e) {
        if (typeof(timelineIndex) === 'number') yield put({type: types.SET_IN_PROGRESS_STATUS, payload: {timelineIndex, status: false}});
        yield call({type: types.CALL_API_FAILED, error: e});
    }
}
