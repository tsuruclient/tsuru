// @flow

import { createSelector } from 'reselect';

const timelineList = (state: Object): Array<any> => (state.timeline);
const accountList = (state: Object): Array<any> => (state.account);

export const contentBoxText = createSelector(
    [timelineList],
    (Timelines: Array<any>): Function => (
        (index: number): Object => ({
            contentText: Timelines[index].contentText,
            imageList: Timelines[index].image,
        })),
);

export const service = createSelector(
    [accountList],
    (Accounts: Array<any>): Function => (
        (index: number): Object => (Accounts[index].service)
    )
);
