// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import Timeline from './Column';

import timelineTypes from '../../core/constant/timelineType';

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "nowrap",
        height: "100%",
        overflowX: "auto"
    }
});

type Props = {
    classes: Object,
    timelines: Array<Object>,
    ownerInfo: Function,
    isStreaming: Function,
    contents: Function,
    latestContentId: Function,
    contentBoxText: Function,
    updateContentText: Function,
    setTimelineMenu: Function,
    setReply: Function,
    callApi: Function,
    deleteTimeline: Function,
    setScrollPosition: Function,
};

const TimelineView = pure((props: Props) => (
    <div className={props.classes.root}>
            {props.timelines.map((item: Object, index: number): any => (
                <Timeline
                    key={index}
                    timeline={item}
                    timelineIndex={index}
                    ownerInfo={props.ownerInfo(item.ownerIndex)}
                    isStreaming={props.isStreaming(item.ownerIndex)}
                    contentFormContent={props.contentBoxText(index)}
                    contents={props.contents(item.ownerIndex, index, timelineTypes[item.timelineType].dataname)}
                    setTimelineMenu={props.setTimelineMenu}
                    latestContentId={props.latestContentId(item.ownerIndex, timelineTypes[item.timelineType].dataname)}
                    updateContentText={props.updateContentText}
                    setReply={props.setReply}
                    callApi={props.callApi}
                    deleteTimeline={props.deleteTimeline}
                    setScrollPosition={props.setScrollPosition}/>
        ))}
    </div>
));

export default withStyles(styles)(TimelineView);
