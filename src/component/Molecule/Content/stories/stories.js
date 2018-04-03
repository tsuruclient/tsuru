import React from 'react';

import Status from '../unit/Status';

import testProps from './testProps';
import PaperWrapper from './PaperWrapper';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Content', module)
    .add('Status unit', () =>
        <div>
            <h1>Status</h1>
            {PaperWrapper(Status, {
                data: testProps.data.normal,
            })}
            <article>
                <h2>Stress Test</h2>
                <div style={{display: 'flex'}}>
                    <section>
                        <h3>very long text</h3>
                        {PaperWrapper(Status, {
                            data: testProps.data.longContent,
                        })}
                    </section>
                    <section>
                        <h3>long long display_name</h3>
                        {PaperWrapper(Status, {
                            data: testProps.data.longDisplayName,
                        })}
                    </section>
                    <section>
                        <h3>long long screen_name</h3>
                        {PaperWrapper(Status, {
                            data: testProps.data.longScreenName,
                        })}
                    </section>
                </div>
                <h3>吉野家コピペ</h3>
                <div style={{display: 'flex'}}>
                    <section>
                        <h4>改行あり</h4>
                        {PaperWrapper(Status, {
                            data: testProps.data.yoshinoyaCopipe,
                        })}
                    </section>
                    <section>
                        <h4>改行なし</h4>
                        {PaperWrapper(Status, {
                            data: testProps.data.yoshinoyaCopipeNotBreakline,
                        })}
                    </section>
                </div>
            </article>
        </div>
    );
