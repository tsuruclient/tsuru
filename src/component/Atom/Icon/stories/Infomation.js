import React from 'react';
import styled from 'styled-components';

import * as IconPack from '../IconPack';

export default () => {
    const ReactionIconPack = IconPack.ReactionIconPack();
    return (
        <article>
            <ReactionIconPack.Favorite/>
            <ReactionIconPack.Repeat />
            <ReactionIconPack.Reply />
        </article>
    )
}
