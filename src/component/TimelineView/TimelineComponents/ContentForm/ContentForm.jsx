// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import ContentField from './ContentField';
import SendButton from './SendButton';

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
    service: string,
    contentFormContent: Object,
    updateContentText: Function,
};

const ContentForm = pure((props: Props) => (
    <div className={props.classes.root}>
        <ContentField
            timelineIndex={props.timelineIndex}
            service={props.service}
            contentFormContent={props.contentFormContent}
            updateContentText={props.updateContentText} />
        <SendButton />
    </div>
));

export default withStyles(styles)(ContentForm);
