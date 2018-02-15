// @flow
import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import Icon from '../Parts/Icon';
import Buttons from '../Parts/Buttons';
import Divider from 'material-ui/Divider'

import CommonItem from './Common';
import RetweetedItem from './Retweeted';

import type Content from '../../../../../core/value/Content'
import {Normal, Reply, Retweeted} from '../../../../../core/value/Content';

const styles = theme => ({
    root: {
        wordWrap : 'break-word',
        overflowWrap: 'break-word',
    }
});

type Props = {
    classes: Object,
    style: any,
    measure: Function,
    service: string,
    timelineIndex: number,
    ownerIndex: number,
    data: Content,
    callApi: Function,
    setReply: Function,
};

const selectComponent = (data: Content) => {
    switch (data.type) {
        case Normal:
        case Reply:
            return (<CommonItem data={data} />);
        case Retweeted:
            return (<RetweetedItem data={data} />);
        default:
            return (<CommonItem data={data} />);
    }
}

const NormalContent = pure((props: Props) => (
    <div className={props.classes.root} style={props.style} onLoad={props.measure}>
        {selectComponent(props.data)}
        <Buttons
            service={props.service}
            timelineIndex={props.timelineIndex}
            ownerIndex={props.ownerIndex}
            data={props.data}
            callApi={props.callApi}
            setReply={props.setReply} />
        <Divider />
    </div>
));

export default withStyles(styles)(NormalContent);
