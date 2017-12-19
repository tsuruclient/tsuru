import * as dataType from './dataType';

export const Home = "Home";
export const Activity = "Activity";
export const DirectMessage = "Direct Message";
export const List = "List";

export default {
    Home: {
        description: 'Home Timeline',
        api: undefined,
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
