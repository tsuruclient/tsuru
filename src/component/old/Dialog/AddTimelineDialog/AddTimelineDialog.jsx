// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Dialog, { DialogActions,
    DialogContent,
    DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

import AccountList from './AccountList';
import TimelineTypeList from './TimelineTypeList';

import {AddTimelineDialogName} from '../../../redux/constant/dialogs';

const styles = (theme) => ({
    root: {

    },
    content: {
        width: '420px',
    }
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
    dialogData: Object,
    closeDialog: Function,
    selectAccount: Function,
    selectTimelineType: Function,
    addTimeline: Function,
};

const handleRequestClose = (closeDialog: Function): Function => (
    () => closeDialog({dialogName: AddTimelineDialogName})
);

const handleAddButtonClicked = (dialogData: Object, addTimeline: Function, closeDialog: Function): Function => (
    () => {
        addTimeline({accountIndex: dialogData.selectedAccount, timelineType: dialogData.selectedTimelineType});
        closeDialog({dialogName: AddTimelineDialogName});
    }
);

const AddTimelineDialog = pure((props: Props) => (
    <Dialog
        open={props.dialogData.open}
        onClose={handleRequestClose(props.closeDialog)}>
        <DialogTitle>{'Add Timeline'}</DialogTitle>
        <DialogContent>
            <div className={props.classes.content}>
                <AccountList
                    accounts={props.accounts}
                    selected={props.dialogData.selectedAccount}
                    selectAccount={props.selectAccount} />
                <Divider />
                <TimelineTypeList
                    selected={props.dialogData.selectedTimelineType}
                    selectTimelineType={props.selectTimelineType} />
            </div>
        </DialogContent>
        <DialogActions>
            <Button
                variant="raised"
                color='primary'
                onClick={handleAddButtonClicked(props.dialogData, props.addTimeline, props.closeDialog)}>
                {'Confirm'}
            </Button>
        </DialogActions>
    </Dialog>
));

export default withStyles(styles)(AddTimelineDialog);
