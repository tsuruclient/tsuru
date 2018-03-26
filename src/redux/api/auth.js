// @flow
import * as apis from '../../core/old/difference/api';
import OAuth from '../../core/old/client/oauth';
import OAuth2 from '../../core/old/client/oauth2';
import * as Services from '../../core/Services';

export function openPinAuthWindow(status: Object): OAuth | OAuth2 {
    const client: OAuth | OAuth2 = status.type === Services.Mastodon ?
        new OAuth2(
            {
                consumerKey: status.apikey,
                consumerSecret: status.apisecret,
            },
            status.instance,
        ) :
        new OAuth(
            status.type,
            {
                consumerKey: status.apikey,
                consumerSecret: status.apisecret,
            },
            status.instance,
            null,
        );
    client.openAuthorizationWindow();
    return client;
}

export function getOAuthAccessToken(client: OAuth | OAuth2, pin: string): Promise<any> {
    return client.activate(pin);
}

export function confirm(client: OAuth | OAuth2, service: string): Promise<any> {
    return client.get(apis.get.account.verify_credentials(service).url);
}
