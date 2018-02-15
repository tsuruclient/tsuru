// @flow
import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';
import Divider from 'material-ui/Divider'

import Event, {
    FavoriteEvent,
    RetweetEvent,
    FollowEvent} from '../../../../../core/value/Event';

import FavRtContent from './FavRt';
import FollowContent from './Follow';

type Props = {
    data: Event,
    style: any,
    measure: Function,
}

export default pure((props: Props) => {
    switch (props.data.type) {
    case FavoriteEvent:
    case RetweetEvent:
        return (
            <div style={props.style} onLoad={props.measure}>
                <FavRtContent data={props.data} />
                <Divider />
            </div>);
    case FollowEvent:
        return (
            <div style={props.style} onLoad={props.measure}>
                <FollowContent user={props.data.sourceUser} />
                <Divider />
            </div>);
    default:
        console.warn('unknown eventtype.');
        return (<div style={props.style} onLoad={props.measure}></div>)
    }
});
