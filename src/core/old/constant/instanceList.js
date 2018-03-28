// @flow

import * as Services from '../../Services';

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
    'Twitter': {
        type: Services.Twitter,
        instance: 'twitter.com',
        apiurl: 'https://api.twitter.com/',
        apikey: 'teMvsH7tcmvrJSbKNJvOTIKsc',
        apisecret: 'sydDOHWyBi8BtEATaiZvYdZiLVj6Kfj4YwYnDbdPihCWFqwkAk',
        common: false,
    },
    'GNU_Social freezepeach.xyz': {
        type: Services.GnuSocial,
        instance: 'freezepeach.xyz',
        apiurl: 'https://freezepeach.xyz/',
        apikey: 'f0c505f6f1cf59fcb2d3571d809a074a',
        apisecret: '4665b69c951e316f4e08be1a67e05157',
        common: false,
    },
    'Mastodon pawoo.net': {
        type: Services.Mastodon,
        instance: 'pawoo.net',
        apiurl: 'https://pawoo.net/',
        apikey: 'f24ec24cda87513ba5b963addc0b3a75d13c8fed83c17fc60ba2f7b59aeb7ffc',
        apisecret: '4561f763ee48e356616bd0437882834716c7b078bd99562ac15f9cb634f3fd7d',
        common: false,
    },
    'Mastodon mstdn.jp': {
        type: Services.Mastodon,
        instance: 'mstdn.jp',
        apiurl: 'https://mstdn.jp/',
        apikey: '5e0f667fb4da4b6e06cff473f8fdbce51f86c2af9c56ccd90b2fcad5160aeab8',
        apisecret: 'e9a00b4f0006783b55e9c2c7dca4ca75c7ff3cdfd0e13dafe190758083d0641a',
        common: false,
    },
};
