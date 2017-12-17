// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui-icons/Send';

const styles = theme => ({
    root: {
        width: 36,
        margin: '0px 2px',
    }
});

type Props = {
    classes: Object
};

const SendButton = (props: Props) => (
    <IconButton className={props.classes.root}>
        <SendIcon/>
    </IconButton>
);

export default withStyles(styles)(SendButton);
