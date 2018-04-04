// @flow
import React from 'react';
import styled from 'styled-components';
import RepeatIcon from 'material-ui-icons/Repeat';

const Styled = {
    Icon: styled(RepeatIcon)`
        fill: ${props => props.colorful ? '#4EBD67' : '#7D7D7D'} !important;
    `
};

type Props = {
    styles: Object,
    colorful: boolean,
}

const Repeat = (props: Props) => (
    <Styled.Icon colorful={props.colorful}/>
);


export default Repeat;
