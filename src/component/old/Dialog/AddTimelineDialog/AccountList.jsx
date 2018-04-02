// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Radio from 'material-ui/Radio';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
    root: {
        maxHeight: '320px',
        overflowY: 'auto',
    }
});

type Props = {
    classes: Object,
    accounts: Array<Object>,
    selected: number,
    selectAccount: Function,
};

const handleItemClick = (index: number, selectAccount: Function) => (
    () => selectAccount({selectedAccount: index}));

const AccountList = pure((props: Props) => (
    <List className={props.classes.root}>
        {props.accounts.map((item, index) => (
            <ListItem
                key={index}
                button
                onClick={handleItemClick(index, props.selectAccount)}>
                <Avatar src={item.userData.avatar} />
                <ListItemText primary={item.userData.screenName} />
                <ListItemSecondaryAction>
                    <Radio checked={index === props.selected}/>
                </ListItemSecondaryAction>
            </ListItem>
        ))}
    </List>
));

export default withStyles(styles)(AccountList);
