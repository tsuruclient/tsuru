// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    root: {

    }
});

type Props = {
    classes: Object,
    index: number,
    contentBoxText: Function,
    updateContentText: Function,
};

const ContentField = (props: Props) => (
    <TextField
        value={props.contentBoxText(props.index).contentText}
        onChange={(event) => props.updateContentText({text: event.target.value, timelineIndex: props.index})}
        id="textContent"
        className={props.classes.root}
        margin="none"
        multiline
        fullWidth
        rowsMax={8}
    />
);

export default withStyles(styles)(ContentField);
