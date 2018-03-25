// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Divider from 'material-ui/Divider';

import ContentField from './ContentField';
import SendButton from './SendButton';
import ReplySource from './ReplySource';

const styles = theme => ({
	root: {
        flexShrink: '0',
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'flex-end',
        marginLeft: '4px',
        marginBottom: '4px',
        minHeight:'49px'
	},
});

type Props = {
    classes: Object,
    timelineIndex: number,
    ownerIndex: number,
    timelineType: string,
    service: string,
    contentFormContent: Object,
    replySource: ?Object,
    updateContentText: Function,
    setReply: Function,
    callApi: Function,
};


const ContentForm = pure((props: Props) => (
    <div>
        <div className={props.classes.root}>
            <ContentField
                timelineIndex={props.timelineIndex}
                service={props.service}
                contentFormContent={props.contentFormContent}
                updateContentText={props.updateContentText} />
            <SendButton
                service={props.service}
                ownerIndex={props.ownerIndex}
                timelineIndex={props.timelineIndex}
                timelineType={props.timelineType}
                formContent={props.contentFormContent}
                replySource={props.replySource}
                callApi={props.callApi} />
        </div>
        {props.replySource ?
            <ReplySource
                tlIndex={props.timelineIndex}
                data={props.replySource}
                setReply={props.setReply}/>:
            <div></div>}
        <Divider />
    </div>
));

export default withStyles(styles)(ContentForm);
