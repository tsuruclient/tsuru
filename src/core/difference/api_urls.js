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
            require_param:{
            },
            optional_param: {
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
        },
        user_timeline: {
            url: {
                [Services.Twitter]: '1.1/statuses/user_timeline.json',
                [Services.GnuSocial]: 'api/statuses/user_timeline.json',
                [Services.Mastodon]: '',
            },
            require_param: {
            },
            optional_param: {
            },
        },
        mentions_timeline: {
            url: {
                [Services.Twitter]: '1.1/statuses/mentions_timeline.json',
                [Services.GnuSocial]: 'api/statuses/mentions.json',
                [Services.Mastodon]: 'api/v1/notifications',
            },
            require_param: {
            },
            optional_param: {
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
        },
    },
    account: {
        verify_credentials: {
            url: {
                [Services.Twitter]: '1.1/account/verify_credentials.json',
                [Services.GnuSocial]: 'api/account/verify_credentials.json',
                [Services.Mastodon]: 'api/v1/accounts/verify_credentials',
            },
            require_param: {
            },
            optional_param: {
            },
        },
    },
    stream: {
        user: {
            url: {
                [Services.Twitter]: 'https://userstream.twitter.com/1.1/user.json',
                [Services.GnuSocial]: '',
                [Services.Mastodon]: 'api/v1/streaming/user',
            },
            require_param: {
            },
            optional_param: {
            },
        }
    }
};

export const post = {
    statuses: {
        update: {
            url: {
                [Services.Twitter]: '1.1/statuses/update.json',
                [Services.GnuSocial]: 'api/statuses/update.json',
                [Services.Mastodon]: 'api/v1/statuses',
            },
            require_param:{
                status: {
                    [Services.Twitter]: 'status',
                    [Services.GnuSocial]: 'status',
                    [Services.Mastodon]: 'status',
                },
            },
            optional_param: {
                in_reply_to_id: {
                    [Services.Twitter]: 'in_reply_to_status_id',
                    [Services.GnuSocial]: 'in_reply_to_status_id',
                    [Services.Mastodon]: 'in_reply_to_id',
                },
                sensitive_media: {
                    [Services.Twitter]: 'possibly_sensitive',
                    [Services.GnuSocial]: undefined,
                    [Services.Mastodon]: undefined,
                },
                spoiler_text: {
                    [Services.Twitter]: undefined,
                    [Services.GnuSocial]: undefined,
                    [Services.Mastodon]: 'spoiler_text',
                },
            },
        },
        retweet: {
            url: {
                [Services.Twitter]: '1.1/statuses/retweet/',
                [Services.GnuSocial]: 'api/statuses/retweet/',
                [Services.Mastodon]: 'api/v1/statuses/',
            },
            require_param:{
                id: {
                    [Services.Twitter]: '',
                    [Services.GnuSocial]: '',
                    [Services.Mastodon]: '/reblog',
                },
            },
            optional_param: {
            },
        },
        unretweet: {
            url: {
                [Services.Twitter]: '1.1/statuses/unretweet/',
                [Services.GnuSocial]: 'api/statuses/unretweet/',
                [Services.Mastodon]: 'api/v1/statuses/',
            },
            require_param:{
                id: {
                    [Services.Twitter]: '',
                    [Services.GnuSocial]: '',
                    [Services.Mastodon]: '/unreblog',
                },
            },
            optional_param: {
            },
        },
    },
    favorite: {
        create: {
            url: {
                [Services.Twitter]: '1.1/favorites/create.json',
                [Services.GnuSocial]: 'api/favorites/create.json',
                [Services.Mastodon]: 'api/v1/statuses/',
            },
            require_param: {
                id: {
                    [Services.Twitter]: 'id',
                    [Services.GnuSocial]: 'id',
                    [Services.Mastodon]: '/favourite',
                }
            },
            optional_param: {
            },
        },
        destroy: {
            url: {
                [Services.Twitter]: '1.1/favorites/destroy.json',
                [Services.GnuSocial]: 'api/favorites/destroy.json',
                [Services.Mastodon]: 'api/v1/statuses/',
            },
            require_param: {
                id: {
                    [Services.Twitter]: 'id',
                    [Services.GnuSocial]: 'id',
                    [Services.Mastodon]: '/unfavourite',
                }
            },
            optional_param: {
            },
        },
    },
};
