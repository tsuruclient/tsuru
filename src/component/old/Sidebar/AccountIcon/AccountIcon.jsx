// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Menu, { MenuItem } from 'material-ui/Menu';

import type User from '../../../../core/old/value/User';
import * as apis from '../../../../core/old/difference/api';
import streamingApi, {mastodonStreamingTypes} from '../../../../core/old/difference/streaming_api';

import Icon from './Icon';

const styles = theme => ({
    badge: {
        top: -3,
        right: -3,
    },
    menu: {
        marginLeft: '44px',
        marginTop: '48px',
    },
    divider: {
        margin: '12px 0px',
    },
});

type Props = {
    classes: Object,
    accountIndex: number,
    data: ?User,
    domain: string,
    service: string,
    isStreaming: boolean,
    logout: Function,
    callApi: Function,
    connectStream: Function,
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
        this.handleUpdateUserdataClick = this.handleUpdateUserdataClick.bind(this);
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

    handleUpdateUserdataClick = () => {
        const apidata = apis.get.account.verify_credentials(this.props.service);
        this.props.callApi({
            accountIndex: this.props.accountIndex,
            timelineIndex: undefined,
            apidata,
            payload: {},
        });
        this.handleClose();
    }

    handleConnectStreamClick = () => {
        const apidata = streamingApi(this.props.service, {
            domain: this.props.domain,
            stream: mastodonStreamingTypes.user_timeline,
        });
        this.props.connectStream({
            apidata,
            accountIndex: this.props.accountIndex,
        });
        this.handleClose();
    }

    handleLogoutClick = () => {
        this.props.logout({accountIndex: this.props.accountIndex});
        this.handleClose();
    }

    render() {
        const props = this.props;
        return (
            <div>
                <Icon
                    data={props.data}
                    domain={props.domain}
                    handleClick={this.handleClick}/>
                <Menu
                    className={props.classes.menu}
                    id="account-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={this.handleClose}>
                    <MenuItem onClick={this.handleUpdateUserdataClick}>{'Update UserData'}</MenuItem>
                    <MenuItem
                        onClick={this.handleConnectStreamClick}
                        disabled={props.isStreaming}>{props.isStreaming ? 'Now Streaming...' : 'Connect Streaming'}</MenuItem>
                    <Divider className={props.classes.divider} />
                    <MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default withStyles(styles)(AccountIcon);
