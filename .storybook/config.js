// import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create, themes } from '@storybook/theming';

// Option defaults.
addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'LovData Pro',
    })
  },
});

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);

configure(loadStories, module);
