// @flow
import qs from 'query-string';
import * as Services from '../Services';
import * as apiUrls from './api_urls';

export const mastodonStreamingTypes = {
    user_timeline: 'user',
    public_timeline: 'public',
    local_timeline: 'public:local',
};

export default (service: string, option: Object): Object => {
    switch(service){
        case Services.Twitter:
            return {
                service,
                url: apiUrls.get.stream.user.url[Services.Twitter],
            };
        case Services.Mastodon:
            return {
                service,
                url: 'wss://' + option.domain + '/api/v1/streaming?' + qs.stringify({stream: option.stream}),
                streamType: option.stream
            }
        default:
            throw new Error('unsupported service.');
    }
};
