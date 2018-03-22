// @flow

import { handleActions } from 'redux-actions';
import scanner from '../../helper/scanner';
import * as types from '../constant';
import Timeline from '../../core/view/object/Timeline';
import {saveTimelines} from '../api/storage';

const initState = [];

export default handleActions({
    [types.UPDATE_CONTENT_TEXT]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        scanner(state, action.payload.timelineIndex, (item: Timeline): Timeline => item.updateContentText(action.payload.text))
    ),
    [types.SET_SCROLL_STATUS]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        scanner(state, action.payload.timelineIndex, (item: Timeline): Timeline => item.setScrollPositionStatus(action.payload.length))
    ),
    [types.SET_IN_PROGRESS_STATUS]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        scanner(state, action.payload.timelineIndex, (item: Timeline): Timeline => item.setInProgress(action.payload.status))
    ),
    [types.SET_TIMELINE_MENU]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        scanner(state, action.payload.timelineIndex, (item: Timeline): Timeline => item.setMenu(action.payload.anchorEl))
    ),
    [types.CLEAR_FORM]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        scanner(state, action.payload.timelineIndex, (item: Timeline): Timeline => item.clear())
    ),
    [types.CONTENT_SET_REPLY]: (state: Array<Timeline>, action: Object): Array<Timeline> =>(
        scanner(state, action.payload.timelineIndex, (item: Timeline): Timeline => item.setReply(action.payload.target))
    ),
    [types.SET_IN_POSTING_STATUS]: (state: Array<Timeline>, action: Object): Array<Timeline> =>(
        scanner(state, action.payload.timelineIndex, (item: Timeline): Timeline => item.setInPosting(action.payload.status))
    ),
    [types.ADD_TIMELINE]: (state: Array<Timeline>, action: Object): Array<Timeline> => {
        const nextState = [...state, new Timeline(action.payload.accountIndex, action.payload.timelineType)];
        saveTimelines(nextState);
        return nextState;
    },
    [types.DELETE_TIMELINE]: (state: Array<Timeline>, action: Object): Array<Timeline> => {
        const nextState = state.concat();
        nextState.splice(action.payload.timelineIndex, 1);
        saveTimelines(nextState);
        return (nextState);
    },
    [types.OWNERINDEX_REASSIGN]: (state: Array<Timeline>, action: Object): Array<Timeline> => (
        state.map((item: Timeline): Timeline => (
            action.payload.target < item.ownerIndex ?
                item.updateOwnerindex(item.ownerIndex - 1):
                item))
    ),
    [types.LOAD_TIMELINE_DATA_SUCCESSED]: (state: Array<any>, action: Object): Array<any> => (
        action.timelines
    ),
}, initState);
