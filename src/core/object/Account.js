// @flow

import User from '../value/User';
import copyInstance from '../../helper/copyInstance/copyInstance';

export default class Account {
    service: string;
    client: any;
    userdata: ?User;
    isStreaming: boolean;

    constructor(service: string, client: any, userdata: ?Object) {
        this.service = service;
        this.client = client;
        if (userdata) this.userdata = Object.assign(Object.create(Object.getPrototypeOf(new User(this.service))), userdata);
        this.isStreaming = false;
    }

    setStreamingStatus(isStreaming: boolean){
        const r = copyInstance(this);
        r.isStreaming = isStreaming;
        return r;
    }

    confirm(data: Object): Account {
        const r = copyInstance(this);
        r.userdata = new User(this.service, data);
        return r;
    }

    export(): Object {
        return {
            service: this.service,
            consumerKey: this.client.exportConsumerKey(),
            token: this.client.exportToken(),
            domain: this.client.domain,
            userData: Object.assign({}, this.userdata),
        };
    }
}
