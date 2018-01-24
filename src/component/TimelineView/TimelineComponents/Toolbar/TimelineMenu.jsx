// @flow

import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

import timelineTypes from '../../../../core/constant/timelineType';

const styles = theme => ({
    divider: {
        margin: '12px 0px',
    },
});

type Props = {
    classes: Object,
    timeline: Object,
    timelineIndex: number,
    services: string,
    latestContentId: ?string,
    open: boolean,
    anchorEl: Object,
    setTimelineMenu: Function,
    callApi: Function,
    deleteTimeline: Function,
};

const handleOpenMenuClicked = (timelineIndex: number, isOpen: boolean, setTimelineMenu: Function): Function => ((event: Object) => {
    setTimelineMenu({timelineIndex, anchorEl: isOpen ? null : event.currentTarget });
});

const handleRequestClose = (timelineIndex: number, setTimelineMenu: Function): Function => ((event: Object) => {
    setTimelineMenu({timelineIndex, anchorEl: null});
});

const callApi = (props: Props): Function => (() => {
    const apidata = timelineTypes[props.timeline.timelineType].api.get(props.services, 100, props.latestContentId);
    props.callApi({
        accountIndex: props.timeline.ownerIndex,
        timelineIndex: props.timelineIndex,
        apidata,
        payload: {},
    });
    props.setTimelineMenu({timelineIndex: props.timelineIndex, anchorEl: null});
});

const handleDeleteTimeline = (timelineIndex: number, deleteTimeline: Function) => () => (
    deleteTimeline({timelineIndex})
);

const TimelineMenu = pure((props: Props) => (
    <div>
        <IconButton onClick={handleOpenMenuClicked(props.timelineIndex, props.open, props.setTimelineMenu)}>
            <MenuIcon/>
        </IconButton>
        <Menu
            id='timeline-menu'
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={handleRequestClose(props.timelineIndex, props.setTimelineMenu)} >
                <MenuItem onClick={callApi(props)}>{'Update'}</MenuItem>
                <MenuItem>{'Timeline Option'}</MenuItem>
                <Divider className={props.classes.divider} />
                <MenuItem onClick={handleDeleteTimeline(props.timelineIndex, props.deleteTimeline)}>{'Delete Timeline'}</MenuItem>
        </Menu>
    </div>
));

export default withStyles(styles)(TimelineMenu);
