// @flow

import copyInstance from '../../helper/copyInstance';
import * as dataTypes from '../constant/dataType';
import Content, {Retweeted} from '../value/Content';

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

    setContentStatus(targetContent: Content): Record {
        const r = copyInstance(this);
        r.home = this.home.concat().map((item: Object, index: number): any => {
            if (targetContent.type === Retweeted) {
                return targetContent.target.id === item.id ?
                    targetContent.target :
                    item;
            } else {
                return targetContent.id === item.id ?
                    targetContent :
                    item;
            }
        });
        r.activity = this.activity.concat().map((item: Object, index: number): any => {
            if (item instanceof Content) {
                if (targetContent.type === Retweeted) {
                    return targetContent.target.id === item.id ?
                        targetContent.target :
                        item;
                } else {
                    return targetContent.id === item.id ?
                        targetContent :
                        item;
                }
            }
            return item;
        });
        return r;
    }
}
