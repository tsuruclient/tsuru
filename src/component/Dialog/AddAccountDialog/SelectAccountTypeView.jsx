// @flow

import React from 'react';
import {pure} from 'recompose';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List, { ListItem,
    ListItemText,
    ListItemSecondaryAction } from 'material-ui/List';
import { DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from 'material-ui/Dialog';
import Radio from 'material-ui/Radio';

import instances from '../../../core/constant/_instanceList';

const styles = () => ({
    list: {
        maxHeight: 320,
        overflowY: 'auto',
    }
});

type Props = {
    classes: Object,
    selected: number,
    selectInstance: Function,
    forwardInputSection: Function,
    forwardPinAuthSection: Function,
    openPinAuthWindow: Function,
};

const handleClickForwardButton = (props: Props): Function => (
    () => {
        if(props.selected <= 1) { // 1以下はcommon扱い…
            props.forwardInputSection();
        }else{
            props.openPinAuthWindow(instances[Object.keys(instances)[props.selected]]);
            props.forwardPinAuthSection();
        }
    }
);

const handleItemSelected = (index: number, select: Function): Function => (
    () => (select({selected: index}))
);

const SelectAccountTypeView = pure((props: Props) => (
    <div>
        <DialogContent>
            <DialogContentText>
                {'Twitter, GNU Social, Mastodonのアカウントを最大16個まで追加できます'}
            </DialogContentText>
            <List className={props.classes.list}>
                {Object.keys(instances).map((item, index)=>(
                    <ListItem
                        key={index}
                        button
                        onClick={handleItemSelected(index, props.selectInstance)}>
                        <ListItemText
                            primary={item}
                            secondary={instances[item].common ? 'ConsumerKeyを発行し用意してください' : 'PIN認証を行います'} />
                        <ListItemSecondaryAction>
                            <Radio checked={index === props.selected} />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </DialogContent>
        <DialogActions>
            <Button variant="raised" onClick={handleClickForwardButton(props)}>
                {'そうですか'}
            </Button>
        </DialogActions>
    </div>
))

export default withStyles(styles)(SelectAccountTypeView);
