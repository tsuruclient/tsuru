// @flow

import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';
import { DialogActions,
    DialogContent,
    DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const styles = () => ({
    root: {

    },
});

type Props = {
    classes: Object,
    onRequestClose: Function,
    startAuth: Function,
};

type State = {
    pin: string,
};

class InputPinView extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleAuthClick = this.handleAuthClick.bind(this);
    }

    state = {
        pin: '',
    }

    handleCancelClick() {
        this.props.onRequestClose();
    }

    handleAuthClick() {
        if(this.state.pin.trim() !== '') {
            this.props.startAuth({pin: this.state.pin});
        }
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <DialogTitle>{"Activate Account"}</DialogTitle>
                <DialogContent>
                    <TextField
                        value={this.state.pin}
                        onChange={event => this.setState({pin: event.target.value})}
                        id="insert-pin"
                        label="Input PIN Here..."
                        margin="normal"
                        fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button raised onClick={this.handleCancelClick}>
                        {"Cancel"}
                    </Button>
                    <Button variant="raised" color="primary" onClick={this.handleAuthClick}>
                        {"Activate"}
                    </Button>
                </DialogActions>
            </div>
        );
    }
}

export default withStyles(styles)(InputPinView);
