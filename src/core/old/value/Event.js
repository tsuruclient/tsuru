// @flow

import {Twitter} from '../../Services';
import noticeAttr from '../difference/notice';
import contentAttr from '../difference/content';
import eventTypes from '../difference/eventType';
import User from './User';
import Content from './Content';

export const FavoriteEvent = 'favoriteEvent';
export const RetweetEvent = 'retweetEvent';
export const FollowEvent = 'followEvent';
export const ListFollowEvent = 'listFollowEvent';

export type twitterNotificationData = {
    eventName: string,
    source: Object,
    target: Object,
    targetObject: ?Object,
}

const allowEventType = {
    favorite: 'favorite',
    follow: 'follow',
};

export const eventFilter = (eventName: string): boolean => (
    !!Object.keys(allowEventType).find((element: string): boolean => (element === eventName))
);

export default class Event {
    eventName: string;
    type: string;
    sourceUser: User;
    target: ?Content;

    constructor(service: string, data: Object, isStream: boolean) {
        if(service === Twitter && isStream){
            if(data.text){
                this.type = RetweetEvent;
                this.sourceUser = new User(service, data.user);
                this.target = new Content(service, data.retweeted_status);
            }else{
                this.sourceUser = new User(service, data.source);
                switch (data.event){
                    case allowEventType.favorite:
                        this.type = FavoriteEvent;
                        this.target = new Content(service, data.target_object);
                        break;
                    case allowEventType.follow:
                        this.type = FollowEvent;
                        break;
                    default:
                        throw new Error('unsupported event.');

                }
            }
        }else{
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
                default:
                    throw new Error('unsupported event.');
            }
        }
    }
}
