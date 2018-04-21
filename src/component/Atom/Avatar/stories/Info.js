// @flow
import React from 'react';

import Avatar from '../Avatar';

const src = 'https://avatars0.githubusercontent.com/u/5967271';

const sizes = [18, 26, 30, 36, 40, 42, 64, 128];
const sizeWrapper = (size: number) =>
    <div key={size}>
        <small>{size + 'px'}</small>
        <Avatar src={src} size={size}/>
    </div>;

export default () => (
    <article>
        <h1>Status Avatar</h1>
        <Avatar src={src}/>
        <h2>Shape</h2>
        <section style={{display: 'flex'}}>
            <div>
                <h4>Round Avatar</h4>
                <Avatar src={src} size={230}/>
            </div>
            <div>
                <h4>Rectangle Avatar</h4>
                <Avatar src={src} rect={true} size={230}/>
            </div>
        </section>
        <h2>Size</h2>
        <p>default: 40px</p>
        <section style={{display: 'flex'}}>
            {sizes.map(item => sizeWrapper(item))}
        </section>
    </article>
);
