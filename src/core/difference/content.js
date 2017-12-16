// @flow
import * as Services from '../Services';

export default {
    id: {
        [Services.Twitter]: 'id_str',
        [Services.GnuSocial]: 'id',
        [Services.Mastodon]: 'id',
    },
    text: {
        [Services.Twitter]: 'text',
        [Services.GnuSocial]: 'text',
        [Services.Mastodon]: 'content',
    },
    user: {
        [Services.Twitter]: 'user',
        [Services.GnuSocial]: 'user',
        [Services.Mastodon]: 'account',
    },
    retweetedTweet: {
        [Services.Twitter]: 'retweeted_status',
        [Services.GnuSocial]: 'retweeted_status',
        [Services.Mastodon]: 'reblog',
    },
    inReplyToId: {
        [Services.Twitter]: 'in_reply_to_status_id_str',
        [Services.GnuSocial]: 'in_reply_to_status_id',
        [Services.Mastodon]: 'in_reply_to_id',
    },
    inReplyToAccountId: {
        [Services.Twitter]: 'in_reply_to_user_id_str',
        [Services.GnuSocial]: 'in_reply_to_user_id',
        [Services.Mastodon]: 'in_reply_to_account_id',
    },
};
