// @flow

import copyInstance from '../../helper/copyInstance';

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
}
