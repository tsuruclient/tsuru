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

export const devOptionActions = createActions(
    types.SET_DEV_DATA,
);
