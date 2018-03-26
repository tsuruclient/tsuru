// @flow

import { createSelector } from 'reselect';

const timelineList = (state: Object): Array<any> => (state.timeline);
const accountList = (state: Object): Array<any> => (state.account);

export const contentBoxText = createSelector(
    [timelineList],
    (Timelines: Array<any>): Function => (
        (index: number): Object => ({
            text: Timelines[index].contentText,
            imageList: Timelines[index].image,
            inPosting: Timelines[index].inPosting,
        })),
);

export const service = createSelector(
    [accountList],
    (Accounts: Array<any>): Function => (
        (index: number): Object => (Accounts[index].account.service)
    )
);

export const ownerInfo = createSelector(
    [accountList],
    (Accounts: Array<any>): Function => (
        (index: number): Object => {
            const account = Accounts[index].account;
            return {
                service: account.service,
                domain: account.client.domain,
                screenName: account.userdata.screenName,
            }
        }
    )
);

export const isStreaming = createSelector(
    [accountList],
    (Accounts: Array<any>): Function => (
        (index: number): Object => (
            Accounts[index].account.isStreaming
        )
    )
);

export const contents = createSelector(
    [accountList, timelineList],
    (AccountList: Array<any>, TimelineList: Array<any>): Function => (
        (accountIndex: number, timelineIndex: number, dataType: string): Array<any> => (
            TimelineList[timelineIndex].filterling(AccountList[accountIndex].record[dataType])
        )
    )
);

export const latestContentId = createSelector(
    [accountList],
    (AccountList: Array<any>): Function => (
        (accountIndex: number, dataType: string): ?string => {
            const contentList = AccountList[accountIndex].record[dataType];
            return contentList.length > 0 ?
                AccountList[accountIndex].record[dataType][0].id:
                undefined;
        }
    )
);
