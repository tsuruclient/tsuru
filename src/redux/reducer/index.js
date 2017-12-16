// @flow

import {combineReducers} from 'redux';

import account from './account';
import timeline from './timeline';
import dialog from './dialog';
import notification from './notification';

export default combineReducers({
    account,
    timeline,
    dialog,
    notification,
});
