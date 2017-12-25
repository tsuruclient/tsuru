// @flow
import React from 'react';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

import ReplyIcon from 'material-ui-icons/Reply';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import RepeatIcon from 'material-ui-icons/Repeat';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '2px 0px',
    },
    button: {
        width: 20,
        height: 20,
    },
    icon: {
        width: 18,
        height: 18,
    },
};

type Props = {
    classes: Object,
}

const Buttons = (props: Props) => (
    <div className={props.classes.root}>
        <IconButton className={props.classes.button} aria-label="Reply" disableRipple={true}>
            <ReplyIcon className={props.classes.icon}/>
        </IconButton>
        <IconButton className={props.classes.button} aria-label="Fav" disableRipple={true}>
            <RepeatIcon className={props.classes.icon}/>
        </IconButton>
        <IconButton className={props.classes.button} aria-label="RT" disableRipple={true}>
            <FavoriteIcon className={props.classes.icon}/>
        </IconButton>
    </div>
)

export default withStyles(styles)(Buttons);