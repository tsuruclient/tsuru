// @flow
import {take, fork, select, put, call} from 'redux-saga/effects';

import * as Services from '../../core/Services';
import * as types from '../constant';

import twitterStreamApi from '../api/streaming/twitter_streaming';
import mastodonStreamApi from '../api/streaming/mastodon_streaming';

function* streamingProcess(target: Object): any {
    try{
        let channel;
        switch (target.service) {
            case Services.Twitter:
                channel = yield call(
                    twitterStreamApi,
                    target.url,
                    target.key,
                    target.token,
                    target.service,
                    target.accountIndex,
                    target.accountId);
                break;
            case Services.Mastodon:
                channel = yield call(
                    mastodonStreamApi,
                    target.url,
                    target.token,
                    target.accountIndex,
                );
                break;
        }
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
            let token;
            switch (apidata.service){
                case Services.Twitter:
                    token = {
                        token: account.client.accessToken,
                        token_secret: account.client.accessTokenSecret,
                    };
                    break;
                case Services.Mastodon:
                    token = account.client.token;
                    break;
                default:
                    throw 'unsupported service.'
            }
            return {
                url: apidata.url,
                key: {
                    consumer_key: account.client.consumerKey,
                    consumer_secret: account.client.consumerSecret,
                },
                token,
                accountIndex,
                accountId: account.userdata.id,
                service: apidata.service,
                streamType: apidata.streamType,
            };
        });
        console.log(target);
        yield fork(streamingProcess, target);
    } catch (e) {
        throw e;
    }
};
