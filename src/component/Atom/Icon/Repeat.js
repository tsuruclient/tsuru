// @flow
import React from 'react';
import styled from 'styled-components';
import RepeatIcon from 'material-ui-icons/Repeat';

const Styled = {
    Icon: styled(RepeatIcon)`
    `
};

type Props = {
    styles: Object
}

const Repeat = (props: Props) => (
    <Styled.Icon />
);


export default Repeat;
