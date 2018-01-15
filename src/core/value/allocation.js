// @flow

import * as Services from '../Services';
import * as dataTypes from '../constant/dataType';
import notice from '../difference/notice';
import eventTypes from '../difference/eventType';
import Content from './Content';
import Event from './Event';

// TODO: 各種dataTypeに合わせて書き加えてください
export default (service: string, dataType: string, data: Array<Object> | Object): ?Array<any> => {
    switch (service) {
    case Services.Twitter:
        switch (dataType) {
        case dataTypes.streaming:
            if(Array.isArray(data)){
                // 試験的にEventを無視しています
                return data.filter(item => item.event === undefined).map(item => new Content(service, item));
            }else {
                return data.event === undefined ? [new Content(service, data)] : [];
            }
        case dataTypes.home:
        case dataTypes.activity:
            return data.map((item: Object): Content => new Content(service, item));
        case dataTypes.directMail:
            break;
        }
        break;
    case Services.GnuSocial:
        switch (dataType) {
        case dataTypes.home:
        case dataTypes.activity:
            return data.map((item: Object): Content => new Content(service, item));
        case dataTypes.directMail:
            break;
        }
        break;
    case Services.Mastodon:
        switch (dataType) {
        case dataTypes.home:
            return data.map((item: Object): Content => new Content(service, item));
        case dataTypes.activity:
            return data.map((item: Object): Content | Event =>
                item[notice.type[service]] === eventTypes.mention[service] ?
                    new Content(service, item[notice.target[service]]):
                    new Event(service, item, false)
            );
        case dataTypes.directMail:
            break;
        }
        break;
    default:
        console.warn('oops. something went wrong.');
        throw 'allocation error.';
    }
}
