// @flow

import React from 'react';
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
};

const Dialog = (props: Props) => (
    <div>
        <AddTimelineDialog
            accounts={props.accounts}
            dialogData={props.addTimelineDialog}
            closeDialog={props.closeDialog}
            selectAccount={props.createTl_selectAccount}
            selectTimelineType={props.createTl_selectTimelineType} />
        <AddAccountDialog 
            dialogData={props.addAccountDialog}
            closeDialog={props.closeDialog} />
    </div>
);

export default withStyles(styles)(Dialog);
