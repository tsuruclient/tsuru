
import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import InfoBar from './TimelineComponents/Toolbar/InfoBar';
import ContentForm from './TimelineComponents/ContentForm/ContentForm';
import ContentList from './TimelineComponents/ContentView/ContentList';

const styles = theme => ({
    root: {
        margin: 3,
        width: 320,
        minWidth: 320,
        maxWidth: 320,
        height: "calc(100% - 6px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'flex-start',
    }
})

type Props = {
    classes: Object,
    timeline: Object,
    timelineIndex: number,
    ownerInfo: Object,
    contents: Array<any>,
    contentFormContent: Object,
    setTimelineMenu: Function,
    updateContentText: Function,
    callApi: Function,
    deleteTimeline: Function,
};

const Timeline = pure((props: Props) => (
    <Paper className={props.classes.root}>
        <InfoBar
            timelineIndex={props.timelineIndex}
            timeline={props.timeline}
            ownerInfo={props.ownerInfo}
            menuOpen={props.timeline.menuOpen}
            anchorEl={props.timeline.anchorEl}
            setTimelineMenu={props.setTimelineMenu}
            callApi={props.callApi}
            deleteTimeline={props.deleteTimeline} />
        <ContentForm
            timelineIndex={props.timelineIndex}
            service={props.ownerInfo.service}
            contentFormContent={props.contentFormContent}
            timelineType={props.timeline.timelineType}
            ownerIndex={props.timeline.ownerIndex}
            updateContentText={props.updateContentText}
            callApi={props.callApi} />
        <ContentList
            service={props.ownerInfo.service}
            contents={props.contents} />
    </Paper>
));

export default withStyles(styles)(Timeline);
