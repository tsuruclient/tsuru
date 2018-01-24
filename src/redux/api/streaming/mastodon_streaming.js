// @flow
import {END, eventChannel} from "redux-saga";
import {contentActions, streamingActions} from "../../action";
import qs from 'query-string';
import alloc from "../../../core/value/allocation";
import {streaming} from "../../../core/constant/dataType";
import {Mastodon} from '../../../core/Services';

export default (url: string, access_token: string, accountIndex: number) => {
    const stream = new WebSocket(url + '&' + qs.stringify({access_token}));
    return eventChannel(emit => {
        stream.onopen = () => {
            emit(streamingActions.setStreamingStatus({
                isStreaming: true,
                accountIndex
            }))};

        stream.onmessage = (event) => {
            emit(contentActions.updateContent({
                accountIndex,
                datatype: streaming,
                data: alloc(Mastodon, streaming, JSON.parse(event.data))
            }));
        };

        stream.onclose = () => {
            console.log('Disconnected Streaming API.');
            emit(streamingActions.setStreamingStatus({
                isStreaming: false,
                accountIndex
            }));
        };

        return () => {};
    });
}

