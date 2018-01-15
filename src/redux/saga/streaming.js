// @flow
import {eventChannel, END} from 'redux-saga';
import {take, fork, select, put, call} from 'redux-saga/effects';

import * as Services from '../../core/Services';
import * as types from '../constant';
import alloc from '../../core/value/allocation';
import {streamingActions, contentActions} from "../action";

const {remote} = window.require('electron');
const request = remote.require('request');
const StringDecoder = remote.require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const fs = remote.require('fs');
const Buffer = remote.require('safe-buffer').Buffer;

const errorlogger = fs.createWriteStream('streamerror.log', 'utf8');

let data = new Buffer('');

function subscribe(stream: any, service: string, accountIndex: number, datatype: string): any {
    return eventChannel(emit => {
        stream.once('data', (data) => {
            console.log('Streaming APIに接続しました。');
            emit(streamingActions.setStreamingStatus({
                isStreaming: true,
                accountIndex
            }))
        });

        stream.on('data', (chunk) => {
            if(decoder.write(chunk) !== '\n'){
                try {
                    if(data.length > 0) {
                        emit(contentActions.updateContent({
                            accountIndex,
                            datatype: 'home',
                            data: alloc(service, datatype, JSON.parse(decoder.write(chunk)))
                        }));
                    } else {
                        emit(contentActions.updateContent({
                            accountIndex,
                            datatype: 'home',
                            data: alloc(service, datatype, JSON.parse(decoder.write(data)))
                        }));
                        console.log(JSON.parse(decoder.write(data)));
                        data = new Buffer('');
                    }
                } catch (e) {
                    data += chunk;
                    console.log(decoder.write(data));
                }
            }
        });

        stream.on('end', () => {
            console.log('Streaming APIから切断されました。');
            emit(streamingActions.setStreamingStatus({
                isStreaming: false,
                accountIndex
            }));
            emit(END);
        });

        stream.on('close', (err) => {
            console.log('Streaming APIから切断されました。');
            console.warn(err);
            emit(streamingActions.setStreamingStatus({
                isStreaming: false,
                accountIndex
            }));
            emit(END);
        });
        return () => {};
    });
}

function* streamingProcess(target: Object): any {
    try{
        const channel = yield call(subscribe, request.get({url: target.url, oauth: target.key}), target.service, target.accountIndex, target.datatype);
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
