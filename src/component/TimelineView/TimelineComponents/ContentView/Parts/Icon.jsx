// @flow
import React from 'react';
import styled from 'styled-components';
import Avatar from 'material-ui/Avatar';

const AvatarIcon = styled(Avatar)`
    float: left;
    margin-left: -48px;
`;

type Props = {
    src: string,
};

const Icon = (props: Props) => {
    return (
        <AvatarIcon src={props.src}/>
    )
};

export default Icon;
