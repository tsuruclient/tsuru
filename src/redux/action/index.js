// @flow

import { createActions } from 'redux-actions';
import * as types from '../constant';

export const accountActions = createActions(
    types.ADD_ACCOUNT,
    types.DELETE_ACCOUNT,
);

export const contentActions = createActions(
    types.UPDATE_CONTENT,
);

export const timelineActions = createActions(
    types.ADD_TIMELINE,
    types.DELETE_TIMELINE,
    types.UPDATE_CONTENT_TEXT,
    types.SET_TIMELINE_MENU,
);

export const apiActions = createActions(
    types.REQUEST_CALL_API,
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
)

export const devOptionActions = createActions(
    types.SET_DEV_DATA,
);
