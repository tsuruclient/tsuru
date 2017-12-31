// @flow

import copyInstance from '../../helper/copyInstance';
import * as dataTypes from '../constant/dataType';

export default class Record {
    service: string;
    home: Array<any>;
    activity: Array<any>;
    directMail: Array<any>;

    constructor(service: string) {
        this.service = service;
        this.home = [];
        this.activity = [];
        this.directMail = [];
    }

    unshift(dataType: string, data: Array<any>): Record {
        const r = copyInstance(this);
        switch (dataType){
        case dataTypes.home:
            r.home = this.home.concat();
            r.home.unshift(...data);
            break;
        case dataTypes.activity:
            r.activity = this.activity.concat();
            r.activity.unshift(...data);
            break;
        }
        return r;
    }

    // TODO: やって。具体的にはFav/RTしたか・あるいはしているかをあれするあれです。よろしくお願いします
    setContentStatus(eventType: string, dataType: string, targetId: string, isActivated: boolean): Record {
        const r = copyInstance(this);
        switch (dataType) {
            case dataTypes.home:
                r.home = this.home.concat();
                break;
            case dataTypes.activity:
                r.home = this.activity.concat();
                break;
            default:
                break;
        }
        return r;
    }
}
