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
            <h2>long long display_name</h2>
            {PaperWrapper(Status, {
                data: testProps.data.longDisplayName,
            })}
            <h2>long long screen_name</h2>
            {PaperWrapper(Status, {
                data: testProps.data.longScreenName,
            })}
            <h2>very long text</h2>
            {PaperWrapper(Status, {
                data: testProps.data.longContent,
            })}
            <h2>吉野家コピペ</h2>
            <h3>改行あり</h3>
            {PaperWrapper(Status, {
                data: testProps.data.yoshinoyaCopipe,
            })}
            <h3>改行なし</h3>
            {PaperWrapper(Status, {
                data: testProps.data.yoshinoyaCopipeNotBreakline,
            })}
        </div>
    );
