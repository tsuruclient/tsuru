// @flow

import copyInstance from '../../helper/copyInstance';
import * as dataTypes from '../constant/dataType';
import Content from '../value/Content';

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

    setContentStatus(target: Content): Record {
        const r = copyInstance(this);
        r.home = this.home.concat().map((item: Object, index: number): any => {
            if (item.id === target.id) {
                console.log(target);
                return target;
            }
            return item;
        });
        r.activity = this.activity.concat().map((item: Object, index: number): any => {
            if (item instanceof Content && item.id === target.id) {
                return target;
            }
            return item;
        });
        return r;
    }
}
