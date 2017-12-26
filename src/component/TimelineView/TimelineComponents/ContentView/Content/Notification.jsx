// @flow
import React from 'react';
import {pure} from 'recompose';
import {withStyles} from 'material-ui/styles';

import Event, {
    FavoriteEvent,
    RetweetEvent,
    FollowEvent} from '../../../../../core/value/Event';

import FavRtContent from './FavRt';
import FollowContent from './Follow';

type Props = {
    data: Event,
}

export default pure((props: Props) => {
    switch (props.data.type) {
    case FavoriteEvent:
    case RetweetEvent:
        return (<FavRtContent data={props.data} />);
    case FollowEvent:
        return (<FollowContent user={props.data.sourceUser} />);
    default:
        console.warn('unknown eventtype.');
        return (<div></div>)
    }
});
