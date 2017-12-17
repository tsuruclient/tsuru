
import React from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    root: {
        margin: 3,
        width: 320,
        minWidth: 320,
        maxWidth: 320,
        height: "calc(100% - 6px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
    }
})

type Props = {
    classes: Object,
    timeline: Object,
};

const Timeline = (props: Props) => (
    <Paper className={props.classes.root}>
    </Paper>
)

export default withStyles(styles)(Timeline);
