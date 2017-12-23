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
import SelectAccountTypeView from './SelectAccountTypeView';
import InputInstanceView from './InputInstanceView';
import InputPinView from './InputPinView';

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
    selectInstance: Function,
    forwardInputSection: Function,
    forwardPinAuthSection: Function,
    backSection: Function,
    openPinAuthWindow: Function,
    startAuth: Function,
};

const handleRequestClose = (step: number, closeDialog: Function): Function => (
    () => step !== 2 ? closeDialog({dialogName: AddAccountDialogName}) : null
)

const handleClose = (closeDialog: Function): Function => (
    () => closeDialog({dialogName: AddAccountDialogName})
)

const AddAccountDialog = pure((props: Props) => (
    <Dialog
        open={props.dialogData.open}
        onClose={handleRequestClose(props.dialogData.step, props.closeDialog)}>
        {[
            <SelectAccountTypeView
                selected={props.dialogData.selected}
                selectInstance={props.selectInstance}
                forwardInputSection={props.forwardInputSection}
                forwardPinAuthSection={props.forwardPinAuthSection}
                openPinAuthWindow={props.openPinAuthWindow} />,
            <InputInstanceView
                selected={props.dialogData.selected}
                forwardPinAuthSection={props.forwardPinAuthSection}
                openPinAuthWindow={props.openPinAuthWindow} />,
            <InputPinView
                onRequestClose={handleClose(props.closeDialog)}
                startAuth={props.startAuth} />
        ][props.dialogData.step]}
    </Dialog>
));

export default withStyles(styles)(AddAccountDialog);
