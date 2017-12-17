// @flow

import React from 'react';
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
    index: number,
    contentBoxText: Function,
    updateContentText: Function,
};

const ContentForm = (props: Props) => (
    <div className={props.classes.root}>
        <ContentField
            index={props.index}
            contentBoxText={props.contentBoxText}
            updateContentText={props.updateContentText} />
        <SendButton />
    </div>
);

export default withStyles(styles)(ContentForm);
