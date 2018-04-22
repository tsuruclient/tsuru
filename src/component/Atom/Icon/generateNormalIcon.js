// @flow
import React from 'react';
import styled from 'styled-components';

type colorObject = {
    enabled: string,
    disabled: string,
}

export default (icon:any ,color: Object, size: number) => {
    const Icon = styled(icon)`
        && {
            fill: ${props => props.color ? color.enabled : color.disabled};
            ${props => props.size ? `
                width: props.size;
                height: props.size;
            ` : ``}
        }
    `
};
