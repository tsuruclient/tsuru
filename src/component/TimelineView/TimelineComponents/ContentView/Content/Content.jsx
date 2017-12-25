// @flow
import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider'

import Icon from '../Parts/Icon';
import Buttons from '../Parts/Buttons';

import CommonItem from './Common';
import ReplyItem from './Reply';
import RetweetedItem from './Retweeted';

import type Content from '../../../../../core/value/Content'
import {Normal, Reply, Retweeted} from '../../../../../core/value/Content';

const styles = theme => ({
});

type Props = {
    classes: Object,
    data: Content,
};

const NormalContent = pure((props: Props) => {
    switch (props.data.type) {
    case Normal:
        return (<CommonItem data={props.data} />);
    case Reply:
        return (<ReplyItem data={props.data} />);
    case Retweeted:
        return (<RetweetedItem data={props.data} />);
    default:
        return (<CommonItem data={props.data} />);
    }
});

export default withStyles(styles)(NormalContent);
