// @flow
import * as Services from '../Services';
import * as apiUrls from './api_urls';

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

export const get = {
    statuses: {
        home_timeline: (service: string, since_id: ?number, max_id: ?number): string => {
            // TODO: ?
        }
    }
}
