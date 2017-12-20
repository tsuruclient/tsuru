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
)

export const devOptionActions = createActions(
    types.SET_DEV_DATA,
);
