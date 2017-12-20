// @flow
import promisify from 'es6-promisify';
import * as apis from '../difference/api';
import * as Services from '../Services';
import type { Social, KeyObject, TokenObject } from './client';

const { remote } = window.require('electron');
const { OAuth } = remote.require('oauth');
const opn = remote.require('opn');
const querystring = remote.require('querystring');

export default class client implements Social {
    type: string;
    oauth: OAuth;

    domain: string;
    url: string;

    consumerKey: string;
    consumerSecret: string;

    accessToken: ?string;
    accessTokenSecret: ?string;

    tempToken: ?string;
    tempTokenSecret: ?string;

    constructor(type: string, key: KeyObject, domain: string, token: ?TokenObject) {
        this.type = type;
        this.domain = domain;
        this.url = type === Services.Twitter ? 'https://api.twitter.com/' : 'https://' + domain + '/';
        this.consumerKey = key.consumerKey;
        this.consumerSecret = key.consumerSecret;
        if (token) {
            this.accessToken = token.accessToken;
            this.accessTokenSecret = token.accessTokenSecret;
        }

        this.oauth = new OAuth(
            this.url + apis.oauth.request_token[type],
            this.url + apis.oauth.access_token[type],
            this.consumerKey,
            this.consumerSecret,
            '1.0',
            'oob',
            'HMAC-SHA1',
        );
    }

    openAuthorizationWindow() {
        this.oauth.getOAuthRequestToken((err: any, oauthToken: string, oauthTokenSecret: string, results: Object) => {
            if (err) console.warn(err);
            this.tempToken = oauthToken;
            this.tempTokenSecret = oauthTokenSecret;
            opn(this.url + apis.oauth.authorize[this.type] + '?oauth_token=' + this.tempToken);
        });
    }

    activate(pin: string): Promise<any> {
        console.log(this);
        return promisify(this.oauth.getOAuthAccessToken, {
            thisArg: this.oauth,
            multiArgs: true,
        })(
            this.tempToken,
            this.tempTokenSecret,
            pin,
        ).then((result: Array<any>): client => {
            this.accessToken = result[0];
            this.accessTokenSecret = result[1];
            return this;
        }).catch((err: Error): any => {
            throw err;
        });
    }

    get(dest: string, payload: Object): Promise<any> {
        const params = Object.keys(payload).length === 0 ? '' : '?' + querystring.stringify(payload);
        return promisify(this.oauth.get, {
            thisArg: this.oauth,
            multiArgs: true,
        })(
            this.url + dest + params,
            this.accessToken,
            this.accessTokenSecret,
        ).then((result: Array<any>): string => (
            JSON.parse(result[0])
        )).catch((err: Error): any => {
            throw err;
        });
    }

    post(dest: string, payload: Object): Promise<any> {
        return promisify(this.oauth.post, {
            thisArg: this.oauth,
            multiArgs: true,
        })(
            this.url + dest,
            this.accessToken,
            this.accessTokenSecret,
            payload,
            '',
        ).then((result: Array<any>): string => (
            JSON.parse(result[0])
        )).catch((err: Error): any => {
            throw err;
        });
    }

    exportConsumerKey(): KeyObject {
        return {
            consumerKey: this.consumerKey,
            consumerSecret: this.consumerSecret,
        };
    }

    exportToken(): TokenObject {
        return {
            accessToken: this.accessToken,
            accessTokenSecret: this.accessTokenSecret,
        };
    }
}
