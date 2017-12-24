// @flow
import * as Services from '../Services';
import * as apiUrls from './api_urls';
import * as dataTypes from '../constant/dataType';
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
        home_timeline: (service: string, since_id: ?number, max_id: ?number, amount: ?number): Object => {
            const home_timeline = apiUrls.get.statuses.home_timeline;
            return {
                url: home_timeline.url[service] + '?' + querystring.stringify({
                    [home_timeline.optional_param.since_id[service]]: since_id,
                    [home_timeline.optional_param.max_id[service]]: max_id,
                    [home_timeline.optional_param.amount[service]]: amount,
                }),
                target: 'home_timeline',
                datatype: dataTypes.home,
                service,
            };
        }
    },
    account: {
        verify_credentials: (service: string): string => (
            apiUrls.get.account.verify_credentials.url[service]
        )
    }
}
