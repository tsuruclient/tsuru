// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';
import Timeline from '../../core/object/Timeline';

const initState = [];

export default handleActions({
    [types.ADD_TIMELINE]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        [...state, new Timeline(action.accountIndex, action.timelineType)]
    ),
}, initState);
