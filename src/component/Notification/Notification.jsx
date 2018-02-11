// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';

type Props = {
    classes: Object,
};

const styles = theme => ({
    root: {

    }
});

const Notification = (props: Props) => (
    <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        open={true}
        autoHideDuration={2000}
        onClose={null}
        SnackbarContentProps={{
            'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">はいじゃないが</span>}
        action={[
            <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={null} >
                <CloseIcon />
            </IconButton>,
    ]} />
);

export default withStyles(styles)(Notification);
