// @flow
import React from 'react';
import {pure} from 'recompose'
import {withStyles} from 'material-ui/styles';

import Avatar from 'material-ui/Avatar';
import { CircularProgress } from 'material-ui/Progress';

const styles = theme => ({
    progress: {
        margin: 0,
    }
})

type Props = {
    classes: Object,
    data: ?Object,
};

const Icon = pure((props: Props) => {
    return props.data ?
        <Avatar src={props.data.avatar} /> :
        <CircularProgress className={props.classes.progress} />
})

export default withStyles(styles)(Icon);
