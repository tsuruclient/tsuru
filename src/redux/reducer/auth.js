// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';
import {openPinAuthWindow} from '../api/auth';
import Account from '../../core/old/object/Account';

const initState = {};

export default handleActions({
    [types.OPEN_PIN_AUTHORIZATION_WINDOW]: (state: Object, action: Object): Object => (
        new Account(action.payload.type, openPinAuthWindow(action.payload), null)
    ),
}, initState);
