// @flow
import React from 'react';
import styled from 'styled-components';
import FavoriteIcon from 'material-ui-icons/Favorite';

const Styled = {
    Icon: styled(FavoriteIcon)`
        fill: ${props => props.colorful ? '#D2255F' : '#7D7D7D'} !important;
    `
};

type Props = {
    styles: Object,
    colorful: boolean,
}

const Favorite = (props: Props) => (
    <Styled.Icon colorful={props.colorful} />
);


export default Favorite;
