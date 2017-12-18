// @flow

import * as Services from '../Services';
import * as dataTypes from '../constant/dataType';
import Content from './Content';
import Event from './Event';

// TODO: 各種dataTypeに合わせて書き加えてください
export default (service: string, dataType: string, data: Array<Object>): ?Array<any> => {
    switch (service) {
    case Services.Twitter:
        switch (dataType) {
        case dataTypes.home:
            return data.map((item: Object): Content => new Content(service, item));
        case dataTypes.activity:
            break;
        case dataTypes.directMail:
            break;
        }
        break;
    case Services.GnuSocial:
        switch (dataType) {
        case dataTypes.home:
            return data.map((item: Object): Content => new Content(service, data));
        case dataTypes.activity:
            break;
        case dataTypes.directMail:
            break;
        }
        break;
    case Services.Mastodon:
        switch (dataType) {
        case dataTypes.home:
            return data.map((item: Object): Content => new Content(service, data));
        case dataTypes.activity:
            break;
        case dataTypes.directMail:
            break;
        }
        break;
    default:
        console.warn('oops. something went wrong.');
        throw 'allocation error.';
    }
}
