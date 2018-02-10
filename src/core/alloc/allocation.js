// @flow

import * as Services from '../Services';
import * as dataTypes from '../constant/dataType';
import notice from '../difference/notice';
import eventTypes from '../difference/eventType';
import Content from '../value/Content';
import Event from '../value/Event';

import type {allocatedObject} from './allocatedObjectType';
import createAllocatedObject from "./createAllocatedObject";


// TODO: 真面目に書け
export default (service: string, dataType: string, data: Array<Object> | Object): allocatedObject => {
    switch (service) {
    case Services.Twitter:
        switch (dataType) {
            case dataTypes.streaming:
                if(Array.isArray(data)){
                    return createAllocedObject(
                        data.filter(item => item.text !== undefined).map(item => new Content(service, item)),
                        [],
                        []
                    );
                }else {
                    return createAllocedObject(
                        data.text !== undefined ? [new Content(service, data)] : [],
                        [],
                        []
                    );
                }
            case dataTypes.home:
                return createAllocedObject(data.map((item: Object): Content => new Content(service, item)), [], []);
            case dataTypes.activity:
                return createAllocedObject([],data.map((item: Object): Content => new Content(service, item)),[]);
            case dataTypes.directMail:
                return createAllocedObject([], [], []);
            default:
                console.warn('oops. something went wrong.');
                throw 'allocation error';
        }
    case Services.GnuSocial:
        switch (dataType) {
            case dataTypes.home:
                return createAllocedObject(data.map((item: Object): Content => new Content(service, item)), [], []);
            case dataTypes.activity:
                return createAllocedObject([], data.map((item: Object): Content => new Content(service, item)), []);
            case dataTypes.directMail:
                return createAllocedObject([], [], []);
            default:
                console.warn('oops. something went wrong.');
                throw 'allocation error';
        }
    case Services.Mastodon:
        switch (dataType) {
            case dataTypes.streaming:
                if(Array.isArray(data)){
                    return createAllocedObject(
                        data.filter(item => item.event === 'update').map(item => new Content(service, JSON.parse(item.payload))),
                        data.filter(item => item.event === 'notification').map(item => new Event(service, JSON.parse(item.payload), true)),
                        []);
                }else {
                    return createAllocedObject(
                        data.event === 'update' ? [new Content(service, JSON.parse(data.payload))] : [],
                        data.event === 'notification' ? [new Event(service, JSON.parse(data.payload), true)] : [],
                        []);
                }
            case dataTypes.home:
                return createAllocedObject(data.map((item: Object): Content => new Content(service, item)), [], []);
            case dataTypes.activity:
                return createAllocedObject(
                    [],
                    data.map((item: Object): Content | Event =>
                        item[notice.type[service]] === eventTypes.mention[service] ?
                            new Content(service, item[notice.target[service]]):
                            new Event(service, item, false)),
                    []
                );
            case dataTypes.directMail:
                return createAllocedObject([], [], []);
            default:
                console.warn('oops. something went wrong.');
                throw 'allocation error';
        }
    default:
        console.warn('oops. something went wrong.');
        throw 'allocation error';
    }
}
