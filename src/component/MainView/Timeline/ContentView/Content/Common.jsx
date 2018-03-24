// @flow
import React from 'react'
import {pure} from 'recompose';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';

import Icon from '../Parts/Icon';

import type Content from '../../../../../core/view/value/Content'

const Body = styled.div`
    padding: 5px;
    padding-left: 53px;
    padding-bottom: 4px;
`;

type Props = {
    data: Content,
};

const Common = (props: Props) => (
    <Body>
        <Icon src={props.data.user.avatar}/>
        <Typography variant="caption">{props.data.user.displayName + "@"+ props.data.user.screenName}</Typography>
        <Typography variant="body1">{props.data.content}</Typography>
    </Body>
);

export default pure(Common);
