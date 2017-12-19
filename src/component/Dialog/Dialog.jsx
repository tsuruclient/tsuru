// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import AddTimelineDialog from './AddTimelineDialog/AddTimelineDialog';

const styles = theme => ({
    root: {

    }
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
    addAccountDialog: Object,
};

const Dialog = (props: Props) => (
    <div>
        <AddTimelineDialog
        accounts={props.accounts}
        dialogData={props.addAccountDialog} />
    </div>
);

export default withStyles(styles)(Dialog);
