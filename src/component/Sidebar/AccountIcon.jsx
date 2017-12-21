// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import ButtonBase from 'material-ui/ButtonBase';
import Avatar from 'material-ui/Avatar';
import Tooltip from 'material-ui/Tooltip';
import Badge from 'material-ui/Badge';
import Popover from 'material-ui/Popover';
import Typography from 'material-ui/Typography';
import { CircularProgress } from 'material-ui/Progress';


import type User from '../../core/value/User';

const styles = theme => ({
    tooltip: {
        fontSize: 16,
        padding: "6px 12px"
    },
    tooltipRight: {
        marginLeft: 12,
    },
    popper: {
        marginLeft: 42
    },
    button: {
        padding: 0,
        margin: 4
    },
    badge: {
        top: -3,
        right: -3,
    }
});

type Props = {
    classes: Object,
    data: User
}

const AccountIcon = pure((props: Props) => (
    <Tooltip id="tooltip-account-icon"
        title={"@" + props.data.screenName}
        placement="right"
        classes={{
            tooltip: props.classes.tooltip,
            tooltipRight: props.classes.tooltipRight,
            popper: props.classes.popper
        }}>
        <ButtonBase disableRipple classes={{root: props.classes.button}}>
            {props.data.avatar ? <Avatar src={props.data.avatar} /> : <CircularProgress />}
        </ButtonBase>
    </Tooltip>
));

export default withStyles(styles)(AccountIcon);
