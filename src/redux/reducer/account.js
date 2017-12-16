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
    [types.ADD_ACCOUNT]: (state: Array<AccountItemType>, action: Object): Array<AccountItemType> => (
        [...state, {account: new Account(action.service, action.client, action.userData ), record: new Record()}]
    ),
}, initState);
