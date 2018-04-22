// @flow
import React from 'react';
import styled from 'styled-components';
import RepeatIcon from 'material-ui-icons/Repeat';

const Styled = {
    Icon: styled(RepeatIcon)`
        && {
            fill: ${props => props.color ? props.color : '#7D7D7D'};
        }
    `
};

type Props = {
    color?: string
}

const Repeat = (props: Props) => (
    <Styled.Icon color={props.color}/>
);


export default Repeat;
