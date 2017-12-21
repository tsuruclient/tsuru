// @flow

import * as Services from '../Services';

export default {
    /* 'Common Twitter': {
        type: Services.Twitter,
        instance: 'twitter.com',
        apiurl: 'https://api.twitter.com/',
        apikey: undefined,
        apisecret: undefined,
        common: true,
    }, */
    'Common GNU_Social': {
        type: Services.GnuSocial,
        instance: undefined,
        apiurl: undefined,
        apikey: undefined,
        apisecret: undefined,
        common: true,
    },
    'Common Mastodon': {
        type: Services.Mastodon,
        instance: undefined,
        apiurl: undefined,
        apikey: undefined,
        apisecret: undefined,
        common: true,
    },
};
