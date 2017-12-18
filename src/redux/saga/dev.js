// @flow

import { call, put } from 'redux-saga/effects';

import * as types from '../constant';
import * as Services from '../../core/Services';
import * as dataTypes from '../../core/constant/dataType';

import allocation from '../../core/value/allocation';

import mstdnUserData from '../../core/testdata/mastodon/origami_account.json';
import mstdnContentData from '../../core/testdata/mastodon/origami_tweetlist.json';
import twitterUserData from '../../core/testdata/twitter/arclisp_account.json';
import twitterContentData from '../../core/testdata/twitter/arclisp_tweetlist.json';

export default function* setDevData(action: Object): any {
    try {
        yield put({ type: types.ADD_ACCOUNT, service: Services.Twitter, client: null, userData: twitterUserData });
        yield put({ type: types.ADD_ACCOUNT, service: Services.Mastodon, client: null, userData: mstdnUserData });
        yield put({ type: types.ADD_TIMELINE, accountIndex: 0, timelineType: 'home' });
        const data = allocation(Services.Twitter, dataTypes.home, twitterContentData);
        yield put({ type: types.UPDATE_CONTENT, accountIndex: 0, dataType: dataTypes.home, data });
        yield put({ type: types.UPDATE_CONTENT, accountIndex: 0, dataType: dataTypes.home, data });
        yield put({ type: types.UPDATE_CONTENT, accountIndex: 0, dataType: dataTypes.home, data });
        yield put({ type: types.UPDATE_CONTENT, accountIndex: 0, dataType: dataTypes.home, data });
        yield put({ type: types.UPDATE_CONTENT, accountIndex: 0, dataType: dataTypes.home, data });
        yield put({ type: types.UPDATE_CONTENT, accountIndex: 0, dataType: dataTypes.home, data });
        yield put({ type: types.UPDATE_CONTENT, accountIndex: 0, dataType: dataTypes.home, data });
        yield put({ type: types.UPDATE_CONTENT, accountIndex: 0, dataType: dataTypes.home, data });
        yield put({ type: types.UPDATE_CONTENT, accountIndex: 0, dataType: dataTypes.home, data });
    } catch (e) {
        console.warn('?');
        throw e;
    }
}
