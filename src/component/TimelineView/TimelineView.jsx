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
};

const TimelineView = (props: Props) => (
    <div className={props.classes.root}>
        {props.timelines.map((item: Object, index: number): any => (
            <Timeline
                key={index}
                timeline={item}
                index={index}
                setTimelineMenu={props.setTimelineMenu}
                contentBoxText={props.contentBoxText}
                updateContentText={props.updateContentText}/>
        ))}
    </div>
);

export default withStyles(styles)(TimelineView);
