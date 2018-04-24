// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import WithEvents from '@storybook/addon-events';

import Infomation from './Infomation';

storiesOf('Atom/Icon/Reaction', module)
    .addDecorator(withKnobs)
    .add('Infomation',
        (() => <Infomation/>))
    .add('Simple Icon with Dynamic Value', () => (<div />))
;
