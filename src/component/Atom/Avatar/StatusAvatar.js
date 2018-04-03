// @flow
import React from 'react'
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';

const Styled = {
    Avatar: styled(Avatar)`
        padding-right: 4px;
        width: ${props => props.style.size + 4}px !important;
        height: ${props => props.style.size}px !important;
        border-radius: ${props => props.style.rect ? 16 : 50}% !important;
    `
};

type style = {
    rect: boolean, //default: true
    size: number, //default: 40
}

type Props = {
    src: string,
    style: Object,
}

const StatusAvatar = (props: Props) => (
    <Styled.Avatar
        src={props.src}
        style={{rect: true, size: 40}}/>
);

export default StatusAvatar;
