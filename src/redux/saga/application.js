// @flow

import { put, call } from 'redux-saga/effects';

import Account from '../../core/old/object/Account';
import Timeline from '../../core/old/object/Timeline';
import Record from '../../core/old/object/Record';
import OAuth from '../../core/old/client/oauth';
import OAuth2 from '../../core/old/client/oauth2';
import * as Services from '../../core/Services';
import * as types from '../constant';
import * as storageApis from '../api/storage';

export function* loadApplicationData(): any {
    try {
        const loadedData = yield call(storageApis.load);
        try {
            const Accounts = loadedData.accounts.map(((item: any): Object => {
                const c = item.service === Services.Mastodon ?
                    new OAuth2(item.consumerKey, item.domain, item.token) :
                    new OAuth(item.service, item.consumerKey, item.domain, item.token);
                return {account: new Account(item.service, c, item.userData), record: new Record(item.service)};
            }));
            yield put({ type: types.LOAD_ACCOUNT_DATA_SUCCESSED, payload: Accounts });
        } catch (e) {
            throw e;
        }
        try {
            const Timelines = loadedData.timelines.map((item: any): Timeline => (
                new Timeline(item.ownerIndex, item.timelineType)));
            yield put({ type: types.LOAD_TIMELINE_DATA_SUCCESSED, timelines: Timelines });
        } catch (e) {
            throw e;
        }
    } catch (e) {
        yield put({ type: types.LOAD_DATA_FAILED, error: e });
    }
}
