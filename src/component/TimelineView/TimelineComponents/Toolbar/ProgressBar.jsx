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
    },
    streaming: {
        width: '100%',
        height: '2px',
        background: '#469AF0'
    }
});

type Props = {
    classes: Object,
    inProgressCount: number,
    inStreaming: boolean,
};

const PropgressBar = pure((props: Props) => {
    if(props.inStreaming){
        return <div className={props.classes.streaming}></div>;
    }else if(props.inProgressCount > 0) {
        return <LinearProgress className={props.classes.root} />
    }else {
        return <div className={props.classes.empty}></div>;
    }
});

export default withStyles(styles)(PropgressBar);
