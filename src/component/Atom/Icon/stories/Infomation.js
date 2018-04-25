import React from 'react';
import styled from 'styled-components';

import * as IconPack from '../IconPack';

const actions = {
    Favorite: {onClick: (e) => {}},
    Repeat: {onClick: (e) => {}},
    Reply: {onClick: (e) => {}},
};

export default () => {
    const ReactionIconPack = IconPack.ReactionIconPack({}, actions);
    return (
        <article>
            <ReactionIconPack.Favorite/>
            <ReactionIconPack.Repeat />
            <ReactionIconPack.Reply />
        </article>
    )
}
