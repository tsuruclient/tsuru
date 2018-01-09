// @flow

import React from 'react';
import {onlyUpdateForKeys} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Divider from 'material-ui/Divider'

import ContentObject from '../../../../core/value/Content';

import Content from './Content/Content';
import Event from './Content/Notification';

const styles = theme => ({
    root: {
        overflowY: 'auto'
    }
});

type Props = {
    classes: Object,
    timelineIndex: number,
    ownerIndex: number,
    service: string,
    contents: Array<any>,
    callApi: Function,
    setReply: Function,
};

const ContentList = onlyUpdateForKeys(['contents'])((props: Props) => (
    <div className={props.classes.root}>
        {props.contents.map((item, index) => (
            item instanceof ContentObject ?
                <div key={index}>
                    <Content
                        service={props.service}
                        timelineIndex={props.timelineIndex}
                        ownerIndex={props.ownerIndex}
                        data={item}
                        callApi={props.callApi}
                        setReply={props.setReply} />
                    <Divider />
                </div>:
                <div key={index}>
                    <Event data={item} />
                    <Divider />
                </div>
        ))}
    </div>
));

export default withStyles(styles)(ContentList);
