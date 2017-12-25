// @flow
import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Icon from '../Parts/Icon';
import Buttons from '../Parts/Buttons';

import type Content from '../../../../../core/value/Content'

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

const Common = pure((props: Props) => (
    <div className={props.classes.body}>
        <Icon src={props.data.user.avatar}/>
        <Typography type="caption">{props.data.user.displayName + "@"+ props.data.user.screenName}</Typography>
        <Typography type="body1">{props.data.content}</Typography>
        <Buttons />
    </div>
));

export default withStyles(styles)(Common);
