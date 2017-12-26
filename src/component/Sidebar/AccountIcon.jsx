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
import Menu, { MenuItem } from 'material-ui/Menu';


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
    buttonRoot: {
        overflow: 'hidden',
    },
    button: {
        padding: 0,
        margin: 4
    },
    badge: {
        top: -3,
        right: -3,
    },
    progress: {
        margin: 0,
    }
});

type Props = {
    classes: Object,
    data: ?User,
    domain: string,
}

type State = {
    open: boolean,
    anchorEl: ?Object,
};

class AccountIcon extends React.PureComponent<Props, State> {
    constructor(props: Props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    state = {
        open :false,
        anchorEl: null,
    }

    handleClick = (event: Object) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }

    handleClose = () => {
        this.setState({
            open: false,
            anchorEl: null,
        });
    }

    render(){
        const props = this.props;
        return (
            <div>
                <Tooltip id="tooltip-account-icon"
                title={props.data ? props.domain + "@" + props.data.screenName : 'now loading...'}
                placement="right"
                classes={{
                    tooltip: props.classes.tooltip,
                    tooltipRight: props.classes.tooltipRight,
                    popper: props.classes.popper
                }}>
                    <ButtonBase
                        disableRipple
                        className={props.classes.buttonRoot}
                        classes={{root: props.classes.button}}
                        onClick={this.handleClick} >
                        {props.data ? <Avatar src={props.data.avatar} /> : <CircularProgress className={props.classes.progress} />}
                    </ButtonBase>
                </Tooltip>
                <Menu
                    id="account-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={this.handleClose} >
                <MenuItem onClick={this.handleClose}>Update UserData</MenuItem>
                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu>

            </div>
        )
    }
}

export default withStyles(styles)(AccountIcon);
