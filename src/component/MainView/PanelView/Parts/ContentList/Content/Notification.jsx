// @flow
import React from 'react';
import {pure} from 'recompose';
import Divider from 'material-ui/Divider'

import Event, {
    FavoriteEvent,
    RetweetEvent,
    FollowEvent} from '../../../../../../core/view/value/Event';

import FavRtContent from './Reaction';
import FollowContent from './Follow';

type Props = {
    data: Event,
}

const snacher = (data: Event) => {
    switch (data.type) {
        case FavoriteEvent:
        case RetweetEvent:
            return (<FavRtContent data={data} />);
        case FollowEvent:
            return (<FollowContent user={data.sourceUser} />);
        default:
            console.warn('unknown eventtype.');
            return (<div></div>);
    }
};

export default pure((props: Props) => (
    <section>
        {snacher(props.data)}
        <Divider />
    </section>
));
