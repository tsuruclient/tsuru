// @flow

import { createActions } from 'redux-actions';
import * as types from '../constant';
import { REQUEST_SAVE_TIMELINE } from '../constant';

export const generalActions = createActions(
    types.INIT_APP,
    types.REQUEST_SAVE_ACCOUNT,
    types.REQUEST_SAVE_TIMELINE,
    types.LOAD_ACCOUNT_DATA_SUCCESSED,
    types.LOAD_TIMELINE_DATA_SUCCESSED,
    types.LOAD_DATA_FAILED,
);

export const accountActions = createActions(
    types.ADD_ACCOUNT,
    types.REQUEST_LOGOUT,
    types.DELETE_ACCOUNT,
    types.UPDATE_USERDATA,
);

export const streamingActions = createActions(
    types.REQUEST_CONNECT_STREAMING_API,
    types.SET_STREAMING_STATUS,
);

export const authActions = createActions(
    types.OPEN_PIN_AUTHORIZATION_WINDOW,
    types.REQUEST_AUTHORIZATION,
    types.AUTHORIZATION_ERROR,
);

export const contentActions = createActions(
    types.UPDATE_CONTENT,
    types.CONTENT_SET_REPLY,
);

export const timelineActions = createActions(
    types.ADD_TIMELINE,
    types.DELETE_TIMELINE,
    types.OWNERINDEX_REASSIGN,
    types.UPDATE_CONTENT_TEXT,
    types.CLEAR_FORM,
    types.SET_TIMELINE_MENU,
    types.SET_IN_PROGRESS_STATUS,
    types.SET_SCROLL_STATUS,
);

export const apiActions = createActions(
    types.REQUEST_CALL_API,
    types.CALL_API_FAILED,
);

export const dialogActions = createActions(
    types.OPEN_DIALOG,
    types.CLOSE_DIALOG,
    types.CREATE_TL_DIALOG_SELECT_ACCOUNT,
    types.CREATE_TL_DIALOG_SELECT_TIMELINE_TYPE,
    types.CREATE_AC_SELECT_INSTANCE,
    types.CREATE_AC_FORWARD_INPUT_DATA,
    types.CREATE_AC_FORWARD_PIN_AUTH,
    types.CREATE_AC_RECEIVE_PIN_ERR,
    types.CREATE_AC_BACK_SECTION,
);

export const devOptionActions = createActions(
    types.SET_DEV_DATA,
);
