// @flow
import promisify from 'es6-promisify';
import * as Services from '../Services';
import type { Social, KeyObject } from './client';

const { remote } = window.require('electron');
const { OAuth2 } = remote.require('oauth');
const opn = remote.require('opn');
const querystring = remote.require('querystring');

const redirectUri = 'urn:ietf:wg:oauth:2.0:oob';

export default class client implements Social {
    type: string;
    oauth: OAuth2;

    consumerKey: string;
    consumerSecret: string;

    domain: string;
    url: string;

    token: ?string;

    constructor(key: KeyObject, domain: string, token: ?string) {
        this.type = Services.Mastodon;
        this.consumerKey = key.consumerKey;
        this.consumerSecret = key.consumerSecret;
        this.domain = domain;
        this.url = 'https://' + this.domain + '/';
        this.token = token;

        this.oauth = new OAuth2(
            this.consumerKey,
            this.consumerSecret,
            this.url,
            'oauth/authorize',
            'oauth/token',
            null,
        );
    }

    openAuthorizationWindow() {
        opn(this.oauth.getAuthorizeUrl({
            response_type: 'code',
            scope: 'read write follow',
            redirect_uri: redirectUri,
        }));
    }

    activate(pin: string): Promise<any> {
        return promisify(this.oauth.getOAuthAccessToken, {
            thisArg: this.oauth,
            multiArgs: true,
        })(
            pin,
            {
                grant_type: 'authorization_code',
                redirect_uri: redirectUri,
            },
        ).then((result: Array<string>): client => {
            this.token = result[0];
            return this;
        }).catch((err: Error): Error => {
            throw err;
        });
    }

    get(dest: string, payload: Object): Promise<any> {
        return promisify(this.oauth.get, {
            thisArg: this.oauth,
            multiArgs: true,
        })(
            this.url + dest + '?' + querystring.stringify(payload),
            this.token,
        ).then((result: Array<string>): string => (
            JSON.parse(result[0])
        )).catch((err: Error): Error => {
            throw err;
        });
    }

    post(dest: string, payload: Object): Promise<any> {
        return promisify(this.oauth._request, {
            thisArg: this.oauth,
            multiArgs: true,
        })(
            'POST',
            this.url + dest,
            {},
            querystring.stringify(payload),
            this.token,
        ).then((result: Array<string>): string => (
            JSON.parse(result[0])
        )).catch((err: Error): Error => {
            throw err;
        });
    }

    exportConsumerKey(): KeyObject {
        return {
            consumerKey: this.consumerKey,
            consumerSecret: this.consumerSecret,
        };
    }

    exportToken(): ?string {
        return this.token;
    }
}
