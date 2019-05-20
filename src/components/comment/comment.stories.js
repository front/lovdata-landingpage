import React from 'react';
import { storiesOf } from '@storybook/react';

import Comment from './index';

storiesOf('Basics|Comment', module)
  .add('all comments', () =>
  <Comment
    author="Maria Sivertsen"
    authorImg="Maria Sivertsen"
    company="Elektroskandia Norge AS"
    date="16.05.2019"
  >“Lovdata Pro hjelper oss med å holde vår bedrift oppdatert på endringer i Lovverket. <br />Som Compliance Manager er det viktig å kunne få varslinger på regelverk innenfor vår industri og arbeidsmiljø”.</Comment>
);

