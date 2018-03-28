// @flow
// import promisify from 'es6-promisify';

import type { providerObject } from "../types/auth/providerObject";
import type { consumerKeyObject } from "../types/auth/consumerKeyObject";
import type { accessTokenObjectForOAuth2 } from "../types/auth/accessTokenObject";

const { remote } = window.require('electron');
const { OAuth } = remote.require('oauth');
const opn = remote.require('opn');

export default class oauth2 {
    provider: providerObject;
    consumerKey: consumerKeyObject;
    accessToken: ?accessTokenObjectForOAuth2; // authorized => true, not authorized => false

    constructor(){

    }
}
