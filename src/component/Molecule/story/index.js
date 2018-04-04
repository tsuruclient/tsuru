// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import ContentStory from '../Content/stories';
import CardStory from '../Card/stories';

storiesOf('Molecule', module)
    .add('Card', () => <CardStory/>)
    .add('Content', () => <ContentStory/>);
