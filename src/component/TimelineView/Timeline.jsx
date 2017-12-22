
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
};

const Timeline = pure((props: Props) => (
    <Paper className={props.classes.root}>
        <InfoBar
            timelineIndex={props.timelineIndex}
            timelineName={props.timeline.timelineType}
            ownerInfo={props.ownerInfo}
            inProgress={props.timeline.inProgress}
            menuOpen={props.timeline.menuOpen}
            anchorEl={props.timeline.anchorEl}
            setTimelineMenu={props.setTimelineMenu} />
        <ContentForm
            timelineIndex={props.timelineIndex}
            service={props.ownerInfo.service}
            contentFormContent={props.contentFormContent}
            updateContentText={props.updateContentText} />
        <ContentList
            service={props.ownerInfo.service}
            contents={props.contents} />
    </Paper>
));

export default withStyles(styles)(Timeline);
