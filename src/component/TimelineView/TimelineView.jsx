// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import Timeline from './Timeline';

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
    contentBoxText: Function,
    updateContentText: Function,
    setTimelineMenu: Function,
    service: Function,
    contents: Function,
};

const TimelineView = (props: Props) => (
    <div className={props.classes.root}>
            {props.timelines.map((item: Object, index: number): any => (
            <Timeline
                key={index}
                timeline={item}
                timelineIndex={index}
                service={props.service(item.ownerIndex)}
                contentFormContent={props.contentBoxText(index)}
                contents={props.contents(item.ownerIndex, item.timelineType)}
                setTimelineMenu={props.setTimelineMenu}
                updateContentText={props.updateContentText}/>
        ))}
    </div>
);

export default withStyles(styles)(TimelineView);
