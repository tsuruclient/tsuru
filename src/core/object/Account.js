// @flow

import copyInstance from '../../helper/copyInstance';

export default class Account {
    service: string;
    client: any;

    constructor(service: string, client: any) {
        this.service = service;
        this.client = client;
    }
}
