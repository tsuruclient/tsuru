// @flow
import * as Services from '../../Services';

export default {
    displayName: {
        [Services.Twitter]: 'name',
        [Services.GnuSocial]: 'name',
        [Services.Mastodon]: 'display_name',
    },
    screenName: {
        [Services.Twitter]: 'screen_name',
        [Services.GnuSocial]: 'screen_name',
        [Services.Mastodon]: 'acct',
    },
    id: {
        [Services.Twitter]: 'id_str',
        [Services.GnuSocial]: 'id',
        [Services.Mastodon]: 'id',
    },
    icon: {
        [Services.Twitter]: 'profile_image_url_https',
        [Services.GnuSocial]: 'profile_image_url_https',
        [Services.Mastodon]: 'avatar',
    },
    header: {
        [Services.Twitter]: 'profile_banner_url',
        [Services.GnuSocial]: 'profile_banner_url',
        [Services.Mastodon]: 'header',
    },
    protected: {
        [Services.Twitter]: 'protected',
        [Services.GnuSocial]: 'protected',
        [Services.Mastodon]: 'locked',
    },
};
