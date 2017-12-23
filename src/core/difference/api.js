// @flow
import * as Services from '../Services';
import * as apiUrls from './api_urls';
import querystring from 'query-string';

export const oauth = {
    request_token: {
        [Services.Twitter]: 'oauth/request_token',
        [Services.GnuSocial]: 'api/oauth/request_token',
    },
    access_token: {
        [Services.Twitter]: 'oauth/access_token',
        [Services.GnuSocial]: 'api/oauth/access_token',
    },
    authorize: {
        [Services.Twitter]: 'oauth/authorize',
        [Services.GnuSocial]: 'api/oauth/authorize',
    },
};

/* ---- 警告 ----
各関数のoptional paramはnullableですが、nullでは恐らくAPI呼び出しに失敗します。
必ずundefinedになるよう、nullはnullable parameterに入れないでください。undefinedが推奨です
// ---- ---- */

export const get = {
    statuses: {
        home_timeline: (service: string, since_id: ?number, max_id: ?number, amount: ?number): Object => (
            {
                url: apiUrls.get.statuses.home_timeline.url[service] + '?' + querystring.stringify({
                    [apiUrls.get.statuses.home_timeline.optional_param.since_id[service]]: since_id,
                    [apiUrls.get.statuses.home_timeline.optional_param.max_id[service]]: max_id,
                    [apiUrls.get.statuses.home_timeline.optional_param.amount[service]]: amount,
                }),
                type: 'home_timeline',
            }
        )
    },
    account: {
        verify_credentials: (service: string): string => (
            apiUrls.get.account.verify_credentials.url[service]
        )
    }
}
