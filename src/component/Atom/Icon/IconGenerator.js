// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    color: string,
    size: number,
};

export default (icon: any): Function =>
    (props: Props) => {
        const Icon = styled(icon)`
            && {
                ${props => `
                    fill: ${props.color};
                    width: ${props.size}px;
                    height: ${props.size}px;
                `}
            }
        `;
        return <Icon {...props}/>
    };
