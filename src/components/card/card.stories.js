import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './index';

storiesOf('Basics|Card', module)
  .add('all cards', () =>
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '30px'}}>
    <Card key="card-notifications" icon="notifications" title="Varslinger" teaser="Bli varslet om endringer i regelverk og nye avgjørelser til lover/paragrafer og rettsområder." />
    <Card key="card-selection" icon="selection" title="Utvalg" teaser="Dra og slipp dokumenter i utvalg. Perfekt til juridiske utdrag." />
    <Card key="card-notes" icon="notes" title="Merknader" teaser="Skriv personlige merknader—“gule lapper”—til lover, forskrifter, enkeltparagrafer og avgjørelser." />
    <Card key="card-groups" icon="groups" title="Grupper" teaser="Del dokumenter og merknader med dine kolleger og andre Lovdata Pro brukere." />

    <div style={{ gridColumn: '2 / 4' }}>
    <Card
      featured
      icon="calendar"
      title="Få 6 måneder gratis"
      teaser={ [
        'Få 6 måneder gratis med å ',
        <span
          key="card-teaser-link"
          className="card__teaser__link"
          onClick={ alert('Hello!') }>bestille nå</span>
      ]}
    />
    </div>
  </div>
);

