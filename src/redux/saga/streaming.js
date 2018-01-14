// @flow
import {eventChannel} from 'redux-saga';
import {take, fork, select, put, call} from 'redux-saga/effects';

import * as Services from '../../core/Services';
import * as types from '../constant';
import alloc from '../../core/value/allocation';
import Content from '../../core/value/Content';

const {remote} = window.require('electron');
const request = remote.require('request');
const StringDecoder = remote.require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

function subscribe(stream: any): any {
    return eventChannel(emit => {
        stream.on('data', (data) => {
            console.log(decoder.write(data));
        });
        return () => {};
    });
}

function* streamingProcess(oauth: Object): any {
    try{
        const channel = yield call(subscribe, request.get({url: oauth.url, oauth: oauth.key}));
        while(true){
            const action = yield take(channel);
            console.log(action);
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
        const oauth = yield select((state: Object): Object => {
            const account = state.account[accountIndex].account;
            const url = account.service === Services.Twitter ? apidata.url : (account.client.url + apidata.url);
            return {
                url,
                key: {
                    consumer_key: account.client.consumerKey,
                    consumer_secret: account.client.consumerSecret,
                    token: account.client.accessToken,
                    token_secret: account.client.accessTokenSecret,
                }
            };
        });
        yield fork(streamingProcess, oauth);
    } catch (e) {
        throw e;
    }
};
