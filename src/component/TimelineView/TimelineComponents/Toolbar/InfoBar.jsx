// @flow

import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';

import Title from './Title';
import TimelineMenu from './TimelineMenu';
import ProgressBar from './ProgressBar';

const styles = theme => ({

});

type Props = {
    classes: Object,
    timelineIndex: number,
    timeline: Object,
    ownerInfo: Object,
    inProgress: boolean,
    menuOpen: boolean,
    anchorEl: Object,
    setTimelineMenu: Function,
    callApi: Function,
};

const InfoBar = pure((props: Props) => (
    <div>
        <Toolbar>
            <div style={{marginRight: 'auto'}}>
                <Title
                    timelineName={props.timeline.timelineType}
                    ownerInfo={props.ownerInfo} />
            </div>
            <div style={{marginLeft: 'auto'}}>
                <TimelineMenu
                    timelineIndex={props.timelineIndex}
                    timeline={props.timeline}
                    open={props.menuOpen}
                    anchorEl={props.anchorEl}
                    setTimelineMenu={props.setTimelineMenu}
                    callApi={props.callApi}
                    services={props.ownerInfo.service} />
            </div>
        </Toolbar>
        <ProgressBar inProgress={props.inProgress} />
    </div>
));

export default withStyles(styles)(InfoBar);
