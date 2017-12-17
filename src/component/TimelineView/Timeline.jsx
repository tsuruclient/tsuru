
import React from 'react';
import {withStyles} from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import InfoBar from './TimelineComponents/Toolbar/InfoBar';
import ContentForm from './TimelineComponents/ContentForm/ContentForm';

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
    index: number,
    service: Function,
    setTimelineMenu: Function,
    contentBoxText: Function,
    updateContentText: Function,
};

const Timeline = (props: Props) => (
    <Paper className={props.classes.root}>
        <InfoBar
            timelineIndex={props.index}
            inProgress={props.timeline.inProgress}
            menuOpen={props.timeline.menuOpen}
            anchorEl={props.timeline.anchorEl}
            setTimelineMenu={props.setTimelineMenu}/>
        <ContentForm
            index={props.index}
            service={props.service(props.index)}
            contentBoxText={props.contentBoxText}
            updateContentText={props.updateContentText} />
    </Paper>
)

export default withStyles(styles)(Timeline);
