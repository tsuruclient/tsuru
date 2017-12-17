// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

import AccountIcon from './AccountIcon';

const styles = theme => ({
    root: {

    }
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
};

const AccountList = (props: Props) => {
    return props.accounts.map((item, index) => (
        <AccountIcon key={index} data={item.userdata} />
    ));
}

export default withStyles(styles)(AccountList);
