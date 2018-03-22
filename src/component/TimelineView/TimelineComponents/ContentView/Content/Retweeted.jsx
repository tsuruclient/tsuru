// @flow

import React from 'react'
import {pure} from 'recompose';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Icon from '../Parts/Icon';
import RepeatIcon from 'material-ui-icons/Repeat';

import type Content from '../../../../../core/view/value/Content'

const style = (theme: Object): Object => ({
    root: {
    },
    header: {
        display: 'flex',
        margin: '2px 0px 0px 48px',
    },
    repeatIcon: {
        width: '20px',
        height: '20px',
        fill: '#4EBD67',
        margin: '0px 4px'
    },
    body: {
        padding: 5,
        paddingLeft: 53,
    }
});

type Props = {
    classes: Object,
    data: Content,
};

const Retweeted = pure((props: Props) => (
    <div className={props.classes.root}>
        <span className={props.classes.header}>
            <RepeatIcon className={props.classes.repeatIcon} />
            <Typography variant="body1">{props.data.user.screenName + ' retweeted'}</Typography>
        </span>
        <div className={props.classes.body}>
            <Icon src={props.data.target.user.avatar}/>
            <Typography variant="caption">{props.data.target.user.displayName + "@"+ props.data.target.user.screenName}</Typography>
            <Typography variant="body1">{props.data.target.content}</Typography>
        </div>
    </div>
));

export default withStyles(style)(Retweeted);
