import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './index';

storiesOf('Basics|Icon', module)
  .add('all icons', () =>
  <div>
    <Icon />
    <Icon type="notes" />
    <Icon type="calendar" />
    <Icon type="groups" />
    <Icon type="notifications" />
    <Icon type="selection" />
  </div>
);

