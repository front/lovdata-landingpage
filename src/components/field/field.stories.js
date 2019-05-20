import React from 'react';
import { storiesOf } from '@storybook/react';

import Field from './index';

storiesOf('Basics|Form|Field', module)
  .add('all fields', () =>
  <div>
    <Field label="My field"/>
  </div>
);
