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
        state.map((item: Object, index: number): Array<any> => (
            action.accountIndex === index ? {account: item.account, record: item.record.unshift(action.dataType, action.data)}: item
        ))
    ),
    [types.ADD_ACCOUNT]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        [...state, {account: action.payload, record: new Record(action.service)}]
    ),
}, initState);
