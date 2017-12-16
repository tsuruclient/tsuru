// @flow

import User from '../value/User';
import copyInstance from '../../helper/copyInstance';

export default class Account {
    service: string;
    client: any;
    userdata: ?User;

    constructor(service: string, client: any, userdata: Object) {
        this.service = service;
        this.client = client;
        this.userdata = new User(service, userdata);
    }
}
