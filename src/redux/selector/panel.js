// @flow

import { createSelector } from 'reselect';

const panelList = (state: Object): Array<any> => (state.timeline);
const accountList = (state: Object): Array<any> => (state.account);

export const contentBoxText = createSelector(
    [panelList],
    (panes: Array<any>): Function => (
        (index: number): Object => ({
            text: panes[index].contentText,
            imageList: panes[index].image,
            inPosting: panes[index].inPosting,
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
    [accountList, panelList],
    (AccountList: Array<any>, panes: Array<any>): Function => (
        (accountIndex: number, timelineIndex: number, dataType: string): Array<any> => (
            panes[timelineIndex].filterling(AccountList[accountIndex].record[dataType])
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
