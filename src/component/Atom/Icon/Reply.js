// @flow
import React from 'react';
import styled from 'styled-components';
import ReplyIcon from 'material-ui-icons/Reply';

const Styled = {
    Icon: styled(ReplyIcon)`
        fill: ${props => props.colorful ? '#49A4EF' : '#7D7D7D'} !important;
    `
};

type Props = {
    styles: Object,
    colorful: boolean,
}

const Reply = (props: Props) => (
    <Styled.Icon colorful={props.colorful} />
);

export default Reply;
