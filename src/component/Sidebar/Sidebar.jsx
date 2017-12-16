// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

import SettingsIcon from 'material-ui-icons/Settings';
import AddBoxIcon from 'material-ui-icons/AddBox';
import PersonAddIcon from 'material-ui-icons/PersonAdd';

const styles = theme => ({
    root: {
        margin: "3px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    accountSection: {
        display: "flex",
        flexDirection: "column",
        overflowY: "auto"
    }
});

type Props = {
    classes: Object
};

const Sidebar = (props: Props) => (
    <Paper className={props.classes.root}>
        <IconButton aria-label="Add Timeline">
            <AddBoxIcon/>
        </IconButton>
        <div className={props.classes.accountSection}>
            <div>
                <IconButton
                    aria-label="Add Account">
                    <PersonAddIcon/>
                </IconButton>
            </div>
        </div>
        <IconButton aria-label="General Setting">
            <SettingsIcon/>
        </IconButton>
</Paper>
)

export default withStyles(styles)(Sidebar);