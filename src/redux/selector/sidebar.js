// @flow

import { createSelector } from 'reselect';

const accountList = (state: Object): Array<any> => (state.account);

export const accounts = createSelector(
    [accountList],
    (Account: Array<any>): any => (Account.map(item => item.account)),
);
