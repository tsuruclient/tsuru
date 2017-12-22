// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

import AccountIcon from './AccountIcon';

const styles = theme => ({
    root: {
        overflowX: 'hidden',
    }
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
};

const AccountList = (props: Props) => (
    <div className={props.classes.root}>
        {props.accounts.map((item, index) => (
            <AccountIcon key={index} data={item.userdata} domain={item.client.domain} />
        ))}
    </div>
);

export default withStyles(styles)(AccountList);
