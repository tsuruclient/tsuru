// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import AddTimelineDialog from './AddTimelineDialog/AddTimelineDialog';
import AddAccountDialog from './AddAccountDialog/AddAccountDialog';

const styles = theme => ({
    root: {

    }
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
    addAccountDialog: Object,
    addTimelineDialog: Object,
    closeDialog: Function,
    createTl_selectAccount: Function,
    createTl_selectTimelineType: Function,
    createTl_addTimeline: Function,
    createAc_SelectInstance: Function,
    createAc_ForwardInputSection: Function,
    createAc_ForwardPinAuthSection: Function,
    createAc_BackSection: Function,
    createAc_openPinAuthWindow: Function,
    createAc_startAuth: Function,
};

const Dialog = pure((props: Props) => (
    <div>
        <AddTimelineDialog
            accounts={props.accounts}
            dialogData={props.addTimelineDialog}
            closeDialog={props.closeDialog}
            selectAccount={props.createTl_selectAccount}
            selectTimelineType={props.createTl_selectTimelineType}
            addTimeline={props.createTl_addTimeline} />
        <AddAccountDialog 
            dialogData={props.addAccountDialog}
            closeDialog={props.closeDialog}
            selectInstance={props.createAc_SelectInstance}
            forwardInputSection={props.createAc_ForwardInputSection}
            forwardPinAuthSection={props.createAc_ForwardPinAuthSection}
            backSection={props.createAc_BackSection}
            openPinAuthWindow={props.createAc_openPinAuthWindow}
            startAuth={props.createAc_startAuth} />
    </div>
));

export default withStyles(styles)(Dialog);
