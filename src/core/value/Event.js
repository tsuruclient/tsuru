// @flow

import noticeAttr from '../difference/notice';
import contentAttr from '../difference/content';
import eventTypes from '../difference/eventType';
import User from './User';
import Content from './Content';

export const FavoriteEvent = 'favoriteEvent';
export const RetweetEvent = 'retweetEvent';
export const FollowEvent = 'followEvent';
export const ListFollowEvent = 'listFollowEvent';

export default class Event {
    eventName: string;
    type: string;
    sourceUser: User;
    target: ?Content;

    constructor(service: string, data: Object, isStream: boolean) {
        this.eventName = data[noticeAttr.type[service]];
        this.sourceUser = new User(service, data[contentAttr.user[service]]);
        switch (this.eventName) {
        case eventTypes.fav[service]:
            this.type = FavoriteEvent;
            this.target = new Content(service, data[noticeAttr.target[service]]);
            break;
        case eventTypes.retweet[service]:
            this.type = RetweetEvent;
            this.target = new Content(service, data[noticeAttr.target[service]]);
            break;
        case eventTypes.follow[service]:
            this.type = FollowEvent;
            break;
        }
    }
}
