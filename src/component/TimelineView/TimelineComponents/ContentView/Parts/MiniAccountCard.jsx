// @flow
import React from 'react';
import {pure} from 'recompose';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const styles = theme => ({
    root: {
        width: '260px',
        height: '100px',
        position: 'relative',
        margin: '4px'
    },
    info: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10px',
    },
    text: {
        background: 'rgba(255, 255, 255, 0.7)',
        minWidth: '80px',
        padding: '4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const imageStyle = (header: string): any => (
    {
        background: 'url(' + header + ')',
        backgroundSize: 'cover',
        width: '100%',
        height: '100px',
        position: 'absolute',
    }
)

type Props = {
    classes: Object,
    user: Object,
}

const miniAccountInfo = pure((props: Props) => (
        <Paper className={props.classes.root}>
            <div style={imageStyle(props.user.header)} />
            <div className={props.classes.info}>
                <Avatar className={props.classes.avatar} src={props.user.avatar} />
                <div className={props.classes.text}>
                    <Typography type={"body1"}>{props.user.displayName}</Typography>
                    <Typography type={'caption'}>{props.user.screenName}</Typography>
                </div>
            </div>
        </Paper>
    )
))

export default withStyles(styles)(miniAccountInfo);