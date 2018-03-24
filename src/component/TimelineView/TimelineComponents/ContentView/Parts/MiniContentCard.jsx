// @flow

import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const Root = styled(Paper)`
    width: 260px;
    maxHeight: 60px;
    margin: 4px;
    display: flex;
    overflow: hidden;
`;

const AvatarIcon = styled(Avatar)`
    margin: 6px;
    width: 32px;
    height: 32px;
`;

type Props = {
    avatar: Object,
    content: string,
};

const MiniContentCard = (props: Props) => (
    <Root>
        <AvatarIcon src={props.avatar} />
        <Typography variant="body1">{props.content}</Typography>
    </Root>
);

export default pure(MiniContentCard);
