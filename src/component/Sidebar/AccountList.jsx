// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import AccountIcon from './AccountIcon/AccountIcon';

const styles = theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        overflowX: 'hidden',
        overflowY: "auto",
    }
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
    logout: Function,
    callApi: Function,
};

const AccountList = pure((props: Props) => (
    <div className={props.classes.root}>
        {props.accounts.map((item, index) => (
            <AccountIcon
                key={index}
                accountIndex={index}
                service={item.service}
                data={item.userdata}
                domain={item.client.domain}
                logout={props.logout}
                callApi={props.callApi}/>
        ))}
    </div>
));

export default withStyles(styles)(AccountList);
