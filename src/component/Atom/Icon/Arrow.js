// @flow
import React from 'react';
import styled from 'styled-components';

import Up from 'material-ui-icons/KeyboardArrowUp';
import Down from 'material-ui-icons/KeyboardArrowDown';
import Left from 'material-ui-icons/KeyboardArrowLeft';
import Right from 'material-ui-icons/KeyboardArrowRight';

const Styled = {
    Up: styled(Up)`
    `,
    Down: styled(Down)`
    `,
    Left: styled(Left)`
    `,
    Right: styled(Right)`
    `,
};

type Props = {
    direction?: string,
};

const Arrow = (props: Props) => {
    switch(props.direction){
        case 'up':
            return <Styled.Up />;
        case 'down':
            return <Styled.Down />;
        case 'left':
            return <Styled.Left />;
        default:
            return <Styled.Right />
    }
};

export default Arrow;

