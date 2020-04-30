import React from 'react';

import Icon from '../icon';

import './style.scss';

function Card({ className, children, featured, icon, title, teaser }) {
  let classes = [`card`];

  if (featured) {
    classes.push(`card--featured`);
  }

  if (className) {
    classes.push(className);
  }

  classes = classes.join(' ');

  return (
    <div tabIndex="0" aria-label={ title } className={ classes }>
      <Icon type={ icon } />
      <h3 key="card-title" className="card__title">{ title }</h3>
      <p key="card-teaser" className="card__teaser">{ teaser }</p>
      {children}
    </div>
  );
}

export default Card;
