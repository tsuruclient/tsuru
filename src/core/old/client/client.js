// @flow
const { remote } = window.require('electron');
const OAuth = remote.require('oauth');

// consumer key and consumer secret
export type KeyObject = {
    consumerKey: string,
    consumerSecret: string,
};

// only use Twitter, GNU Social.
export type TokenObject = {
    accessToken: ?string,
    accessTokenSecret: ?string,
};

export interface Social {
    type: string;
    oauth: OAuth.OAuth | OAuth.OAuth2;
    domain: string;
    url: string;
    consumerKey: string;
    consumerSecret: string;

    openAuthorizationWindow(): void;
    activate(pin: string): Promise<any>;
    get(dest: string): Promise<any>;
    post(dest: string, payload: Object): Promise<any>;

    exportConsumerKey(): KeyObject;
    exportToken(): TokenObject | ?string;
}
