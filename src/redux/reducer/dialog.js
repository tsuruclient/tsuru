// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';

import timelineTypes, {Home} from '../../core/constant/timelineType';

const initState = {
    AddAccountDialog: {
        open: true,
        step: 0,
        selected: 0,
        isCommon: false,
        receivedError: null,
    },
    AddTimelineDialog: {
        open: false,
        selectedAccount: 0,
        selectedTimelineType: Home,
    },
}

export default handleActions({

}, initState);
