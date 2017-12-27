// @flow
import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

import ReplyIcon from 'material-ui-icons/Reply';
import DeleteIcon from 'material-ui-icons/Delete';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: '6px',
        padding: '4px'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
    },
    removeButton: {
        padding: '4px',
    },
    replyIcon: {
        fill: "#69B4F1",
        margin: '4px',
    },
    body: {

    }
});

type Props = {
    classes: Object,
    tlIndex: number,
    data: Object,
    setReply: Function,
};

const handleDelete = (tlIndex: number, setReply: Function): Function => () => (
    setReply({timelineIndex: tlIndex, target: null})
);

const ReplySource = pure((props: Props) => (
    <Paper className={props.classes.root}>
        <div className={props.classes.header}>
            <ReplyIcon className={props.classes.replyIcon} />
            <Chip
                label={props.data.user.screenName}
                avatar={<Avatar src={props.data.user.avatar} />}/>
            <ButtonBase
                className={props.classes.removeButton}
                onClick={handleDelete(props.tlIndex, props.setReply)}>
                <DeleteIcon />
            </ButtonBase>
        </div>
        <div className={props.classes.body}>
            <Typography>{props.data.content}</Typography>
        </div>
    </Paper>
));

export default withStyles(styles)(ReplySource);
