// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import ContentStory from '../Content/stories';

storiesOf('Molecule', module)
    .add('Content', () => <ContentStory/>);
