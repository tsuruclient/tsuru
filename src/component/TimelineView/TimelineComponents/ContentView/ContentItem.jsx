// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Icon from './Icon';

import type Content from '../../../../core/value/Content'

const styles = theme => ({
    root: {
        paddingBottom: '4px',
    },
    body: {
        padding: 5,
        paddingLeft: 53,
    },
});

type Props = {
    classes: Object,
    data: Content,
};

const ContentItem = (props: Props) => (
    <div className={props.classes.root}>
        <div className={props.classes.body}>
            <Icon src={props.data.user.avatar}/>
            <Typography type="caption">{props.data.user.displayName + "@"+ props.data.user.screenName}</Typography>
            <Typography type="body1">{props.data.content}</Typography>
        </div>
    </div>
);

export default withStyles(styles)(ContentItem);
