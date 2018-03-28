// @flow

import { createSelector } from 'reselect';

const accountList = (state: Object): Array<any> => (state.account);
const dialogObject = (state: Object): Object => (state.dialog);

export const accounts = createSelector(
    [accountList],
    (Account: Array<any>): any => (Account.map(item => ({
        service: item.account.service,
        userData: item.account.userdata
    }))),
);

export const addAccountDialogObject = createSelector(
    [dialogObject],
    (dialogData: Object): Object => (dialogData.AddAccountDialog)
);

export const addTimelineDialogObject = createSelector(
    [dialogObject],
    (dialogData: Object): Object => (dialogData.AddTimelineDialog)
);
