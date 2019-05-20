import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Basics|Button', module)
  .add('all buttons', () =>
  <div>
    <Button>Default Button</Button>
    <Button primary>Primary Button</Button>
    <br></br>
    <br></br>
    <Button href="#">Default Link</Button>
    <Button href="#" primary>Primary Link</Button>
  </div>, { notes: { markdown: 'someMarkdownText' } },
);

