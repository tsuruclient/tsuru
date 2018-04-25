// @flow
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import WithEvents from '@storybook/addon-events';

import Infomation from './Infomation';
import Arrow from '../Arrow';

storiesOf('Atom/Icon/Reaction', module)
    .addDecorator(withKnobs)
    .add('Infomation',
        (() => <Infomation/>))
;

storiesOf('Atom/Icon/Arrow', module)
    .addDecorator(withKnobs)
    .add('Basic', withInfo('Arrowは三角矢印を表示するコンポーネントです。入力引数によって方向を変更できます。')(() => <Arrow />))
;
