// @flow
import React from 'react';
import styled from 'styled-components';
import ReplyIcon from 'material-ui-icons/Reply';

const Styled = {
    Icon: styled(ReplyIcon)`
    `
};

type Props = {
    styles: Object
}

const Reply = (props: Props) => (
    <Styled.Icon />
);


export default Reply;
