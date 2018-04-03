// @flow
import React from 'react';
import styled from 'styled-components';

import Arrow from '../Arrow';

const Styled = {
    Green: styled.span`
        color: #00552e;
        font-weight: bold;
    `
};
export default () => (
    <article>
        <h1>Arrow Icons</h1>
        <section style={{display: 'flex'}}>
            <Arrow direction={'up'}/>
            <Arrow direction={'down'}/>
            <Arrow direction={'left'}/>
            <Arrow direction={'right'}/>
        </section>
        <p>Arrow Icon Componentはdirection propsを必須とします。</p>
        <p>directionは
            <Styled.Green>'up' </Styled.Green>,
            <Styled.Green>'down' </Styled.Green>,
            <Styled.Green>'left' </Styled.Green>,
            <Styled.Green>'right' </Styled.Green>,
            の4種類のみです。
        </p>
    </article>
);
