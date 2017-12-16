// @flow

import copyInstance from '../../helper/copyInstance';

export default class Record {
    home: Array<any>;
    activity: Array<any>;
    directMail: Array<any>;

    constructor() {
        this.home = [];
        this.activity = [];
        this.directMail = [];
    }
}
