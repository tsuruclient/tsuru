// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';


import SettingsIcon from 'material-ui-icons/Settings';
import AddBoxIcon from 'material-ui-icons/AddBox';
import PersonAddIcon from 'material-ui-icons/PersonAdd';

import AccountList from './AccountList';

import * as DialogNames from '../../redux/constant/dialogs';

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
    },
    tooltip: {
        fontSize: 16,
        padding: "6px 12px"
    },
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
    openDialog: Function,
    logout: Function,
    callApi: Function,
    connectStream: Function,
};

const openAddTimelineDialog = (openDialog: Function): Function => (
    () => openDialog({dialogName: DialogNames.AddTimelineDialogName})
);

const openAddAccountDialog = (openDialog: Function): Function => (
    () => openDialog({dialogName: DialogNames.AddAccountDialogName})
);

const openSettingDialog = (openDialog: Function): Function => (
    () => console.warn('まだないよ')
);

const Sidebar = pure((props: Props) => (
    <Paper className={props.classes.root}>
        {
            props.accounts.length === 0 ?
                <Tooltip
                    id={'add-tmeline-tooltip'}
                    title={'先にアカウントを追加してください'}
                    placement="right"
                    classes={{tooltip: props.classes.tooltip}}>
                    <IconButton
                        aria-label="Add Timeline"
                        onClick={null}
                        disableRipple>
                        <AddBoxIcon/>
                    </IconButton>
                </Tooltip> :
                <IconButton
                    aria-label="Add Timeline"
                    onClick={openAddTimelineDialog(props.openDialog)}>
                    <AddBoxIcon/>
                </IconButton>
        }
        <div className={props.classes.accountSection}>
            <AccountList
                accounts={props.accounts}
                logout={props.logout}
                callApi={props.callApi}
                connectStream={props.connectStream}/>
            <IconButton
                aria-label="Add Account"
                onClick={openAddAccountDialog(props.openDialog)}>
                <PersonAddIcon/>
            </IconButton>
        </div>
        <IconButton
            aria-label="General Setting"
            onClick={openSettingDialog(props.openDialog)}>
            <SettingsIcon/>
        </IconButton>
    </Paper>
));

export default withStyles(styles)(Sidebar);
