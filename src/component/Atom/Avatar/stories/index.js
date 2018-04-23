//@flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import WithEvents from '@storybook/addon-events';

import Avatar from '../Avatar';

import Info from './Info';

const src = 'https://avatars0.githubusercontent.com/u/5967271';

storiesOf('Atom/Avatar', module)
    .addDecorator(withKnobs)
    .add(
        'Infomation',
        withNotes('')(() => (<Info />)))
    .add('withDynamicValue',
        withNotes('')(() => (
            <Avatar
                rect={boolean('rect', false)}
                size={number('size', 64, {
                    range: true,
                    min: 8,
                    max: 360,
                    step: 1,
                })}
                src={text('src', src)}/>)))
;
