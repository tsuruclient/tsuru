// @flow
import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import ButtonBase from 'material-ui/ButtonBase';
import Tooltip from 'material-ui/Tooltip';
import Avatar from 'material-ui/Avatar';
import { CircularProgress } from 'material-ui/Progress';

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
    buttonRoot: {
        overflow: 'hidden',
    },
    button: {
        padding: 0,
        margin: 4
    },
    progress: {
        margin: 0,
    }
});

type Props = {
    classes: Object,
    data: ?Object,
    domain: string,
    handleClick: Function,
};

const Icon = pure((props: Props) => (
    <Tooltip
        id="tooltip-account-icon"
        title={props.data ? props.domain + "@" + props.data.screenName : 'now loading...'}
        placement="right"
        disableTriggerTouch={true}
        disableTriggerFocus={true}
        classes={{
            tooltip: props.classes.tooltip,
            tooltipRight: props.classes.tooltipRight,
            popper: props.classes.popper }}>
        <ButtonBase
            disableRipple
            className={props.classes.buttonRoot}
            classes={{root: props.classes.button}}
            onClick={props.handleClick} >
            {props.data ?
                <Avatar src={props.data.avatar} /> :
                <CircularProgress className={props.classes.progress} />}
        </ButtonBase>
    </Tooltip>
));

export default withStyles(styles)(Icon);
