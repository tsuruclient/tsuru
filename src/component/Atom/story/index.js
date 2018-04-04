// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import IconStory from '../Icon/stories';
import AvatarStory from '../Avatar/stories';

storiesOf('Atom', module)
    .add('Avatar', () => <AvatarStory/>)
    .add('Icon', () => <IconStory/>);
