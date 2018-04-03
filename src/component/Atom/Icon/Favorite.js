// @flow
import React from 'react';
import styled from 'styled-components';
import FavoriteIcon from 'material-ui-icons/Favorite';

const Styled = {
    Icon: styled(FavoriteIcon)`
    `
};

type Props = {
    styles: Object
}

const Favorite = (props: Props) => (
    <Styled.Icon />
);


export default Favorite;
