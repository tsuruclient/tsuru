// @flow

import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import { DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import instances from '../../../core/constant/instanceList';

const styles = theme => ({
    root: {

    }
});

const errorType = {
    INSTANCENAME: 'INSTANCENAME',
    APIKEY: 'APIKEY',
    APISECRET: 'APISECRET',
};

type Props = {
    classes: Object,
    selected: number,
    forwardPinAuthSection: Function,
    openPinAuthWindow: Function,
};

type State = {
    domain: string,
    consumerKey: string,
    consumerSecret: string,
    err: ?string
};

class InputInstanceView extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleNextButton = this.handleNextButton.bind(this);
    }

    state = {
        domain: '',
        consumerKey: '',
        consumerSecret: '',
        err: null,
    }

    handleNextButton() {
        this.setState({err: null});
        const status = instances[Object.keys(instances)[this.props.selected]];
        console.log(status);
        try{
            if (status.type !== 'Twitter'){
                status.instance = this.state.domain.trim();
                status.apiurl = 'https://' + status.instance + '/';
                if (status.instance === '') throw errorType.INSTANCENAME;
            }
            status.apikey = this.state.consumerKey.trim();
            status.apisecret = this.state.consumerSecret.trim();
            if (status.apikey === '') throw errorType.APIKEY;
            if (status.apisecret === '') throw errorType.APISECRET;

            this.props.openPinAuthWindow(status);
            this.props.forwardPinAuthSection();
        }catch(e){
            this.setState({err: e}); 
        }
    }

    render() {
        return (
            <div>
                <DialogTitle>{'追加したいアカウントの情報を入力してください'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{'consumer-key, consumer-secretはアカウントが登録されているインスタンスから発行されたものを使用する必要があります。インスタンスによっては外部アプリケーション連携が不可能な場合もあります。その場合登録することはできません'}</DialogContentText>
                    <TextField
                        value={this.state.domain}
                        onChange={event => this.setState({domain: event.target.value})}
                        id='api-url'
                        label='Domain Name(example: mstdn.jp, friends.nico)'
                        margin='normal'
                        error={this.state.err === errorType.INSTANCENAME}
                        fullWidth />
                    <TextField
                        value={this.state.consumerKey}
                        onChange={event => this.setState({consumerKey: event.target.value})}
                        id='api-key'
                        label='Consumer Key'
                        margin='normal'
                        error={this.state.err === errorType.APIKEY}
                        fullWidth />
                    <TextField
                        value={this.state.consumerSecret}
                        onChange={event => this.setState({consumerSecret: event.target.value})}
                        id='api-key-secret'
                        label='Consumer Secret'
                        margin='normal'
                        error={this.state.err === errorType.APISECRET}
                        fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button raised onClick={this.handleNextButton}>{'そうですか'}</Button>
                </DialogActions></div>
        );
    }
}

export default withStyles(styles)(InputInstanceView);
