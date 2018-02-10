// @flow

import * as Services from '../Services';
import * as dataTypes from '../constant/dataType';
import notice from '../difference/notice';
import eventTypes from '../difference/eventType';
import Content from '../value/Content';
import Event from '../value/Event';

import type {allocatedObject} from './allocatedObjectType';
import createAllocatedObject from "./createAllocatedObject";

import allocTwitter from './twitter_streaming_data';
import allocMstdn from './mstdn_streaming_data';

export default (service: string, dataType: string, data: Array<Object> | Object): allocatedObject => {
    switch (service) {
    case Services.Twitter:
        switch (dataType) {
            case dataTypes.streaming:
                return allocTwitter(data, 'dummy');
            case dataTypes.home:
                return createAllocatedObject(data.map((item: Object): Content => new Content(service, item)), [], []);
            case dataTypes.activity:
                return createAllocatedObject([],data.map((item: Object): Content => new Content(service, item)),[]);
            case dataTypes.directMail:
                return createAllocatedObject([], [], []);
            default:
                console.warn('oops. something went wrong.');
                throw 'allocation error';
        }
    case Services.GnuSocial:
        switch (dataType) {
            case dataTypes.home:
                return createAllocatedObject(data.map((item: Object): Content => new Content(service, item)), [], []);
            case dataTypes.activity:
                return createAllocatedObject([], data.map((item: Object): Content => new Content(service, item)), []);
            case dataTypes.directMail:
                return createAllocatedObject([], [], []);
            default:
                console.warn('oops. something went wrong.');
                throw 'allocation error';
        }
    case Services.Mastodon:
        switch (dataType) {
            case dataTypes.streaming:
                return allocMstdn(data, 'dummy');
            case dataTypes.home:
                return createAllocatedObject(data.map((item: Object): Content => new Content(service, item)), [], []);
            case dataTypes.activity:
                return createAllocatedObject(
                    [],
                    data.map((item: Object): Content | Event =>
                        item[notice.type[service]] === eventTypes.mention[service] ?
                            new Content(service, item[notice.target[service]]):
                            new Event(service, item, false)),
                    []
                );
            case dataTypes.directMail:
                return createAllocatedObject([], [], []);
            default:
                console.warn('oops. something went wrong.');
                throw 'allocation error';
        }
    default:
        console.warn('oops. something went wrong.');
        throw 'allocation error';
    }
}
