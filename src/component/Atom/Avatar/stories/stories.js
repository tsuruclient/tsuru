// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from '../StatusAvatar';

const src = 'https://avatars0.githubusercontent.com/u/5967271';

storiesOf('Avatar', module)
    .add('Status Avatar', () =>
        <article>
            <h1>Status Avatar</h1>
            <Avatar src={src} styles={{rect: false, size: 40}}/>
            <h2>Shape</h2>
            <section style={{display: 'flex'}}>
                <div>
                    <h3>Round Avatar</h3>
                    <Avatar src={src} styles={{rect: false, size: 230}}/>
                </div>
                <div>
                    <h3>Rectangle Avatar</h3>
                    <Avatar src={src} styles={{rect: true, size: 230}}/>
                </div>
            </section>
            <h2>Size</h2>
            <p>default: 40px</p>
            <section style={{display: 'flex'}}>
                <div>
                    <small>18px</small>
                    <Avatar src={src} styles={{rect: false, size: 18}}/>
                </div>
                <div>
                    <small>24px</small>
                    <Avatar src={src} styles={{rect: false, size: 24}}/>
                </div>
                <div>
                    <small>32px</small>
                    <Avatar src={src} styles={{rect: false, size: 32}}/>
                </div>
                <div>
                    <small>40px</small>
                    <Avatar src={src} styles={{rect: false, size: 40}}/>
                </div>
                <div>
                    <small>60px</small>
                    <Avatar src={src} styles={{rect: false, size: 60}}/>
                </div>
                <div>
                    <small>80px</small>
                    <Avatar src={src} styles={{rect: false, size: 80}}/>
                </div>
                <div>
                    <small>120px</small>
                    <Avatar src={src} styles={{rect: false, size: 120}}/>
                </div>
                <div>
                    <small>240px</small>
                    <Avatar src={src} styles={{rect: false, size: 240}}/>
                </div>
            </section>
        </article>
    );
