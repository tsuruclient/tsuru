// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import Timeline from './Timeline';

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
    contents: Function,
    contentBoxText: Function,
    updateContentText: Function,
    setTimelineMenu: Function,
    callApi: Function,
    deleteTimeline: Function,
};

const TimelineView = pure((props: Props) => (
    <div className={props.classes.root}>
            {props.timelines.map((item: Object, index: number): any => (
                <Timeline
                    key={index}
                    timeline={item}
                    timelineIndex={index}
                    ownerInfo={props.ownerInfo(item.ownerIndex)}
                    contentFormContent={props.contentBoxText(index)}
                    contents={props.contents(item.ownerIndex, timelineTypes[item.timelineType].dataname)}
                    setTimelineMenu={props.setTimelineMenu}
                    updateContentText={props.updateContentText}
                    callApi={props.callApi}
                    deleteTimeline={props.deleteTimeline}/>
        ))}
    </div>
));

export default withStyles(styles)(TimelineView);
