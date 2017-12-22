// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';
import Timeline from '../../core/object/Timeline';

const initState = [];

export default handleActions({
    [types.UPDATE_CONTENT_TEXT]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        state.map((item: Timeline, index: number): Timeline => (
            index===action.payload.timelineIndex ? item.updateContentText(action.payload.text) : item
        ))
    ),
    [types.SET_TIMELINE_MENU]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        state.map((item: Timeline, index: number): Timeline => (
            index === action.payload.timelineIndex ? item.setMenu(action.payload.anchorEl) : item
        ))
    ),
    [types.ADD_TIMELINE]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        [...state, new Timeline(action.payload.accountIndex, action.payload.timelineType)]
    ),
}, initState);
