// @flow

import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
    root: {
        height: '2px',
    },
    empty: {
        width: '100%',
        height: '2px',
        background: 'rgba(0, 0, 0, 0.3)'
    }
});

type Props = {
    classes: Object,
    inProgress: boolean,
};

const PropgressBar = pure((props: Props) => {
    return props.inProgress ?
        <LinearProgress className={props.classes.root} /> :
        <div className={props.classes.empty}></div>;
});

export default withStyles(styles)(PropgressBar);
