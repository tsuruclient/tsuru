// @flow
import {END, eventChannel} from "redux-saga";
import {contentActions, streamingActions} from "../../action";
import alloc from "../../../core/alloc/allocation";
import {streaming} from "../../../core/constant/dataType";

const {remote} = window.require('electron');
const request = remote.require('request');
const StringDecoder = remote.require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const Buffer = remote.require('safe-buffer').Buffer;

const receiver = (emitter: Function, service: string, accountIndex: number, account_id: string, target: Object) => {
    try{
        emitter(contentActions.updateContent({
            accountIndex,
            datatype: 'home',
            data: alloc(service, streaming, JSON.parse(decoder.write(target)), account_id)
        }))
    }catch(e){
        throw e;
    }
};

export default (url: string, key: Object, token: Object, service: string, accountIndex: number, accountId: string): any => {
    const stream = request.get({url: url, oauth: Object.assign({}, key, token)});
    let data = new Buffer('');
    return eventChannel(emit => {
        stream.once('data', () => {
            console.log('Successfully connected Streaming API.');
            emit(streamingActions.setStreamingStatus({
                isStreaming: true,
                accountIndex
            }))
        });

        stream.on('data', (chunk) => {
            try{
                receiver(emit, service, accountIndex, accountId, chunk);
            }catch(e){
                data += chunk;
                try{
                    receiver(emit, service, accountIndex, accountId, data);
                    data = new Buffer('');
                }catch(e){
                    // くぁｗせｄｒｆｔｇｙふじこｌｐ；「’
                }
            }
        });

        stream.on('end', () => {
            console.log('Disconnected Streaming API.');
            emit(streamingActions.setStreamingStatus({
                isStreaming: false,
                accountIndex
            }));
            emit(END);
        });

        stream.on('close', (err) => {
            console.log('Disconnected Streaming API.');
            console.warn(err);
            emit(streamingActions.setStreamingStatus({
                isStreaming: false,
                accountIndex
            }));
            emit(END);
        });
        return () => {};
    });
};
