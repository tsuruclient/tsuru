// @flow
import {Twitter} from '../Services';
import Content from '../value/Content';
import Event, {eventFilter} from "../value/Event";

import type {allocatedObject} from "./allocatedObjectType";
import createAllocatedObject from "./createAllocatedObject";

const isReplyNotification = (data: Object, owner_id: string): boolean => (
    data.in_reply_to_user_id_str === owner_id
);

const isRetweetNotification = (data: Object, owner_id: string): boolean => (
    data.retweeted_status ? data.retweeted_status.user.id_str === owner_id : false
);

const filterHomeTimeline = (data: Object, owner_id: string): boolean => (
    data.text && !isRetweetNotification(data, owner_id)
);

const filterNotification = (data: Object, owner_id: string): boolean => {
    if(data.text){ // reply and retweet
        return isReplyNotification(data, owner_id) || isRetweetNotification(data, owner_id);
    }else{ // User Stream Events
        return data.event ? eventFilter(data.event): false;
    }
};

const assignNotification = (data: Object, owner_id: string): Object => (
    isReplyNotification(data, owner_id) ? new Content(Twitter, data) : new Event(Twitter, data, true)
);

export default (data: Array<Object> | Object, owner_id: string): allocatedObject => {
    if(Array.isArray(data)){
        return createAllocatedObject(
            data.filter(item => filterHomeTimeline(item, owner_id)).map(item => new Content(Twitter, item)),
            data.filter(item => filterNotification(item, owner_id)).map(item => assignNotification(item, owner_id)),
            []
        );
    }else{
        return createAllocatedObject(
            filterHomeTimeline(data, owner_id) ? [new Content(Twitter, data)] : [],
            filterNotification(data, owner_id) ? [assignNotification(data, owner_id)] : [],
            []
        );
    }
}
