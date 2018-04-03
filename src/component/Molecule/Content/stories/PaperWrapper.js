// @flow

import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const Styled = {
    Main: styled(Paper)`
        margin: 8px;
        width: 320px;
    `
};

export default (Component: any, props: Object) =>
    <Styled.Main>
        <Component {...props}/>
    </Styled.Main>

