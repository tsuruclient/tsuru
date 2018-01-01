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
        home_timeline: (service: string, amount: ?number, since_id: ?number, max_id: ?number): Object => {
            const home_timeline = apiUrls.get.statuses.home_timeline;
            return {
                url: home_timeline.url[service] + '?' + querystring.stringify({
                    [home_timeline.optional_param.amount[service]]: amount,
                    [home_timeline.optional_param.since_id[service]]: since_id,
                    [home_timeline.optional_param.max_id[service]]: max_id,
                }),
                target: 'home_timeline',
                datatype: dataTypes.home,
                service,
                method: 'GET',
            };
        },
        mentions_timeline: (service: string, amount: ?number, since_id: ?number, max_id: ?number) => {
            const mentions_timeline = apiUrls.get.statuses.mentions_timeline;
            return {
                url: mentions_timeline.url[service] + '?' + querystring.stringify({
                    [mentions_timeline.optional_param.amount[service]]: amount,
                    [mentions_timeline.optional_param.since_id[service]]: since_id,
                    [mentions_timeline.optional_param.max_id[service]]: max_id,
                }),
                target: 'mentions_timeline',
                datatype: dataTypes.activity,
                service,
                method: 'GET',
            };
        }
    },
    account: {
        verify_credentials: (service: string): string => (
            apiUrls.get.account.verify_credentials.url[service]
        )
    }
};

export const post = {
    statuses: {
        update: (service: string, status: string, in_reply_to_id: ?number|string): Object => {
            const update = apiUrls.post.statuses.update;
            return {
                url: update.url[service] + '?' + querystring.stringify({
                    [update.require_param.status[service]]: status,
                    [update.optional_param.in_reply_to_id[service]]: in_reply_to_id,
                }),
                target: 'update',
                datatype: dataTypes.home,
                service,
                method: 'POST',
            };
        },
        retweet: (service: string, id: string): Object => {
            const retweet = apiUrls.post.statuses.retweet;
            const path = retweet.url[service] + id + service === Services.Mastodon ?
                retweet.require_param.id[service] : '.json';
            return {
                url: path,
                target: 'rt',
                datatype: dataTypes.home,
                service,
                method: 'POST',
            };
        }
    },
    favorite: {
        create: (service: string, id: string): Object => {
            const create = apiUrls.post.favorite.create;
            let path = create.url[service];
            if (service === Services.Mastodon) {
                path = path + id + create.require_param.id[service];
            } else {
                path = path + '?' + querystring.stringify({
                    [create.require_param.id[service]] : id
                });
            }
            return {
                url: path,
                target: 'fav',
                datatype: dataTypes.home,
                service,
                method: 'POST',
            };
        },
    }
};
