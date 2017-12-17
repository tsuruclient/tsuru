// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';

import Timeline from './Timeline';

type Props = {
    classes: Object,
    timelines: Array<Object>,
};

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "nowrap",
        height: "100%",
        overflowX: "auto"
    }
})

const TimelineView = (props: Props) => (
    <div className={props.classes.root}>
        {props.timelines.map((item: Object, index: number): any => (
            <Timeline key={index} timeline={item} />
        ))}
    </div>
);

export default withStyles(styles)(TimelineView);
