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
        switch(dataType){
        case dataTypes.home:
            r.home.unshift(...data);
            break;
        case dataTypes.activity:
            r.activity.unshift(...data);
            break;
        }
        return r;
    }
}
