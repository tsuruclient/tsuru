// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    color: string,
};

export default (icon: any ,color: colorObject, size: number) =>
    (props: Props) => {
        const Icon = styled(icon)`
            && {
                fill: ${props => props.color};
                width: ${size}px;
                height: ${size}px;
            }
        `;
        return <Icon {...props}/>
    };
