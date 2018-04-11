// @flow

import { handleActions } from 'redux-actions';
import scanner from '../../helper/scanner/scanner';
import * as types from '../constant';

import Account from '../../core/old/object/Account';
import Record from '../../core/old/object/Record';

type AccountItemType = {
    account: Account,
    record: Record,
};

const initState = [];

export default handleActions({
    [types.UPDATE_CONTENT]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        scanner(state, action.payload.accountIndex, (item: AccountItemType): AccountItemType => ({
            account: item.account,
            record: item.record.unshift(action.payload.data)}))
    ),
    [types.UPDATE_CONTENT_ATTRIBUTE]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        scanner(state, action.payload.accountIndex, (item: AccountItemType): AccountItemType => ({
            account: item.account,
            record: item.record.setContentStatus(action.payload.target)
        }))
    ),
    [types.SET_STREAMING_STATUS]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        scanner(state, action.payload.accountIndex, (item: AccountItemType): AccountItemType => ({
            account: item.account.setStreamingStatus(action.payload.isStreaming),
            record: item.record
        }))
    ),
    [types.UPDATE_USERDATA]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        scanner(state, action.payload.accountIndex, (item: AccountItemType): AccountItemType => ({
            account: item.account.confirm(action.payload.data),
            record: item.record}))
    ),
    [types.ADD_ACCOUNT]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        [...state, {account: action.payload, record: new Record(action.service)}]
    ),
    [types.LOAD_ACCOUNT_DATA_SUCCESSED]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        [...action.payload]
    ),
    [types.DELETE_ACCOUNT]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => {
        const nextState = state.concat();
        nextState.splice(action.payload.accountIndex, 1);
        return (nextState);
    },
}, initState);
