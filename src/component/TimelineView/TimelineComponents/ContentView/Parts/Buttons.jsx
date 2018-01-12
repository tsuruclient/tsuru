// @flow
import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';

import ReplyIcon from 'material-ui-icons/Reply';
import FavoriteIcon from 'material-ui-icons/FavoriteBorder';
import RepeatIcon from 'material-ui-icons/Repeat';

import * as apis from '../../../../../core/difference/api';

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
    service: string,
    timelineIndex: number,
    ownerIndex: number,
    data: Object,
    callApi: Function,
    setReply: Function,
};

const setReply = (tlIndex: number, data: Object, setReply: Function): Function => () => (
    setReply({timelineIndex: tlIndex, target: data})
);

const handleFavButtonClicked = (service: string, data: Object, ownerIndex: number, callApi: Function): Function => () => {
    const apidata = data.favorited ? undefined : apis.post.favorite.create(service, data.id);
    console.log(apidata);
    callApi({
        accountIndex: ownerIndex,
        timelineIndex: undefined,
        apidata,
        payload: {},
    });
};

const handleRTButtonClicked = (service: string, data: Object, ownerIndex: number, callApi: Function): Function => () => {
    const apidata = data.retweeted ? undefined : apis.post.statuses.retweet(service, data.id);
    console.log(apidata);
    callApi({
        accountIndex: ownerIndex,
        timelineIndex: undefined,
        apidata,
        payload: {},
    });
};

const favChecked = (isFavorited: boolean) => ({
    fill: isFavorited ? '#D2255F' : '#7D7D7D',
});

const rtChecked = (isRetweeted: boolean) => ({
    fill: isRetweeted ? '#4EBD67' : '#7D7D7D',
});

const Buttons = pure((props: Props) => (
    <div className={props.classes.root}>
        <IconButton
            className={props.classes.button}
            aria-label="Reply"
            disableRipple={true}
            onClick={setReply(props.timelineIndex, props.data, props.setReply)}>
            <ReplyIcon className={props.classes.icon}/>
        </IconButton>
        <IconButton
            className={props.classes.button}
            aria-label="RT"
            disableRipple={true}
            onClick={handleRTButtonClicked(props.service, props.data, props.ownerIndex, props.callApi)}>
            <RepeatIcon
                className={props.classes.icon}
                style={rtChecked(props.data.retweeted)}/>
        </IconButton>
        <IconButton
            className={props.classes.button}
            aria-label="Fav"
            disableRipple={true}
            onClick={handleFavButtonClicked(props.service, props.data, props.ownerIndex, props.callApi)}>
            <FavoriteIcon
                className={props.classes.icon}
                style={favChecked(props.data.favorited)}/>
        </IconButton>
    </div>
));

export default withStyles(styles)(Buttons);
