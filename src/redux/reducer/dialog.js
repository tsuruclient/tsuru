// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';

import * as dialogTypes from '../constant/dialogs';
import {Home} from '../../core/old/constant/timelineType';

const AddAccountDialogDefaultState = {
    open: true,
    step: 0,
    selected: 0,
    receivedError: null,
};

const AddTimelineDialogDefaultState = {
    open: true,
    selectedAccount: 0,
    selectedTimelineType: Home,
};

const initState = {
    [dialogTypes.AddAccountDialogName]: {
        open: false,
        step: 0,
        selected: 0,
        receivedError: false,
    },
    [dialogTypes.AddTimelineDialogName]: {
        open: false,
        selectedAccount: 0,
        selectedTimelineType: Home,
    },
};

export default handleActions({
    [types.OPEN_DIALOG]: (state: Object, action: Object): Object => {
        switch (action.payload.dialogName) {
        case dialogTypes.AddAccountDialogName:
            return Object.assign({}, state, {[dialogTypes.AddAccountDialogName]: AddAccountDialogDefaultState});
        case dialogTypes.AddTimelineDialogName:
            return Object.assign({}, state, {[dialogTypes.AddTimelineDialogName]: AddTimelineDialogDefaultState});
        default:
            console.warn('something went wrong from reducer/dialog');
            return Object.assign({}, state);
        }
    },
    [types.CLOSE_DIALOG]: (state: Object, action: Object): Object => {
        const obj = Object.assign({}, state[action.payload.dialogName]);
        obj.open = false;
        return Object.assign({}, state, {[action.payload.dialogName]: obj});
    },
    [types.CREATE_TL_DIALOG_SELECT_ACCOUNT]: (state: Object, action: Object): Object => {
        const obj = Object.assign({}, state[dialogTypes.AddTimelineDialogName]);
        obj.selectedAccount = action.payload.selectedAccount;
        return Object.assign({}, state, ({[dialogTypes.AddTimelineDialogName]: obj}));
    },
    [types.CREATE_TL_DIALOG_SELECT_TIMELINE_TYPE]: (state: Object, action: Object): Object => {
        const obj = Object.assign({}, state[dialogTypes.AddTimelineDialogName]);
        obj.selectedTimelineType = action.payload.selectedTimelineType;
        return Object.assign({}, state, {[dialogTypes.AddTimelineDialogName]: obj});
    },
    [types.CREATE_AC_SELECT_INSTANCE]: (state: Object, action: Object): Object => {
        const obj = Object.assign({}, state[dialogTypes.AddAccountDialogName]);
        obj.selected = action.payload.selected;
        return Object.assign({}, state, {[dialogTypes.AddAccountDialogName]: obj});
    },
    [types.CREATE_AC_FORWARD_INPUT_DATA]: (state: Object, action: Object): Object => {
        const obj = Object.assign({}, state[dialogTypes.AddAccountDialogName]);
        obj.step = 1;
        return Object.assign({}, state, {[dialogTypes.AddAccountDialogName]: obj});
    },
    [types.CREATE_AC_FORWARD_PIN_AUTH]: (state: Object, action: Object): Object => {
        const obj = Object.assign({}, state[dialogTypes.AddAccountDialogName]);
        obj.step = 2;
        return Object.assign({}, state, {[dialogTypes.AddAccountDialogName]: obj});
    },
    [types.AUTHORIZATION_ERROR]: (state: Object, action: Object): Object => {
        const obj = Object.assign({}, state[dialogTypes.AddAccountDialogName]);
        obj.step = true;
        return Object.assign({}, state, {[dialogTypes.AddAccountDialogName]: obj});
    }
}, initState);
