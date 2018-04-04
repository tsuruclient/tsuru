// @flow
import React from 'react';
import styled from 'styled-components';

import Fav from '../Favorite';
import Repeat from '../Repeat';
import Reply from '../Reply';
import Arrow from '../Arrow';

const Styled = {
    Green: styled.span`
        color: #00552e;
        font-weight: bold;
    `
};
export default () => (
    <article>
        <h1>Icon</h1>
        <section style={{display: 'flex'}}>
            <div style={{width: '160px'}}>
                <h3>Favorite</h3>
                <Fav colorful={false} styles={null}/>
                <p>Colorful</p>
                <Fav colorful={true} styles={null}/>
            </div>
            <div style={{width: '160px'}}>
                <h3>Repeat</h3>
                <Repeat colorful={false} styles={null}/>
                <p>Colorful</p>
                <Repeat colorful={true} styles={null}/>
            </div>
            <div style={{width: '160px'}}>
                <h3>Reply</h3>
                <Reply colorful={false} styles={null}/>
                <p>Colorful</p>
                <Reply colorful={true} styles={null}/>
            </div>
        </section>
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
