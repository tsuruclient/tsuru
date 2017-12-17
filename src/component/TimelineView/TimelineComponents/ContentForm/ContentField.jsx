// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    root: {

    }
});

type Props = {
    classes: Object
};

const ContentField = (props: Props) => (
    <TextField
        id="textContent"
        className={props.classes.root}
        margin="none"
        multiline
        fullWidth
        rowsMax={8}
    />
);

export default withStyles(styles)(ContentField);
