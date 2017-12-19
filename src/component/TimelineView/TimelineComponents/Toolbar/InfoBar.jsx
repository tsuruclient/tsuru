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
    inProgress: boolean,
    menuOpen: boolean,
    anchorEl: Object,
    setTimelineMenu: Function,
};

const InfoBar = pure((props: Props) => (
    <div>
        <Toolbar>
            <div style={{marginRight: 'auto'}}>
                <Title timelineName={'Hogehgoe'}/>
            </div>
            <div style={{marginLeft: 'auto'}}>
                <TimelineMenu
                    timelineIndex={props.timelineIndex}
                    open={props.menuOpen}
                    anchorEl={props.anchorEl}
                    setTimelineMenu={props.setTimelineMenu}/>
            </div>
        </Toolbar>
        <ProgressBar inProgress={props.inProgress} />
    </div>
));

export default withStyles(styles)(InfoBar);
