import { configure } from '@storybook/react';

function loadStories() {
  require('../src/component/stories');
}

configure(loadStories, module);
