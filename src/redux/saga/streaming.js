// @flow
import {take, fork, select, put, call} from 'redux-saga/effects';

import * as Services from '../../core/Services';
import * as types from '../constant';

import twitterStreamApi from '../api/streaming/twitter_streaming';

function* streamingProcess(target: Object): any {
    try{
        const channel = yield call(twitterStreamApi, target.url, target.key, target.service, target.accountIndex);
        while(true){
            const action = yield take(channel);
            yield put(action);
        }
    } catch(e) {
        throw e;
    }
}

export default function* connectStreaming(action: Object): any {
    const {accountIndex, apidata} = action.payload;
    try{
        console.log('start streaming...');
        const target = yield select((state: Object): Object => {
            const account = state.account[accountIndex].account;
            const url = account.service === Services.Twitter ? apidata.url : (account.client.url + apidata.url);
            return {
                url,
                key: {
                    consumer_key: account.client.consumerKey,
                    consumer_secret: account.client.consumerSecret,
                    token: account.client.accessToken,
                    token_secret: account.client.accessTokenSecret,
                },
                accountIndex,
                service: apidata.service,
                datatype: apidata.datatype
            };
        });
        yield fork(streamingProcess, target);
    } catch (e) {
        throw e;
    }
};
