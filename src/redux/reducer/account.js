// @flow

import { handleActions } from 'redux-actions';
import scanner from '../../helper/scanner';
import * as types from '../constant';

import Account from '../../core/object/Account';
import Record from '../../core/object/Record';

type AccountItemType = {
    account: Account,
    record: Record,
};

const initState = [];

export default handleActions({
    [types.UPDATE_CONTENT]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        scanner(state, action.payload.accountIndex, (item: AccountItemType): AccountItemType => ({
            account: item.account,
            record: item.record.unshift(action.payload.datatype, action.payload.data)}))
    ),
    [types.UPDATE_USERDATA]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        scanner(state, action.payload.index, (item: AccountItemType): AccountItemType => ({
            account: item.account.confirm(action.payload.data),
            record: item.record}))
    ),
    [types.ADD_ACCOUNT]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        [...state, {account: action.payload, record: new Record(action.service)}]
    ),
    [types.LOAD_ACCOUNT_DATA_SUCCESSED]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        [...action.payload]
    ),
}, initState);
