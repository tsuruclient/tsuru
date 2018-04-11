// @flow

import Account from '../difference/account';

export default class user {
    instance: ?string;

    displayName: string;
    screenName: string;
    id: string;

    avatar: string;
    header: string;

    bio: string;
    url: string;
    location: ?string;
    isLocked: boolean;

    contentCount: number;
    followCount: number;
    followerCount: number;

    constructor(service: string, data: ?Object) {
        if(data){
            this.displayName = data[Account.displayName[service]];
            this.screenName = data[Account.screenName[service]];
            this.id = data[Account.id[service]];

            this.avatar = data[Account.icon[service]];
            this.header = data[Account.header[service]];

            this.isLocked = data[Account.protected[service]];
        }
    }
}
