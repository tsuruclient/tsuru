// @flow
import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withNotes, withMarkdownNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs/react';
import WithEvents from '@storybook/addon-events';

import Status from '../unit/Status';
import Event from '../unit/Event'
//import Quote from '../unit/Quote';

import testProps from './testProps';
import PaperWrapper from './PaperWrapper';

storiesOf('Molecule/Content/Status', module)
    .addDecorator(withKnobs)
    .add('basic',
        withInfo('')(
            withNotes('widthの値は親の横の長さに依存します。')(
                () => (
                    <Status
                        data={object('data', testProps.data.normal)}
                        handler={object('handler', {})}/>))));

storiesOf('Molecule/Content/Event', module)
    .addDecorator(withKnobs)
    .add('basic',
        withInfo('')(
            withNotes('')(
                () => <div />)));

storiesOf('Molecule/Content/Quote', module)
    .addDecorator(withKnobs)
    .add('basic',
        withInfo('')(
            withNotes('')(
                () => <div />)));


/*
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
*/
