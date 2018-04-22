// @flow
import React from 'react';
import styled from 'styled-components';
import ReplyIcon from 'material-ui-icons/Reply';

const Styled = {
    Icon: styled(ReplyIcon)`
        && {
            fill: ${props => props.color ? props.color : '#7D7D7D'};
        }
    `
};

type Props = {
    color: string
}

const Reply = (props: Props) => (
    <Styled.Icon colorful={props.color} />
);

export default Reply;
