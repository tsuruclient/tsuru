// @flow

import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Badge from 'material-ui/Badge';
import Popover from 'material-ui/Popover';
import Typography from 'material-ui/Typography';
import Menu, { MenuItem } from 'material-ui/Menu';

import type User from '../../core/value/User';

import Icon from './Icon';

const styles = theme => ({
    badge: {
        top: -3,
        right: -3,
    },
    menu: {
        marginLeft: '44px',
        marginTop: '48px',
    }
});

type Props = {
    classes: Object,
    accountIndex: number,
    data: ?User,
    domain: string,
    logout: Function,
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
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    state = {
        open :false,
        anchorEl: null,
    }

    handleClick = (event: Object) => {
        this.setState({
            open: !this.state.open,
            anchorEl: event.currentTarget,
        });
    }

    handleClose = () => {
        this.setState({
            open: false,
            anchorEl: null,
        });
    }

    handleLogoutClick = () => {
        this.props.logout({accountIndex: this.props.accountIndex});
        this.handleClose();
    }

    render(){
        const props = this.props;
        return (
            <div>
                <Icon
                    data={props.data}
                    domain={props.domain}
                    handleClick={this.handleClick} />
                <Menu
                    className={props.classes.menu}
                    id="account-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={this.handleClose} >
                    <MenuItem onClick={this.handleClose}>Update UserData</MenuItem>
                    <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(AccountIcon);
