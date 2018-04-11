// @flow

import { put, call, select } from 'redux-saga/effects';
import * as types from '../constant';
import type Timeline from '../../core/old/object/Timeline';

import {saveAccounts} from '../api/storage';

/*function* tryDelete(ownerIndex: number, accountIndex: number) {
    if(ownerIndex === accountIndex) {
        yield put({type: types.DELETE_TIMELINE});
    }
}*/

export default function* logout(action: Object): any {
    try{
        const timelineList = yield select((state: Object): Timeline => state.timeline);
        let deleteTimelineIndexes = timelineList.map((item, index): ?number => (
            item.ownerIndex === action.payload.accountIndex ?
                index : undefined
        ));
        deleteTimelineIndexes.reverse();
        for(let [i, v] of deleteTimelineIndexes.entries()){
            if(v !== undefined){

                yield put({
                    type: types.DELETE_TIMELINE,
                    payload: {
                        timelineIndex: v,
                        dummyIndex: i,
                    }
                });
            }
        }

        yield put({
            type: types.OWNERINDEX_REASSIGN,
            payload: {
                target: action.payload.accountIndex
            }
        });

        yield put({
            type: types.DELETE_ACCOUNT,
            payload: {
                accountIndex: action.payload.accountIndex
            }
        });

        yield call(saveAccounts, yield select((state: Object): Array<Object> =>
            state.account.map((item: Object): Object =>
                item.account
        )));
    } catch (e) {
        console.warn(e);
    }
}
