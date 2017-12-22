// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';
import Timeline from '../../core/object/Timeline';
import {saveTimelines} from '../api/storage';

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
    [types.ADD_TIMELINE]: (state: Array<Timeline>, action: Object): Array<Timeline> => {
        const nextState = [...state, new Timeline(action.payload.accountIndex, action.payload.timelineType)];
        saveTimelines(nextState);
        return nextState;
    },
    [types.DELETE_TIMELINE]: (state: Array<Timeline>, action: Object): Array<Timeline> => {
        const nextState = state.concat();
        nextState.splice(action.payload, 1);
        saveTimelines(nextState);
        return (nextState);
    },
    [types.LOAD_TIMELINE_DATA_SUCCESSED]: (state: Array<any>, action: Object): Array<any> => (
        action.timelines
    ),
}, initState);
