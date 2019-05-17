import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './index';
import ListItem from './list-item';

storiesOf('Basics|List', module)
  .add('all lists', () =>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridGap: '30px'}}>
    <div style={{ gridColumn: '1 / 4' }}>
      <List title="Med Lovdata Pro får du:">
        <ListItem>Varslinger i epost på det rettsområdet som interesserer deg</ListItem>
        <ListItem>Personlige verktøy. Grupperinger, merknader, utdrag, markeringer, huske-funksjon.</ListItem>
      </List>
    </div>
  </div>
);

