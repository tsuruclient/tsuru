// @flow
import React from 'react';
import styled from 'styled-components';
import FavoriteIcon from 'material-ui-icons/Favorite';

const Styled = {
    Icon: styled(FavoriteIcon)`
        && {
            fill: ${props => props.color ? props.color : '#7D7D7D'};
        }
    `
};

type Props = {
    color?: string,
}

const Favorite = (props: Props) => (
    <Styled.Icon color={props.color} />
);


export default Favorite;
