import React from 'react';
import { storiesOf } from '@storybook/react';

import ListItem from './index';

storiesOf('Basics|ListItem', module)
  .add('all list items', () =>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridGap: '30px'}}>
    <div style={{ gridColumn: '2 / 4' }}>
      <ListItem>Varslinger i epost på det rettsområdet som interesserer deg</ListItem>
      <ListItem>Personlige verktøy. Grupperinger, merknader, utdrag, markeringer, huske-funksjon.</ListItem>
    </div>
  </div>
);

