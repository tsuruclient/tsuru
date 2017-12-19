// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    root: {

    }
});

type Props = {
    classes: Object,
};

const AccountList = pure((props: Props) => (
    <div></div>
));

export default withStyles(styles)(AccountList);
