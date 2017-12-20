// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';

import * as dialogTypes from '../constant/dialogs';
import timelineTypes, {Home} from '../../core/constant/timelineType';

const initState = {
    [dialogTypes.AddAccountDialogName]: {
        open: false,
        step: 0,
        selected: 0,
        isCommon: false,
        receivedError: null,
    },
    [dialogTypes.AddTimelineDialogName]: {
        open: true,
        selectedAccount: 0,
        selectedTimelineType: Home,
    },
}

export default handleActions({
    [types.OPEN_DIALOG]: (state: Object, action: Object): Object => {
        const obj = Object.assign({}, state[action.payload.dialogName]);
        obj.open = true;
        return Object.assign({}, state, {[action.payload.dialogName]: obj});
    },
    [types.CLOSE_DIALOG]: (state: Object, action: Object): Object => {
        const obj = Object.assign({}, state[action.payload.dialogName]);
        obj.open = false;
        return Object.assign({}, state, {[action.payload.dialogName]: obj});
    },
}, initState);
