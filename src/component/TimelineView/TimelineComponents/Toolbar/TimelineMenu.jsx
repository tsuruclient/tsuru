// @flow

import React from 'react'
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({

});

type Props = {
    classes: Object,
    timelineIndex: number,
    open: boolean,
    anchorEl: Object,
    setTimelineMenu: Function,
};

const handleButtonClick = (timelineIndex: number, isOpen: boolean, event: Object, setTimelineMenu: Function) => {
    setTimelineMenu({timelineIndex, anchorEl: isOpen ? null : event.currentTarget });
}

const handleRequestClose = (timelineIndex: number, setTimelineMenu: Function) => {
    setTimelineMenu({timelineIndex, anchorEl: null});
}

const TimelineMenu = pure((props: Props) => (
    <div>
        <IconButton onClick={event => handleButtonClick(props.timelineIndex, props.open, event, props.setTimelineMenu)}>
            <MenuIcon/>
        </IconButton>
        <Menu
            id='timeline-menu'
            anchorEl={props.anchorEl}
            open={props.open}
            onRequestClose={() => handleRequestClose(props.timelineIndex, props.setTimelineMenu)}>
            <MenuItem>{'Update'}</MenuItem>
            <MenuItem>{'Timeline Option'}</MenuItem>
            <Divider />
            <MenuItem>{'Delete Timeline'}</MenuItem>
        </Menu>
    </div>
));

export default withStyles(styles)(TimelineMenu);
