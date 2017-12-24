// @flow

import { handleActions } from 'redux-actions';
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
        state.map((item: AccountItemType, index: number): AccountItemType => (
            action.payload.accountIndex === index ? 
                {account: item.account, record: item.record.unshift(action.payload.datatype, action.payload.data)}:
                item
        ))
    ),
    [types.UPDATE_USERDATA]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        state.map((item: AccountItemType, index: number): AccountItemType => (
            index === action.payload.index ? {account: item.account.confirm(action.payload.data), record: item.record} : item
        ))
    ),
    [types.ADD_ACCOUNT]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        [...state, {account: action.payload, record: new Record(action.service)}]
    ),
    [types.LOAD_ACCOUNT_DATA_SUCCESSED]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        [...action.payload]
    ),
}, initState);
