// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui-icons/Send';

import timelineTypes from '../../../../core/constant/timelineType';

const styles = theme => ({
    root: {
        width: 36,
        margin: '0px 2px',
    }
});

type Props = {
    classes: Object,
    service: string,
    ownerIndex: number,
    timelineIndex: number,
    timelineType: string,
    formContent: Object,
    replySource: ?Object,
    callApi: Function,
};

const handleSendButtonClicked = (props: Props): Function => () => {
    const apidata = timelineTypes[props.timelineType].api.post(
        props.service,
        props.replySource ? '@' + props.replySource.user.screenName + ' ' + props.formContent.text : props.formContent.text,
        props.replySource ? props.replySource.id : undefined);
    props.callApi({
        accountIndex: props.ownerIndex,
        timelineIndex: props.timelineIndex,
        apidata,
        payload: {},
    });
};

const SendButton = (props: Props) => (
    <IconButton
        className={props.classes.root}
        onClick={handleSendButtonClicked(props)}
        disabled={props.formContent.inPosting}>
        <SendIcon/>
    </IconButton>
);

export default withStyles(styles)(SendButton);
