// @flow
import React from 'react'
import styled from 'styled-components';
import SourceAvatar from 'material-ui/Avatar';

const Styled = {
    Avatar: styled(SourceAvatar)`
        && {
            width: ${(props) => props.size}px;
            height: ${(props) => props.size}px;
            border-radius: ${(props) => props.rect}%;
        }
    `
};

type Props = {
    src: string,
    rect?: boolean,
    size?: number,
}

const Avatar = (props: Props) => (
    <Styled.Avatar
        src={props.src}
        rect={!!props.rect ? 10 : 50}
        size={!props.size ? 40 : props.size} />
);

export default Avatar;
