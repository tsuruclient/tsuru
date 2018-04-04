// @flow
import React from 'react';

import Status from '../unit/Status';

import testProps from './testProps';
import PaperWrapper from './PaperWrapper';

export default () => (
    <article>
        <h1>Status</h1>
        {PaperWrapper(Status, {
            data: testProps.data.normal,
        })}
        <h2>Stress Test</h2>
        <section style={{display: 'flex'}}>
            <div>
                <h3>very long text</h3>
                {PaperWrapper(Status, {
                    data: testProps.data.longContent,
                })}
            </div>
            <div>
                <h3>long long display_name</h3>
                {PaperWrapper(Status, {
                    data: testProps.data.longDisplayName,
                })}
            </div>
            <div>
                <h3>long long screen_name</h3>
                {PaperWrapper(Status, {
                    data: testProps.data.longScreenName,
                })}
            </div>
            <div>
                <h3>both name is long long</h3>
                {PaperWrapper(Status, {
                    data: testProps.data.bothNameLong,
                })}
            </div>
        </section>

        <h3>吉野家コピペ</h3>
        <section style={{display: 'flex'}}>
            <div>
                <h4>改行あり</h4>
                {PaperWrapper(Status, {
                    data: testProps.data.yoshinoyaCopipe,
                })}
            </div>
            <div>
                <h4>改行なし</h4>
                {PaperWrapper(Status, {
                    data: testProps.data.yoshinoyaCopipeNotBreakline,
                })}
            </div>
        </section>
    </article>
);
