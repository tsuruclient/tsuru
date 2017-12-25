// @flow

import * as Services from '../Services';

export default {
    mention: {
        [Services.Twitter]: undefined,
        [Services.GnuSocial]: undefined,
        [Services.Mastodon]: 'mention',
    },
    retweet: {
        [Services.Twitter]: undefined,
        [Services.GnuSocial]: undefined,
        [Services.Mastodon]: 'reblog',
    },
    fav: {
        [Services.Twitter]: 'favorite',
        [Services.GnuSocial]: 'favorite',
        [Services.Mastodon]: 'favourite',
    },
    follow: {
        [Services.Twitter]: 'follow',
        [Services.GnuSocial]: 'follow',
        [Services.Mastodon]: 'follow',
    },
};
