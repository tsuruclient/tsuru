// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

type Props = {
    classes: Object,
    avatar: Object,
    content: string,
}

const styles = theme => ({
    root: {
        width: '260px',
        maxHeight: '60px',
        margin: '4px',
        display: 'flex',
        overflow: 'hidden'
    },
    avatar: {
        margin: '6px',
        width: '32px',
        height: '32px',
    }
});

const MiniContentCard = (props: Props) => (
    <Paper className={props.classes.root}>
        <Avatar className={props.classes.avatar} src={props.avatar} />
        <Typography type="body1">{props.content}</Typography>
    </Paper>
)

export default withStyles(styles)(MiniContentCard);