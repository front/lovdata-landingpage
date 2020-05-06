import React from 'react';
import { storiesOf } from '@storybook/react';

import ListItem from './index';

storiesOf('Basics|ListItem', module)
  .add('all list items', () =>
  <div>
    <ListItem>Varslinger i epost på det rettsområdet som interesserer deg</ListItem>
    <ListItem>Personlige verktøy. Grupperinger, merknader, utdrag, markeringer, huske-funksjon.</ListItem>
  </div>
);

