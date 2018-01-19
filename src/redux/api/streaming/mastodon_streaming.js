// @flow
import {END, eventChannel} from "redux-saga";
import {contentActions, streamingActions} from "../../action";
import qs from 'query-string';
import alloc from "../../../core/value/allocation";
import {streaming} from "../../../core/constant/dataType";
import {Mastodon} from '../../../core/Services';

const {remote} = window.require('electron');
const WebSocket = remote.require('ws');

export default (domain: string, access_token: string, accountIndex: number, streamType: string) => {
    const stream = new WebSocket('wss://' + domain + '/api/v1/streaming?' + qs.stringify({
        access_token,
        stream: streamType,
    }));
    return eventChannel(emit => {
        stream.on('open', () => {
            emit(streamingActions.setStreamingStatus({
                isStreaming: true,
                accountIndex
            }));
        });
        stream.on('message', (event) => {
            emit(contentActions.updateContent({
                accountIndex,
                datatype: 'home',
                data: alloc(Mastodon, streaming, JSON.parse(event.data))
            }))
        });
        stream.on('close', () => {
            console.log('Disconnected Streaming API.');
            emit(streamingActions.setStreamingStatus({
                isStreaming: false,
                accountIndex
            }));
        })
    })
}

