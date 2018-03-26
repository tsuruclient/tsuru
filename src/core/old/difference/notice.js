// @flow
import * as Services from '../../Services';

export default {
    type: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'type',
    },
    id: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'id',
    },
    createdAt: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'created_at',
    },
    target: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'status',
    },
    sender: {
        [Services.Twitter]: '',
        [Services.GnuSocial]: '',
        [Services.Mastodon]: 'account',
    },
};
