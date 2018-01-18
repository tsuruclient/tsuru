// @flow
import {END, eventChannel} from "redux-saga";
import {contentActions, streamingActions} from "../../action";
import alloc from "../../../core/value/allocation";
import {streaming} from "../../../core/constant/dataType";

const {remote} = window.require('electron');
const request = remote.require('request');
const StringDecoder = remote.require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const Buffer = remote.require('safe-buffer').Buffer;

const receiver = (emitter: Function, service: string, accountIndex: number, target: Object) => {
    try{
        emitter(contentActions.updateContent({
            accountIndex,
            datatype: 'home',
            data: alloc(service, streaming, JSON.parse(decoder.write(target)))
        }))
    }catch(e){
        throw e;
    }
};

export default (url: string, keys: Object, service: string, accountIndex: number): any => {
    const stream = request.get({url: url, oauth: keys});
    let data = new Buffer('');
    return eventChannel(emit => {
        stream.once('data', () => {
            console.log('Streaming APIに接続しました。');
            emit(streamingActions.setStreamingStatus({
                isStreaming: true,
                accountIndex
            }))
        });

        stream.on('data', (chunk) => {
            try{
                receiver(emit, service, accountIndex, chunk);
            }catch(e){
                data += chunk;
                try{
                    receiver(emit, service, accountIndex, data);
                    data = new Buffer('');
                }catch(e){
                    // くぁｗせｄｒｆｔｇｙふじこｌｐ；「’
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
};
