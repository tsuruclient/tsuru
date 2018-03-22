// @flow
import {Mastodon} from '../Services';
import Content from '../view/value/Content';
import Event from '../view/value/Event';
import type {allocatedObject} from "./allocatedObjectType";
import createAllocatedObject from "./createAllocatedObject";

const mentionOrEvent = (payload: Object) => {
    console.log(payload);
    return payload.type === 'mention' ? new Content(Mastodon, payload.status) : new Event(Mastodon, payload, true)
};

export default (data: Array<Object> | Object): allocatedObject => {
    if(Array.isArray(data)){
        return createAllocatedObject(
            data.filter(item => item.event === 'update').map(item => new Content(Mastodon, item)),
            data.filter(item => item.event === 'notification').map(item => mentionOrEvent(JSON.parse(item.payload))),
            []
        );
    }else{
        return createAllocatedObject(
            data.event === 'update' ? [new Content(Mastodon, JSON.parse(data.payload))] : [],
            data.event === 'notification' ? [mentionOrEvent(JSON.parse(data.payload))] : [],
            []
        );
    }
}
