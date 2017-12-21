// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Dialog, { DialogActions,
    DialogContent,
    DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import {AddAccountDialogName} from '../../../redux/constant/dialogs';

const styles = theme => ({
    root: {

    },
    content: {
        width: '420px',
    }
});

type Props = {
    classes: Object,
    dialogData: Object,
    closeDialog: Function,
};

const handleRequestClose = (closeDialog: Function): Function => (
    () => closeDialog({dialogName: AddAccountDialogName})
)

const AddAccountDialog = pure((props: Props) => (
    <Dialog
        open={props.dialogData.open}
        onRequestClose={handleRequestClose(props.closeDialog)}>
        <DialogTitle>{'Add Account'}</DialogTitle>
        <DialogContent>
            {'conetnt is here'}
        </DialogContent>
        <DialogActions>
            <Button raised color='primary'>{'そうですか'}</Button>
        </DialogActions>
    </Dialog>
));

export default withStyles(styles)(AddAccountDialog);
