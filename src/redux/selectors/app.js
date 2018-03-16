// @flow

import {createSelector} from 'reselect';
import {createMuiTheme} from 'material-ui/styles';

const style = (state: Object): Object => (state.style);

export const theme = createSelector(
    [style],
    (source: Object): Object => (
        createMuiTheme(source)
    )
);
