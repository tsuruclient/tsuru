// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Dialog, { DialogActions,
    DialogContent,
    DialogTitle } from 'material-ui/Dialog';

import AccountList from './AccountList';

import {AddTimelineDialogName} from '../../../redux/constant/dialogs';

const styles = theme => ({
    root: {

    }
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
    dialogData: Object,
    closeDialog: Function,
};

const handleRequestClose = (closeDialog: Function): Function => (
    () => closeDialog({dialogName: AddTimelineDialogName})
)

const AddTimelineDialog = pure((props: Props) => (
    <Dialog
        open={props.dialogData.open}
        onRequestClose={handleRequestClose(props.closeDialog)}>
        <DialogTitle>{'Add Timeline'}</DialogTitle>
        <DialogContent>
            <Typography>{'一億総虐殺社会'}</Typography>
        </DialogContent>
        <DialogActions>
            <Button raised color='primary'>{'Confirm'}</Button>
        </DialogActions>
    </Dialog>
));

export default withStyles(styles)(AddTimelineDialog);
