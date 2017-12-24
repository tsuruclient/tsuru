// @flow

import * as dataType from './dataType';
import * as apis from '../difference/api';

export const Home = "Home";
export const Activity = "Activity";
export const DirectMessage = "Direct Message";
export const List = "List";

export default {
    Home: {
        description: 'Home Timeline',
        api: {
            get: apis.get.statuses.home_timeline,
            post: apis.post.statuses.update,
        },
        dataname: dataType.home,
    },
    Activity: {
        description: 'Mentions and Reactions timeline.',
        api: undefined,
        dataname: dataType.activity,
    },
    /* 'Direct Message': {
        description: 'Direct message timeline.',
        api: undefined,
        dataname: dataType.directMail,
    },*/
};
