// @flow

import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

import * as apis from '../../../../core/difference/api';

const styles = theme => ({

});

type Props = {
    classes: Object,
    timeline: Object,
    timelineIndex: number,
    services: string,
    open: boolean,
    anchorEl: Object,
    setTimelineMenu: Function,
    callApi: Function,
};

const handleOpenMenuClicked = (timelineIndex: number, isOpen: boolean, event: Object, setTimelineMenu: Function) => {
    setTimelineMenu({timelineIndex, anchorEl: isOpen ? null : event.currentTarget });
}

const handleRequestClose = (timelineIndex: number, setTimelineMenu: Function) => {
    setTimelineMenu({timelineIndex, anchorEl: null});
}

const callApi = (props: Props): Function => (() => {
    const apidata = apis.get.statuses.home_timeline(props.services);
    props.callApi({
        accountIndex: props.timeline.ownerIndex,
        timelineIndex: props.timelineIndex,
        apidata: apidata,
        payload: {},
    })
});

const TimelineMenu = pure((props: Props) => (
    <div>
        <IconButton onClick={event => handleOpenMenuClicked(props.timelineIndex, props.open, event, props.setTimelineMenu)}>
            <MenuIcon/>
        </IconButton>
        <Menu
            id='timeline-menu'
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={() => handleRequestClose(props.timelineIndex, props.setTimelineMenu)}>
            <MenuItem onClick={callApi(props)}>{'Update'}</MenuItem>
            <MenuItem>{'Timeline Option'}</MenuItem>
            <Divider />
            <MenuItem>{'Delete Timeline'}</MenuItem>
        </Menu>
    </div>
));

export default withStyles(styles)(TimelineMenu);
