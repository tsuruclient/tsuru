// @flow
import React from 'react'
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';

const Styled = {
    Avatar: styled(Avatar)`
        padding-right: 4px;
        width: ${(props: Props) => props.styles.size + 4}px !important;
        height: ${(props: Props) => props.styles.size}px !important;
        border-radius: ${(props: Props) => props.styles.rect ? 10 : 50}% !important;
    `
};

type style = {
    rect: boolean, //default: false
    size: number, //default: 40
}

type Props = {
    src: string,
    styles: style,
}

const TAvatar = (props: Props) => (
    <Styled.Avatar
        src={props.src}
        styles={props.styles}/>
);

export default TAvatar;
