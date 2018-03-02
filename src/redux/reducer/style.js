// @flow

import { handleActions } from 'redux-actions';
import * as types from '../constant';

const initState = {
    palette: {
        type: 'dark',
    },
};

export default handleActions({
    [types.APPLY_THEME]: (state: Object, action: Object): Object => (
        {
            palette: {
                type: state.palette.type === 'light' ? 'dark' : 'light'
            }
        }
    )}
, initState);
