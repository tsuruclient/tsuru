// @flow
import * as Services from '../Services';

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
