import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './index';

storiesOf('Basics|Card', module)
  .add('all cards', () =>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '30px'}}>
    <Card icon="notifications" title="Varslinger" teaser="Bli varslet om endringer i regelverk og nye avgjørelser til lover/paragrafer og rettsområder." />
    <Card icon="selection" title="Utvalg" teaser="Dra og slipp dokumenter i utvalg. Perfekt til juridiske utdrag." />
    <Card icon="notes" title="Merknader" teaser="Skriv personlige merknader—“gule lapper”—til lover, forskrifter, enkeltparagrafer og avgjørelser." />
    <Card icon="groups" title="Grupper" teaser="Del dokumenter og merknader med dine kolleger og andre Lovdata Pro brukere." />

    <div style={{ gridColumn: '2 / 4' }}>
      <Card
        featured
        icon="calendar"
        title="Fri bruk ut 2019"
        teaser={ ['Få 3 måneder gratis med å ', <a href='#'>bestille nå</a>]}
      />
    </div>
  </div>
);

