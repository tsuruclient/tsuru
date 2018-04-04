// @flow
import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'

import Avatar from '../../Atom/Avatar/Avatar';

const Styled = {
    Root: styled(Paper)`
        width: 260px;
        max-height: 60px;
        margin: 4px;
        display: flex;
        overflow: hidden;
    `,
};

type Props = {
    data: Object, //TODO: DEFINE CONTENT DATA TYPE
};

const StatusCard = (props: Props) => (
    <Styled.Root>
        <Avatar src={props.data.user.avatar} styles={{rect: false, size: 32}} />
        <Typography variant="body1">{props.data.content.text}</Typography>
    </Styled.Root>
);

export default StatusCard;
