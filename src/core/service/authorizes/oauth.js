// @flow
// import promisify from 'es6-promisify';

import type { providerObject } from "../types/auth/providerObject";
import type { consumerKeyObject } from "../types/auth/consumerKeyObject";
import type { accessTokenObjectForOAuth } from "../types/auth/accessTokenObject";

const { remote } = window.require('electron');
const { OAuth } = remote.require('oauth');
const opn = remote.require('opn');

export default class oauth {
    provider: providerObject;
    consumerKey: consumerKeyObject;
    accessToken: ?accessTokenObjectForOAuth; // authorized => true, not authorized => false

    // 最初の認証にのみ使うtokenたち
    tempToken: ?string;
    tempTokenSecret: ?string;

    constructor(){

    }
}
