
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
    isStreaming: boolean,
    contents: Array<any>,
    latestContentId: ?string,
    contentFormContent: Object,
    setTimelineMenu: Function,
    updateContentText: Function,
    setReply: Function,
    callApi: Function,
    deleteTimeline: Function,
    setScrollPosition: Function,
};

const Timeline = pure((props: Props) => (
    <Paper className={props.classes.root}>
        <InfoBar
            timelineIndex={props.timelineIndex}
            timeline={props.timeline}
            ownerInfo={props.ownerInfo}
            isStreaming={props.isStreaming}
            latestContentId={props.latestContentId}
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
            replySource={props.timeline.replySource}
            updateContentText={props.updateContentText}
            setReply={props.setReply}
            callApi={props.callApi} />
        <ContentList
            service={props.ownerInfo.service}
            timelineIndex={props.timelineIndex}
            ownerIndex={props.timeline.ownerIndex}
            isScrolled={!!props.timeline.latestContentLength}
            callApi={props.callApi}
            setReply={props.setReply}
            contents={props.contents}
            setScrollPosition={props.setScrollPosition}/>
    </Paper>
));

export default withStyles(styles)(Timeline);
