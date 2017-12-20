// @flow

import * as Services from '../Services';

export const get = {
    statuses: {
        home_timeline: {
            url: {
                [Services.Twitter]: '1.1/statuses/home_timeline.json',
                [Services.GnuSocial]: 'api/statuses/home_timeline.json',
                [Services.Mastodon]: '/api/v1/timelines/home',
            },
            param: {
                max_id: {
                    [Services.Twitter]: 'max_id',
                    [Services.GnuSocial]: 'max_id',
                    [Services.Mastodon]: 'max_id',
                },
                since_id: {
                    [Services.Twitter]: 'since_id',
                    [Services.GnuSocial]: 'since_id',
                    [Services.Mastodon]: 'since_id',
                },
                amount: {
                    [Services.Twitter]: 'count',
                    [Services.GnuSocial]: 'count',
                    [Services.Mastodon]: 'limit',
                },
            },
        }, // TODO: 以下パラメータなども設定してください
        user_timeline: {
            [Services.Twitter]: '1.1/statuses/user_timeline.json',
            [Services.GnuSocial]: 'api/statuses/user_timeline.json',
            [Services.Mastodon]: '',
        },
        mentions_timeline: {
            [Services.Twitter]: '1.1/statuses/mentions_timeline.json',
            [Services.GnuSocial]: 'api/statuses/mentions.json',
            [Services.Mastodon]: 'api/v1/notifications',
        },
    },
    account: {
        verify_credentials: {
            [Services.Twitter]: '1.1/account/verify_credentials.json',
            [Services.GnuSocial]: 'api/account/verify_credentials.json',
            [Services.Mastodon]: 'api/v1/accounts/verify_credentials',
        },
    },
};

export const post = {
    statuses: {
        update: {
            [Services.Twitter]: '1.1/statuses/update.json',
            [Services.GnuSocial]: 'api/statuses/update.json',
            [Services.Mastodon]: 'api/v1/statuses',
        },
    },
};
