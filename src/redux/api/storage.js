// @flow

import promisify from 'es6-promisify';
import Account from '../../core/view/object/Account';
import Timeline from '../../core/view/object/Timeline';

const { remote } = window.require('electron');
const storage = remote.require('electron-json-storage');

/*
アカウント情報は
* type
* domain
* consumerKey
* consumerSecret
* accessToken
* secretToken(optional)
のみが保存されるように…
*/

/*
    Macの場合は/Users/[User]/Library/Application Support/tsuru/storageに保存されるっぽい
    Windowsは%USER%/AppData/Roaming/tsuruのあたり
*/

export function load(): Promise<any> {
    return promisify(storage.getAll)()
        .then((data: any): any => (data)).catch((e: Error): Error => { throw e; });
}

export function saveAccounts(accounts: Array<Account>): Promise<any> {
    return promisify(storage.set, { multiArgs: true })(
        'accounts',
        accounts.map((item: Account): Object => item.export()),
    ).then()
        .catch((e: Error): Error => { throw e; });
}

export function saveTimelines(timelines: Array<Timeline>): Promise<any> {
    return promisify(storage.set, { multiArgs: true })(
        'timelines',
        timelines.map((item: Timeline): Object => item.export()),
    ).then()
        .catch((e: Error): Error => { throw e; });
}
